import React, { useEffect, useState } from 'react';
import { GalleryImage } from '../types';

interface ImageModalProps {
    images: GalleryImage[];
    startIndex: number;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, startIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const goToPrevious = () => {
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            } else if (event.key === 'ArrowLeft') {
                goToPrevious();
            } else if (event.key === 'ArrowRight') {
                goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose, images.length]);
    
    const image = images[currentIndex];
    
    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={image.alt}
        >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20 p-2 rounded-full bg-black/20 hover:bg-black/50" aria-label="Close image viewer">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            {/* Previous Button */}
            <button 
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }} 
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 p-2 rounded-full bg-black/20 hover:bg-black/50" 
                aria-label="Previous image"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Next Button */}
            <button 
                onClick={(e) => { e.stopPropagation(); goToNext(); }} 
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 p-2 rounded-full bg-black/20 hover:bg-black/50" 
                aria-label="Next image"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <div 
                className="relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative animate-zoom-in">
                    {/* Keying the image forces a re-render on change, which re-triggers the animation */}
                    <img 
                        key={image.src}
                        src={image.src} 
                        alt={image.alt} 
                        className="max-w-[85vw] max-h-[85vh] object-contain shadow-2xl animate-fade-in"
                    />
                </div>
                 <p className="text-center text-white/80 mt-4 text-sm font-light tracking-wider">{image.alt} &nbsp;&middot;&nbsp; {currentIndex + 1} / {images.length}</p>
            </div>
        </div>
    );
};

export default ImageModal;