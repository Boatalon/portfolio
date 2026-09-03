'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload, FiX } from 'react-icons/fi';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/75 p-4 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) onClose();
                    }}
                >
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="resume-modal-title"
                        className="relative flex h-[min(90vh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#f5f1e8] shadow-2xl"
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                    >
                        <header className="flex items-center justify-between border-b border-amber-900/15 px-5 py-4 sm:px-7">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">Professional profile</p>
                                <h2 id="resume-modal-title" className="mt-1 text-xl font-bold text-stone-900 sm:text-2xl">Arnon Chatri — Résumé</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <a
                                    href="/Arnon-Chatri-Resume.pdf"
                                    download="Arnon-Chatri-Resume.pdf"
                                    className="hidden items-center gap-2 rounded-lg border border-amber-900/20 px-3 py-2 text-sm font-semibold text-amber-900 transition hover:bg-amber-900/10 sm:inline-flex"
                                >
                                    <FiDownload aria-hidden="true" />
                                    Download
                                </a>
                                <button
                                    ref={closeButtonRef}
                                    type="button"
                                    onClick={onClose}
                                    aria-label="Close résumé"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-900 text-white transition hover:bg-amber-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-950"
                                >
                                    <FiX aria-hidden="true" size={20} />
                                </button>
                            </div>
                        </header>
                        <div className="min-h-0 flex-1 bg-stone-200 p-2 sm:p-4">
                            <iframe
                                src="/Arnon-Chatri-Resume.pdf#view=FitH"
                                title="Arnon Chatri résumé"
                                className="h-full w-full rounded-lg border-0 bg-white"
                            />
                        </div>
                        <div className="flex items-center justify-between border-t border-amber-900/15 px-5 py-3 sm:px-7">
                            <p className="text-xs text-stone-600">Press Esc or close to return to the portfolio.</p>
                            <a
                                href="/Arnon-Chatri-Resume.pdf"
                                download="Arnon-Chatri-Resume.pdf"
                                className="inline-flex items-center gap-2 rounded-lg bg-amber-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-950 sm:hidden"
                            >
                                <FiDownload aria-hidden="true" />
                                Download
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
