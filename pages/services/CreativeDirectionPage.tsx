import React from 'react';
import { Page } from '../../types';
import PageHeader from '../../components/PageHeader';


interface ServicePageProps {
    onNavigate: (page: Page) => void;
}

const CreativeDirectionPage: React.FC<ServicePageProps> = ({ onNavigate }) => {
    const processSteps = [
        { title: 'Brand Immersion', description: 'Deeply understanding your brand identity, values, and long-term vision.' },
        { title: 'Concept Development', description: 'Developing creative concepts that align with strategic goals and resonate with the audience.' },
        { title: 'Narrative Architecture', description: 'Designing the storytelling framework for a cohesive and compelling message across all media.' },
        { title: 'Team Leadership', description: 'Leading and inspiring a multi-disciplinary team of creatives to execute the vision with excellence.' },
    ];

    const serviceComponents = [
        'Campaign Conceptualization',
        'Brand Storytelling Strategy',
        'Visual Identity Guidance',
        'Cross-Platform Narrative Design',
        'Creative Team Management',
        'End-to-End Project Oversight',
    ];

    return (
        <>
             <PageHeader 
                title="Creative Direction" 
                description="Shaping impactful stories with strategic and artistic vision." 
                breadcrumbs={[{ label: 'Home', page: 'Home' }, { label: 'Services', page: 'Services'}, { label: 'Creative Direction' }]} 
                onNavigate={onNavigate} 
            />
            <div className="py-20 sm:py-32 bg-white">
                 <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-bold font-serif text-charcoal mb-8 sticky top-28">My Framework</h2>
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
                                   Creative direction is the art of translating strategy into powerful, cohesive creative work. I act as the bridge between your objectives and the creative execution, ensuring every element works in harmony to tell a memorable and impactful story.
                                </p>
                                
                                <button 
                                    onClick={() => onNavigate('Contact')} 
                                    className="group relative inline-block text-base font-semibold tracking-wider uppercase text-charcoal py-3 px-8 transition-colors duration-300 border border-gold bg-gold hover:bg-amber"
                                >
                                    Shape Your Narrative
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreativeDirectionPage;