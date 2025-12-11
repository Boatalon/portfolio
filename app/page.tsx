'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import AboutSection from '@/components/AboutSection';
import CVSection from '@/components/CVSection';
import ContactSection from '@/components/ContactSection';
import { featuredProjects } from '@/lib/projects';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section id="home">
                <Hero />
            </section>

            {/* About Section */}
            <AboutSection />

            {/* Featured Projects Section */}
            <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-900">
                <div className="container mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-20 relative">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                Featured Projects
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
                                Explore my latest work in Machine Learning, Computer Vision, and AI
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Horizontal scrollable project cards */}
                    <div className="relative">
                        <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-gray-800 px-4 -mx-4">
                            {featuredProjects.map((project, index) => (
                                <div key={project.id} className="flex-none w-[85%] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] snap-start first:ml-4 last:mr-4">
                                    <AnimatedSection>
                                        <ProjectCard project={project} index={index} />
                                    </AnimatedSection>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* CV Section */}
            <CVSection />

            {/* Contact Section */}
            <ContactSection />
        </>
    );
}
