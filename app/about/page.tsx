import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import { FiAward, FiCode, FiHeart } from 'react-icons/fi';

export const metadata = {
    title: 'About | Portfolio',
    description: 'Learn more about my background, skills, and passion for Machine Learning and AI.',
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <AnimatedSection>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-stone-800">
                        About Me
                    </h1>
                    <p className="text-xl text-stone-600 mb-12">
                        เกี่ยวกับฉัน
                    </p>
                </AnimatedSection>

                {/* Bio Section */}
                <AnimatedSection>
                    <div className="glass-effect rounded-xl p-8 mb-12">
                        <h2 className="text-3xl font-bold mb-4">Hello! 👋</h2>
                        <div className="space-y-4 text-stone-600 text-lg">
                            <p>
                                I'm a passionate Machine Learning Engineer and Developer specializing in
                                Computer Vision and Deep Learning. With a strong background in creating
                                innovative AI solutions, I strive to build technology that makes a real
                                impact.
                            </p>
                            <p>
                                My journey in AI began with a fascination for how machines can learn to
                                see and understand the world. This led me to work on exciting projects
                                like real-time sign language translation, object detection systems, and
                                various deep learning applications.
                            </p>
                            <p>
                                When I'm not training models or writing code, you'll find me exploring
                                new ML papers, contributing to open-source projects, or sharing knowledge
                                with the developer community.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <AnimatedSection>
                        <div className="glass-effect rounded-xl p-6 text-center hover-lift">
                            <FiCode className="text-5xl text-stone-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                            <p className="text-stone-600">
                                Writing maintainable and scalable solutions
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="glass-effect rounded-xl p-6 text-center hover-lift">
                            <FiAward className="text-5xl text-stone-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Best Practices</h3>
                            <p className="text-stone-600">
                                Following industry standards and modern approaches
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="glass-effect rounded-xl p-6 text-center hover-lift">
                            <FiHeart className="text-5xl text-stone-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Passion</h3>
                            <p className="text-stone-600">
                                Love for learning and building innovative solutions
                            </p>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Education/Experience */}
                <AnimatedSection>
                    <div className="glass-effect rounded-xl p-8">
                        <h2 className="text-3xl font-bold mb-6">Experience & Education</h2>

                        <div className="space-y-6">
                            <div className="border-l-2 border-stone-400 pl-4">
                                <h3 className="text-xl font-bold mb-1">Machine Learning Projects</h3>
                                <p className="text-stone-600 mb-2">2023 - Present</p>
                                <ul className="list-disc list-inside text-stone-600 space-y-1">
                                    <li>Developed Sign Language to Speech translation system</li>
                                    <li>Implemented object detection with Faster R-CNN</li>
                                    <li>Trained classification models (VGG19, ResNeXt)</li>
                                </ul>
                            </div>

                            <div className="border-l-2 border-stone-400 pl-4">
                                <h3 className="text-xl font-bold mb-1">Education</h3>
                                <p className="text-stone-600 mb-2">Your University</p>
                                <p className="text-stone-600">
                                    Bachelor's/Master's in Computer Science / Engineering
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
