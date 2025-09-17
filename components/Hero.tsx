import Link from 'next/link';
import { ArrowRight, Play, Shield, Brain, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-gradient text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                AI-Powered Parental Control
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Study Sphere AI
                <span className="block text-primary-200 mt-2">
                  Intelligent Learning Platform
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Revolutionary fusion of AI tutoring and parental control that crushes digital 
                distractions while delivering instant learning support and collaborative tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  href="/auth/parent"
                  className="bg-white text-secondary-900 px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Get Started for Parents
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/auth/student"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary-900 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Student Access
                </Link>
              </div>

              {/* Key Features Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">AI Tutoring</div>
                    <div className="text-sm text-white/80">Step-by-step explanations</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">App Blocking</div>
                    <div className="text-sm text-white/80">Smart distraction control</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Group Study</div>
                    <div className="text-sm text-white/80">Collaborative learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1 animate-fade-in animation-delay-400">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  {/* Mock Dashboard */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Study Dashboard</div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/10 h-4 rounded-full overflow-hidden">
                      <div className="bg-primary-300 h-full w-3/4 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white/80">Focus Time: 45 minutes</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="text-xs text-white/60 mb-1">Blocked Apps</div>
                      <div className="text-lg font-semibold">12</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="text-xs text-white/60 mb-1">AI Sessions</div>
                      <div className="text-lg font-semibold">8</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary-300 p-3 rounded-lg animate-bounce-gentle">
                <Brain className="w-5 h-5 text-primary-900" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent-300 p-3 rounded-lg animate-bounce-gentle animation-delay-600">
                <Shield className="w-5 h-5 text-accent-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}