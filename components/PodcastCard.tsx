import React from 'react';
import { PodcastEpisode } from '../types';

interface PodcastCardProps {
    episode: PodcastEpisode;
    onSelect: (episode: PodcastEpisode) => void;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ episode, onSelect }) => {
    return (
        <div 
            onClick={() => onSelect(episode)}
            className="group bg-[#1a1a1a] border border-gold/20 shadow-sm flex flex-col sm:flex-row overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gold/50 cursor-pointer transform hover:-translate-y-1"
        >
            <div className="sm:w-64 h-56 sm:h-auto overflow-hidden flex-shrink-0">
                <img src={episode.imageUrl} alt={episode.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            </div>
            <div className="p-8 flex flex-col justify-between">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Episode {episode.episodeNumber} &middot; {episode.series}</p>
                    <h3 className="text-2xl lg:text-3xl font-bold font-serif text-off-white leading-tight mb-3 group-hover:text-amber transition-colors">{episode.title}</h3>
                    <p className="text-off-white/70 text-sm leading-relaxed mb-4 line-clamp-3">{episode.description}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-off-white/60 mt-4 pt-4 border-t border-white/10">
                    <p>{episode.releaseDate}</p>
                    <div className="flex items-center space-x-3">
                         <span className="text-amber font-semibold text-sm transition-transform duration-300 inline-block group-hover:translate-x-1">Listen Now &rarr;</span>
                        <span className="font-semibold">{episode.duration}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PodcastCard;