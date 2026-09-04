'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCpu, FiTool, FiUsers, FiArrowDown } from 'react-icons/fi';


/* ── Floating particle background ── */
const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {[...Array(12)].map((_, i) => (
            <div
                key={i}
                className="absolute rounded-full opacity-[0.08]"
                style={{
                    width:  `${12 + (i * 17) % 48}px`,
                    height: `${12 + (i * 17) % 48}px`,
                    left:   `${(i * 23 + 5) % 95}%`,
                    top:    `${(i * 31 + 10) % 90}%`,
                    background: `radial-gradient(circle, #d97706, #92400e)`,
                    animation: `float ${5 + (i % 4)}s ease-in-out infinite ${(i * 0.6).toFixed(1)}s`,
                }}
            />
        ))}
    </div>
);

/* ── Value cards ── */
const ValueCard = ({
    icon, title, description, index,
}: { icon: React.ReactNode; title: string; description: string; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.25 } }}
        className="glass-effect rounded-2xl p-5 h-full flex flex-col group cursor-default
                   hover:border-[rgba(217,119,6,0.4)] hover:shadow-[0_8px_32px_rgba(120,53,15,0.12)]
                   transition-[border-color,box-shadow] duration-300"
    >
        <div className="mb-4 w-11 h-11 rounded-xl flex items-center justify-center
                        bg-gradient-to-br from-amber-100 to-orange-100
                        text-amber-700 text-lg shadow-sm
                        group-hover:from-amber-200 group-hover:to-orange-200
                        transition-colors duration-300">
            {icon}
        </div>
        <h3 className="mb-1.5 text-base font-bold text-stone-800">{title}</h3>
        <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
    </motion.div>
);

/* ── Profile image (used in Hero only) ── */
const ProfileImage = ({ className = '' }: { className?: string }) => (
    <div className={`relative ${className}`}>
        <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-amber-300/20 via-orange-300/10 to-transparent blur-2xl pointer-events-none" />
        <div className="absolute inset-0 rotate-2 rounded-[2.5rem] bg-gradient-to-br from-amber-200/30 to-orange-100/20" />
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_24px_80px_rgba(120,53,15,0.22)]">
            <Image src="/profile.png" alt="Arnon Chatri" width={900} height={1000} className="h-auto w-full object-cover" priority />
            <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_60px_rgba(120,53,15,0.08)]" />
        </div>
    </div>
);

