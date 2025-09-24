import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface PortfolioProps {
    projects: Project[];
    onProjectClick: (project: Project) => void;
}

type FilterCategory = 'All' | Project['category'];
const FILTERS: FilterCategory[] = ['All', 'Conservation', 'Culture', 'Advocacy', 'Personal', 'Corporate'];

const Portfolio: React.FC<PortfolioProps> = ({ projects, onProjectClick }) => {
    const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return projects;
        }
        return projects.filter(p => p.category === activeFilter);
    }, [projects, activeFilter]);

    return (
        <section id="work" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="flex justify-center flex-wrap gap-x-6 gap-y-4 mb-12">
                    {FILTERS.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${
                                activeFilter === filter
                                    ? 'text-gold border-b-2 border-gold'
                                    : 'text-off-white/70 hover:text-off-white'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="break-inside-avoid">
                            <ProjectCard 
                                project={project}
                                onClick={() => onProjectClick(project)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;