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
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black text-left mb-2">
                        {project.title}
                    </h2>
                    <p className="text-sm sm:text-base text-black text-left max-w-3xl">
                        {project.description}
                    </p>
                </div>
            </motion.div>

            {/* Main Content - Scrollable Area */}
            <div className="flex-1 overflow-y-auto">
                <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[80%] mx-auto px-4 sm:px-6 py-2 sm:py-3 lg:py-3">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-16 ${isDemoLeft ? '' : 'md:grid-flow-dense'
                        }`}>
                        {/* Demo Section */}
                        <motion.div
                            initial={{ opacity: 0, x: isDemoLeft ? -40 : 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className={`${isDemoLeft ? '' : 'md:col-start-2'} relative`}
                        >
                            <DemoSection project={project} />

                            {/* Orange Divider with Gradient Fade - Visible on md+ screens */}
                            <div className={`hidden md:block absolute top-0 ${isDemoLeft ? 'right-0 translate-x-3 lg:translate-x-8' : 'left-0 -translate-x-3 lg:-translate-x-8'} h-full w-px bg-gradient-to-b from-transparent via-amber-600 to-transparent`}></div>
                        </motion.div>

                        {/* Text Section */}
                        <motion.div
                            initial={{ opacity: 0, x: isDemoLeft ? 40 : -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className={`${isDemoLeft ? '' : 'md:col-start-1'}`}
                        >
                            <TextSection project={project} />
                        </motion.div>
                    </div>

                    {/* Conclusion - Full width below grid */}
                    {project.conclusion && (
                        <div className="w-full mt-6 mb-2">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-2 text-center">
                                Conclusion
                            </h3>
                            <p className="text-xs sm:text-sm lg:text-base text-black leading-normal text-center max-w-4xl mx-auto">
                                {project.conclusion}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

export default ProjectSlide;
