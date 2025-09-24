import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HeaderProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
    page: Page,
    label: string,
    currentPage: Page,
    onNavigate: (page: Page) => void,
    className?: string,
    isTransparent?: boolean
}> = ({ page, label, currentPage, onNavigate, className, isTransparent }) => {
    const isActive = currentPage === page;
    
    let textColorClasses = isActive ? 'text-charcoal' : 'text-charcoal/60 hover:text-charcoal';

    if (isTransparent) {
        textColorClasses = isActive ? 'text-off-white' : 'text-off-white/70 hover:text-off-white';
    }

    return (
        <button
            onClick={() => onNavigate(page)}
            className={`relative group py-2 text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${textColorClasses} ${className}`}
        >
            <span>{label}</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transform transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        </button>
    );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const navLinks: { page: Page, label: string }[] = [
        { page: 'Home', label: 'Home' },
        { page: 'About', label: 'About' },
        { page: 'Portfolio', label: 'Portfolio' },
        { page: 'Services', label: 'Services' },
        { page: 'Blog', label: 'Blog' },
        { page: 'Podcast', label: 'Podcast' },
        { page: 'Gallery', label: 'Gallery' },
        { page: 'Contact', label: 'Contact' },
    ];

    const isTransparentOnHero = currentPage === 'Home' && !isScrolled && !isMenuOpen;

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                isScrolled || isMenuOpen ? 'bg-off-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
            }`}>
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <button 
                            onClick={() => onNavigate('Home')} 
                            className={`text-2xl font-bold font-serif transition-colors duration-300 ${isTransparentOnHero ? 'text-off-white' : 'text-charcoal'}`}
                        >
                            B<span className="text-gold">E</span>
                        </button>
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map(({ page, label }) => (
                                 <NavLink 
                                    key={page} 
                                    page={page} 
                                    label={label} 
                                    currentPage={currentPage} 
                                    onNavigate={onNavigate} 
                                    isTransparent={isTransparentOnHero} 
                                 />
                            ))}
                        </div>
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                className={`p-2 focus:outline-none z-50 relative transition-colors duration-300 ${
                                    isMenuOpen ? 'text-charcoal' : isTransparentOnHero ? 'text-off-white' : 'text-charcoal'
                                }`}
                                aria-label="Toggle menu"
                            >
                                 {isMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                 ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                 )}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            
            {/* Mobile Menu */}
            <div className={`
                md:hidden fixed top-20 right-4 z-30
                w-72 rounded-lg shadow-xl bg-off-white/80 backdrop-blur-md border border-charcoal/10
                transition-all duration-300 ease-in-out origin-top-right
                ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
            `}>
                 <div className="p-4">
                     <div className="flex flex-col space-y-1">
                         {navLinks.map(({ page, label }) => (
                            <button
                                key={page}
                                onClick={() => {
                                    onNavigate(page);
                                    setIsMenuOpen(false);
                                }}
                                className={`
                                    block w-full text-left py-3 px-4 rounded-md text-base font-medium
                                    transition-colors duration-200
                                    ${currentPage === page ? 'bg-gold/10 text-gold' : 'text-charcoal hover:bg-black/5'}
                                `}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;