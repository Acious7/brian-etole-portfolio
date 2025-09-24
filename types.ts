import { ReactNode } from 'react';

export type Page = 
    'Home' | 'About' | 'Portfolio' | 'Services' | 'Blog' | 'Podcast' | 'Gallery' | 'Contact' |
    'Filmmaking' | 'Photography' | 'CreativeDirection' | 'Consultancy';
    
export interface Project {
    id: number;
    title: string;
    category: 'Conservation' | 'Culture' | 'Advocacy' | 'Personal' | 'Corporate';
    imageUrl: string;
    videoUrl?: string;
    client: string;
    description: string;
}

export interface Client {
    name: string;
}

export interface Service {
    icon: ReactNode;
    title: string;
    description: string;
    pageLink: Page;
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    company: string;
}

export interface BlogPost {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    author: string;
    authorImageUrl: string;
    date: string;
    excerpt: string;
    content: React.ReactNode;
    likes: number;
    comments: Comment[];
}

export interface Comment {
    id: number;
    author: string;
    avatarUrl: string;
    date: string;
    text: string;
}

export interface PodcastEpisode {
    id: number;
    episodeNumber: number;
    title: string;
    series: string;
    topics: string[];
    imageUrl: string;
    description: string;
    duration: string;
    releaseDate: string;
    comments: Comment[];
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    colSpan?: string;
    rowSpan?: string;
}

export interface Breadcrumb {
    label: string;
    page?: Page;
}