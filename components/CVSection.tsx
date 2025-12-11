'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiDownload } from 'react-icons/fi';
import TranscriptModal from './TranscriptModal';

const CVSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const skills = [
        { category: 'Languages', items: ['Python', 'C/C++', 'SQL', 'PHP', 'JavaScript'] },
        { category: 'ML/DS', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas'] },
        { category: 'Web', items: ['React', 'Node.js', 'Next.js', 'Tailwind CSS'] },
        { category: 'Tools', items: ['Docker', 'Git', 'FastAPI'] },
    ];

    const competencies = [
        'ML Pipeline Development',
        'Software Architecture',
        'API Design & Integration',
        'Research Methodology',
        'Deployment & Inference',
        'System Troubleshooting',
    ];

    return (
        <section id="cv" className="py-24 px-4 relative bg-black">
            {/* Decorative border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            CV & Resume
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Software Engineer | Data Scientist | ML Engineer
                        </p>
                    </div>

                    {/* Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass-effect border border-purple-500/20 rounded-2xl p-8 mb-8"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">Professional Summary</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Detail-oriented IT professional with a foundation in software development, information systems,
                            and data-driven problem solving. Experienced in building automated tools and machine learning workflows.
                            Skilled in API integration, system troubleshooting, and creating reliable digital solutions for real-world
                            use. Ability to work under pressure, manage technical issues effectively, and collaborate across teams.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-effect border border-purple-500/20 rounded-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white">Experience</h3>
                            <div className="border-l-4 border-purple-500 pl-6">
                                <div className="mb-2">
                                    <h4 className="text-lg font-bold text-white">Machine Learning Researcher Assistant</h4>
                                    <p className="text-gray-300 font-medium">Kasetsart University</p>
                                    <p className="text-sm text-gray-400">Nov 2024 - Present</p>
                                </div>
                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mt-4">
                                    <li>Developed end-to-end AI pipelines for data preprocessing and model training</li>
                                    <li>Improved model accuracy through hyperparameter tuning and optimization</li>
                                    <li>Deployed production-ready AI models using FastAPI and Docker</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-effect border border-purple-500/20 rounded-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
                            <div className="border-l-4 border-purple-500 pl-6">
                                <h4 className="text-lg font-bold text-white">Computer Engineering</h4>
                                <p className="text-gray-300 font-medium">Kasetsart University</p>
                                <p className="text-sm text-gray-400 mt-2">GPA: 2.50 (Cumulative)</p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                                >
                                    <FiFileText size={18} />
                                    View Transcript
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Key Competencies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass-effect border border-purple-500/20 rounded-2xl p-8 mb-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Key Competencies</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {competencies.map((comp, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-gray-300"
                                >
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-sm font-medium">{comp}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technical Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass-effect border border-purple-500/20 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-semibold text-purple-400 mb-3">{skillGroup.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 glass-effect border border-purple-500/30 text-white rounded-lg text-sm font-semibold hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Transcript Modal */}
            <TranscriptModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default CVSection;
