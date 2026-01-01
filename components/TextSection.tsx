'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';

interface TextSectionProps {
    project: Project;
}

const TextSection = ({ project }: TextSectionProps) => {
    return (
        <div className="h-full flex flex-col overflow-hidden">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4 flex-shrink-0">About This Project</h3>

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {/* Description */}
                <p className="text-black text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6">
                    {project.detailedDescription || project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                    <h4 className="text-base lg:text-lg font-semibold text-black mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                className="px-2.5 py-1 glass-effect border border-amber-600/20 text-black text-xs lg:text-sm rounded-full font-medium hover:border-amber-600/60 hover:shadow-md transition-all"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                    <div>
                        <h4 className="text-base lg:text-lg font-semibold text-black mb-3">Key Features</h4>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
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
        </div>
    );
};

export default TextSection;
