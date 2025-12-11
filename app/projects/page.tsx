'use client';

import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import { useState } from 'react';

export default function ProjectsPage() {
    const [filter, setFilter] = useState<string>('all');

    const categories = [
        { id: 'all', label: 'All Projects', labelTH: 'ทั้งหมด' },
        { id: 'ml', label: 'Machine Learning', labelTH: 'ML' },
        { id: 'web', label: 'Web Development', labelTH: 'เว็บ' },
        { id: 'mobile', label: 'Mobile Apps', labelTH: 'มือถือ' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-20 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display">
                            My <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            ผลงานและโปรเจกต์ต่างๆ ที่ผมได้ทำ
                        </p>
                    </div>
                </AnimatedSection>

                {/* Filter Buttons */}
                <AnimatedSection>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${filter === category.id
                                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                                        : 'glass-effect hover:bg-white/10'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <AnimatedSection key={project.id}>
                            <ProjectCard project={project} index={index} />
                        </AnimatedSection>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <AnimatedSection>
                        <div className="text-center py-20">
                            <p className="text-2xl text-gray-400">
                                No projects found in this category.
                            </p>
                        </div>
                    </AnimatedSection>
                )}
            </div>
        </div>
    );
}
