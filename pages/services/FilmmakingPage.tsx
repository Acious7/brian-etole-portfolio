import React from 'react';
import { Page } from '../../types';
import PageHeader from '../../components/PageHeader';

interface ServicePageProps {
    onNavigate: (page: Page) => void;
}

const FilmmakingPage: React.FC<ServicePageProps> = ({ onNavigate }) => {
    const processSteps = [
        { title: 'Discovery & Strategy', description: 'A deep dive into your goals, audience, and key messages to build a solid narrative foundation.' },
        { title: 'Pre-Production', description: 'Scriptwriting, storyboarding, location scouting, and casting to ensure a smooth production.' },
        { title: 'Production', description: 'Using high-end equipment to capture stunning visuals and clear audio with authenticity.' },
        { title: 'Post-Production', description: 'Editing, color grading, sound design, and motion graphics to bring the story to life.' },
        { title: 'Delivery & Distribution', description: 'Delivering final films in formats optimized for your intended platforms.' },
    ];

    const serviceComponents = [
        'Documentary Filmmaking',
        'Corporate Videos',
        'Brand Films',
        'NGO & Advocacy Films',
        'Aerial Cinematography',
        'Full Post-Production Suite',
    ];

    return (
        <>
            <PageHeader 
                title="Filmmaking & Cinematography" 
                description="Crafting compelling visual narratives from concept to final cut." 
                breadcrumbs={[{ label: 'Home', page: 'Home' }, { label: 'Services', page: 'Services'}, { label: 'Filmmaking' }]} 
                onNavigate={onNavigate} 
            />
            <div className="py-20 sm:py-32 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-bold font-serif text-charcoal mb-8 sticky top-28">My Process</h2>
                            <div className="relative border-l-2 border-charcoal/10">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="mb-10 pl-8 relative">
                                        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-terracotta rounded-full border-4 border-white"></div>
                                        <h3 className="font-bold text-charcoal text-lg">{step.title}</h3>
                                        <p className="text-sm text-charcoal/70 mt-1">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="bg-off-white p-8 md:p-12 border border-charcoal/10">
                                <h2 className="text-3xl font-bold font-serif text-charcoal mb-8">Service Components</h2>
                                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                                    {serviceComponents.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-terracotta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span className="text-charcoal">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <p className="text-charcoal/80 leading-relaxed mb-8">
                                    My approach to filmmaking is rooted in storytelling. I work closely with clients to transform ideas into visually compelling narratives that resonate with audiences and achieve strategic goals. Whether it's a short brand film or a feature-length documentary, every project receives the same dedication to quality and creative excellence.
                                </p>
                                
                                <button 
                                    onClick={() => onNavigate('Contact')} 
                                    className="group relative inline-block text-base font-semibold tracking-wider uppercase text-charcoal py-3 px-8 transition-colors duration-300 border border-gold bg-gold hover:bg-amber"
                                >
                                    Start a Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilmmakingPage;