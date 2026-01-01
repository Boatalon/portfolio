'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    const navLinks = [
        { href: 'home', label: 'Home' },
        { href: 'about', label: 'About' },
        { href: 'projects', label: 'Projects' },
        { href: 'cv', label: 'CV' },
        { href: 'contact', label: 'Contact' },
    ];

    useEffect(() => {


        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Update isScrolled
            setIsScrolled(currentScrollY > 20);

            // Detect scroll direction
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                // Scrolling down & past threshold
                setShowNavbar(false);
            } else if (currentScrollY < lastScrollY.current) {
                // Scrolling up
                setShowNavbar(true);
            }

            lastScrollY.current = currentScrollY;

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
        <>
            {/* Invisible hover trigger area - Always present at top to catch mouse */}
            <div
                className="fixed top-0 left-0 right-0 h-6 z-50"
                onMouseEnter={() => setIsNavbarHovered(true)}
            />

            {/* Navbar */}
            <nav
                onMouseEnter={() => setIsNavbarHovered(true)}
                onMouseLeave={() => setIsNavbarHovered(false)}
                className={`!fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-transform duration-500 ease-in-out ${isScrolled ? 'glass-effect shadow-2xl shadow-amber-600/10' : 'bg-transparent'
                    } ${isScrolled && !showNavbar && !isNavbarHovered ? '-translate-y-full' : 'translate-y-0'}`}
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
                                        ? 'text-gray-900 font-semibold'
                                        : 'bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent hover:from-amber-700 hover:to-orange-600'
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 transition-all duration-300 ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    ></span>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-900 text-2xl"
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
                                        ? 'text-gray-900 font-semibold'
                                        : 'bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
