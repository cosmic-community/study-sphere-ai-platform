import { BlogPost } from '@/types';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const cardClass = featured 
    ? "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-secondary-100 h-full"
    : "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-secondary-100";

  return (
    <article className={cardClass}>
      <Link href={`/blog/${post.slug}`} className="block h-full">
        {/* Featured Image */}
        {post.metadata?.featured_image && (
          <div className={`rounded-t-xl overflow-hidden ${featured ? 'h-48' : 'h-40'}`}>
            <img
              src={`${post.metadata.featured_image.imgix_url}?w=600&h=${featured ? '384' : '320'}&fit=crop&auto=format,compress`}
              alt={post.metadata?.title || post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          {/* Category */}
          {post.metadata?.category && (
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-primary-600" />
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.metadata.category.value}
              </span>
            </div>
          )}
          
          {/* Title */}
          <h3 className={`font-bold text-secondary-900 mb-3 ${featured ? 'text-xl' : 'text-lg'} hover:text-primary-600 transition-colors`}>
            {post.metadata?.title || post.title}
          </h3>
          
          {/* Excerpt */}
          {post.metadata?.content && (
            <p className="text-secondary-600 leading-relaxed mb-4 line-clamp-3">
              {post.metadata.content.substring(0, featured ? 200 : 120)}...
            </p>
          )}
          
          {/* Footer */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-secondary-500">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.created_at}>
                {formatDate(post.created_at)}
              </time>
            </div>
            
            <div className="flex items-center gap-1 text-primary-600 font-medium">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          
          {/* Tags */}
          {post.metadata?.tags && (
            <div className="mt-4 pt-4 border-t border-secondary-100">
              <div className="flex flex-wrap gap-2">
                {post.metadata.tags.split(',').slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary-100 text-secondary-600 px-2 py-1 rounded text-xs"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}