'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
        <section id="contact" className="py-24 px-4 relative">
            {/* Decorative border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>

            <div className="container mx-auto max-w-5xl">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
                            Get In Touch
                        </h2>
                        <p className="text-xl text-stone-500">
                            ติดต่อฉัน - Let&apos;s work together!
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <AnimatedSection>
                        <div className="bg-white border-2 border-stone-200 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-stone-900">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-stone-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 transition-colors text-stone-900"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-stone-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 transition-colors text-stone-900"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-stone-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-stone-50 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 transition-colors resize-none text-stone-900"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-4 bg-gradient-to-br from-stone-800 to-stone-900 text-white rounded-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
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
                            <div className="bg-white border-2 border-stone-200 rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold mb-6 text-stone-900">Contact Information</h3>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:boat.arnonchatri@gmail.com"
                                        className="flex items-center gap-4 text-stone-700 hover:text-stone-900 transition-colors group"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-stone-100 border-2 border-stone-200 rounded-lg group-hover:bg-stone-200 transition-colors">
                                            <FiMail className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Email</p>
                                            <p className="text-sm text-stone-500">boat.arnonchatri@gmail.com</p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://github.com/Boatalon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-stone-700 hover:text-stone-900 transition-colors group"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-stone-100 border-2 border-stone-200 rounded-lg group-hover:bg-stone-200 transition-colors">
                                            <FiGithub className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">GitHub</p>
                                            <p className="text-sm text-stone-500">@Boatalon</p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/อานนท์-ชาตรี-b5b894392/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-stone-700 hover:text-stone-900 transition-colors group"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-stone-100 border-2 border-stone-200 rounded-lg group-hover:bg-stone-200 transition-colors">
                                            <FiLinkedin className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">LinkedIn</p>
                                            <p className="text-sm text-stone-500">Arnon Chatri</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white to-stone-50 border-2 border-stone-200 rounded-2xl p-8 shadow-lg">
                                <h4 className="text-xl font-bold mb-4 text-stone-900">Let&apos;s Collaborate!</h4>
                                <p className="text-stone-600">
                                    I&apos;m always interested in hearing about new projects and opportunities.
                                    Whether you&apos;re looking to collaborate on a project, need ML expertise, feel free to reach out!
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
