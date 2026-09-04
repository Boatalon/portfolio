'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiEye, FiCode, FiZap, FiBox, FiBookOpen } from 'react-icons/fi';
import ResumeModal from './ResumeModal';

const skills = [
    {
        category: 'Languages',
        icon: <FiCode size={14} />,
        items: ['Python', 'C/C++', 'JavaScript', 'SQL', 'PHP'],
    },
    {
        category: 'AI / ML',
        icon: <FiZap size={14} />,
        items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'ONNX', 'OpenCV', 'MediaPipe', 'YOLO'],
    },
    {
        category: 'Robotics',
        icon: <FiBox size={14} />,
        items: ['ROS2', 'Pixhawk', 'MAVLink', 'ArduPilot', 'Jetson Nano', 'Arduino'],
    },
    {
        category: 'Web & Tools',
        icon: <FiBookOpen size={14} />,
        items: ['React', 'Next.js', 'FastAPI', 'Docker', 'Git', 'Linux'],
    },
];

const experiences = [
    {
        role: 'Drone & Computer Vision Engineer',
        company: 'Flyhigh Team, Kasetsart University — AAVC 2026',
        period: 'Aug 2026',
        description: [
            'Designed & built an autonomous drone using Pixhawk, Jetson Nano, and cameras',
            'Developed AI to detect ArUco pads; used MAVLink for autonomous payload delivery & precision landing',
            'Configured flight missions, geofencing, RTL, and failsafe functions',
            'Represented Kasetsart University at AAVC 2026 (28–30 Aug 2026)',
        ],
    },
    {
        role: 'Machine Learning Research Assistant',
        company: 'Kasetsart University',
        period: 'Nov 2024 – Aug 2026',
        description: [
            'Trained YOLO object detection system for Colletotrichum disease in rubber trees',
            'Used custom dataset prepared with plant pathologists at Kasetsart University',
            'Built LINE Bot notification system to alert farmers in high-risk zones',
            'Collected disease severity & weather data for a disease forecasting model',
        ],
    },
    {
        role: 'AI & Drone Engineer (Short-term Contract)',
        company: 'Freelance',
        period: '2024',
        description: [
            'Designed & built a custom quadcopter for pigeon deterrence and aerial survey',
            'Integrated real-time pigeon detection via onboard AI computer vision',
            'Developed autonomous flight control with an Arduino-based embedded system',
            'Implemented aerial photography capabilities for civil engineering inspections',
        ],
    },
];

const cardAnim = {
    hidden:  { opacity: 0, y: 28 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] } }),
};

const CVSection = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <section id="cv" className="py-28 px-4 relative bg-[#f5f1e8] overflow-hidden">
            <div className="section-divider" />

            {/* subtle background orbs */}
            <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-orange-200/15 blur-3xl" />

            <div className="container mx-auto max-w-2xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-8 lg:px-16 relative">

                <div className="grid lg:grid-cols-12 gap-16">

                    {/* ── LEFT: Header, Summary ── */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -28 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className="section-label mb-5 inline-flex">Experience</span>

                                <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 font-display leading-tight">
                                    CV &amp;{' '}
                                    <span className="gradient-text">Resume</span>
                                </h2>
                                <p className="mt-3 text-stone-500 text-base leading-relaxed">
                                    AI Engineer · Software Engineer · Robotics · Embedded Systems
                                </p>
                            </motion.div>

                            {/* Summary card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15, duration: 0.6 }}
                                className="glass-effect rounded-2xl p-6"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-6 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700" />
                                    <h3 className="text-base font-bold text-stone-800">Summary</h3>
                                </div>
                                <p className="text-sm text-stone-600 leading-[1.8]">
                                    Experienced in AI research, robotics, embedded systems, and full-stack
                                    development. Can build ML models, automated systems, and integrate APIs.
                                    Comfortable across software and hardware projects; learning quickly under pressure.
                                </p>
                            </motion.div>

                            {/* Open résumé button */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25, duration: 0.5 }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setIsResumeOpen(true)}
                                    className="btn-primary w-full justify-center"
                                >
                                    <FiEye aria-hidden size={17} />
                                    Open Résumé
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* ── RIGHT: Experience, Education, Skills ── */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Experience */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl font-bold mb-8 text-stone-800 flex items-center gap-3"
                            >
                                <span className="p-2 rounded-xl bg-amber-100 text-amber-700"><FiFileText size={20} /></span>
                                Experience
                            </motion.h3>

                            <div className="relative pl-8">
                                <div className="timeline-line" />
                                <div className="space-y-12">
                                    {experiences.map((exp, i) => (
                                        <motion.div
                                            key={i}
                                            variants={cardAnim}
                                            custom={i}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: '-30px' }}
                                            className="relative"
                                        >
                                            <div className="timeline-dot" />
                                            <div className="glass-effect rounded-2xl p-6 hover:shadow-[0_8px_32px_rgba(120,53,15,0.10)] transition-shadow duration-300">
                                                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                                    <h4 className="text-base font-bold text-stone-800 leading-snug">{exp.role}</h4>
                                                    <span className="shrink-0 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full tabular-nums">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <p className="text-sm font-semibold text-amber-700 mb-4">{exp.company}</p>
                                                <ul className="space-y-2">
                                                    {exp.description.map((item, idx) => (
                                                        <li key={idx} className="flex gap-2.5 text-sm text-stone-600 leading-relaxed">
                                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl font-bold mb-8 text-stone-800 flex items-center gap-3"
                            >
                                <span className="p-2 rounded-xl bg-amber-100 text-amber-700"><FiBookOpen size={20} /></span>
                                Education
                            </motion.h3>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55 }}
                                className="relative pl-8"
                            >
                                <div className="timeline-line" style={{ height: '3rem', bottom: 'auto' }} />
                                <div className="timeline-dot" />
                                <div className="glass-effect rounded-2xl p-6">
                                    <h4 className="text-base font-bold text-stone-800 mb-1">B.Eng. Computer Engineering</h4>
                                    <p className="text-sm font-semibold text-amber-700">Kasetsart University</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Technical Skills */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl font-bold mb-8 text-stone-800"
                            >
                                Technical Skills
                            </motion.h3>

                            <div className="space-y-7">
                                {skills.map((group, gi) => (
                                    <motion.div
                                        key={gi}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: gi * 0.09, duration: 0.5 }}
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-amber-600">{group.icon}</span>
                                            <h4 className="text-xs font-bold text-amber-700 uppercase tracking-[0.12em]">
                                                {group.category}
                                            </h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {group.items.map((skill, si) => (
                                                <span key={si} className="skill-badge">{skill}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </section>
    );
};

export default CVSection;
