// app/blog/[slug]/page.tsx
import { getBlogPost, getBlogPosts } from '@/lib/api';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metadata?.title || post.title,
    description: post.metadata?.content?.substring(0, 160) || 'Study Sphere AI blog post',
    openGraph: {
      title: post.metadata?.title || post.title,
      description: post.metadata?.content?.substring(0, 160) || 'Study Sphere AI blog post',
      images: post.metadata?.featured_image?.imgix_url 
        ? [{ url: `${post.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress` }]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Back button */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {post.metadata?.featured_image && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img
                src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={post.metadata?.title || post.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}

          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              {post.metadata?.title || post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-secondary-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.created_at}>
                  {formatDate(post.created_at)}
                </time>
              </div>
              
              {post.metadata?.category && (
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.metadata.category.value}
                  </span>
                </div>
              )}
            </div>
          </header>

          {/* Post Content */}
          {post.metadata?.content && (
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-secondary-900 mt-8 mb-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-secondary-900 mt-6 mb-3">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-secondary-900 mt-4 mb-2">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-secondary-700 leading-relaxed mb-4">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-secondary-700">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-secondary-900">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-secondary-800">{children}</em>
                  ),
                }}
              >
                {post.metadata.content}
              </ReactMarkdown>
            </div>
          )}

          {/* Tags */}
          {post.metadata?.tags && (
            <div className="mt-12 pt-8 border-t border-secondary-200">
              <div className="flex items-center gap-2 text-sm text-secondary-600">
                <span>Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {post.metadata.tags.split(',').map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}