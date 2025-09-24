import React from 'react';
import { Service, Page } from '../types';

const CameraIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.55a2.25 2.25 0 01.95 3.11l-3.5 6.06a2.25 2.25 0 01-3.11.95L3 15V9l9.9-5.74a2.25 2.25 0 013.1.95l.5 1.79" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const PhotoIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <circle cx="12" cy="13" r="3" />
    </svg>
);

const PenToolIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
);

const UsersIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const services: Service[] = [
    {
        icon: <CameraIcon className="w-10 h-10 text-amber"/>,
        title: 'Filmmaking & Cinematography',
        description: 'End-to-end film production, delivering visually stunning narratives from concept to final cut.',
        pageLink: 'Filmmaking'
    },
    {
        icon: <PhotoIcon className="w-10 h-10 text-amber"/>,
        title: 'Documentary Photography',
        description: 'Capturing authentic moments and powerful stories through still imagery for impactful projects.',
        pageLink: 'Photography'
    },
    {
        icon: <PenToolIcon className="w-10 h-10 text-amber"/>,
        title: 'Creative Direction',
        description: 'Leading creative teams and shaping storytelling strategies for visually compelling and impactful results.',
        pageLink: 'CreativeDirection'
    },
    {
        icon: <UsersIcon className="w-10 h-10 text-amber"/>,
        title: 'Storytelling Consultancy',
        description: 'Helping organizations find, shape, and tell their stories with clarity and purpose.',
        pageLink: 'Consultancy'
    }
];

interface ServicesProps {
    onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
    return (
        <section id="services" className="py-20 sm:py-32 bg-terracotta">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="group bg-white/5 p-8 text-left transition-all duration-300 transform hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-xl border border-white/10 hover:border-amber"
                            onClick={() => onNavigate(service.pageLink)}
                        >
                            <div className="mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-serif text-off-white mb-3">{service.title}</h3>
                            <p className="text-off-white/80 text-sm leading-relaxed mb-4">{service.description}</p>
                            <span className="text-amber font-semibold text-sm transition-transform duration-300 inline-block group-hover:translate-x-1">Learn More &rarr;</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;