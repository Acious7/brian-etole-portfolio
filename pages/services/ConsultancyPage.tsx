import React from 'react';
import { Page } from '../../types';
import PageHeader from '../../components/PageHeader';

interface ServicePageProps {
    onNavigate: (page: Page) => void;
}

const ConsultancyPage: React.FC<ServicePageProps> = ({ onNavigate }) => {
    const processSteps = [
        { title: 'Needs Assessment', description: 'Working with your team to identify your storytelling challenges and opportunities.' },
        { title: 'Framework Development', description: 'Creating a tailored storytelling framework to guide your communications.' },
        { title: 'Capacity Building', description: 'Equipping your team with skills to find and tell compelling stories through workshops.' },
        { title: 'Ongoing Support', description: 'Providing ongoing mentorship and strategic advice for long-term storytelling success.' },
    ];

    const serviceComponents = [
        'Storytelling Workshops',
        'Narrative Strategy Sessions',
        'Communications Team Mentorship',
        'Content & Editorial Planning',
        'Impact Story Frameworks',
        'Ethical Storytelling Guidelines',
    ];

    return (
        <>
            <PageHeader 
                title="Storytelling Consultancy" 
                description="Empowering organizations to tell their stories with clarity and purpose." 
                breadcrumbs={[{ label: 'Home', page: 'Home' }, { label: 'Services', page: 'Services'}, { label: 'Consultancy' }]} 
                onNavigate={onNavigate} 
            />
            <div className="py-20 sm:py-32 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-bold font-serif text-charcoal mb-8 sticky top-28">My Approach</h2>
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
                                    My consultancy work is about empowerment. I help organizations build a sustainable storytelling culture from within. By providing the right tools, frameworks, and training, I enable your team to communicate your impact with clarity, confidence, and authenticity.
                                </p>
                                
                                <button 
                                    onClick={() => onNavigate('Contact')} 
                                    className="group relative inline-block text-base font-semibold tracking-wider uppercase text-charcoal py-3 px-8 transition-colors duration-300 border border-gold bg-gold hover:bg-amber"
                                >
                                    Book a Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConsultancyPage;