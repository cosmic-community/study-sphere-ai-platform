import { getBlogPosts } from '@/lib/api';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default async function BlogSection() {
  const posts = await getBlogPosts();
  const featuredPosts = posts.slice(0, 2);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Educational Insights
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Stay updated with the latest insights on educational technology, 
            parenting strategies, and learning methodologies.
          </p>
        </div>

        {featuredPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              >
                Read All Posts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-secondary-500 text-lg">
              Blog posts will be displayed here once content is available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}