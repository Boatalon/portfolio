'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCamera, FiCameraOff, FiVolume2 } from 'react-icons/fi';
import * as tf from '@tensorflow/tfjs';
import { getPreloadedModel, isModelReady } from './ModelPreloader';

const ASL_LABELS = [
    'book', 'chair', 'clothes', 'computer', 'drink',
    'drum', 'family', 'football', 'go', 'hat', 
    'hello', 'kiss', 'like', 'play', 'school', 
    'street', 'table', 'university', 'violin', 'wall'
];

interface PredictionResult {
    word: string;
    probability: number;
}

const HAND_CONNECTIONS = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [5, 6], [6, 7], [7, 8],
    [0, 9], [9, 10], [10, 11], [11, 12],
    [0, 13], [13, 14], [14, 15], [15, 16],
    [0, 17], [17, 18], [18, 19], [19, 20],
    [5, 9], [9, 13], [13, 17],
];

const LANDMARK_LABELS: Record<number, string> = {
    0: 'Wrist',
    4: 'Thumb',
    8: 'Index',
    12: 'Middle',
    16: 'Ring',
    20: 'Pinky',
};

interface HandKeypointDemoProps {
    isOpen: boolean;
    onClose: () => void;
}

declare global {
    interface Window {
        Hands: any;
        Camera: any;
    }
}

