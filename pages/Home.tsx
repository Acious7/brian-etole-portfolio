import React from 'react';
import Hero from '../components/Hero';
import { PROJECTS, BLOG_POSTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import BlogPostCard from '../components/BlogPostCard';
import About from '../components/About';
import { Page, Project } from '../types';
import Services from '../components/Services';
import Contact from '../components/Contact';


interface HomeProps {
    onNavigate: (page: Page) => void;
    onProjectClick: (project: Project) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onProjectClick }) => {
    return (
        <div>
            <Hero onButtonClick={() => onNavigate('Portfolio')} />

            <About />

            {/* Featured Work Section */}
            <section className="py-20 sm:py-32 bg-off-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold font-serif text-charcoal">
                             <span className="heading-line"><span>Featured Work</span></span>
                        </h2>
                        <p className="text-lg text-charcoal/70 mt-4">A glimpse into stories I've helped bring to life.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.slice(0, 3).map(project => (
                             <div key={project.id}>
                                <ProjectCard project={project} onClick={() => onProjectClick(project)} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <button 
                            onClick={() => onNavigate('Portfolio')} 
                            className="group relative inline-block text-base font-semibold tracking-wider uppercase text-gold py-3 px-8 transition-colors duration-300 border border-gold hover:text-off-white"
                        >
                            <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            <span className="relative">View All Projects</span>
                        </button>
                    </div>
                </div>
            </section>
            
            <Services onNavigate={onNavigate}/>
            
            {/* From the Journal Section */}
            <section className="py-20 sm:py-32 bg-off-white">
                <div className="container mx-auto px-6">
                     <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold font-serif text-charcoal">
                             <span className="heading-line"><span>From the Journal</span></span>
                        </h2>
                        <p className="text-lg text-charcoal/70 mt-4">Reflections, stories, and notes from the field.</p>
                    </div>
                     <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {BLOG_POSTS.slice(0, 2).map(post => (
                           <div key={post.id}>
                             <BlogPostCard post={post} onPostSelect={() => onNavigate('Blog')} />
                           </div>
                        ))}
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    );
};

export default Home;