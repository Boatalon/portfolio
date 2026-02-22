'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCamera, FiCameraOff } from 'react-icons/fi';

// MediaPipe hand connections (pairs of landmark indices)
const HAND_CONNECTIONS = [
    [0, 1], [1, 2], [2, 3], [3, 4],       // Thumb
    [0, 5], [5, 6], [6, 7], [7, 8],       // Index
    [0, 9], [9, 10], [10, 11], [11, 12],   // Middle
    [0, 13], [13, 14], [14, 15], [15, 16], // Ring
    [0, 17], [17, 18], [18, 19], [19, 20], // Pinky
    [5, 9], [9, 13], [13, 17],             // Palm
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
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const handsRef = useRef<any>(null);
    const cameraRef = useRef<any>(null);
    const animFrameRef = useRef<number>(0);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [handsDetected, setHandsDetected] = useState(0);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    // Load MediaPipe scripts dynamically
    const loadScript = useCallback((src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            // Check if already loaded
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
            await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/hands.min.js');
            await loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils@0.3.1675466862/camera_utils.min.js');
            setScriptsLoaded(true);
        } catch (err) {
            setError('Failed to load MediaPipe. Please check your internet connection.');
        }
    }, [loadScript]);

    // Draw results on canvas
    const drawResults = useCallback((results: any) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            setHandsDetected(results.multiHandLandmarks.length);

            for (const landmarks of results.multiHandLandmarks) {
                // Draw connections
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

                // Draw landmarks
                landmarks.forEach((landmark: any, index: number) => {
                    const x = landmark.x * canvas.width;
                    const y = landmark.y * canvas.height;

                    // Fingertip points are larger
                    const isTip = [4, 8, 12, 16, 20].includes(index);
                    const radius = isTip ? 8 : 5;

                    // Glow effect
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

                    // Draw labels for key landmarks
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

    // Initialize MediaPipe and camera
    const initializeDemo = useCallback(async () => {
        if (!scriptsLoaded || !videoRef.current) return;

        try {
            setIsLoading(true);
            setError(null);

            // Initialize MediaPipe Hands
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

            // Initialize camera
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
    }, [scriptsLoaded, drawResults]);

    // Load scripts when modal opens
    useEffect(() => {
        if (isOpen && !scriptsLoaded) {
            loadMediaPipeScripts();
        }
    }, [isOpen, scriptsLoaded, loadMediaPipeScripts]);

    // Initialize when scripts are loaded
    useEffect(() => {
        if (isOpen && scriptsLoaded) {
            initializeDemo();
        }
    }, [isOpen, scriptsLoaded, initializeDemo]);

    // Cleanup on close
    useEffect(() => {
        if (!isOpen) {
            // Stop camera
            if (cameraRef.current) {
                cameraRef.current.stop();
                cameraRef.current = null;
            }
            // Stop media stream
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }
            // Close hands
            if (handsRef.current) {
                handsRef.current.close();
                handsRef.current = null;
            }
            // Cancel animation frame
            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
            }
            setIsLoading(true);
            setHandsDetected(0);
        }
    }, [isOpen]);

    // Handle canvas sizing
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

    return (
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
                        className="relative w-[95vw] max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-500">
                            <div className="flex items-center gap-3">
                                <FiCamera className="w-5 h-5 text-white" />
                                <h3 className="text-lg font-bold text-white">
                                    Hand Keypoint Detection — Live Demo
                                </h3>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                            >
                                <FiX className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Video Container */}
                        <div className="relative aspect-[4/3] bg-black">
                            <video
                                ref={videoRef}
                                className="absolute inset-0 w-full h-full object-cover transform -scale-x-100"
                                playsInline
                                muted
                            />
                            <canvas
                                ref={canvasRef}
                                width={640}
                                height={480}
                                className="absolute inset-0 w-full h-full object-cover transform -scale-x-100"
                            />

                            {/* Loading Overlay */}
                            {isLoading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90">
                                    <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4" />
                                    <p className="text-white text-lg font-medium">Loading model...</p>
                                    <p className="text-gray-400 text-sm mt-1">This may take a few seconds</p>
                                </div>
                            )}

                            {/* Error Overlay */}
                            {error && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90">
                                    <FiCameraOff className="w-12 h-12 text-red-400 mb-4" />
                                    <p className="text-white text-lg font-medium mb-2">Camera Error</p>
                                    <p className="text-gray-400 text-sm text-center max-w-md px-4">{error}</p>
                                    <button
                                        onClick={initializeDemo}
                                        className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-medium"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Footer Status */}
                        <div className="flex items-center justify-between px-6 py-3 bg-gray-800">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2.5 h-2.5 rounded-full ${handsDetected > 0 ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
                                    <span className="text-gray-300 text-sm">
                                        {handsDetected > 0
                                            ? `${handsDetected} hand${handsDetected > 1 ? 's' : ''} detected`
                                            : 'No hands detected'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">Powered by MediaPipe</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HandKeypointDemo;
