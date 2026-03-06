'use client';

import HeroAboutSection from '@/components/HeroAboutSection';
import CVSection from '@/components/CVSection';
import ContactSection from '@/components/ContactSection';
import FeatureProjectsSlider from '@/components/FeatureProjectsSlider';
import { featuredProjects } from '@/lib/projects';

export default function Home() {
    return (
        <>
            <HeroAboutSection />

            <section id="projects" className="relative">
                <FeatureProjectsSlider projects={featuredProjects} />
            </section>

            <CVSection />

            <ContactSection />
        </>
    );
}
