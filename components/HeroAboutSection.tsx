'use client';

import Link from 'next/link';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiBriefcase, FiAward } from 'react-icons/fi';
import { useRef, useEffect, useState } from 'react';

/**
 * Combined Hero + About Section
 *
 * Clean Architecture:
 * - Fixed image lives in its own visual layer (portaled to body)
 * - Scroll animation is driven ONLY by Hero section
 * - Image position is "frozen" when About section is reached
 * - Uses manual clamping for precise control
 */
const HeroAboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    // Portal mount check (client-side only)
    useEffect(() => {
        setMounted(true);
    }, []);

    /**
     * Scroll progress for Hero section (controls horizontal movement)
     * 0 -> Hero top
     * 1 -> Hero fully scrolled out
     */
    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    /**
     * Scroll progress for About section (controls vertical movement)
     * 0 -> About section starts coming into view
     * 1 -> About section fully scrolled out
     */
    const { scrollYProgress: aboutProgress } = useScroll({
        target: aboutRef,
        offset: ['start end', 'end start'],
    });

    /**
     * Image horizontal movement (during Hero section)
     * Clamps progress between 0 and 1 for strict boundaries
     */
    const clampedHeroProgress = useTransform(heroProgress, (value) =>
        Math.min(Math.max(value, 0), 1)
    );

    const imageX = useTransform(
        clampedHeroProgress,
        [0, 0.5, 0.8],
        ['0vw', '-20vw', '-50vw']
    );

    /**
     * Image vertical movement (during and after About section)
     * Faster transition for quicker About Me appearance
     */
    const imageY = useTransform(
        aboutProgress,
        [0, 0.25, 0.45, 0.8],
        ['0vh', '0vh', '-35vh', '-100vh']
    );

    /**
     * Image opacity (fade out as it scrolls up)
     */
    const imageOpacity = useTransform(
        aboutProgress,
        [0, 0.35, 0.6, 0.85],
        [1, 1, 0.5, 0]
    );

    /**
     * Image top position - starts higher in Hero, moves down in About section
     * Hero: 20vh -> About: 28vh
     */
    const imageTop = useTransform(
        clampedHeroProgress,
        [0, 0.3, 0.5],
        ['20vh', '24vh', '55vh']
    );


    // Image layer portaled to body to escape stacking context issues
    const imageLayer = mounted ? createPortal(
        <div
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex: 40, // Lower than navbar (z-50) so image doesn't overlap
                // GPU acceleration on container (not on animated element)
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
                className="w-[400px] sm:w-[450px] lg:w-[520px] xl:w-[560px]"
            >
                <div className="relative">
                    <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-br from-amber-200/40 to-orange-200/40" />
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <Image
                            src="/profile.png"
                            alt="Arnon Chatri"
                            width={800}
                            height={900}
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
                {/* =========================
              HERO SECTION
              ========================= */}
                <div
                    id="home"
                    ref={heroRef}
                    className="container mx-auto flex min-h-screen items-center px-4 sm:px-8 lg:px-16"
                >
                    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        {/* Text */}
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
                                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                    Machine Learning Engineer
                                </span>
                            </p>

                            <p className="mb-8 text-lg text-gray-600">
                                อานนท์ จัตรี | โบ๊ท
                            </p>

                            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-700">
                                Passionate about pushing the boundaries of Computer Vision and Deep Learning.
                                Building production-ready AI systems that solve real problems and create meaningful impact.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#projects"
                                    className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:from-amber-600 hover:to-orange-600"
                                >
                                    View Projects
                                </Link>

                                <Link
                                    href="#contact"
                                    className="rounded-xl border-2 border-gray-200 bg-white/80 px-8 py-3 font-semibold text-gray-800 shadow-md backdrop-blur transition hover:bg-white"
                                >
                                    Contact Me
                                </Link>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <a className="rounded-lg bg-white/80 p-3 shadow-md" href="#">
                                    <FiGithub className="h-6 w-6" />
                                </a>
                                <a className="rounded-lg bg-white/80 p-3 shadow-md" href="#">
                                    <FiLinkedin className="h-6 w-6" />
                                </a>
                                <a className="rounded-lg bg-white/80 p-3 shadow-md" href="#">
                                    <FiMail className="h-6 w-6" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Spacer column */}
                        <div className="hidden lg:block" />
                    </div>
                </div>

                {/* =========================
              ABOUT SECTION
              ========================= */}
                <div id="about" ref={aboutRef} className="relative min-h-screen bg-[#f5f1e8]">
                    <div className="container mx-auto px-4 py-24 sm:px-8 lg:px-16">
                        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
                            <div className="hidden lg:block" />

                            <div>
                                <h2 className="mb-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                                    About Me
                                </h2>
                                <p className="mb-8 text-xl font-semibold text-orange-600">
                                    เกี่ยวกับฉัน
                                </p>

                                <div className="mb-8 rounded-2xl bg-gray-50 p-8 shadow-sm">
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        I'm a Machine Learning Engineer focused on Computer Vision and
                                        Deep Learning, combining strong theory with real-world
                                        production experience to deliver meaningful impact.
                                    </p>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    <ValueCard icon={<FiCode />} title="Clean Code" />
                                    <ValueCard icon={<FiBriefcase />} title="Real Impact" />
                                    <ValueCard icon={<FiAward />} title="Innovation" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const ValueCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 text-orange-600">
            {icon}
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">Writing scalable, production-ready solutions</p>
    </div>
);

export default HeroAboutSection;
