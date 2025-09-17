import { getAppFeatures } from '@/lib/api';
import FeatureCard from '@/components/FeatureCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default async function FeaturesSection() {
  const features = await getAppFeatures();
  const highlightedFeatures = features.filter(
    feature => feature.metadata?.priority?.key === 'high'
  ).slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Powerful Features for Modern Learning
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover how Study Sphere AI revolutionizes education with cutting-edge 
            technology and intelligent systems designed for the digital age.
          </p>
        </div>

        {highlightedFeatures.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {highlightedFeatures.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              >
                Explore All Features
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-secondary-500 text-lg">
              Features will be displayed here once content is available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}