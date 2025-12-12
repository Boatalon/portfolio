import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { slug } = await params;
    const project = projects.find(
        (p) => (p.slug || p.id) === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-24 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Back Button */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <FiArrowLeft />
                    Back to Projects
                </Link>

                {/* Project Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-400 mb-6">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 glass-effect border border-purple-500/30 text-white rounded-lg text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                            >
                                <FiExternalLink />
                                Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 glass-effect border border-purple-500/30 text-white rounded-lg font-semibold hover:border-purple-500 transition-all"
                            >
                                <FiGithub />
                                View Code
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Image */}
                {project.image && (
                    <div className="mb-12 rounded-2xl overflow-hidden border border-purple-500/20">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1200}
                            height={675}
                            className="w-full h-auto"
                        />
                    </div>
                )}

                {/* Project Details - Placeholder */}
                <div className="glass-effect border border-purple-500/20 rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-white">About This Project</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                    </p>
                    <p className="text-gray-400 text-sm italic">
                        More details will be added soon...
                    </p>
                </div>

                {/* Features Section - Placeholder */}
                <div className="glass-effect border border-purple-500/20 rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Feature 1 (to be added)</li>
                        <li>Feature 2 (to be added)</li>
                        <li>Feature 3 (to be added)</li>
                    </ul>
                </div>

                {/* Tech Stack - Placeholder */}
                <div className="glass-effect border border-purple-500/20 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-white/5 border border-purple-500/30 text-purple-400 rounded-lg font-semibold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
