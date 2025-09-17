import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner />
        <p className="text-secondary-600 mt-4">Loading Study Sphere AI...</p>
      </div>
    </div>
  );
}