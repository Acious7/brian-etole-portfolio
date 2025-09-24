import React, { useState } from 'react';
import { BlogPost, Comment } from '../types';

interface BlogPostPageProps {
    post: BlogPost;
    onBack: () => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
    const [likes, setLikes] = useState(post.likes);
    const [comments, setComments] = useState<Comment[]>(post.comments);
    const [newComment, setNewComment] = useState('');

    const handleLike = () => setLikes(prev => prev + 1);

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            const comment: Comment = {
                id: Date.now(),
                author: 'Guest User',
                avatarUrl: 'https://picsum.photos/seed/guest/50/50',
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
                <div className="max-w-3xl mx-auto">
                    <button onClick={onBack} className="text-amber font-semibold mb-8 group flex items-center space-x-2">
                        <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
                        <span>Back to all articles</span>
                    </button>
                    <article>
                        <header className="mb-8">
                            <p className="text-amber font-bold uppercase tracking-widest">{post.category}</p>
                            <h1 className="text-4xl md:text-5xl font-bold font-serif text-charcoal my-4">{post.title}</h1>
                            <div className="flex items-center space-x-4 text-charcoal/70 border-t border-b border-charcoal/10 py-4">
                                <img src={post.authorImageUrl} alt={post.author} className="w-12 h-12 rounded-full" />
                                <div>
                                    <span className="font-semibold text-charcoal">{post.author}</span>
                                    <p className="text-sm">{post.date}</p>
                                </div>
                            </div>
                        </header>

                        <img src={post.imageUrl} alt={post.title} className="w-full h-auto shadow-lg mb-8" />
                        
                        <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed">
                            {post.content}
                        </div>

                        {/* Interactions */}
                        <div className="mt-12 py-6 border-t border-b border-charcoal/10 flex items-center justify-between">
                             <button onClick={handleLike} className="flex items-center space-x-2 text-charcoal/70 hover:text-amber transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                <span className="font-semibold">{likes} Likes</span>
                            </button>
                            <div className="flex items-center space-x-4">
                                <p className="font-semibold text-charcoal/70">Share:</p>
                                <a href="#" className="text-charcoal/70 hover:text-charcoal"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 5.636a8.87 8.87 0 01-2.54.696 4.444 4.444 0 001.942-2.446 8.89 8.89 0 01-2.806 1.072 4.436 4.436 0 00-7.554 4.042A12.58 12.58 0 013.254 4.89a4.436 4.436 0 001.373 5.922 4.42 4.42 0 01-2.008-.553v.056c0 2.16 1.536 3.96 3.578 4.368a4.44 4.44 0 01-2.002.076 4.436 4.436 0 004.14 3.078 8.898 8.898 0 01-5.508 1.9A9.23 9.23 0 012 18.337a12.52 12.52 0 006.786 1.99c8.14 0 12.59-6.746 12.59-12.59 0-.19-.004-.38-.012-.57a8.96 8.96 0 002.19-2.275z" /></svg></a>
                            </div>
                        </div>

                        {/* Comment Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold font-serif mb-6 text-charcoal">{comments.length} Comments</h2>
                            <form onSubmit={handleCommentSubmit} className="mb-8 bg-black/5 p-6 border border-charcoal/10">
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Join the conversation..."
                                    className="w-full bg-white text-charcoal p-3 border border-charcoal/20 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                                    rows={4}
                                ></textarea>
                                <button type="submit" className="mt-4 bg-gold text-charcoal font-bold py-2 px-6 transition-colors hover:bg-amber">Post Comment</button>
                            </form>
                            <div className="space-y-6">
                                {comments.map(comment => (
                                    <div key={comment.id} className="flex space-x-4">
                                        <img src={comment.avatarUrl} alt={comment.author} className="w-12 h-12 rounded-full mt-1"/>
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
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;