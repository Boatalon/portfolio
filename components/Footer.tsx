'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/Boatalon', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/อานนท์-ชาตรี-b5b894392/', label: 'LinkedIn' },
        // { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
        { icon: FiMail, href: 'mailto:boat.arnonchatri@gmail.com', label: 'Email' },
        { icon: FiInstagram, href: 'https://www.instagram.com/elbr0_/', label: 'Instagram' },
    ];

    return (
        <footer className="glass-effect mt-20 border-t border-stone-200">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4 font-display">
                            Portfolio
                        </h3>
                        <p className="text-stone-600">
                            Building innovative solutions with AI and Machine Learning.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-stone-600 hover:text-stone-800 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-stone-600 hover:text-stone-800 transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-stone-600 hover:text-stone-800 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center glass-effect rounded-lg hover:bg-stone-200 hover:border-stone-300 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="text-xl" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-stone-200 text-center text-stone-500">
                    <p>&copy; {currentYear} Arnon Chatri. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
