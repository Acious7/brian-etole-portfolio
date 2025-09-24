import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 sm:py-32 bg-olive">
             <div className="container mx-auto px-6">
                <header className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold font-serif text-off-white">
                        <span className="heading-line"><span>Contact Me</span></span>
                    </h2>
                    <p className="text-lg text-off-white/70 mt-4 max-w-2xl mx-auto">
                        Let's create something meaningful together.
                    </p>
                </header>
                <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 bg-charcoal/20 p-8 md:p-12 border border-white/10">
                    {/* Contact Form */}
                    <div className="md:col-span-3">
                        <h3 className="text-3xl font-bold font-serif text-off-white mb-6">Send a Message</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name-contact" className="text-sm font-semibold text-off-white/80 block mb-2">Your Name</label>
                                    <input type="text" id="name-contact" name="name" required className="w-full bg-black/20 text-off-white px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="email-contact" className="text-sm font-semibold text-off-white/80 block mb-2">Your Email</label>
                                    <input type="email" id="email-contact" name="email" required className="w-full bg-black/20 text-off-white px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="message-contact" className="text-sm font-semibold text-off-white/80 block mb-2">Message</label>
                                    <textarea id="message-contact" name="message" rows={5} required className="w-full bg-black/20 text-off-white px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"></textarea>
                                </div>
                                 <button
                                    type="submit"
                                    className="group relative w-full inline-block text-base font-semibold tracking-wider uppercase text-charcoal py-3 px-8 transition-colors duration-300 border border-gold bg-gold hover:bg-amber"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="md:col-span-2 text-off-white/80">
                        <h3 className="text-3xl font-bold font-serif text-off-white mb-6">Contact Info</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-gold uppercase text-sm tracking-widest">Email</h4>
                                <a href="mailto:brian.etole@example.com" className="hover:text-amber transition-colors">brian.etole@example.com</a>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gold uppercase text-sm tracking-widest">Phone</h4>
                                <p>+254 700 123 456</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gold uppercase text-sm tracking-widest">Location</h4>
                                <p>Nairobi, Kenya</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gold uppercase text-sm tracking-widest">Follow Me</h4>
                                <div className="flex space-x-4 mt-2">
                                     <a href="#" aria-label="Twitter" className="hover:text-amber transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 5.636a8.87 8.87 0 01-2.54.696 4.444 4.444 0 001.942-2.446 8.89 8.89 0 01-2.806 1.072 4.436 4.436 0 00-7.554 4.042A12.58 12.58 0 013.254 4.89a4.436 4.436 0 001.373 5.922 4.42 4.42 0 01-2.008-.553v.056c0 2.16 1.536 3.96 3.578 4.368a4.44 4.44 0 01-2.002.076 4.436 4.436 0 004.14 3.078 8.898 8.898 0 01-5.508 1.9A9.23 9.23 0 012 18.337a12.52 12.52 0 006.786 1.99c8.14 0 12.59-6.746 12.59-12.59 0-.19-.004-.38-.012-.57a8.96 8.96 0 002.19-2.275z" /></svg></a>
                                     <a href="#" aria-label="Instagram" className="hover:text-amber transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.067.06 1.407.06 4.155s-.012 3.088-.06 4.155c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.067.048-1.407.06-4.155.06s-3.088-.012-4.155-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427C2.013 15.39 2 15.046 2 12.298s.013-3.088.06-4.155c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.316 2.427-.364C8.93 2.013 9.27 2 11.702 2h.613zM12 4.877c-2.85 0-5.158 2.29-5.158 5.123s2.308 5.123 5.158 5.123 5.158-2.29 5.158-5.123S14.85 4.877 12 4.877zm0 8.242c-1.722 0-3.118-1.383-3.118-3.104S10.278 6.9 12 6.9s3.118 1.383 3.118 3.104-.001 3.115-3.118 3.115zM16.949 7.032c-.75 0-1.356.6-1.356 1.344s.606 1.344 1.356 1.344c.75 0 1.356-.6 1.356-1.344s-.606-1.344-1.356-1.344z" clipRule="evenodd" /></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
