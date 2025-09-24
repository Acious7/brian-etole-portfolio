import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PodcastPage from './pages/PodcastPage';
import PodcastEpisodePage from './pages/PodcastEpisodePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ProjectModal from './components/ProjectModal';
import ImageModal from './components/ImageModal';
import { PROJECTS, BLOG_POSTS, GALLERY_IMAGES, PODCAST_EPISODES } from './constants';
import { Project, BlogPost, GalleryImage, PodcastEpisode } from './types';

// New Service Detail Pages
import FilmmakingPage from './pages/services/FilmmakingPage';
import PhotographyPage from './pages/services/PhotographyPage';
import CreativeDirectionPage from './pages/services/CreativeDirectionPage';
import ConsultancyPage from './pages/services/ConsultancyPage';

export type Page = 
    'Home' | 'About' | 'Portfolio' | 'Services' | 'Blog' | 'Podcast' | 'Gallery' | 'Contact' |
    'Filmmaking' | 'Photography' | 'CreativeDirection' | 'Consultancy';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('Home');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
    const [selectedPodcastEpisode, setSelectedPodcastEpisode] = useState<PodcastEpisode | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleNavigate = (page: Page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
        setSelectedBlogPost(null); 
        setSelectedPodcastEpisode(null);
    };

    const handlePostSelect = (post: BlogPost) => {
        setSelectedBlogPost(post);
        window.scrollTo(0, 0);
    };

    const handleBackToBlog = () => {
        setSelectedBlogPost(null);
        setCurrentPage('Blog');
        window.scrollTo(0, 0);
    };
    
    const handlePodcastEpisodeSelect = (episode: PodcastEpisode) => {
        setSelectedPodcastEpisode(episode);
        window.scrollTo(0, 0);
    };
    
    const handleBackToPodcast = () => {
        setSelectedPodcastEpisode(null);
        setCurrentPage('Podcast');
        window.scrollTo(0, 0);
    };

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const handleCloseImageModal = () => {
        setSelectedImageIndex(null);
    };

    const renderPage = () => {
        if (selectedBlogPost) {
            return <BlogPostPage post={selectedBlogPost} onBack={handleBackToBlog} />;
        }
        
        if (selectedPodcastEpisode) {
            return <PodcastEpisodePage episode={selectedPodcastEpisode} onBack={handleBackToPodcast} />;
        }

        switch (currentPage) {
            case 'Home':
                return <Home onNavigate={handleNavigate} onProjectClick={setSelectedProject} />;
            case 'About':
                return <AboutPage onNavigate={handleNavigate} />;
            case 'Portfolio':
                return <PortfolioPage projects={PROJECTS} onProjectClick={setSelectedProject} />;
            case 'Services':
                return <ServicesPage onNavigate={handleNavigate} />;
            case 'Blog':
                 return <BlogPage posts={BLOG_POSTS} onPostSelect={handlePostSelect} />;
            case 'Podcast':
                return <PodcastPage episodes={PODCAST_EPISODES} onEpisodeSelect={handlePodcastEpisodeSelect} />;
            case 'Gallery':
                 return <GalleryPage onImageClick={handleImageClick} />;
            case 'Contact':
                 return <ContactPage />;
            case 'Filmmaking':
                return <FilmmakingPage onNavigate={handleNavigate} />;
            case 'Photography':
                return <PhotographyPage onNavigate={handleNavigate} />;
            case 'CreativeDirection':
                return <CreativeDirectionPage onNavigate={handleNavigate} />;
            case 'Consultancy':
                return <ConsultancyPage onNavigate={handleNavigate} />;
            default:
                return <Home onNavigate={handleNavigate} onProjectClick={setSelectedProject} />;
        }
    };

    return (
        <div className="bg-off-white text-charcoal min-h-screen">
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            <main>
                {renderPage()}
            </main>
            <Footer onNavigate={handleNavigate} />
            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            {selectedImageIndex !== null && <ImageModal images={GALLERY_IMAGES} startIndex={selectedImageIndex} onClose={handleCloseImageModal} />}
        </div>
    );
};

export default App;