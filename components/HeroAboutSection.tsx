'use client';

import Link from 'next/link';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCpu, FiTool, FiUsers } from 'react-icons/fi';
import { useRef, useEffect, useState } from 'react';


const HeroAboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);


    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });


    const { scrollYProgress: aboutProgress } = useScroll({
        target: aboutRef,
        offset: ['start end', 'end start'],
    });


    const clampedHeroProgress = useTransform(heroProgress, (value) =>
        Math.min(Math.max(value, 0), 1)
    );


    const imageX = useTransform(
        clampedHeroProgress,
        [0, 0.1, 0.25, 0.4, 0.5, 1],
        ['0vw', '-10vw', '-25vw', '-42vw', '-50vw', '-50vw']
    );


    const imageY = useTransform(
        aboutProgress,
        [0, 0.3, 0.5, 0.7, 1],
        ['0vh', '-30vh', '-50vh', '-70vh', '-100vh']
    );


    const imageOpacity = useTransform(
        aboutProgress,
        [0, 0.55, 0.64, 0.7, 0.75, 1],
        [1, 1, 0.8, 0.2, 0, 0]
    );


    const imageTop = useTransform(
        clampedHeroProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        ['25vh', '35vh', '45vh', '55vh', '65vh', '65vh']
    );


    // Image layer portaled to body to escape stacking context issues
    const imageLayer = mounted ? createPortal(
        <div
            className="hidden lg:block fixed inset-0 pointer-events-none"
            style={{
                zIndex: 40,
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
            }}
            aria-hidden
        >
            <motion.div
                style={{
                    position: 'absolute',
                    top: imageTop,
                    right: '8vw',
                    x: imageX,
                    y: imageY,
                    opacity: imageOpacity,
                    willChange: 'transform, opacity',
                }}
                className="w-[500px] xl:w-[600px]"
            >
                <div className="relative">
                    <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-br from-amber-200/40 to-orange-200/40" />
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <Image
                            src="/profile.png"
                            alt="Arnon Chatri"
                            width={900}
                            height={1000}
                            className="h-auto w-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    ) : null;

    return (
        <>
            {imageLayer}

            <section
                ref={sectionRef}
                id="hero-about-combined"
                className="relative min-h-[200vh] bg-[#f5f1e8]"
            >
                <div
                    id="home"
                    ref={heroRef}
                    className="container mx-auto flex min-h-screen items-center px-4 sm:px-8 lg:px-16"
                >
                    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="mb-4 text-lg font-medium text-gray-800">Hello, I&apos;m</p>

                            <h1 className="mb-3 text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl">
                                Arnon Chatri
                            </h1>

                            <p className="mb-4 text-xl font-medium text-gray-700 sm:text-2xl">
                                <span className="text-amber-800">
                                    AI Engineer | Robotics | Embedded Systems
                                </span>
                            </p>

                            <p className="mb-8 text-lg text-gray-600">
                                อานนท์ ชาตรี | โบ๊ท
                            </p>


                            <div className="block lg:hidden mb-8 max-w-sm mx-auto">
                                <div className="relative">
                                    <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-br from-amber-200/40 to-orange-200/40" />
                                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                        <Image
                                            src="/profile.png"
                                            alt="Arnon Chatri"
                                            width={500}
                                            height={555}
                                            className="h-auto w-full object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-700">
                                Passionate about AI, robotics, and embedded systems.
                                Building ML pipelines, custom drones, and hardware-software solutions that solve real-world problems.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#projects"
                                    className="rounded-xl bg-amber-700 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900"
                                >
                                    View Projects
                                </Link>

                                <Link
                                    href="#contact"
                                    className="rounded-xl glass-effect backdrop-blur-md px-8 py-3 font-semibold text-gray-800 shadow-lg transition hover:shadow-xl hover:scale-105"
                                >
                                    Contact Me
                                </Link>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <a aria-label="GitHub profile" className="rounded-lg glass-effect p-3 shadow-md text-amber-700 hover:text-amber-800 hover:shadow-lg transition-all" href="https://github.com/Boatalon" target="_blank" rel="noopener noreferrer">
                                    <FiGithub className="h-6 w-6" />
                                </a>
                                <a aria-label="LinkedIn profile" className="rounded-lg glass-effect p-3 shadow-md text-amber-700 hover:text-amber-800 hover:shadow-lg transition-all" href="https://www.linkedin.com/in/อานนท์-ชาตรี-b5b894392/" target="_blank" rel="noopener noreferrer">
                                    <FiLinkedin className="h-6 w-6" />
                                </a>
                                <a aria-label="Email Arnon Chatri" className="rounded-lg glass-effect p-3 shadow-md text-amber-700 hover:text-amber-800 hover:shadow-lg transition-all" href="mailto:boat.arnonchatri@gmail.com">
                                    <FiMail className="h-6 w-6" />
                                </a>
                            </div>
                        </motion.div>


                        <div className="hidden lg:block" />
                    </div>
                </div>
                <div id="about" ref={aboutRef} className="relative min-h-screen bg-[#f5f1e8]">
                    <div className="container mx-auto px-4 py-24 sm:px-8 lg:px-16">
                        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 lg:grid-cols-2">
                            <div className="hidden lg:block" />

                            <div>
                                <h2 className="mb-2 text-4xl font-bold text-gray-800 sm:text-5xl">
                                    About Me
                                </h2>
                                <p className="mb-8 text-xl font-semibold text-amber-700">
                                    เกี่ยวกับฉัน
                                </p>

                                <div className="mb-8 rounded-2xl glass-effect p-8 shadow-sm space-y-4">
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        Hello, my name is <span className="font-semibold text-gray-800">Arnon Chatri</span>, or you can call me <span className="font-semibold text-amber-700">Boat</span>. I have experience working with machine learning pipelines, AI research, and embedded systems.
                                    </p>
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        I worked as a research assistant on a university project and contributed to a published research paper at <span className="font-medium">Kasetsart University</span>. My team is called <span className="font-medium">Team Sean</span>, and I have been working with this team for about two years.
                                    </p>
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        I also had the opportunity to work on a drone project for the Faculty of Civil Engineering, where AI was an important part of the system. I built and customized the drone prototype myself until it was fully functional. This experience helped me discover my real interests and career direction.
                                    </p>
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        If you are looking for someone to work on <span className="font-medium">control systems, system integration, ML pipelines, and hardware-related projects</span> I am very passionate about this field and would love the opportunity to join your team.
                                    </p>
                                </div>


                                <div className="relative">
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        <div className="relative">
                                            <ValueCard icon={<FiCpu />} title="AI & ML" description="ML pipelines and production-ready AI models" />

                                            <div className="hidden lg:block absolute top-0 right-0 translate-x-3 h-full w-px bg-gradient-to-b from-transparent via-amber-600 to-transparent"></div>
                                        </div>
                                        <div className="relative">
                                            <ValueCard icon={<FiTool />} title="Hardware & Robotics" description="Drones, embedded systems, and HW-SW integration" />

                                            <div className="hidden lg:block absolute top-0 right-0 translate-x-3 h-full w-px bg-gradient-to-b from-transparent via-amber-600 to-transparent"></div>
                                        </div>
                                        <ValueCard icon={<FiUsers />} title="Team Player" description="2+ years on research and engineering teams" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="rounded-xl glass-effect p-5 shadow-md transition hover:shadow-xl h-full flex flex-col">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 text-orange-600">
            {icon}
        </div>
        <h3 className="mb-1 text-base font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

export default HeroAboutSection;
