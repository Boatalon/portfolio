'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Animated background blobs */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                        <span className="text-gray-400 font-medium text-base tracking-wide uppercase">
                            Hello, I&apos;m
                        </span>
                    </motion.div>

                    {/* Name with gradient */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold mb-3 relative inline-block"
                    >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent bg-300% animate-gradient">
                            Arnon Chatri
                        </span>
                        {/* Decorative underline */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl text-gray-300 mb-8 mt-8 font-light"
                    >
                        Machine Learning Engineer & Developer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Specializing in Computer Vision, Deep Learning, and building innovative solutions
                        that bridge the gap between cutting-edge AI and real-world applications.
                    </motion.p>

                    {/* CTA Buttons with glow effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href="/projects"
                            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 border-2 border-purple-500/50 bg-white/5 rounded-xl font-semibold hover:border-purple-500 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 text-white backdrop-blur-sm"
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
                        <Link href="#featured" className="inline-block animate-bounce">
                            <FiArrowDown className="text-3xl text-purple-400" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                .animate-gradient {
                    background-size: 300% 300%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
