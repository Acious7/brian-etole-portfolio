import React, { useState } from 'react';
import { PodcastEpisode, Comment } from '../types';

interface PodcastEpisodePageProps {
    episode: PodcastEpisode;
    onBack: () => void;
}

const AudioPlayer: React.FC<{ duration: string }> = ({ duration }) => (
    <div className="bg-charcoal/80 backdrop-blur-sm text-off-white p-4">
        <div className="flex items-center space-x-4">
            <button className="bg-gold text-charcoal rounded-full p-4 hover:bg-amber transition-colors transform hover:scale-110">
                <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            </button>
            <div className="w-full">
                <div className="w-full h-1.5 bg-white/20 rounded-full">
                    <div className="w-1/4 h-full bg-gold rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs mt-1 text-white/60">
                    <span>11:22</span>
                    <span>{duration}</span>
                </div>
            </div>
        </div>
    </div>
);

const PodcastEpisodePage: React.FC<PodcastEpisodePageProps> = ({ episode, onBack }) => {
    const [comments, setComments] = useState<Comment[]>(episode.comments);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            const comment: Comment = {
                id: Date.now(),
                author: 'Guest Listener',
                avatarUrl: 'https://picsum.photos/seed/guest-listener/50/50',
                date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                text: newComment,
            };
            setComments(prev => [comment, ...prev]);
            setNewComment('');
        }
    };

    return (
        <div className="pt-24 sm:pt-32 pb-20 sm:pb-32 bg-off-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <button onClick={onBack} className="text-amber font-semibold mb-8 group flex items-center space-x-2">
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
                        <span>Back to all episodes</span>
                    </button>
                    
                    <article className="bg-white border border-charcoal/10 shadow-lg">
                        <div className="grid md:grid-cols-3">
                            <div className="md:col-span-1">
                                <img src={episode.imageUrl} alt={episode.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="md:col-span-2 p-8 flex flex-col justify-between">
                                <div>
                                    <p className="text-amber font-bold uppercase tracking-widest text-sm">{episode.series}</p>
                                    <h1 className="text-3xl md:text-4xl font-bold font-serif text-charcoal my-3">{episode.title}</h1>
                                    <p className="text-charcoal/70 text-sm">Published on {episode.releaseDate}</p>
                                </div>
                                <div className="mt-6">
                                    <AudioPlayer duration={episode.duration} />
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <h2 className="text-2xl font-bold font-serif text-charcoal mb-4">Show Notes</h2>
                            <p className="text-charcoal/80 leading-relaxed mb-8">{episode.description}</p>
                            
                            <h3 className="font-bold text-charcoal mb-3">Topics Covered</h3>
                            <div className="flex flex-wrap gap-2 mb-12">
                                {episode.topics.map(topic => (
                                    <span key={topic} className="bg-black/5 text-charcoal px-3 py-1 text-sm rounded-full">{topic}</span>
                                ))}
                            </div>

                            {/* Comment Section */}
                            <div className="pt-8 border-t border-charcoal/10">
                                <h2 className="text-2xl font-bold font-serif mb-6 text-charcoal">{comments.length} Comments</h2>
                                <form onSubmit={handleCommentSubmit} className="mb-8 bg-black/5 p-6 border border-charcoal/10">
                                    <textarea
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        placeholder="Leave a comment..."
                                        className="w-full bg-white text-charcoal p-3 border border-charcoal/20 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                                        rows={4}
                                    ></textarea>
                                    <button type="submit" className="mt-4 bg-gold text-charcoal font-bold py-2 px-6 transition-colors hover:bg-amber">Post Comment</button>
                                </form>
                                <div className="space-y-6">
                                    {comments.map(comment => (
                                        <div key={comment.id} className="flex space-x-4">
                                            <img src={comment.avatarUrl} alt={comment.author} className="w-12 h-12 rounded-full mt-1 flex-shrink-0"/>
                                            <div className="border border-charcoal/10 p-4 flex-1">
                                                <div className="flex items-baseline space-x-2">
                                                    <p className="font-bold text-charcoal">{comment.author}</p>
                                                    <p className="text-xs text-charcoal/60">{comment.date}</p>
                                                </div>
                                                <p className="text-charcoal/80 mt-1">{comment.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default PodcastEpisodePage;