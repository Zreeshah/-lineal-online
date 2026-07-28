import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';
import { getRelatedArticles } from '@/utils/internalLinks';
import BlogFeaturedVisual from '@/components/BlogFeaturedVisual';

interface RelatedArticlesSectionProps {
  currentUrl: string;
}

const RelatedArticlesSection: React.FC<RelatedArticlesSectionProps> = ({ currentUrl }) => {
  const candidates = [
    ...getRelatedArticles(currentUrl, 9),
    ...blogPosts.map((post) => ({
      url: `/blog/${post.slug}`,
      title: post.title,
      keywords: post.keywords.split(',').map((keyword) => keyword.trim()),
    })),
  ];
  const seenUrls = new Set<string>();
  const relatedArticles = candidates
    .filter((article) => article.url.startsWith('/blog/') && article.url !== currentUrl)
    .filter((article) => {
      if (seenUrls.has(article.url)) return false;
      seenUrls.add(article.url);
      return true;
    })
    .slice(0, 3);

  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-bold uppercase text-purple-700">Weiterlesen</p>
          <h2 className="text-2xl font-black text-gray-950 sm:text-3xl">Passende Ratgeber</h2>
        </div>
        <Link to="/blog" className="hidden min-h-11 items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 sm:inline-flex">
          Alle Artikel
          <ArrowRight size={17} />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {relatedArticles.map((article) => {
          const slug = article.url.split('/').filter(Boolean).pop();
          const post = getBlogPostBySlug(slug);

          return (
            <Link
              key={article.url}
              to={article.url}
              className="group min-w-0 overflow-hidden rounded-md border border-gray-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-gray-100">
                {post ? (
                  <BlogFeaturedVisual post={post} compact />
                ) : (
                  <div className="flex h-full items-center justify-center bg-purple-50 text-purple-700">
                    <span className="text-sm font-bold">Lineal.online</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="line-clamp-3 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-purple-800">
                  {article.title}
                </h3>
                <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-purple-700">
                  Artikel lesen
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedArticlesSection;
