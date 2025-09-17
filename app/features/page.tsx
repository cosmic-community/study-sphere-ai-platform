import { Suspense } from 'react';
import { getAppFeatures } from '@/lib/api';
import FeatureCard from '@/components/FeatureCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Brain, Shield, Users, BarChart3 } from 'lucide-react';

const categoryIcons = {
  ai_tutoring: Brain,
  parental_control: Shield,
  collaboration: Users,
  analytics: BarChart3,
};

export default async function FeaturesPage() {
  const features = await getAppFeatures();

  const groupedFeatures = features.reduce((acc, feature) => {
    const category = feature.metadata?.category?.key || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(feature);
    return acc;
  }, {} as Record<string, typeof features>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Powerful Features for Modern Learning
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover how Study Sphere AI revolutionizes education with intelligent 
            parental controls, adaptive AI tutoring, and immersive collaboration tools.
          </p>
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          <div className="space-y-16">
            {Object.entries(groupedFeatures).map(([categoryKey, categoryFeatures]) => {
              const IconComponent = categoryIcons[categoryKey as keyof typeof categoryIcons] || Brain;
              const categoryName = categoryFeatures[0]?.metadata?.category?.value || categoryKey;

              return (
                <div key={categoryKey} className="space-y-8">
                  <div className="flex items-center gap-3 justify-center">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                    <h2 className="text-3xl font-bold text-secondary-900">
                      {categoryName}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryFeatures.map((feature) => (
                      <FeatureCard key={feature.id} feature={feature} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Suspense>

        {features.length === 0 && (
          <div className="text-center py-16">
            <p className="text-secondary-500 text-lg">
              No features available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}