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
                {infiniteProjects.map((project, index) => (
                    <div
                        key={`${project.id}-${index}`}
                        className={`flex-none w-[90%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] snap-center transition-transform duration-500 ${index % projects.length === centerIndex
                                ? 'scale-100 z-10'
                                : 'scale-90 opacity-70'
                            } sm:scale-100 sm:opacity-100`}
                    >
                        <ProjectCard project={project} index={index % projects.length} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteCarousel;
