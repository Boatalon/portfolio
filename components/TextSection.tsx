'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';

interface TextSectionProps {
    project: Project;
}

const TextSection = ({ project }: TextSectionProps) => {
    return (
        <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">Project Brief</h3>

            {/* Content area */}
            <div className="pr-2">
                {/* Description */}
                <p className="text-black text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6">
                    {project.detailedDescription || project.description}
                </p>

                {project.challenge && (
                    <section className="mb-6 rounded-xl border border-amber-900/15 bg-amber-900/[0.05] p-4">
                        <h4 className="text-base lg:text-lg font-semibold text-black mb-2">Engineering Challenge</h4>
                        <p className="text-sm leading-relaxed text-stone-800 lg:text-base">{project.challenge}</p>
                    </section>
                )}

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

                {/* Deployment Plan */}
                {project.deploymentPlan && project.deploymentPlan.length > 0 && (
                    <section>
                        <h4 className="text-base lg:text-lg font-semibold text-black mb-3">Deployment Plan</h4>
                        <ol className="space-y-3">
                            {project.deploymentPlan.map((step, index) => (
                                <li key={step} className="flex items-start gap-3">
                                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-stone-900 text-xs font-bold tabular-nums text-white">
                                        {index + 1}
                                    </span>
                                    <span className="pt-0.5 text-sm leading-relaxed text-stone-800 lg:text-base">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </section>
                )}

            </div>
        </div>
    );
};

export default TextSection;
