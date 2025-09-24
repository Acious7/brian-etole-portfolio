import React from 'react';
import { BlogPost } from '../types';
import BlogPostCard from '../components/BlogPostCard';

interface BlogPageProps {
    posts: BlogPost[];
    onPostSelect: (post: BlogPost) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ posts, onPostSelect }) => {
    return (
        <div className="pt-24 sm:pt-32 bg-off-white">
            <header className="text-center container mx-auto px-6 mb-16">
                 <h1 className="text-5xl md:text-7xl font-bold font-serif text-charcoal">
                    <span className="heading-line"><span>From the Journal</span></span>
                </h1>
                <p className="text-lg text-charcoal/70 mt-4 max-w-2xl mx-auto">
                    Field notes, reflections, and insights from my creative journey.
                </p>
            </header>
            <section id="blog" className="pb-20 sm:pb-32">
                <div className="container mx-auto px-6">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {posts.map(post => (
                             <div key={post.id} className="break-inside-avoid">
                                <BlogPostCard 
                                    post={post}
                                    onPostSelect={onPostSelect}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;