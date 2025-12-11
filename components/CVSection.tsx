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
        <section id="cv" className="py-24 px-4 relative">
            {/* Decorative border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
                            CV & Resume
                        </h2>
                        <p className="text-stone-500 text-lg">
                            Software Engineer | Data Scientist | ML Engineer
                        </p>
                    </div>

                    {/* Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-gradient-to-br from-white to-stone-50 border-2 border-stone-200 rounded-2xl p-8 mb-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-stone-900">Professional Summary</h3>
                        <p className="text-stone-600 leading-relaxed">
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
                            className="bg-white border-2 border-stone-200 rounded-2xl p-8 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-stone-900">Experience</h3>
                            <div className="border-l-4 border-stone-400 pl-6">
                                <div className="mb-2">
                                    <h4 className="text-lg font-bold text-stone-900">Machine Learning Researcher Assistant</h4>
                                    <p className="text-stone-600 font-medium">Kasetsart University</p>
                                    <p className="text-sm text-stone-500">Nov 2024 - Present</p>
                                </div>
                                <ul className="list-disc list-inside text-stone-600 text-sm space-y-2 mt-4">
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
                            className="bg-white border-2 border-stone-200 rounded-2xl p-8 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-stone-900">Education</h3>
                            <div className="border-l-4 border-stone-400 pl-6">
                                <h4 className="text-lg font-bold text-stone-900">Computer Engineering</h4>
                                <p className="text-stone-600 font-medium">Kasetsart University</p>
                                <p className="text-sm text-stone-500 mt-2">GPA: 2.50 (Cumulative)</p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-lg font-semibold hover:bg-stone-700 hover:shadow-lg transition-all duration-300"
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
                        className="bg-white border-2 border-stone-200 rounded-2xl p-8 mb-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-stone-900">Key Competencies</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {competencies.map((comp, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 text-stone-700"
                                >
                                    <div className="w-2 h-2 bg-stone-800 rounded-full"></div>
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
                        className="bg-white border-2 border-stone-200 rounded-2xl p-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-stone-900">Technical Skills</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-semibold text-stone-800 mb-3">{skillGroup.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-gradient-to-br from-stone-100 to-stone-200 text-stone-800 rounded-lg text-sm font-semibold border border-stone-300 shadow-sm"
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
