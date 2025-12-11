'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 right-20 w-64 h-64 bg-stone-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-stone-300 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                    >
                        <span className="text-stone-600 font-medium text-base tracking-wide uppercase">
                            Hello, I&apos;m
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-7xl font-bold mb-3 text-stone-900 relative inline-block"
                    >
                        Arnon Chatri
                        {/* Decorative underline */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-stone-400 via-stone-600 to-stone-400 rounded-full"></div>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl text-stone-600 mb-8 mt-8 font-light"
                    >
                        Machine Learning Engineer & Developer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base md:text-lg text-stone-500 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Specializing in Computer Vision, Deep Learning, and building innovative solutions
                        that bridge the gap between cutting-edge AI and real-world applications.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="/projects"
                            className="px-8 py-4 bg-gradient-to-br from-stone-800 to-stone-900 text-stone-50 rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg border border-stone-700"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 border-2 border-stone-300 bg-white rounded-xl font-semibold hover:border-stone-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-stone-800"
                        >
                            Get In Touch
                        </Link>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-20"
                    >
                        <Link href="#featured" className="inline-block">
                            <FiArrowDown className="text-3xl text-stone-400 animate-bounce" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
