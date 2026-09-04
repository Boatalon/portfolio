'use client';

import { useState } from 'react';
import { Project } from '@/lib/projects';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiPlay, FiAward, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import HandKeypointDemo from './HandKeypointDemo';

interface DemoSectionProps {
    project: Project;
}


const DemoSection = ({ project }: DemoSectionProps) => {
    const [showLiveDemo, setShowLiveDemo] = useState(false);
    const [showCertificate, setShowCertificate] = useState(false);

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
                    {/* Certificate button */}
                    {project.certificateImage && (
                        <motion.button
                            onClick={() => setShowCertificate(true)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm border border-amber-500/50 text-amber-800 bg-amber-50 hover:bg-amber-100 hover:border-amber-600 hover:shadow-md transition-all"
                        >
                            <FiAward className="w-4 h-4" />
                            View Certificate
                        </motion.button>
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

            {/* Certificate Lightbox */}
            <AnimatePresence>
                {showCertificate && project.certificateImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                        onClick={() => setShowCertificate(false)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

                        {/* Certificate card */}
                        <motion.div
                            initial={{ scale: 0.88, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.88, opacity: 0, y: 20 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            onClick={e => e.stopPropagation()}
                            className="relative z-10 w-full max-w-2xl bg-[#fffbf5] rounded-3xl shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-amber-100">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center">
                                        <FiAward className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-stone-800">Award Certificate</p>
                                        <p className="text-xs text-amber-700 font-medium">รางวัลชนะเลิศ — KU-KM Sharing Day 2026</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowCertificate(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg text-stone-500 hover:bg-stone-100 hover:text-stone-800 transition-colors"
                                    aria-label="Close certificate"
                                >
                                    <FiX className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Certificate image */}
                            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                                <Image
                                    src={project.certificateImage}
                                    alt="Award Certificate — i-Dairy KU-KM Sharing Day 2026"
                                    fill
                                    unoptimized
                                    className="object-contain p-4"
                                />
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-4 bg-amber-50/60 border-t border-amber-100 text-center">
                                <p className="text-xs text-stone-500 leading-relaxed">
                                    1st Place · Innovation Work Category · Faculty of Engineering Kamphaeng Saen, Kasetsart University · 23 July 2026
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default DemoSection;
