'use client';

import { useState } from 'react';
import { AuthPage } from '@/types';
import { Mail, Lock, User, Eye, EyeOff, Shield } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface AuthFormProps {
  authPage: AuthPage;
  userType: 'parent' | 'student';
}

export default function AuthForm({ authPage, userType }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showMasterPassword, setShowMasterPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    masterPassword: '',
    name: '',
  });

  const isSignup = authPage.metadata?.page_type?.key === 'signup';
  const isParent = userType === 'parent';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in a real app, this would handle actual auth
    console.log('Form submitted:', { ...formData, userType });
    alert(`${userType} ${isSignup ? 'signup' : 'login'} functionality would be implemented here.`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-secondary-900">
          {authPage.metadata?.heading_text || 'Welcome'}
        </h2>
        {authPage.metadata?.subheading_text && (
          <p className="text-secondary-600 mt-2">
            {authPage.metadata.subheading_text}
          </p>
        )}
      </div>

      {/* Form Instructions */}
      {authPage.metadata?.form_instructions && (
        <div className="mb-8 p-4 bg-secondary-50 rounded-lg">
          <div className="prose prose-sm max-w-none">
            <ReactMarkdown>
              {authPage.metadata.form_instructions}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name field for signup */}
        {isSignup && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>
          </div>
        )}

        {/* Email field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-secondary-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-12 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Master Password field for parents during signup */}
        {isParent && isSignup && (
          <div>
            <label htmlFor="masterPassword" className="block text-sm font-medium text-secondary-700 mb-2">
              Master Password
            </label>
            <div className="relative">
              <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-500 w-5 h-5" />
              <input
                id="masterPassword"
                name="masterPassword"
                type={showMasterPassword ? 'text' : 'password'}
                required
                value={formData.masterPassword}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                placeholder="Create your master password"
              />
              <button
                type="button"
                onClick={() => setShowMasterPassword(!showMasterPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-400 hover:text-accent-600"
              >
                {showMasterPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <p className="text-xs text-accent-600 mt-1">
              This password controls app blocking and cannot be recovered if lost.
            </p>
          </div>
        )}

        {/* Security Notice */}
        {authPage.metadata?.security_notice && (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              {authPage.metadata.security_notice}
            </p>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="w-full btn-primary py-3 text-lg"
        >
          {isSignup ? `Create ${userType} Account` : `Sign In as ${userType}`}
        </button>

        {/* Links */}
        <div className="text-center space-y-2">
          {!isSignup ? (
            <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
              Forgot your password?
            </a>
          ) : (
            <p className="text-sm text-secondary-600">
              Already have an account?{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700">
                Sign in instead
              </a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}