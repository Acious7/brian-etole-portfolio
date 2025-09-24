import React from 'react';
import { Breadcrumb, Page } from '../types';

interface PageHeaderProps {
    title: string;
    description: string;
    breadcrumbs: Breadcrumb[];
    onNavigate?: (page: Page) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, breadcrumbs, onNavigate }) => {
    return (
        <header 
            className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-off-white"
        >
            <div className="container mx-auto px-6 text-center relative">
                <div className="mb-6 text-sm text-charcoal/70">
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index}>
                            {crumb.page && onNavigate ? (
                                <button onClick={() => onNavigate(crumb.page)} className="hover:text-terracotta transition-colors">
                                    {crumb.label}
                                </button>
                            ) : (
                                <span className="text-charcoal font-semibold">{crumb.label}</span>
                            )}
                            {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
                        </span>
                    ))}
                </div>
                 <h1 className="text-5xl md:text-7xl font-bold font-serif text-charcoal">
                    <span className="heading-line"><span>{title}</span></span>
                </h1>
                <p className="text-lg text-charcoal/70 mt-4 max-w-2xl mx-auto">{description}</p>
            </div>
        </header>
    );
};

export default PageHeader;