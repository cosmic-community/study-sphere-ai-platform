import { Suspense } from 'react';
import { getBenefits } from '@/lib/api';
import BenefitCard from '@/components/BenefitCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Users, GraduationCap, Heart, Zap } from 'lucide-react';

const impactIcons = {
  social: Users,
  educational: GraduationCap,
  economic: Zap,
  environmental: Heart,
};

export default async function BenefitsPage() {
  const benefits = await getBenefits();

  const groupedBenefits = benefits.reduce((acc, benefit) => {
    const impact = benefit.metadata?.impact_type?.key || 'other';
    if (!acc[impact]) {
      acc[impact] = [];
    }
    acc[impact].push(benefit);
    return acc;
  }, {} as Record<string, typeof benefits>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Transform Learning Outcomes
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Experience the comprehensive benefits of Study Sphere AI across 
            social, educational, economic, and environmental dimensions.
          </p>
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          <div className="space-y-16">
            {Object.entries(groupedBenefits).map(([impactKey, impactBenefits]) => {
              const IconComponent = impactIcons[impactKey as keyof typeof impactIcons] || Zap;
              const impactName = impactBenefits[0]?.metadata?.impact_type?.value || impactKey;

              return (
                <div key={impactKey} className="space-y-8">
                  <div className="flex items-center gap-3 justify-center">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                    <h2 className="text-3xl font-bold text-secondary-900 capitalize">
                      {impactName} Impact
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {impactBenefits.map((benefit) => (
                      <BenefitCard key={benefit.id} benefit={benefit} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Suspense>

        {benefits.length === 0 && (
          <div className="text-center py-16">
            <p className="text-secondary-500 text-lg">
              No benefits information available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}