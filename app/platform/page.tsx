import { Suspense } from 'react';
import { getDashboardComponents, getStudyLibraries, getVirtualClassrooms } from '@/lib/api';
import PlatformHero from '@/components/PlatformHero';
import DashboardShowcase from '@/components/DashboardShowcase';
import StudyEnvironments from '@/components/StudyEnvironments';
import LoadingSpinner from '@/components/LoadingSpinner';

export default async function PlatformPage() {
  const [dashboardComponents, studyLibraries, virtualClassrooms] = await Promise.all([
    getDashboardComponents(),
    getStudyLibraries(),
    getVirtualClassrooms(),
  ]);

  return (
    <div className="min-h-screen">
      <PlatformHero />
      
      <Suspense fallback={<LoadingSpinner />}>
        <DashboardShowcase components={dashboardComponents} />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <StudyEnvironments 
          libraries={studyLibraries} 
          classrooms={virtualClassrooms} 
        />
      </Suspense>
    </div>
  );
}