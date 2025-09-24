import React from 'react';
import { Page } from '../types';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-off-white/70 hover:text-gold transition-colors duration-300" aria-label={ariaLabel}>
        {children}
    </a>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-charcoal border-t border-white/10">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-center md:text-left">
                    <div className="flex justify-center md:justify-start">
                        <button onClick={() => onNavigate('Home')} className="text-2xl font-bold font-serif text-off-white">
                            B<span className="text-gold">E</span>
                        </button>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-6">
                        {/* Phone Icon */}
                        <SocialIcon href="tel:+254700123456" aria-label="Phone">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </SocialIcon>

                        {/* Instagram Icon */}
                        <SocialIcon href="#" aria-label="Instagram">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.067.06 1.407.06 4.155s-.012 3.088-.06 4.155c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.067.048-1.407.06-4.155.06s-3.088-.012-4.155-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427C2.013 15.39 2 15.046 2 12.298s.013-3.088.06-4.155c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.316 2.427-.364C8.93 2.013 9.27 2 11.702 2h.613zM12 4.877c-2.85 0-5.158 2.29-5.158 5.123s2.308 5.123 5.158 5.123 5.158-2.29 5.158-5.123S14.85 4.877 12 4.877zm0 8.242c-1.722 0-3.118-1.383-3.118-3.104S10.278 6.9 12 6.9s3.118 1.383 3.118 3.104-.001 3.115-3.118 3.115zM16.949 7.032c-.75 0-1.356.6-1.356 1.344s.606 1.344 1.356 1.344c.75 0 1.356-.6 1.356-1.344s-.606-1.344-1.356-1.344z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                        
                        {/* LinkedIn Icon */}
                        <SocialIcon href="#" aria-label="LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </SocialIcon>

                        {/* X Icon */}
                        <SocialIcon href="#" aria-label="X">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </SocialIcon>

                        {/* TikTok Icon */}
                        <SocialIcon href="#" aria-label="TikTok">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.8-1.95-1.95-2.99-4.39-3-7.15 0-1.51.01-3.02.01-4.53s0-3.02-.01-4.53c.01-2.12.53-4.09 1.69-5.66 1.12-1.51 2.65-2.49 4.38-2.96 1.7-.45 3.4-.57 5.12-.52z"/></svg>
                        </SocialIcon>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-sm text-off-white/60">
                            &copy; {new Date().getFullYear()} Brian Etole. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;