import React, { useState, useMemo } from 'react';
import { PODCAST_EPISODES } from '../constants';
import PodcastCard from '../components/PodcastCard';
import { PodcastEpisode } from '../types';

interface PodcastPageProps {
    episodes: PodcastEpisode[];
    onEpisodeSelect: (episode: PodcastEpisode) => void;
}

const PodcastPage: React.FC<PodcastPageProps> = ({ episodes, onEpisodeSelect }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const allTopics = useMemo(() => {
        const topics = new Set<string>();
        episodes.forEach(e => e.topics.forEach(t => topics.add(t)));
        return ['All', ...Array.from(topics).sort()];
    }, [episodes]);

    const filteredEpisodes = useMemo(() => {
        if (activeFilter === 'All') return episodes;
        return episodes.filter(e => e.topics.includes(activeFilter));
    }, [episodes, activeFilter]);

    const groupedBySeries = useMemo(() => {
        return filteredEpisodes.reduce((acc, episode) => {
            (acc[episode.series] = acc[episode.series] || []).push(episode);
            return acc;
        }, {} as Record<string, PodcastEpisode[]>);
    }, [filteredEpisodes]);

    const latestEpisode = episodes.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())[0];

    return (
        <div className="pt-24 sm:pt-32 bg-charcoal">
             <header className="text-center container mx-auto px-6 mb-16">
                 <h1 className="text-5xl md:text-7xl font-bold font-serif text-off-white">
                    <span className="heading-line"><span>Podcast</span></span>
                </h1>
                <p className="text-lg text-off-white/70 mt-4 max-w-2xl mx-auto">
                    Conversations with creators, conservationists, and community leaders.
                </p>
            </header>
            
            {/* Featured Episode */}
            <section className="pb-16 sm:pb-24 border-b border-white/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold font-serif text-off-white mb-8">Latest Episode</h2>
                    <PodcastCard episode={latestEpisode} onSelect={onEpisodeSelect} />
                </div>
            </section>

            {/* All Episodes */}
            <section id="podcast-episodes" className="py-16 sm:py-24">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center flex-wrap gap-x-4 gap-y-3 mb-12">
                        {allTopics.map(topic => (
                            <button
                                key={topic}
                                onClick={() => setActiveFilter(topic)}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                                    activeFilter === topic
                                        ? 'bg-gold text-charcoal'
                                        : 'bg-white/10 text-off-white/70 hover:bg-white/20 hover:text-off-white'
                                }`}
                            >
                                {topic}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12">
                        {Object.entries(groupedBySeries).map(([series, episodesInSeries]) => (
                            <div key={series}>
                                <h3 className="text-2xl font-bold font-serif text-gold mb-6 pb-2 border-b border-gold/20">{series}</h3>
                                <div className="space-y-4">
                                    {episodesInSeries.map(episode => (
                                        <div 
                                            key={episode.id} 
                                            className="group grid grid-cols-1 sm:grid-cols-12 gap-6 items-center p-4 bg-[#1a1a1a] border border-transparent hover:border-white/10 cursor-pointer transition-all duration-300"
                                            onClick={() => onEpisodeSelect(episode)}
                                        >
                                            <div className="sm:col-span-1 text-center">
                                                <p className="text-xl font-bold text-off-white/80 group-hover:text-gold transition-colors">#{episode.episodeNumber}</p>
                                            </div>
                                             <div className="sm:col-span-2 hidden sm:block">
                                                 <img src={episode.imageUrl} alt={episode.title} className="w-full h-auto object-cover"/>
                                            </div>
                                            <div className="sm:col-span-6">
                                                <h4 className="font-bold text-off-white text-lg group-hover:text-amber transition-colors">{episode.title}</h4>
                                                <p className="text-sm text-off-white/60">{episode.releaseDate}</p>
                                            </div>
                                            <div className="sm:col-span-2 text-center">
                                                <p className="text-sm font-mono text-off-white/80">{episode.duration}</p>
                                            </div>
                                            <div className="sm:col-span-1 text-center sm:text-right">
                                                <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">&rarr;</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PodcastPage;