import React from 'react';
import PageHeader from '../components/PageHeader';
import Testimonials from '../components/Testimonials';
import { TESTIMONIALS } from '../constants';
import { Page } from '../types';

interface TestimonialsPageProps {
    onNavigate: (page: Page) => void;
}

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
    return (
        <div className="bg-off-white">
            <PageHeader 
                title="Testimonials"
                description="Building relationships through impactful storytelling."
                breadcrumbs={[{ label: 'Home', page: 'Home' }, { label: 'Testimonials' }]}
                onNavigate={onNavigate}
            />
            <Testimonials testimonials={TESTIMONIALS} />
        </div>
    );
};

export default TestimonialsPage;