const HandKeypointDemo = ({ isOpen, onClose }: HandKeypointDemoProps) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const handsRef = useRef<any>(null);
    const cameraRef = useRef<any>(null);
    const animFrameRef = useRef<number>(0);
    const modelRef = useRef<tf.GraphModel | null>(null);
    
    const frameBufferRef = useRef<tf.Tensor3D[]>([]);
    const lastSpokenWordRef = useRef<string>('');
    const lastSpokenTimeRef = useRef<number>(0);
    const isPredictingRef = useRef<boolean>(false);

    const [isLoading, setIsLoading] = useState(true);
    const [loadingMsg, setLoadingMsg] = useState('Loading ASL Model...');
    const [error, setError] = useState<string | null>(null);
    const [handsDetected, setHandsDetected] = useState(0);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);
    const [predictions, setPredictions] = useState<PredictionResult[]>([]);

    const initTFJSModel = useCallback(async () => {
        try {
            let model: tf.GraphModel | null = null;

            if (isModelReady()) {
                setLoadingMsg('Loading cached model...');
                model = await getPreloadedModel();
                console.log('[INFO] Using preloaded model (instant).');
            } else {
                setLoadingMsg('Loading ASL Model...');
                model = await getPreloadedModel();
                console.log('[INFO] Model loaded via preloader.');
            }

            if (!model) {
                setLoadingMsg('Downloading ASL Model (20MB)...');
                await tf.setBackend('webgl');
                await tf.ready();
                const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
                const modelUrl = `${baseUrl}/models/asl/model.json`;
                model = await tf.loadGraphModel(modelUrl);
                console.log('[INFO] Model loaded via direct network fetch (fallback).');
            }

            modelRef.current = model;
            
            setLoadingMsg('Warming up AI Model...');
            const warmupTensor = tf.zeros([1, 10, 224, 224, 3]);
            await model.executeAsync(warmupTensor);
            warmupTensor.dispose();
            
            console.log('[INFO] TFJS Model loaded and warmed up successfully.');
            return true;
        } catch (err: any) {
            console.error('[ERROR] Failed to load TFJS model:', err);
            setError('Failed to load ASL translation model.');
            return false;
        }
    }, []);

    const loadScript = useCallback((src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            const existing = document.querySelector(`script[src="${src}"]`);
            if (existing) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = src;
            script.crossOrigin = 'anonymous';
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.head.appendChild(script);
        });
    }, []);

    const loadMediaPipeScripts = useCallback(async () => {
        try {
            setLoadingMsg('Loading Hand Tracking...');
            await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.min.js');
            await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils@0.3.1675466862/camera_utils.min.js');
            setScriptsLoaded(true);
        } catch (err) {
            setError('Failed to load MediaPipe. Please check your internet connection.');
        }
    }, [loadScript]);

    const drawResults = useCallback((results: any) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            setHandsDetected(results.multiHandLandmarks.length);

            for (const landmarks of results.multiHandLandmarks) {
                ctx.strokeStyle = 'rgba(255, 165, 0, 0.8)';
                ctx.lineWidth = 3;
                for (const [start, end] of HAND_CONNECTIONS) {
                    const s = landmarks[start];
                    const e = landmarks[end];
                    ctx.beginPath();
                    ctx.moveTo(s.x * canvas.width, s.y * canvas.height);
                    ctx.lineTo(e.x * canvas.width, e.y * canvas.height);
                    ctx.stroke();
                }

                landmarks.forEach((landmark: any, index: number) => {
                    const x = landmark.x * canvas.width;
                    const y = landmark.y * canvas.height;

                    const isTip = [4, 8, 12, 16, 20].includes(index);
                    const radius = isTip ? 8 : 5;

                    ctx.shadowColor = 'rgba(255, 165, 0, 0.8)';
                    ctx.shadowBlur = isTip ? 15 : 8;

                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2 * Math.PI);
                    ctx.fillStyle = isTip ? '#ff8c00' : '#ffb347';
                    ctx.fill();
                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    ctx.shadowBlur = 0;

                    if (LANDMARK_LABELS[index]) {
                        ctx.font = 'bold 12px Inter, sans-serif';
                        ctx.fillStyle = 'white';
                        ctx.strokeStyle = 'rgba(0,0,0,0.7)';
                        ctx.lineWidth = 3;
                        ctx.strokeText(LANDMARK_LABELS[index], x + 12, y - 8);
                        ctx.fillText(LANDMARK_LABELS[index], x + 12, y - 8);
                    }
                });
            }
        } else {
            setHandsDetected(0);
        }
    }, []);

    const speakWord = useCallback((word: string) => {
        const now = Date.now();
        if (word === lastSpokenWordRef.current && (now - lastSpokenTimeRef.current) < 3000) {
            return;
        }
        
        if (window.speechSynthesis.speaking) {
            return;
        }

        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 1.0;
        utterance.pitch = 1.1;
        window.speechSynthesis.speak(utterance);
        
        lastSpokenWordRef.current = word;
        lastSpokenTimeRef.current = now;
    }, []);

    const processFrameForASL = useCallback(async () => {
        if (!videoRef.current || !modelRef.current || isPredictingRef.current) return;
        
        if (handsDetected === 0) {
            if (predictions.length > 0) {
                setPredictions([]);
            }
            return;
        }

        try {
            isPredictingRef.current = true;
            
            const tensor = tf.tidy(() => {
                const img = tf.browser.fromPixels(videoRef.current!);
                const resized = tf.image.resizeBilinear(img, [224, 224]);
                return resized.div(255.0); 
            });

            frameBufferRef.current.push(tensor as tf.Tensor3D);
            
            if (frameBufferRef.current.length > 10) {
                const oldTensor = frameBufferRef.current.shift();
                oldTensor?.dispose();
            }

            if (frameBufferRef.current.length === 10) {
                const batched = tf.tidy(() => {
                    const stacked = tf.stack(frameBufferRef.current);
                    return stacked.expandDims(0);
                });
                
                const preds = await modelRef.current!.executeAsync(batched) as tf.Tensor;
                const data = await preds.data();
                
                batched.dispose();
                preds.dispose();
                
                const values = Array.from(data);
                const results = values
                    .map((prob, idx) => ({ word: ASL_LABELS[idx], probability: prob }))
                    .sort((a, b) => b.probability - a.probability)
                    .slice(0, 3);
                
                setPredictions(results);
                
                if (results[0].probability >= 0.50) {
                    speakWord(results[0].word);
                }
            }
        } catch (e) {
            console.error('Prediction error', e);
        } finally {
            isPredictingRef.current = false;
        }
    }, [handsDetected, speakWord, predictions.length]);

    useEffect(() => {
        if (!isOpen || isLoading || error) return;
        
        const intervalId = setInterval(processFrameForASL, 1000 / 25);
        
        return () => {
            clearInterval(intervalId);
        };
    }, [isOpen, isLoading, error, processFrameForASL]);

    const initializeDemo = useCallback(async () => {
        if (!scriptsLoaded || !videoRef.current) return;

        try {
            setIsLoading(true);
            setError(null);

            const modelLoaded = await initTFJSModel();
            if (!modelLoaded) return;

            setLoadingMsg('Initializing Camera...');
            const hands = new window.Hands({
                locateFile: (file: string) => {
                    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${file}`;
                },
            });

            hands.setOptions({
                maxNumHands: 2,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.5,
            });

            hands.onResults(drawResults);
            handsRef.current = hands;

            const camera = new window.Camera(videoRef.current, {
                onFrame: async () => {
                    if (handsRef.current && videoRef.current) {
                        await handsRef.current.send({ image: videoRef.current });
                    }
                },
                width: 640,
                height: 480,
            });

            cameraRef.current = camera;
            await camera.start();
            setIsLoading(false);
        } catch (err: any) {
            console.error('Initialization error:', err);
            setError(err?.message || 'Failed to initialize camera. Please allow camera access.');
            setIsLoading(false);
        }
    }, [scriptsLoaded, drawResults, initTFJSModel]);

    useEffect(() => {
        if (isOpen && !scriptsLoaded) {
            loadMediaPipeScripts();
        }
    }, [isOpen, scriptsLoaded, loadMediaPipeScripts]);

    useEffect(() => {
        if (isOpen && scriptsLoaded) {
            initializeDemo();
        }
    }, [isOpen, scriptsLoaded, initializeDemo]);

    useEffect(() => {
        if (!isOpen) {
            if (cameraRef.current) {
                cameraRef.current.stop();
                cameraRef.current = null;
            }
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }
            if (handsRef.current) {
                handsRef.current.close();
                handsRef.current = null;
            }
            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
            }
            
            frameBufferRef.current.forEach(t => t.dispose());
            frameBufferRef.current = [];

            setIsLoading(true);
            setHandsDetected(0);
            setPredictions([]);
            window.speechSynthesis.cancel();
        }
    }, [isOpen]);

    useEffect(() => {
        const resizeCanvas = () => {
            if (canvasRef.current && videoRef.current) {
                canvasRef.current.width = videoRef.current.videoWidth || 640;
                canvasRef.current.height = videoRef.current.videoHeight || 480;
            }
        };

        if (isOpen) {
            window.addEventListener('resize', resizeCanvas);
            const interval = setInterval(resizeCanvas, 500);
            return () => {
                window.removeEventListener('resize', resizeCanvas);
                clearInterval(interval);
            };
        }
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) onClose();
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-[95vw] max-w-6xl h-[90vh] md:h-[80vh] min-h-[500px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                    >
                        <div className="relative flex-1 bg-black flex flex-col min-h-0">
                            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/80 to-transparent">
                                <div className="flex items-center gap-2">
                                    <FiCamera className="w-5 h-5 text-white" />
                                    <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                                        Live ASL Interpreter
                                    </h3>
                                </div>
                                <button onClick={onClose} className="md:hidden w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <FiX className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            <div className="relative flex-1">
                                <video
                                    ref={videoRef}
                                    className="absolute inset-0 w-full h-full object-cover transform -scale-x-100"
                                    playsInline
                                    muted
                                />
                                <canvas
                                    ref={canvasRef}
                                    className="absolute inset-0 w-full h-full object-cover transform -scale-x-100"
                                />

                                {isLoading && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 z-20">
                                        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4" />
                                        <p className="text-amber-500 font-bold text-lg">Initializing System</p>
                                        <p className="text-gray-300 text-sm mt-2">{loadingMsg}</p>
                                    </div>
                                )}

                                {error && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 z-20">
                                        <FiCameraOff className="w-12 h-12 text-red-500 mb-4" />
                                        <p className="text-white text-lg font-bold mb-2">System Error</p>
                                        <p className="text-gray-400 text-sm text-center max-w-sm px-4">{error}</p>
                                        <button
                                            onClick={initializeDemo}
                                            className="mt-6 px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all font-medium"
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 z-10 p-3 bg-gradient-to-t from-black/90 to-transparent flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${handsDetected > 0 ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                                <span className="text-white text-sm font-medium">
                                    {handsDetected > 0 
                                      ? `Tracking ${handsDetected} hand${handsDetected > 1 ? 's' : ''}` 
                                      : 'No hands detected — please show your hands to translate'}
                                </span>
                            </div>
                        </div>

                        <div className="w-full md:w-80 bg-gray-900 border-l border-gray-800 flex flex-col relative z-20">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 hidden md:flex w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 items-center justify-center transition-colors z-30 text-gray-400 hover:text-white"
                            >
                                <FiX className="w-5 h-5" />
                            </button>

                            <div className="p-6 border-b border-gray-800 mt-2">
                                <h3 className="text-amber-500 font-bold text-lg mb-1 flex items-center gap-2">
                                    Translation Results
                                </h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Displays the top 5 predicted ASL words based on 20 custom classes. Performs word-level translation dynamically.
                                </p>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6">
                                {predictions.length > 0 ? (
                                    <div className="space-y-4">
                                        <AnimatePresence>
                                            {predictions.map((pred, i) => {
                                                const pct = (pred.probability * 100).toFixed(1);
                                                const isTop = i === 0;
                                                return (
                                                    <motion.div 
                                                        key={pred.word}
                                                        layout
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className={`relative overflow-hidden rounded-xl border ${isTop ? 'border-amber-500/50 bg-amber-500/10' : 'border-gray-800 bg-gray-800/50'} p-3`}
                                                    >
                                                        <motion.div 
                                                            className={`absolute left-0 top-0 bottom-0 ${isTop ? 'bg-amber-500/20' : 'bg-gray-700/50'} z-0`}
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${Math.max(5, pred.probability * 100)}%` }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                        
                                                        <div className="relative z-10 flex items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <span className={`text-lg font-bold capitalize ${isTop ? 'text-amber-500' : 'text-gray-300'}`}>
                                                                    {pred.word}
                                                                </span>
                                                                {isTop && pred.probability >= 0.50 && (
                                                                    <FiVolume2 className="w-4 h-4 text-amber-500/70" />
                                                                )}
                                                            </div>
                                                            <span className={`text-sm font-mono ${isTop ? 'text-amber-400' : 'text-gray-400'}`}>
                                                                {pct}%
                                                            </span>
                                                        </div>
                                                    </motion.div>
                                                )
                                            })}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center opacity-50 space-y-4">
                                        <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center animate-spin-slow">
                                            <div className="w-2 h-2 rounded-full bg-gray-600" />
                                        </div>
                                        <p className="text-gray-400 text-sm text-center">
                                            Waiting for ASL<br/>hand gestures...
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default HandKeypointDemo;
