'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f5f1e8]">
            {/* Main Container */}
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left order-2 lg:order-1"
                    >
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-4"
                        >
                            <span className="text-gray-800 font-medium text-lg tracking-wide">
                                Hello, I'm
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3 text-gray-900"
                        >
                            Arnon Chatri
                        </motion.h1>

                        {/* Title with accent */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent"
                        >
                            Machine Learning Engineer
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-base sm:text-lg text-gray-800 mb-8 leading-relaxed max-w-xl"
                        >
                            Specializing in Computer Vision, Deep Learning, and building innovative solutions
                            that bridge the gap between cutting-edge AI and real-world applications.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <button
                                onClick={() => {
                                    document.getElementById('projects')?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }}
                                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                View My Work
                            </button>
                            <Link
                                href="/contact"
                                className="px-8 py-4 border-2 border-gray-900 bg-transparent text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                Get In Touch
                            </Link>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="flex gap-4"
                        >
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-900 text-white hover:bg-amber-600 transition-all duration-300 hover:scale-110"
                            >
                                <FiGithub className="text-xl" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-900 text-white hover:bg-amber-600 transition-all duration-300 hover:scale-110"
                            >
                                <FiLinkedin className="text-xl" />
                            </a>
                            <a
                                href="mailto:your.email@example.com"
                                className="p-3 rounded-full bg-gray-900 text-white hover:bg-amber-600 transition-all duration-300 hover:scale-110"
                            >
                                <FiMail className="text-xl" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                            {/* Decorative background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-3xl transform rotate-3"></div>

                            {/* Image container */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <Image
                                    src="/profile.png"
                                    alt="Arnon Chatri"
                                    width={600}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
