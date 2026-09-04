'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FiGithub,    href: 'https://github.com/Boatalon',                                        label: 'GitHub' },
        { icon: FiLinkedin,  href: 'https://www.linkedin.com/in/อานนท์-ชาตรี-b5b894392/',              label: 'LinkedIn' },
        { icon: FiInstagram, href: 'https://www.instagram.com/elbr0_/',                                  label: 'Instagram' },
    ];

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="relative bg-[#ede5d0] border-t border-[rgba(217,119,6,0.15)] overflow-hidden">
            {/* Top decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

            {/* Background grain */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="container mx-auto px-4 py-14 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-sm">
                                <span className="text-white font-bold text-xs font-display">AC</span>
                            </div>
                            <span className="text-base font-bold text-stone-800 font-display tracking-tight">Arnon Chatri</span>
                        </div>
                        <p className="text-sm text-stone-500 leading-relaxed max-w-[220px]">
                            Building innovative solutions with AI, robotics, and embedded systems.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-sm font-bold text-stone-700 uppercase tracking-[0.1em] mb-4">Navigation</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {['home', 'about', 'projects', 'cv', 'contact'].map(id => (
                                <button
                                    key={id}
                                    onClick={() => {
                                        const el = document.getElementById(id);
                                        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                                    }}
                                    className="text-sm text-stone-500 hover:text-amber-700 transition-colors text-left capitalize"
                                >
                                    {id}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Social + back-to-top */}
                    <div>
                        <h4 className="text-sm font-bold text-stone-700 uppercase tracking-[0.1em] mb-4">Connect</h4>
                        <div className="flex gap-3 mb-6">
                            {socialLinks.map(s => (
                                <Link
                                    key={s.label}
                                    href={s.href}
                                    target="_blank" rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-9 h-9 flex items-center justify-center rounded-lg glass-effect
                                               text-stone-600 hover:text-amber-700 hover:border-amber-400/60
                                               hover:shadow-[0_2px_12px_rgba(217,119,6,0.2)]
                                               transition-all duration-200"
                                >
                                    <s.icon size={17} />
                                </Link>
                            ))}
                        </div>

                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-sm font-medium text-amber-700
                                       hover:text-amber-900 transition-colors group"
                        >
                            <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-amber-100 border border-amber-200/70
                                            group-hover:bg-amber-200 transition-colors">
                                <FiArrowUp size={14} />
                            </div>
                            Back to top
                        </motion.button>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-[rgba(217,119,6,0.12)] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-stone-400">
                        &copy; {currentYear} Arnon Chatri. All rights reserved.
                    </p>
                    <p className="text-xs text-stone-400">
                        Built with Next.js · Deployed on Cloudflare Pages
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
