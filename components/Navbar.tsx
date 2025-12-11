'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { href: 'home', label: 'Home' },
        { href: 'about', label: 'About' },
        { href: 'projects', label: 'Projects' },
        { href: 'cv', label: 'CV' },
        { href: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Scroll spy - detect which section is in view
            const sections = navLinks.map(link => link.href);
            const scrollPosition = window.scrollY + 150;

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass-effect shadow-2xl shadow-purple-500/10 py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-2xl font-bold gradient-text font-display cursor-pointer"
                    >
                        Portfolio
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className={`relative group transition-colors duration-200 ${activeSection === link.href
                                        ? 'text-white font-semibold'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                ></span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 glass-effect rounded-lg p-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className={`block w-full text-left py-3 transition-colors duration-200 ${activeSection === link.href
                                        ? 'text-white font-semibold'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
