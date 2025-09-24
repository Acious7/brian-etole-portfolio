import React from 'react';
import Portfolio from '../components/Portfolio';
import { Project } from '../types';

interface PortfolioPageProps {
    projects: Project[];
    onProjectClick: (project: Project) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ projects, onProjectClick }) => {
    return (
        <div className="pt-24 sm:pt-32 bg-charcoal">
             <header className="text-center container mx-auto px-6 mb-16">
                 <h1 className="text-5xl md:text-7xl font-bold font-serif text-off-white">
                     <span className="heading-line"><span>My Portfolio</span></span>
                </h1>
                <p className="text-lg text-off-white/70 mt-4 max-w-2xl mx-auto">
                    A selection of projects that define my creative journey.
                </p>
            </header>
            <Portfolio projects={projects} onProjectClick={onProjectClick} />
        </div>
    );
};

export default PortfolioPage;