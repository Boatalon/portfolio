'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const highlights = [
        {
            icon: '💻',
            title: 'Clean Code',
            description: 'Writing maintainable and scalable solutions',
        },
        {
            icon: '🎯',
            title: 'Best Practices',
            description: 'Following industry standards and modern approaches',
        },
        {
            icon: '❤️',
            title: 'Passion',
            description: 'Love for learning and building innovative solutions',
        },
    ];

    return (
        <section id="about" className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-gray-900">
            <div className="container mx-auto max-w-4xl">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            About Me
                        </h2>
                        <p className="text-xl text-gray-400">
                            เกี่ยวกับฉัน
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="glass-effect rounded-2xl p-8 mb-12 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                        <h3 className="text-3xl font-bold mb-6 text-white">Hello! 👋</h3>
                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I&apos;m a passionate Machine Learning Engineer and Developer specializing in
                                Computer Vision and Deep Learning. With a strong background in creating
                                innovative AI solutions, I strive to build technology that makes a real
                                impact.
                            </p>
                            <p>
                                My journey in AI began with a fascination for how machines can learn to
                                see and understand the world. This led me to work on exciting projects
                                like real-time sign language translation, object detection systems, and
                                various deep learning applications.
                            </p>
                            <p>
                                When I&apos;m not training models or writing code, you&apos;ll find me exploring
                                new ML papers, contributing to open-source projects, or sharing knowledge
                                with the developer community.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((highlight, index) => (
                        <AnimatedSection key={index}>
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass-effect rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300 border border-white/10"
                            >
                                <div className="text-5xl mb-4">{highlight.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-white">{highlight.title}</h3>
                                <p className="text-gray-400 text-sm">
                                    {highlight.description}
                                </p>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
