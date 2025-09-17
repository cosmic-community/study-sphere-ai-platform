import Link from 'next/link';
import { ArrowRight, Shield, Users } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Child's Learning?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of families who have already discovered the power of 
            AI-enhanced education with intelligent parental controls.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Parent CTA */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">For Parents</h3>
            <p className="text-white/80 mb-6">
              Take control of your child's digital environment with intelligent 
              app blocking, progress monitoring, and emergency override features.
            </p>
            <div className="space-y-3 mb-6 text-sm text-left">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span>Master password protection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span>Real-time progress reports</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span>Smart schedule management</span>
              </div>
            </div>
            <Link
              href="/auth/parent"
              className="bg-white text-secondary-900 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Start Parent Account
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Student CTA */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">For Students</h3>
            <p className="text-white/80 mb-6">
              Access personalized AI tutoring, collaborative study rooms, and 
              distraction-free learning environments designed for your success.
            </p>
            <div className="space-y-3 mb-6 text-sm text-left">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-300 rounded-full"></div>
                <span>AI-powered step-by-step help</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-300 rounded-full"></div>
                <span>Group study with friends</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-300 rounded-full"></div>
                <span>Curated learning resources</span>
              </div>
            </div>
            <Link
              href="/auth/student"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary-900 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Access Student Portal
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}