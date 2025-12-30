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
        <div className="relative w-full min-h-screen overflow-hidden bg-[#f5f1e8] flex flex-col">
            {/* Navigation Arrows */}
            {currentIndex > 0 && (
                <button
                    onClick={() => paginate(-1)}
                    className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 
                             w-12 h-12 lg:w-16 lg:h-16 rounded-full 
                             bg-white/90 backdrop-blur-sm border-2 border-gray-300 
                             shadow-xl hover:shadow-2xl hover:border-amber-600 hover:bg-amber-50
                             transition-all duration-300 
                             flex items-center justify-center group
                             active:scale-95"
                    aria-label="Previous project"
                >
                    <FiChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-gray-700 group-hover:text-amber-600 transition-colors" />
                </button>
            )}

            {currentIndex < projects.length - 1 && (
                <button
                    onClick={() => paginate(1)}
                    className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 
                             w-12 h-12 lg:w-16 lg:h-16 rounded-full 
                             bg-white/90 backdrop-blur-sm border-2 border-gray-300 
                             shadow-xl hover:shadow-2xl hover:border-amber-600 hover:bg-amber-50
                             transition-all duration-300 
                             flex items-center justify-center group
                             active:scale-95"
                    aria-label="Next project"
                >
                    <FiChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-gray-700 group-hover:text-amber-600 transition-colors" />
                </button>
            )}

            {/* Slides Container */}
            <div className="flex-1 relative overflow-hidden">
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
                            opacity: { duration: 0.3 }
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

            {/* Slide Indicators - Below everything */}
            <div className="flex-shrink-0 w-full bg-[#f5f1e8] py-6 flex justify-center items-center z-20">
                <div className="flex gap-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-amber-600 w-8'
                                : 'bg-gray-400 hover:bg-gray-600'
                                }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureProjectsSlider;
