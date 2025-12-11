'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic (e.g., EmailJS, API endpoint)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display">
                            Get In <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            ติดต่อฉัน - Let's work together!
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <AnimatedSection>
                        <div className="glass-effect rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="Arnon Chatri"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="boat.arnonchatri@gmail.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <FiSend />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </AnimatedSection>

                    {/* Contact Info */}
                    <AnimatedSection>
                        <div className="space-y-6">
                            <div className="glass-effect rounded-xl p-8">
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:boat.arnonchatri@gmail.com"
                                        className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center glass-effect rounded-lg group-hover:bg-primary-500/20">
                                            <FiMail className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Email</p>
                                            <p className="text-sm text-gray-400">boat.arnonchatri@gmail.com</p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://github.com/Boatalon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center glass-effect rounded-lg group-hover:bg-primary-500/20">
                                            <FiGithub className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">GitHub</p>
                                            <p className="text-sm text-gray-400">@Boatalon</p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/อานนท์-ชาตรี-b5b894392/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center glass-effect rounded-lg group-hover:bg-primary-500/20">
                                            <FiLinkedin className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">LinkedIn</p>
                                            <p className="text-sm text-gray-400">@อานนท์ ชาตรี</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="glass-effect rounded-xl p-8">
                                <h3 className="text-xl font-bold mb-4">Let&apos;s Collaborate!</h3>
                                <p className="text-gray-300">
                                    I&apos;m always interested in hearing about new projects and opportunities.
                                    Whether you&apos;re looking to collaborate on a project, need ML expertise, feel free to reach out!
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
}
