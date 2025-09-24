import React from 'react';
import Services from '../components/Services';
import { Page } from '../types';

interface ServicesPageProps {
    onNavigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
    return (
        <div className="pt-24 sm:pt-32 bg-off-white">
             <header className="text-center container mx-auto px-6 mb-16">
                 <h1 className="text-5xl md:text-7xl font-bold font-serif text-charcoal">
                    <span className="heading-line"><span>My Services</span></span>
                </h1>
                <p className="text-lg text-charcoal/70 mt-4 max-w-2xl mx-auto">
                    Blending artistry with strategy to deliver impactful results.
                </p>
            </header>
            <Services onNavigate={onNavigate} />
        </div>
    );
};

export default ServicesPage;