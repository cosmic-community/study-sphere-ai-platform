import { Benefit } from '@/types';
import { Users, GraduationCap, Zap, Heart } from 'lucide-react';

interface BenefitCardProps {
  benefit: Benefit;
}

const impactIcons = {
  social: Users,
  educational: GraduationCap,
  economic: Zap,
  environmental: Heart,
};

const impactColors = {
  social: 'text-blue-600 bg-blue-50',
  educational: 'text-green-600 bg-green-50',
  economic: 'text-yellow-600 bg-yellow-50',
  environmental: 'text-emerald-600 bg-emerald-50',
};

const audienceColors = {
  students: 'bg-primary-100 text-primary-800',
  parents: 'bg-accent-100 text-accent-800',
  teachers: 'bg-secondary-100 text-secondary-800',
  all: 'bg-gray-100 text-gray-800',
};

export default function BenefitCard({ benefit }: BenefitCardProps) {
  const impactKey = benefit.metadata?.impact_type?.key || 'educational';
  const audienceKey = benefit.metadata?.target_audience?.key || 'all';
  
  const IconComponent = impactIcons[impactKey] || GraduationCap;
  const colorClass = impactColors[impactKey] || impactColors.educational;
  const audienceColorClass = audienceColors[audienceKey] || audienceColors.all;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-secondary-100">
      {/* Icon */}
      <div className={`w-12 h-12 rounded-lg ${colorClass} flex items-center justify-center mb-4`}>
        <IconComponent className="w-6 h-6" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-secondary-900 mb-3">
        {benefit.metadata?.benefit_title || benefit.title}
      </h3>
      
      {benefit.metadata?.description && (
        <p className="text-secondary-600 leading-relaxed mb-4">
          {benefit.metadata.description}
        </p>
      )}
      
      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Target Audience */}
        {benefit.metadata?.target_audience && (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${audienceColorClass}`}>
            {benefit.metadata.target_audience.value}
          </span>
        )}
        
        {/* Impact Type */}
        {benefit.metadata?.impact_type && (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
            {benefit.metadata.impact_type.value} Impact
          </span>
        )}
      </div>
    </div>
  );
}