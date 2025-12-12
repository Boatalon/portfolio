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
                        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory px-6 
                                        scrollbar-hide
                                        [&>*]:transition-transform [&>*]:duration-500
                                        [&>*:not(:nth-child(1))]:scale-90 
                                        [&>*:nth-child(1)]:scale-100
                                        sm:[&>*]:scale-100">
                            {featuredProjects.map((project, index) => (
                                <div key={project.id} className="flex-none w-[90%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] snap-center">
                                    <ProjectCard project={project} index={index} />
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
