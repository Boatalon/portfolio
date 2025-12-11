'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface TranscriptModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TranscriptModal = ({ isOpen, onClose }: TranscriptModalProps) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="sticky top-4 right-4 ml-auto flex items-center justify-center w-10 h-10 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors shadow-lg z-10"
                    aria-label="Close modal"
                >
                    <FiX size={24} />
                </button>

                {/* Transcript Image */}
                <div className="p-6 pt-0">
                    <Image
                        src="/transcript.png"
                        alt="Academic Transcript - Kasetsart University"
                        width={1200}
                        height={1600}
                        className="w-full h-auto rounded-lg"
                        priority
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TranscriptModal;
