import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
    title: 'Portfolio | Boat Arnon Chatri',
    description: 'Portfolio showcasing Machine Learning, Computer Vision, and Web Development projects including Sign Language Translation and Object Detection systems.',
    keywords: ['Machine Learning', 'Computer Vision', 'Deep Learning', 'Portfolio', 'AI', 'Developer', 'Boat', 'Arnon Chatri', 'intern ship', 'Boat portfolio website', 'Boat portfolio'],
    authors: [{ name: 'Arnon Chatri' }],
    openGraph: {
        title: 'Portfolio | Boat Arnon Chatri',
        description: 'Portfolio showcasing Machine Learning, Computer Vision, and Web Development projects including Sign Language Translation and Object Detection systems.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="font-sans">
                <Navbar />
                <main>{children}</main>
                <Footer />
                <SpeedInsights />
            </body>
        </html>
    );
}
