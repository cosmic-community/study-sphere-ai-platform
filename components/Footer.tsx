import Link from 'next/link';
import { GraduationCap, Mail, Shield, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold">Study Sphere AI</span>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Revolutionary AI-powered learning platform that combines intelligent 
              parental controls with adaptive tutoring and collaborative study environments.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product</h3>
            <div className="space-y-2">
              <Link href="/features" className="block text-secondary-300 hover:text-white transition-colors text-sm">
                Features
              </Link>
              <Link href="/benefits" className="block text-secondary-300 hover:text-white transition-colors text-sm">
                Benefits
              </Link>
              <Link href="/platform" className="block text-secondary-300 hover:text-white transition-colors text-sm">
                Platform
              </Link>
            </div>
          </div>

          {/* Users */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">For Users</h3>
            <div className="space-y-2">
              <Link href="/auth/parent" className="block text-secondary-300 hover:text-white transition-colors text-sm">
                Parents
              </Link>
              <Link href="/auth/student" className="block text-secondary-300 hover:text-white transition-colors text-sm">
                Students
              </Link>
              <Link href="/blog" className="block text-secondary-300 hover:text-white transition-colors text-sm">
                Resources
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-secondary-300 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@studysphere.ai</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-300 text-sm">
                <Shield className="w-4 h-4" />
                <span>Privacy & Security</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-300 text-sm">
                <Users className="w-4 h-4" />
                <span>Community Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Study Sphere AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}