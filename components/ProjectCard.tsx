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
            className="group bg-stone-50 border-2 border-stone-200 rounded-xl overflow-hidden hover:border-stone-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 shadow-lg relative"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-stone-400 via-stone-600 to-stone-400"></div>

            {/* Project Image */}
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200">
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Info */}
            <div className="p-6 bg-white">
                {/* Title */}
                <h3 className="text-xl font-bold mb-1 text-stone-900 group-hover:text-stone-700 transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-stone-500 mb-4 font-medium">{project.titleTH}</p>

                {/* Description */}
                <p className="text-stone-600 text-sm mb-5 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1.5 bg-gradient-to-br from-stone-100 to-stone-200 text-stone-700 rounded-full text-xs font-semibold border border-stone-300 shadow-sm"
                        >
                            {tag}
                        </span>
                    ))}
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
