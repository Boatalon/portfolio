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
                            <div className="inline-block">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative">
                                    Featured Projects
                                    {/* Decorative accent */}
                                    <div className="absolute -top-3 -right-3 w-12 h-12 border-2 border-purple-500/50 rounded-lg -z-10"></div>
                                </h2>
                            </div>
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

            {/* Skills/Technologies Section */}
            <section className="py-24 px-4 relative bg-gradient-to-b from-gray-900 to-black">
                {/* Decorative border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                <div className="container mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                Tech Stack
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Technologies I work with
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {[
                                'Python',
                                'PyTorch',
                                'TensorFlow',
                                'Computer Vision',
                                'Deep Learning',
                                'JavaScript',
                                'React',
                                'Next.js',
                                'TypeScript',
                                'Tailwind CSS',
                                'Git',
                                'Docker',
                            ].map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="px-6 py-3 glass-effect border border-purple-500/30 rounded-xl text-white font-semibold hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
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
