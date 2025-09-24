import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';

interface GalleryPageProps {
    onImageClick: (index: number) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onImageClick }) => {
    return (
        <div className="pt-24 sm:pt-32 bg-off-white">
            <header className="text-center container mx-auto px-6 mb-16">
                <h1 className="text-5xl md:text-7xl font-bold font-serif text-charcoal">
                    <span className="heading-line"><span>Visual Diary</span></span>
                </h1>
                <p className="text-lg text-charcoal/70 mt-4 max-w-2xl mx-auto">
                    A curated collection of moments, portraits, and landscapes.
                </p>
            </header>
            <section id="gallery" className="pb-20 sm:pb-32">
                <div className="container mx-auto px-6">
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {GALLERY_IMAGES.map((image, index) => (
                            <div 
                                key={image.id}
                                className="group relative overflow-hidden cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-300"
                                onClick={() => onImageClick(index)}
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                                    <span className="text-white font-serif">{image.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;