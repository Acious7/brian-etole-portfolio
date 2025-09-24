import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
    return (
        <section className="py-20 sm:py-24 bg-off-white">
            <div className="container mx-auto px-6">
                <div className="text-center">
                     <h2 className="text-sm font-semibold uppercase tracking-widest text-charcoal/60 mb-10">
                        Trusted by organizations driving change
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8">
                        {CLIENTS.map(client => (
                            <div key={client.name} className="text-lg font-medium text-charcoal/70 transition-colors duration-300 hover:text-charcoal">
                                {client.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;