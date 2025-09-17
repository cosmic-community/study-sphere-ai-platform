import { AppFeature } from '@/types';
import { Brain, Shield, Users, BarChart3 } from 'lucide-react';

interface FeatureCardProps {
  feature: AppFeature;
}

const categoryIcons = {
  ai_tutoring: Brain,
  parental_control: Shield,
  collaboration: Users,
  analytics: BarChart3,
};

const categoryColors = {
  ai_tutoring: 'text-primary-600 bg-primary-50',
  parental_control: 'text-accent-600 bg-accent-50',
  collaboration: 'text-secondary-600 bg-secondary-50',
  analytics: 'text-emerald-600 bg-emerald-50',
};

export default function FeatureCard({ feature }: FeatureCardProps) {
  const categoryKey = feature.metadata?.category?.key || 'ai_tutoring';
  const IconComponent = categoryIcons[categoryKey] || Brain;
  const colorClass = categoryColors[categoryKey] || categoryColors.ai_tutoring;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-secondary-100">
      {/* Icon */}
      <div className={`w-12 h-12 rounded-lg ${colorClass} flex items-center justify-center mb-4`}>
        <IconComponent className="w-6 h-6" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-secondary-900 mb-3">
        {feature.metadata?.feature_name || feature.title}
      </h3>
      
      {feature.metadata?.description && (
        <p className="text-secondary-600 leading-relaxed mb-4">
          {feature.metadata.description}
        </p>
      )}
      
      {/* Category Badge */}
      {feature.metadata?.category && (
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
            {feature.metadata.category.value}
          </span>
          
          {/* Priority Indicator */}
          {feature.metadata?.priority && (
            <div className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${
                feature.metadata.priority.key === 'high' ? 'bg-red-400' :
                feature.metadata.priority.key === 'medium' ? 'bg-yellow-400' :
                'bg-green-400'
              }`}></div>
              <span className="text-xs text-secondary-500 capitalize">
                {feature.metadata.priority.value}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}