'use client';

import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '@/lib/projects';

interface InfiniteCarouselProps {
    projects: Project[];
}

const InfiniteCarousel = ({ projects }: InfiniteCarouselProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [centerIndex, setCenterIndex] = useState(0);

    // Triple the projects for infinite scroll effect
    const infiniteProjects = [...projects, ...projects, ...projects];

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        // Start at middle set
        const cardWidth = container.scrollWidth / infiniteProjects.length;
        container.scrollLeft = cardWidth * projects.length;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.scrollWidth / infiniteProjects.length;
            const currentIndex = Math.round(scrollLeft / cardWidth);

            // Update center index
            setCenterIndex(currentIndex % projects.length);

            // Infinite loop logic
            if (currentIndex <= 0) {
                container.scrollLeft = cardWidth * projects.length;
            } else if (currentIndex >= infiniteProjects.length - 1) {
                container.scrollLeft = cardWidth * projects.length;
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [projects.length, infiniteProjects.length]);

    return (
        <div className="relative">
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory px-6 scrollbar-hide scroll-smooth"
                style={{ scrollBehavior: 'smooth' }}
            >
                {infiniteProjects.map((project, index) => {
                    const isCentered = index % projects.length === centerIndex;

                    return (
                        <div
                            key={`${project.id}-${index}`}
                            className={`flex-none w-[90%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] snap-center transition-all duration-500 relative
                                ${isCentered ? 'scale-105 z-20' : 'scale-85 opacity-50'} 
                                sm:scale-100 sm:opacity-100`}
                        >
                            {/* Spotlight glow effect for centered card */}
                            {isCentered && (
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-2xl blur-xl sm:hidden"></div>
                            )}

                            {/* Card wrapper with highlight border */}
                            <div className={`relative transition-all duration-500 rounded-xl ${isCentered
                                    ? 'ring-2 ring-purple-500/50 shadow-2xl shadow-purple-500/30 sm:ring-0 sm:shadow-none'
                                    : ''
                                }`}>
                                <ProjectCard project={project} index={index % projects.length} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default InfiniteCarousel;
