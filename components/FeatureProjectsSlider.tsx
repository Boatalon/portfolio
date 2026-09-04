'use client';

import { useState, useEffect, useCallback } from 'react';
import { Project } from '@/lib/projects';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectSlide from './ProjectSlide';

interface FeatureProjectsSliderProps { projects: Project[]; }

const FeatureProjectsSlider = ({ projects }: FeatureProjectsSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter:  (dir: number) => ({ x: dir > 0 ? '80%' : '-80%', opacity: 0 }),
        center: { x: 0, opacity: 1, zIndex: 1 },
        exit:   (dir: number) => ({ x: dir < 0 ? '80%' : '-80%', opacity: 0, zIndex: 0 }),
    };

    const paginate = useCallback((newDir: number) => {
        setDirection(newDir);
        setCurrentIndex(prev => {
            let n = prev + newDir;
            if (n < 0) n = projects.length - 1;
            if (n >= projects.length) n = 0;
            return n;
        });
    }, [projects.length]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft')  paginate(-1);
            if (e.key === 'ArrowRight') paginate(1);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [paginate]);

    const canPrev = currentIndex > 0;
    const canNext = currentIndex < projects.length - 1;

    return (
        <div className="relative w-full bg-[#f5f1e8]">
            <div className="section-divider" />

            {/* Slide wrapper */}
            <div className="relative w-full overflow-x-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ x: { type: 'spring', stiffness: 280, damping: 32 }, opacity: { duration: 0.18 } }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.6}
                        onDragEnd={(_, { offset, velocity }) => {
                            const power = Math.abs(offset.x) * velocity.x;
                            if (power < -8000 && canNext) paginate(1);
                            else if (power > 8000 && canPrev) paginate(-1);
                        }}
                        className="w-full"
                    >
                        <ProjectSlide project={projects[currentIndex]} />
                    </motion.div>
                </AnimatePresence>

                {/* Prev arrow */}
                <motion.button
                    onClick={() => paginate(-1)}
                    disabled={!canPrev}
                    whileHover={canPrev ? { scale: 1.1 } : {}}
                    whileTap={canPrev ? { scale: 0.95 } : {}}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 z-20
                        w-11 h-11 rounded-full flex items-center justify-center
                        bg-white/90 backdrop-blur-sm shadow-md border
                        transition-all duration-200
                        ${canPrev
                            ? 'border-amber-300/50 text-amber-800 hover:border-amber-500 hover:shadow-[0_4px_16px_rgba(217,119,6,0.25)]'
                            : 'border-stone-200 text-stone-300 cursor-not-allowed opacity-0 pointer-events-none'
                        }`}
                    aria-label="Previous project"
                >
                    <FiChevronLeft className="w-5 h-5" />
                </motion.button>

                {/* Next arrow */}
                <motion.button
                    onClick={() => paginate(1)}
                    disabled={!canNext}
                    whileHover={canNext ? { scale: 1.1 } : {}}
                    whileTap={canNext ? { scale: 0.95 } : {}}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 z-20
                        w-11 h-11 rounded-full flex items-center justify-center
                        bg-white/90 backdrop-blur-sm shadow-md border
                        transition-all duration-200
                        ${canNext
                            ? 'border-amber-300/50 text-amber-800 hover:border-amber-500 hover:shadow-[0_4px_16px_rgba(217,119,6,0.25)]'
                            : 'border-stone-200 text-stone-300 cursor-not-allowed opacity-0 pointer-events-none'
                        }`}
                    aria-label="Next project"
                >
                    <FiChevronRight className="w-5 h-5" />
                </motion.button>
            </div>

            {/* Dots + counter */}
            <div className="py-4 flex items-center justify-center gap-4">
                <span className="text-xs font-medium text-stone-400 tabular-nums w-10 text-right">
                    {currentIndex + 1} / {projects.length}
                </span>
                <div className="flex items-center gap-2">
                    {projects.map((_, i) => (
                        <motion.button
                            key={i}
                            onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                            animate={{ width: i === currentIndex ? 28 : 8, opacity: i === currentIndex ? 1 : 0.4 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className={`h-2 rounded-full ${i === currentIndex ? 'bg-amber-600' : 'bg-stone-400 hover:bg-stone-500'}`}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}
                </div>
                <span className="w-10" /> {/* balance spacer */}
            </div>
        </div>
    );
};

export default FeatureProjectsSlider;
