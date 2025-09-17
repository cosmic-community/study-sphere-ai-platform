import { getBenefits } from '@/lib/api';
import BenefitCard from '@/components/BenefitCard';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default async function BenefitsSection() {
  const benefits = await getBenefits();
  const featuredBenefits = benefits.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Proven Impact
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Transform Learning Outcomes
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Experience measurable improvements across academic performance, 
            family dynamics, and educational costs with Study Sphere AI.
          </p>
        </div>

        {featuredBenefits.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredBenefits.map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/benefits"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              >
                View All Benefits
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-secondary-500 text-lg">
              Benefits information will be displayed here once content is available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}