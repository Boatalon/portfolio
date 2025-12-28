'use client';

import { Project } from '@/lib/projects';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface DemoSectionProps {
    project: Project;
}

const DemoSection = ({ project }: DemoSectionProps) => {
    return (
        <div className="bg-white border border-gray-300 rounded-2xl p-4 lg:p-6 h-full flex flex-col overflow-hidden">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 flex-shrink-0">Demo</h3>

            {/* Image/Demo Content */}
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden min-h-[250px] mb-4 relative group">
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
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
                {project.link && (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-amber-500/50 transition-all"
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-sm hover:border-amber-600 hover:text-amber-600 transition-all"
                    >
                        <FiGithub className="w-4 h-4" />
                        View Code
                    </motion.a>
                )}
            </div>
        </div>
    );
};

export default DemoSection;
