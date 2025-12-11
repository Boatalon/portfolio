'use client';

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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gray-900 border border-purple-500/30 rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl shadow-purple-500/20"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button - Fixed position */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 z-20"
                    aria-label="Close modal"
                >
                    <FiX size={24} />
                </button>

                {/* Content Container with scroll */}
                <div className="p-6 overflow-y-auto max-h-[95vh]">
                    {/* Download button - left aligned */}
                    <div className="flex justify-start mb-4 pr-16">
                        <a
                            href="/Transcript.pdf"
                            download="Arnon_Chatri_Transcript.pdf"
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download PDF
                        </a>
                    </div>

                    {/* PDF Viewer - using actual PDF file */}
                    <div className="w-full bg-white rounded-lg overflow-hidden shadow-inner">
                        <iframe
                            src="/Transcript.pdf#zoom=100"
                            className="w-full h-[75vh] border-0"
                            title="Academic Transcript - Kasetsart University"
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TranscriptModal;
