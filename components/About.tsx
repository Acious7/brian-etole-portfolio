import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 sm:py-32 bg-off-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                         <div className="relative w-full max-w-md mx-auto lg:mx-0">
                            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-terracotta z-0"></div>
                             <img 
                                src="https://picsum.photos/seed/brian-etole-profile/800/1000"
                                alt="Brian Etole"
                                className="relative w-full h-auto object-cover z-10 shadow-lg"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold font-serif text-charcoal mb-6">
                            A Storyteller Behind The Lens
                        </h2>
                        
                        <div className="space-y-4 text-charcoal/80 leading-relaxed">
                            <p>
                                I am a Nairobi-based filmmaker and visual creative whose work spans culture, conservation, governance, and health. My career is built around the power of visual narratives—using film, photography, and writing to document human experiences, amplify community voices, and spark meaningful dialogue.
                            </p>
                            <p>
                                My journey is shaped by collaborations with diverse partners, from international NGOs to grassroots organizations. Whether working independently or leading at Acious Media, I blend technical expertise with authenticity, cultural sensitivity, and purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;