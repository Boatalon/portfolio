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
                className="w-full bg-white border-b border-gray-300 py-4 lg:py-6 flex-shrink-0"
            >
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                        {project.title}
                    </h2>
                </div>
            </motion.div>

            {/* Main Content - Two Columns */}
            <div className="flex-1 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-4 lg:py-6 h-full">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-full ${isDemoLeft ? '' : 'lg:grid-flow-dense'
                        }`}>
                        {/* Demo Section */}
                        <motion.div
                            initial={{ opacity: 0, x: isDemoLeft ? -40 : 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className={`h-full ${isDemoLeft ? '' : 'lg:col-start-2'}`}
                        >
                            <DemoSection project={project} />
                        </motion.div>

                        {/* Text Section */}
                        <motion.div
                            initial={{ opacity: 0, x: isDemoLeft ? 40 : -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className={`h-full ${isDemoLeft ? '' : 'lg:col-start-1'}`}
                        >
                            <TextSection project={project} />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer Conclusion */}
            {project.conclusion && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-full bg-white border-t border-gray-300 py-4 lg:py-6 flex-shrink-0"
                >
                    <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-4xl">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 text-center">
                            Conclusion
                        </h3>
                        <p className="text-sm lg:text-base text-gray-700 leading-relaxed text-center">
                            {project.conclusion}
                        </p>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ProjectSlide;
