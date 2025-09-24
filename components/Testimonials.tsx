import React from 'react';
import { Testimonial } from '../types';

interface TestimonialsProps {
    testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    return (
        <section id="testimonials" className="py-20 sm:py-32 bg-off-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold font-serif text-charcoal">
                       <span className="heading-line"><span>What Collaborators Say</span></span>
                    </h2>
                    <p className="text-lg text-charcoal/70 mt-4">Building relationships through impactful storytelling.</p>
                </div>
                <div className={`grid md:grid-cols-${testimonials.length === 1 ? '1' : '3'} gap-8 max-w-5xl mx-auto`}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 border border-charcoal/10 text-center">
                             <div className="text-6xl text-terracotta/30 font-serif mb-4 mx-auto">“</div>
                            <p className="text-charcoal italic text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                            <div className="mt-auto">
                                <h3 className="font-bold text-charcoal text-lg">{testimonial.name}</h3>
                                <p className="text-sm text-charcoal/60">{testimonial.role}, {testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;