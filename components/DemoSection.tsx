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
            <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">Project Evidence</h3>

                {/* Video/Image Demo Content */}
                <div className="w-full aspect-video glass-effect rounded-xl overflow-hidden mb-3 sm:mb-4 relative group">
                    {project.video ? (
                        <video
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : project.image ? (
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
                    ) : null}
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
                            className="inline-flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900 text-sm"
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
                            className="inline-flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900 text-sm"
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

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                    <div className="mt-5">
                        <h4 className="text-base lg:text-lg font-semibold text-black mb-3">Key Features</h4>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.08 }}
                                    className="flex items-start gap-2"
                                >
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                                        ✓
                                    </span>
                                    <span className="text-black text-sm lg:text-base">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                )}

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
