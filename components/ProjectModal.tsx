import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-off-white shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-zoom-in flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-3 right-3 text-charcoal/70 hover:text-charcoal transition-colors z-10 p-2 rounded-full bg-white/50 hover:bg-white/80">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <div className="aspect-video bg-gray-200 overflow-hidden flex-shrink-0">
                    {project.videoUrl ? (
                         <iframe 
                            src={project.videoUrl}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    ) : (
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover"/>
                    )}
                </div>

                <div className="p-8">
                    <h2 className="text-3xl font-bold font-serif text-terracotta mb-2">{project.title}</h2>
                    <p className="text-sm font-bold text-charcoal/60 uppercase tracking-wider mb-4">{project.client}</p>
                    <p className="text-charcoal/80 leading-relaxed">{project.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;