'use client';

import { useState, useEffect, useCallback } from 'react';
import { Project } from '@/lib/projects';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectSlide from './ProjectSlide';

interface FeatureProjectsSliderProps {
    projects: Project[];
}

const FeatureProjectsSlider = ({ projects }: FeatureProjectsSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) newIndex = projects.length - 1;
            if (newIndex >= projects.length) newIndex = 0;
            return newIndex;
        });
    }, [projects.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                paginate(-1);
            } else if (e.key === 'ArrowRight') {
                paginate(1);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [paginate]);

    const currentProject = projects[currentIndex];

    return (
        <div className="relative w-full h-auto bg-[#f5f1e8] flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
            <div className="flex flex-col bg-[#f5f1e8]">
                <div className="relative w-full min-h-[960px] md:min-h-[960px] lg:min-h-[960px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold && currentIndex < projects.length - 1) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold && currentIndex > 0) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0"
                        >
                            <ProjectSlide project={currentProject} />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="flex-shrink-0 w-full py-3 flex justify-center items-center gap-4 relative z-10">
                    <button
                        onClick={() => paginate(-1)}
                        disabled={currentIndex === 0}
                        className="w-10 h-10 rounded-full glass-effect shadow-lg flex items-center justify-center text-gray-700 hover:text-amber-600 hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Previous project"
                    >
                        <FiChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-amber-600 w-8'
                                    : 'bg-gray-400 w-2 hover:bg-gray-600'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => paginate(1)}
                        disabled={currentIndex === projects.length - 1}
                        className="w-10 h-10 rounded-full glass-effect shadow-lg flex items-center justify-center text-gray-700 hover:text-amber-600 hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Next project"
                    >
                        <FiChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureProjectsSlider;
