'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { SiHuggingface } from 'react-icons/si';


const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://formspree.io/f/xeoyvojr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _replyto: formData.email,
                    _subject: `Portfolio Contact from ${formData.name}`,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-gradient-to-b from-black to-gray-900">
            {/* Decorative border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

            <div className="container mx-auto max-w-5xl">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Get In Touch
                        </h2>
                        <p className="text-xl text-gray-400">
                            ติดต่อฉัน - Let&apos;s work together!
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <AnimatedSection>
                        <div className="glass-effect border border-purple-500/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-4 text-white">Send a Message</h3>
                            <p className="text-sm text-gray-400 mb-6">
                                Fill out the form below to send me a message directly to <span className="text-purple-400 font-semibold">boat.arnonchatri@gmail.com</span>
                            </p>

                            {status === 'success' && (
                                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3 text-green-400">
                                    <FiCheck className="text-xl flex-shrink-0" />
                                    <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-400">
                                    <FiAlertCircle className="text-xl flex-shrink-0" />
                                    <p className="text-sm">Failed to send message. Please try again or email me directly.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500 disabled:opacity-50"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500 disabled:opacity-50"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        disabled={status === 'loading'}
                                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none text-white placeholder-gray-500 disabled:opacity-50"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </AnimatedSection>

                    {/* Contact Info */}
                    <AnimatedSection>
                        <div className="space-y-6">
                            <div className="glass-effect border border-purple-500/20 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                                <div className="space-y-4">
                                    <a
                                        href="https://huggingface.co/Boatarnonchatri"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-purple-500/30 rounded-lg group-hover:bg-white/10 group-hover:border-purple-500 transition-all">
                                            <SiHuggingface className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Hugging Face</p>
                                            <p className="text-sm text-gray-400">@Boatarnonchatri</p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://github.com/Boatalon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-purple-500/30 rounded-lg group-hover:bg-white/10 group-hover:border-purple-500 transition-all">
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
                                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-purple-500/30 rounded-lg group-hover:bg-white/10 group-hover:border-purple-500 transition-all">
                                            <FiLinkedin className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">LinkedIn</p>
                                            <p className="text-sm text-gray-400">Arnon Chatri</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="glass-effect border border-purple-500/20 rounded-2xl p-8">
                                <h4 className="text-xl font-bold mb-4 text-white">Let&apos;s Collaborate!</h4>
                                <p className="text-gray-300">
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
