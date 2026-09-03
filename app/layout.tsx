import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://arnonchatri.com'),
    title: 'Boat Arnon Chatri | AI & Computer Vision Engineer',
    description: 'I am an engineering student at Kasetsart University with a strong passion for AI, Robotics, and Computer Vision. I build systems that connect the physical world.',
    keywords: ['Arnon Chatri', 'Boat Arnon Chatri', 'AI Engineer', 'Computer Vision', 'Robotics', 'Embedded Systems', 'Machine Learning'],
    authors: [{ name: 'Arnon Chatri' }],
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Boat Arnon Chatri | AI & Computer Vision Engineer',
        description: 'I am an engineering student at Kasetsart University with a strong passion for AI, Robotics, and Computer Vision.',
        type: 'website',
        url: '/',
        siteName: 'Arnon Chatri Portfolio',
        images: [{ url: '/profile.png', alt: 'Arnon Chatri' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Boat Arnon Chatri | AI & Computer Vision Engineer',
        description: 'I am an engineering student at Kasetsart University with a strong passion for AI, Robotics, and Computer Vision.',
        images: ['/profile.png'],
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Arnon Chatri',
                            alternateName: 'Boat Arnon Chatri',
                            url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://arnonchatri.com',
                            jobTitle: 'AI, Robotics & Computer Vision Engineer',
                            sameAs: [
                                'https://github.com/Boatalon',
                                'https://www.linkedin.com/in/อานนท์-ชาตรี-b5b894392/',
                                'https://huggingface.co/Boatalon',
                            ],
                        }),
                    }}
                />
                <Navbar />
                <main>{children}</main>
                <Footer />
                <SpeedInsights />
            </body>
        </html>
    );
}
