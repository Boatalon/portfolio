'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectCardProps {
    project: Project;
    index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
    return (
        <div
            className="group glass-effect border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"></div>

            {/* Project Image */}
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
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
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Info */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 glass-effect border border-purple-500/20 text-gray-300 text-xs rounded-full font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="px-3 py-1 glass-effect border border-purple-500/20 text-gray-300 text-xs rounded-full">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm pt-4 border-t border-stone-200">
                    {project.link && (
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-stone-700 hover:text-stone-900 font-medium transition-colors"
                        >
                            <FiExternalLink size={16} />
                            <span>Demo</span>
                        </Link>
                    )}
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-stone-700 hover:text-stone-900 font-medium transition-colors"
                        >
                            <FiGithub size={16} />
                            <span>Code</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
