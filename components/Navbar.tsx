'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { href: 'home',     label: 'Home' },
    { href: 'about',    label: 'About' },
    { href: 'projects', label: 'Projects' },
    { href: 'cv',       label: 'CV' },
    { href: 'contact',  label: 'Contact' },
];

const Navbar = () => {
    const [isScrolled,       setIsScrolled]       = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection,    setActiveSection]    = useState('home');
    const [isNavbarHovered,  setIsNavbarHovered]  = useState(false);
    const [showNavbar,       setShowNavbar]       = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setIsScrolled(y > 20);

            if (y > lastScrollY.current && y > 100) setShowNavbar(false);
            else if (y < lastScrollY.current)        setShowNavbar(true);
            lastScrollY.current = y;

            const sections = navLinks.map(l => l.href);
            const scrollPos = y + 160;
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop, bot = top + el.offsetHeight;
                    if (scrollPos >= top && scrollPos < bot) { setActiveSection(id); break; }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    const visible = showNavbar || isNavbarHovered;

    return (
        <>
            {/* invisible hover trigger strip */}
            <div
                className="fixed top-0 left-0 right-0 h-4 z-[60]"
                onMouseEnter={() => setIsNavbarHovered(true)}
            />

            <motion.nav
                onMouseEnter={() => setIsNavbarHovered(true)}
                onMouseLeave={() => setIsNavbarHovered(false)}
                animate={{ y: visible ? 0 : '-100%' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center
                    ${isScrolled
                        ? 'bg-[rgba(255,251,245,0.88)] backdrop-blur-2xl border-b border-[rgba(217,119,6,0.14)] shadow-[0_2px_24px_rgba(120,53,15,0.07)]'
                        : 'bg-transparent'
                    }
                    transition-[background,border-color,box-shadow] duration-500`}
            >
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="flex items-center justify-between">

                        {/* Logo / monogram */}
                        <button
                            onClick={() => scrollToSection('home')}
                            className="hidden md:flex items-center gap-2.5 group cursor-pointer"
                            aria-label="Go to top"
                        >
                            {/* monogram badge */}
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-md group-hover:shadow-amber-300/40 transition-shadow duration-300">
                                <span className="text-white font-bold text-sm tracking-tight font-display leading-none">AC</span>
                            </div>
                            <span className="text-[0.95rem] font-bold text-stone-800 group-hover:text-amber-800 transition-colors duration-200 font-display tracking-tight">
                                Arnon Chatri
                            </span>
                        </button>

                        {/* Mobile spacer */}
                        <div className="md:hidden flex-grow" />

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map(link => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                                        ${activeSection === link.href
                                            ? 'text-amber-900 bg-amber-100/80'
                                            : 'text-stone-600 hover:text-amber-800 hover:bg-amber-50'
                                        }`}
                                >
                                    {link.label}
                                    {activeSection === link.href && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute inset-0 rounded-full bg-amber-100/80 -z-10"
                                            transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-stone-800 hover:bg-amber-50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isMobileMenuOpen ? 'close' : 'open'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>

                    {/* Mobile dropdown */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                id="mobile-navigation"
                                initial={{ opacity: 0, y: -12, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -12, scale: 0.96 }}
                                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                                className="md:hidden mt-3 mb-2 glass-strong rounded-2xl p-3 overflow-hidden"
                            >
                                {navLinks.map((link, i) => (
                                    <motion.button
                                        key={link.href}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04, duration: 0.2 }}
                                        onClick={() => scrollToSection(link.href)}
                                        className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium
                                            ${activeSection === link.href
                                                ? 'bg-amber-100 text-amber-900 font-semibold'
                                                : 'text-stone-700 hover:bg-amber-50 hover:text-amber-800'
                                            }`}
                                    >
                                        {link.label}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </>
    );
};

export default Navbar;
