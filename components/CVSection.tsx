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

    const experiences = [
        {
            role: 'Machine Learning Researcher Assistant',
            company: 'Kasetsart University',
            period: 'Nov 2024 - Present',
            description: [
                'Developed end-to-end AI pipelines for data preprocessing and model training',
                'Improved model accuracy through hyperparameter tuning and optimization',
                'Deployed production-ready AI models using FastAPI and Docker'
            ]
        },
        {
            role: 'AI & Drone Engineer (Short-term Contract)',
            company: 'Freelance',
            period: '2024',
            description: [
                'Designed and built a custom quadcopter drone for pigeon deterrence and aerial survey',
                'Integrated AI computer vision system for real-time pigeon detection using onboard camera',
                'Developed autonomous flight control with Arduino-based embedded system',
                'Implemented aerial photography and survey capabilities for civil engineering inspections'
            ]
        },
    ];

    return (
        <section id="cv" className="py-24 px-4 relative bg-[#f5f1e8]">
            {/* Decorative border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>

            <div className="container mx-auto max-w-2xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-8 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* LEFT COLUMN: Header & Summary (Sticky) */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 space-y-8 md:flex md:gap-8 md:space-y-0 lg:block lg:space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-full"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                                    CV & Resume
                                </h2>
                                <p className="text-gray-700 text-lg mb-8">
                                    AI Engineer | Software Engineer | Robotics | Intregration Firmware
                                </p>

                                {/* Summary moved here */}
                                <div className="glass-effect border border-amber-600/20 rounded-2xl p-6 lg:p-8">
                                    <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                                        <div className="w-8 h-1 bg-amber-600 rounded-full"></div>
                                        Summary
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        I have experience in AI research, robotics, embedded systems, 
                                        and software development. I can build machine learning models, 
                                        automated systems, and integrate APIs. I have experience in debugging, 
                                        some system troubleshooting, and improving system performance. 
                                        Comfortable working on both software and hardware projects and solving real-world technical problems.
                                        I'm can work under pressure and I like to learn new things.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Experience, Education, Skills */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-amber-100 text-amber-600"><FiFileText size={28} /></span>
                                Experience
                            </h3>

                            <div className="pl-2 mb-8">
                                <div className="border-l-4 border-amber-600 pl-8 space-y-12">
                                    {experiences.map((exp, index) => (
                                        <div key={index} className="relative">
                                            {/* Timeline dot */}
                                            <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-amber-600 border-4 border-[#f5f1e8]"></div>

                                            <div className="mb-4">
                                                <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                                                <p className="text-amber-700 font-medium text-base">{exp.company}</p>
                                                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                                            </div>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4 text-sm leading-relaxed">
                                                {exp.description.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-amber-100 text-amber-600"><FiFileText size={28} /></span>
                                Education
                            </h3>

                            <div className="pl-2">
                                <div className="border-l-4 border-amber-600 pl-8">
                                    <div className="relative">
                                        <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-amber-600 border-4 border-[#f5f1e8]"></div>
                                        <h4 className="text-xl font-bold text-gray-800">Computer Engineering</h4>
                                        <p className="text-amber-700 font-medium text-base">Kasetsart University</p>
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:from-amber-600 hover:to-orange-600"
                                        >
                                            <FiFileText size={18} />
                                            View Transcript
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Technical Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-3xl font-bold mb-8 text-gray-800">Technical Skills</h3>
                            <div className="space-y-8 pl-2">
                                {skills.map((skillGroup, index) => (
                                    <div key={index}>
                                        <h4 className="text-lg font-bold text-amber-700 uppercase tracking-widest mb-4">
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-amber-500/10 text-amber-900 rounded-lg text-xs font-semibold hover:bg-amber-500/20 transition-all cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Transcript Modal */}
            <TranscriptModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default CVSection;
