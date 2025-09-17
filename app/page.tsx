import { Suspense } from 'react';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <BenefitsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <BlogSection />
      </Suspense>
      
      <CTASection />
    </>
  );
}