/* ─────────────────────────────────────────────────────── */
const HeroAboutSection = () => {

    return (
        <section
            id="hero-about-combined"
            className="relative bg-[#f5f1e8] overflow-hidden"
        >
            <Particles />

            {/* ── HERO ── */}
            <div
                id="home"
                className="relative container mx-auto min-h-screen flex items-center px-4 sm:px-8 lg:px-16"
            >
                <div className="mx-auto grid max-w-screen-2xl w-full grid-cols-1 lg:grid-cols-2 items-center gap-12 py-24">

                    {/* LEFT: text */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="mb-6"
                        >
                            <span className="section-label">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse-amber inline-block" />
                                Available for opportunities
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mb-3 text-lg font-medium text-stone-500 tracking-wide"
                        >
                            Hello, I&apos;m
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-2 text-5xl font-extrabold tracking-tight text-stone-900 sm:text-6xl lg:text-7xl xl:text-8xl font-display leading-[1.02]"
                        >
                            Arnon{' '}
                            <span className="gradient-text">Chatri</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ delay: 0.38, duration: 0.5 }}
                            className="mb-5 text-sm font-medium text-stone-400 tracking-widest uppercase"
                        >
                            อานนท์ ชาตรี &nbsp;·&nbsp; โบ๊ท
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.42, duration: 0.6 }}
                            className="mb-8 flex flex-wrap gap-2"
                        >
                            {['AI Engineer', 'Robotics', 'Embedded Systems'].map((tag, i) => (
                                <span key={i} className="skill-badge text-[0.78rem]">{tag}</span>
                            ))}
                        </motion.div>

                        {/* Mobile photo */}
                        <div className="block lg:hidden mb-8 max-w-[280px] mx-auto sm:mx-0">
                            <ProfileImage />
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="mb-10 max-w-lg text-base leading-[1.8] text-stone-600"
                        >
                            Passionate about AI, robotics, and embedded systems.
                            Building ML pipelines, custom drones, and hardware–software solutions
                            that solve real‑world problems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap gap-3 mb-8"
                        >
                            <Link href="#projects" className="btn-primary">
                                View Projects
                                <FiArrowDown className="w-4 h-4" />
                            </Link>
                            <Link href="#contact" className="btn-secondary">
                                Get In Touch
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex gap-3"
                        >
                            {[
                                { href: 'https://github.com/Boatalon',                                       icon: <FiGithub className="w-5 h-5" />,   label: 'GitHub' },
                                { href: 'https://www.linkedin.com/in/อานนท์-ชาตรี-b5b894392/', icon: <FiLinkedin className="w-5 h-5" />, label: 'LinkedIn' },
                                { href: 'mailto:boat.arnonchatri@gmail.com',                                 icon: <FiMail className="w-5 h-5" />,     label: 'Email' },
                            ].map(s => (
                                <a
                                    key={s.label} href={s.href} aria-label={s.label}
                                    target={s.href.startsWith('http') ? '_blank' : undefined}
                                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl glass-effect
                                               text-amber-700 hover:text-amber-900 hover:border-amber-400/60
                                               hover:shadow-[0_4px_16px_rgba(217,119,6,0.2)]
                                               transition-all duration-200"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: static photo — desktop only */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <ProfileImage className="w-full max-w-[440px] xl:max-w-[520px] animate-float-slow" />
                    </motion.div>
                </div>

                {/* Scroll cue */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-stone-400"
                >
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em]">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-stone-400 to-transparent animate-float" />
                </motion.div>
            </div>

            {/* ── ABOUT ── */}
            <div id="about" className="relative bg-[#f5f1e8]">
                <div className="container mx-auto px-4 py-24 sm:px-8 lg:px-16">
                    <div className="mx-auto max-w-3xl">

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.5 }}
                            className="mb-4"
                        >
                            <span className="section-label">About Me</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}
                            className="mb-2 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl font-display"
                        >
                            Who I Am
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            viewport={{ once: true }} transition={{ delay: 0.18, duration: 0.5 }}
                            className="mb-10 text-lg font-medium text-amber-700"
                        >
                            เกี่ยวกับฉัน
                        </motion.p>

                        {/* Bio card */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: 0.22, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-10 glass-effect rounded-2xl p-7 space-y-4"
                        >
                            <p className="text-base leading-[1.85] text-stone-600">
                                Hello, my name is{' '}
                                <span className="font-semibold text-stone-800">Arnon Chatri</span>,
                                or you can call me{' '}
                                <span className="font-semibold text-amber-700">Boat</span>.
                                I have experience working with machine learning pipelines,
                                AI research, and embedded systems.
                            </p>
                            <p className="text-base leading-[1.85] text-stone-600">
                                I worked as a research assistant and co-authored a published research paper at{' '}
                                <span className="font-medium text-stone-700">Kasetsart University</span> with{' '}
                                <span className="font-medium text-stone-700">Team Sean</span> over two years.
                            </p>
                            <p className="text-base leading-[1.85] text-stone-600">
                                I also built and customised a drone prototype for the Faculty of Civil Engineering—
                                integrating AI computer vision end-to-end—which clarified my real interests and career direction.
                            </p>
                            <p className="text-base leading-[1.85] text-stone-600">
                                Looking for someone for{' '}
                                <span className="font-medium text-stone-700">control systems, ML pipelines, or hardware projects</span>?
                                I&apos;m deeply passionate about this field and would love to join your team.
                            </p>
                        </motion.div>

                        {/* Value cards */}
                        <div className="grid gap-4 sm:grid-cols-3">
                            <ValueCard index={0} icon={<FiCpu size={20} />}   title="AI & ML"             description="ML pipelines & production-ready AI models" />
                            <ValueCard index={1} icon={<FiTool size={20} />}  title="Hardware & Robotics" description="Drones, embedded systems, HW-SW integration" />
                            <ValueCard index={2} icon={<FiUsers size={20} />} title="Team Player"         description="2+ years on research & engineering teams" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroAboutSection;
