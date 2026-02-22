'use client';

import { useState } from 'react';
import { Project } from '@/lib/projects';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiPlay } from 'react-icons/fi';
import { motion } from 'framer-motion';
import HandKeypointDemo from './HandKeypointDemo';

interface DemoSectionProps {
    project: Project;
}

const DemoSection = ({ project }: DemoSectionProps) => {
    const [showLiveDemo, setShowLiveDemo] = useState(false);

    return (
        <>
            <div className="h-full flex flex-col overflow-hidden">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 flex-shrink-0">Showcase</h3>

                {/* Image/Demo Content */}
                <div className="flex-1 flex items-center justify-center glass-effect rounded-xl overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[550px] mb-3 sm:mb-4 relative group">
                    {project.image && (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 flex-shrink-0">
                    {/* Live Demo button (in-browser) */}
                    {project.liveDemo && (
                        <motion.button
                            onClick={() => setShowLiveDemo(true)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-2 font-semibold text-white shadow-lg transition hover:from-amber-600 hover:to-orange-600 text-sm"
                        >
                            <FiPlay className="w-4 h-4" />
                            Try Live Demo
                        </motion.button>
                    )}
                    {/* External link */}
                    {project.link && (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-2 font-semibold text-white shadow-lg transition hover:from-amber-600 hover:to-orange-600 text-sm"
                        >
                            <FiExternalLink className="w-4 h-4" />
                            Live Demo
                        </motion.a>
                    )}
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-4 py-2 glass-effect text-gray-700 rounded-lg font-semibold text-sm hover:text-amber-600 hover:shadow-lg transition-all"
                        >
                            <FiGithub className="w-4 h-4" />
                            View Code
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Hand Keypoint Demo Modal */}
            {project.liveDemo && (
                <HandKeypointDemo
                    isOpen={showLiveDemo}
                    onClose={() => setShowLiveDemo(false)}
                />
            )}
        </>
    );
};

export default DemoSection;
