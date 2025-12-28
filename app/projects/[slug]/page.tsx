'use client';

import { notFound, useRouter } from 'next/navigation';
import { projects } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface ProjectDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const router = useRouter();
    const [slug, setSlug] = useState<string>('');
    const [project, setProject] = useState<typeof projects[0] | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    useEffect(() => {
        params.then(p => {
            setSlug(p.slug);
            const foundProject = projects.find((proj) => (proj.slug || proj.id) === p.slug);
            if (foundProject) {
                setProject(foundProject);
                const index = projects.findIndex((proj) => (proj.slug || proj.id) === p.slug);
                setCurrentIndex(index);
            }
        });
    }, [params]);

    if (!project) {
        return null;
    }

    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    const navigateToProject = (targetSlug: string) => {
        router.push(`/projects/${targetSlug}`);
    };

    return (
        <div className="min-h-screen bg-[#f5f1e8] relative">
            {/* Navigation Arrows */}
            {prevProject && (
                <button
                    onClick={() => navigateToProject(prevProject.slug || prevProject.id)}
                    className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-amber-600 transition-all flex items-center justify-center group"
                    aria-label="Previous project"
                >
                    <FiChevronLeft className="w-8 h-8 text-gray-700 group-hover:text-amber-600 transition-colors" />
                </button>
            )}

            {nextProject && (
                <button
                    onClick={() => navigateToProject(nextProject.slug || nextProject.id)}
                    className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-amber-600 transition-all flex items-center justify-center group"
                    aria-label="Next project"
                >
                    <FiChevronRight className="w-8 h-8 text-gray-700 group-hover:text-amber-600 transition-colors" />
                </button>
            )}

            {/* Back Button */}
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-8">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-amber-700 transition-colors font-medium"
                >
                    <FiArrowLeft />
                    Back to Home
                </Link>
            </div>

            {/* Project Title Section */}
            <div className="w-full bg-white border-y border-gray-300 py-12 mb-12">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center">
                        {project.title}
                    </h1>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 mb-16">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${project.layout === 'demo-right' ? 'lg:grid-flow-dense' : ''
                    }`}>
                    {/* Demo Section */}
                    <div className={`bg-white border border-gray-300 rounded-2xl p-8 flex flex-col ${project.layout === 'demo-right' ? 'lg:col-start-2' : ''
                        }`}>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Demo</h2>
                        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl min-h-[400px]">
                            {project.image && (
                                <div className="relative w-full h-full rounded-xl overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mt-6">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all"
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
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-600 transition-all"
                                >
                                    <FiGithub />
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Text/Description Section */}
                    <div className="bg-white border border-gray-300 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Project</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            {project.detailedDescription || project.description}
                        </p>

                        {/* Tags */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 glass-effect border border-amber-600/20 text-gray-800 text-sm rounded-full font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        {project.features && project.features.length > 0 && (
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                                                ✓
                                            </span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer/Conclusion Section */}
            {project.conclusion && (
                <div className="w-full bg-white border-t border-gray-300 py-16">
                    <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Conclusion</h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
                            {project.conclusion}
                        </p>
                    </div>
                </div>
            )}

            {/* Bottom Navigation Hint */}
            <div className="py-8 text-center text-gray-500 text-sm">
                <p>Use the arrow buttons (← →) to navigate between projects</p>
            </div>
        </div>
    );
}
