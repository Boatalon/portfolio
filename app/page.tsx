'use client';

import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CVSection from '@/components/CVSection';
import ContactSection from '@/components/ContactSection';
import FeatureProjectsSlider from '@/components/FeatureProjectsSlider';
import { featuredProjects } from '@/lib/projects';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section id="home">
                <Hero />
            </section>

            {/* About Section */}
            <AboutSection />

            {/* Featured Projects Section - Full Page Slider */}
            <section id="projects" className="relative">
                <FeatureProjectsSlider projects={featuredProjects} />
            </section>

            {/* CV Section */}
            <CVSection />

            {/* Contact Section */}
            <ContactSection />
        </>
    );
}
