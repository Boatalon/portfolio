// Hugging Face logo with hands 🤗
export const HuggingFaceIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Face circle */}
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Left eye */}
        <circle cx="9.5" cy="11" r="1.2" fill="currentColor" />

        {/* Right eye */}
        <circle cx="14.5" cy="11" r="1.2" fill="currentColor" />

        {/* Smile */}
        <path d="M8.5 14c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />


        {/* Left hand */}
        <path d="M2 21c1-1.5 2-2.5 3.5-3 1.5-.5 2 .5 2 1.5" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Right hand */}
        <path d="M22 21c-1-1.5-2-2.5-3.5-3-1.5-.5-2 .5-2 1.5" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default HuggingFaceIcon;
