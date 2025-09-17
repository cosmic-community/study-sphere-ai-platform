import { Monitor, Smartphone, Tablet, Globe } from 'lucide-react';

export default function PlatformHero() {
  return (
    <section className="hero-gradient text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Comprehensive Learning Platform
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Explore the complete Study Sphere AI ecosystem with powerful dashboard controls, 
            immersive study environments, and intelligent learning tools designed for modern education.
          </p>
        </div>

        {/* Platform Coverage */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-3 mx-auto w-fit">
              <Monitor className="w-8 h-8" />
            </div>
            <div className="text-sm font-medium">Desktop</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-3 mx-auto w-fit">
              <Smartphone className="w-8 h-8" />
            </div>
            <div className="text-sm font-medium">Mobile Apps</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-3 mx-auto w-fit">
              <Tablet className="w-8 h-8" />
            </div>
            <div className="text-sm font-medium">Tablets</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-3 mx-auto w-fit">
              <Globe className="w-8 h-8" />
            </div>
            <div className="text-sm font-medium">Web Portal</div>
          </div>
        </div>
      </div>
    </section>
  );
}