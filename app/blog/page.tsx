import { Suspense } from 'react';
import { getBlogPosts } from '@/lib/api';
import BlogCard from '@/components/BlogCard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Educational Insights & Updates
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Stay informed with the latest in educational technology, parenting strategies, 
            and learning methodologies from our expert team.
          </p>
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-secondary-500 text-lg">
                No blog posts available at the moment.
              </p>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}