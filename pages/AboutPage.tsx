import React from 'react';
import About from '../components/About';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import { TESTIMONIALS } from '../constants';
import { Page } from '../types';

interface AboutPageProps {
    onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
    return (
        <div className="pt-24 sm:pt-32 bg-off-white">
            <header className="text-center container mx-auto px-6 mb-16 sm:mb-24">
                 <h1 className="text-5xl md:text-7xl font-bold font-serif text-charcoal">
                    <span className="heading-line"><span>About Me</span></span>
                </h1>
                <p className="text-lg text-charcoal/70 mt-4 max-w-2xl mx-auto">
                    Filmmaker, Visual Creative, and Storyteller.
                </p>
            </header>
            <About />
            <Testimonials testimonials={TESTIMONIALS} />
            <Clients />

            <section className="py-20 sm:py-24 bg-white border-t border-charcoal/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold font-serif text-charcoal mb-4">
                        Ready to Tell Your Story?
                    </h2>
                    <p className="text-charcoal/70 max-w-xl mx-auto mb-8">
                        Whether you have a specific project in mind or just want to explore possibilities, I'm here to help bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button
                            onClick={() => onNavigate('Portfolio')}
                            className="group relative w-full sm:w-auto inline-block text-base font-semibold tracking-wider uppercase text-gold py-3 px-8 transition-colors duration-300 border border-gold hover:text-off-white"
                        >
                            <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            <span className="relative">View My Portfolio</span>
                        </button>
                         <button
                            onClick={() => onNavigate('Contact')}
                            className="group relative w-full sm:w-auto inline-block text-base font-semibold tracking-wider uppercase text-charcoal py-3 px-8 transition-colors duration-300 border border-charcoal hover:bg-charcoal hover:text-off-white"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;