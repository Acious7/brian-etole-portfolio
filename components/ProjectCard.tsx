import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <div 
            className="group relative overflow-hidden cursor-pointer border border-transparent hover:border-charcoal/10 transition-all duration-300 shadow-sm hover:shadow-xl"
            onClick={onClick}
        >
            <img 
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <span className="text-xs font-bold uppercase tracking-widest text-off-white/80 mb-1">{project.category}</span>
                <h3 className="text-xl font-serif font-bold text-off-white leading-tight group-hover:text-gold transition-colors">{project.title}</h3>
            </div>
        </div>
    );
};

export default ProjectCard;