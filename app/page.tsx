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
        <main>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {featuredProjects.map((project, index) => (
                            <AnimatedSection key={project.id}>
                                <ProjectCard project={project} index={index} />
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="text-center">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-500/50 bg-white/5 rounded-xl font-semibold hover:border-purple-500 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 group text-white"
                        >
                            View All Projects
                            <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>


            {/* CV Section */}
            <CVSection />

            {/* Contact Section */}
            <ContactSection />
        </main>
    );
}
