'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/benefits', label: 'Benefits' },
    { href: '/platform', label: 'Platform' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-secondary-900">
              Study Sphere AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <Link
                href="/auth/student"
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                Student Login
              </Link>
              <Link
                href="/auth/parent"
                className="btn-primary"
              >
                Parent Signup
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary-600 hover:text-secondary-900 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-secondary-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 px-2">
                <Link
                  href="/auth/student"
                  className="text-center text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Student Login
                </Link>
                <Link
                  href="/auth/parent"
                  className="btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Parent Signup
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}