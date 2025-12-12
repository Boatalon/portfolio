// Hugging Face official logo SVG component (simplified)
export const HuggingFaceIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Face circle */}
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Left eye */}
        <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />

        {/* Right eye */}
        <circle cx="15.5" cy="10" r="1.5" fill="currentColor" />

        {/* Smile */}
        <path d="M7 14c0 2.8 2.2 5 5 5s5-2.2 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
);

export default HuggingFaceIcon;
