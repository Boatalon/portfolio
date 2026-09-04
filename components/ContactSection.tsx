'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle, FiMessageCircle,
} from 'react-icons/fi';
import HuggingFaceIcon from '@/components/icons/HuggingFaceIcon';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('https://formspree.io/f/xeoyvojr', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _replyto: formData.email,
                    _subject: `Portfolio Contact from ${formData.name}`,
                }),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const socials = [
        {
            href: 'https://huggingface.co/Boatarnonchatri',
            icon: <HuggingFaceIcon className="w-5 h-5" />,
            label: 'Hugging Face',
            handle: '@Boatarnonchatri',
        },
        {
            href: 'https://github.com/Boatalon',
            icon: <FiGithub size={20} />,
            label: 'GitHub',
            handle: '@Boatalon',
        },
        {
            href: 'https://www.linkedin.com/in/อานนท์-ชาตรี-b5b894392/',
            icon: <FiLinkedin size={20} />,
            label: 'LinkedIn',
            handle: 'Arnon Chatri',
        },
    ];

    return (
        <section id="contact" className="py-28 px-4 relative bg-[#f5f1e8] overflow-hidden">
            <div className="section-divider" />

            {/* Background orbs */}
            <div className="pointer-events-none absolute top-0 right-0 w-[28rem] h-[28rem] rounded-full bg-amber-200/15 blur-3xl -translate-y-1/2" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-orange-200/15 blur-3xl translate-y-1/3" />

            <div className="container mx-auto max-w-5xl relative">

                {/* Header */}
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <span className="section-label mb-5 inline-flex">Contact</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 font-display">
                            Get In{' '}
                            <span className="gradient-text">Touch</span>
                        </h2>
                        <p className="mt-3 text-lg text-stone-500">
                            ติดต่อฉัน &mdash; Let&apos;s work together!
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* ── Form ── */}
                    <AnimatedSection>
                        <div className="glass-effect rounded-2xl p-8 h-full">
                            <div className="flex items-center gap-2.5 mb-2">
                                <FiMessageCircle className="text-amber-600" size={20} />
                                <h3 className="text-xl font-bold text-stone-900">Send a Message</h3>
                            </div>
                            <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                                Your message goes straight to{' '}
                                <span className="font-semibold text-amber-700">boat.arnonchatri@gmail.com</span>
                            </p>

                            {/* Status banners */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                                    role="status" aria-live="polite"
                                    className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-3 text-amber-800"
                                >
                                    <FiCheck size={18} className="flex-shrink-0" />
                                    <p className="text-sm font-medium">Message sent! I&apos;ll get back to you soon.</p>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                                    role="alert" aria-live="assertive"
                                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700"
                                >
                                    <FiAlertCircle size={18} className="flex-shrink-0" />
                                    <p className="text-sm font-medium">Failed to send. Please email me directly.</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold mb-1.5 text-stone-700">
                                        Name
                                    </label>
                                    <input
                                        type="text" id="name" name="name"
                                        value={formData.name} onChange={handleChange}
                                        required disabled={status === 'loading'}
                                        className="form-input" placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold mb-1.5 text-stone-700">
                                        Email
                                    </label>
                                    <input
                                        type="email" id="email" name="email"
                                        value={formData.email} onChange={handleChange}
                                        required disabled={status === 'loading'}
                                        className="form-input" placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold mb-1.5 text-stone-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message" name="message"
                                        value={formData.message} onChange={handleChange}
                                        required rows={5} disabled={status === 'loading'}
                                        className="form-input resize-none" placeholder="Your message…"
                                    />
                                </div>
                                <button
                                    type="submit" disabled={status === 'loading'}
                                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            <FiSend size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </AnimatedSection>

                    {/* ── Contact Info ── */}
                    <AnimatedSection>
                        <div className="flex flex-col gap-6 h-full">

                            {/* Social links */}
                            <div className="glass-effect rounded-2xl p-8 flex-1">
                                <h3 className="text-xl font-bold mb-6 text-stone-900">Find me on</h3>
                                <div className="space-y-4">
                                    {socials.map(s => (
                                        <a
                                            key={s.label}
                                            href={s.href}
                                            target="_blank" rel="noopener noreferrer"
                                            className="contact-row flex items-center gap-4 group transition-all duration-250"
                                        >
                                            <div className="contact-icon-wrap text-amber-700">
                                                {s.icon}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-stone-800 group-hover:text-amber-800 transition-colors text-sm">{s.label}</p>
                                                <p className="text-xs text-stone-500 mt-0.5">{s.handle}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* CTA card */}
                            <div className="glass-effect rounded-2xl p-6 bg-gradient-to-br from-amber-50/80 to-orange-50/60">
                                <h4 className="text-base font-bold mb-2 text-stone-900">Let&apos;s Collaborate!</h4>
                                <p className="text-sm text-stone-600 leading-relaxed">
                                    Always interested in new projects and opportunities.
                                    Whether it&apos;s collaborating on a project or bringing ML expertise —
                                    feel free to reach out!
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
