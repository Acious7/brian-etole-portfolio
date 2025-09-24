import React from 'react';
import { BlogPost } from '../types';

interface BlogPostCardProps {
    post: BlogPost;
    onPostSelect: (post: BlogPost) => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onPostSelect }) => {
    return (
        <div 
            className="group bg-white border border-charcoal/10 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            onClick={() => onPostSelect(post)}
        >
            <div className="overflow-hidden">
                 <img 
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-amber mb-2">{post.category}</p>
                <h3 className="text-xl font-bold font-serif text-charcoal leading-tight mb-3 group-hover:text-amber transition-colors">{post.title}</h3>
                <p className="text-charcoal/70 text-sm mb-4">{post.excerpt}</p>
                 <div className="flex items-center space-x-3 text-xs text-charcoal/60 mt-4 pt-4 border-t border-charcoal/10">
                    <img src={post.authorImageUrl} alt={post.author} className="w-8 h-8 rounded-full" />
                    <div>
                        <span className="font-semibold text-charcoal block">{post.author}</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostCard;