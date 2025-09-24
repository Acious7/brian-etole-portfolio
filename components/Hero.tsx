import React from 'react';

interface HeroProps {
    onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onButtonClick }) => {
    return (
        <section
            className="h-screen min-h-[700px] flex items-center justify-center text-center bg-cover bg-center relative bg-charcoal"
        >
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(https://picsum.photos/seed/hero-bg/1920/1280)` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent"></div>
            
            <div className="container mx-auto px-6 z-10 relative text-off-white">
                <h1 className="text-5xl sm:text-7xl font-bold font-serif">
                    <span className="heading-line"><span style={{ animationDelay: '100ms' }}>Brian Etole</span></span>
                </h1>
                <div className="text-lg sm:text-xl max-w-2xl mx-auto mt-6 mb-10 overflow-hidden">
                   <p className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                       A Nairobi-based filmmaker, visual creative, and storyteller crafting authentic narratives across culture, conservation, and health.
                   </p>
                </div>
                
                <div style={{ animation: 'fade-in-up 0.6s 600ms ease-out forwards', opacity: 0 }}>
                    <button
                        onClick={onButtonClick}
                        className="group relative inline-block text-base font-semibold tracking-wider uppercase text-gold py-3 px-8 transition-colors duration-300 border border-gold hover:text-charcoal"
                    >
                        <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        <span className="relative">Explore My Work</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;