import { getAuthPage } from '@/lib/api';
import AuthForm from '@/components/AuthForm';
import { notFound } from 'next/navigation';

export default async function StudentAuthPage() {
  const authPage = await getAuthPage('student-login');

  if (!authPage) {
    notFound();
  }

  return (
    <div className="min-h-screen flex">
      {/* Background Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        {authPage.metadata?.background_image ? (
          <img
            src={`${authPage.metadata.background_image.imgix_url}?w=800&h=1200&fit=crop&auto=format,compress`}
            alt="Student Dashboard"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full hero-gradient" />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Focus & Learn</h1>
            <p className="text-xl opacity-90">
              Access your personalized study environment and AI tutoring
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          <AuthForm authPage={authPage} userType="student" />
        </div>
      </div>
    </div>
  );
}