import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import AboutSection from '@/components/AboutSection';
import CVSection from '@/components/CVSection';
import ContactSection from '@/components/ContactSection';
import { featuredProjects } from '@/lib/projects';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section id="home">
                <Hero />
            </section>

            {/* About Section */}
            <AboutSection />

            {/* Featured Projects Section */}
            <section id="projects" className="py-24 px-4">
                <div className="container mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-20 relative">
                            <div className="inline-block">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900 relative">
                                    Featured Projects
                                    {/* Decorative accent */}
                                    <div className="absolute -top-3 -right-3 w-12 h-12 border-2 border-stone-400 rounded-lg -z-10 opacity-50"></div>
                                </h2>
                            </div>
                            <p className="text-stone-500 text-lg max-w-2xl mx-auto mt-4">
                                Explore my latest work in Machine Learning, Computer Vision, and AI
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {featuredProjects.map((project, index) => (
                            <AnimatedSection key={project.id}>
                                <ProjectCard project={project} index={index} />
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="text-center">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-stone-300 bg-white rounded-xl font-semibold hover:border-stone-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                        >
                            View All Projects
                            <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Skills/Technologies Section */}
            <section className="py-24 px-4 relative">
                {/* Decorative border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>

                <div className="container mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
                                Tech Stack
                            </h2>
                            <p className="text-stone-500 text-lg">
                                Technologies I work with
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {[
                                'Python',
                                'PyTorch',
                                'TensorFlow',
                                'Computer Vision',
                                'Deep Learning',
                                'JavaScript',
                                'React',
                                'Next.js',
                                'TypeScript',
                                'Tailwind CSS',
                                'Git',
                                'Docker',
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-6 py-3 bg-gradient-to-br from-white to-stone-50 border-2 border-stone-200 rounded-xl text-stone-800 font-semibold hover:border-stone-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CV Section */}
            <CVSection />

            {/* Contact Section */}
            <ContactSection />
        </main>
    );
}
