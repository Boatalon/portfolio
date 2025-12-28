'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    project: Project;
    index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: index * 0.1,
            }}
        >
            <Link href={`/projects/${project.slug || project.id}`} className="block">
                <div
                    className="group glass-effect border border-amber-600/20 rounded-xl 
                    overflow-hidden hover:border-amber-600/60 hover:shadow-2xl 
                    hover:shadow-amber-600/20 transition-all 
                    duration-300 cursor-pointer flex flex-col min-h-[480px] sm:min-h-[500px] lg:min-h-[520px]"
                >
                    {/* Project Image */}
                    <div className="relative h-40 sm:h-44 flex-shrink-0 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                        {project.image && (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 flex flex-col flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                            {project.title}
                        </h3>

                        <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed flex-grow line-clamp-3">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4 max-h-[72px] overflow-hidden">
                            {project.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 sm:px-3 py-1 glass-effect border border-amber-600/20 text-gray-800 text-xs rounded-full font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                            {project.tags.length > 3 && (
                                <span className="px-2.5 sm:px-3 py-1 glass-effect border border-amber-600/20 text-gray-800 text-xs rounded-full">
                                    +{project.tags.length - 3}
                                </span>
                            )}
                        </div>

                        {/* View details */}
                        <div className="flex items-center gap-2 text-amber-700 text-xs sm:text-sm font-semibold pt-3 sm:pt-4 border-t border-gray-300 mt-auto">
                            <span>View Details</span>
                            <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
