'use client';

import { Project } from '@/lib/projects';
import { motion } from 'framer-motion';
import DemoSection from './DemoSection';
import TextSection from './TextSection';

interface ProjectSlideProps {
    project: Project;
}

const ProjectSlide = ({ project }: ProjectSlideProps) => {
    const isDemoLeft = project.layout === 'demo-left' || !project.layout;

    return (
        <div className="w-full h-full flex flex-col overflow-hidden">
            {/* Project Title Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-full py-2 sm:py-3 lg:py-4 flex-shrink-0"
            >
                <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 sm:px-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-left mb-2">
                        {project.title}
                    </h2>
                    <p className="text-sm sm:text-base text-black text-left max-w-3xl">
                        {project.description}
                    </p>
                </div>
            </motion.div>

            {/* Main Content - Scrollable Area */}
            <div className="flex-1 overflow-y-auto pb-24">
                <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 sm:px-6 py-2 sm:py-3 lg:py-4">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 ${isDemoLeft ? '' : 'lg:grid-flow-dense'
                        }`}>
                        {/* Demo Section */}
                        <motion.div
                            initial={{ opacity: 0, x: isDemoLeft ? -40 : 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className={`${isDemoLeft ? '' : 'lg:col-start-2'}`}
                        >
                            <DemoSection project={project} />
                        </motion.div>

                        {/* Text Section */}
                        <motion.div
                            initial={{ opacity: 0, x: isDemoLeft ? 40 : -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className={`${isDemoLeft ? '' : 'lg:col-start-1'}`}
                        >
                            <TextSection project={project} />
                        </motion.div>
                    </div>

                    {/* Footer Conclusion - Now part of scrollable flow */}
                    {project.conclusion && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="w-full p-4 sm:p-6 mt-2"
                        >
                            <div className="max-w-5xl mx-auto">
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-2 text-center">
                                    Conclusion
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base text-black leading-relaxed text-center">
                                    {project.conclusion}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectSlide;
