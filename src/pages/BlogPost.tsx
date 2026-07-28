import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, BookOpen } from 'lucide-react';
import RelatedArticlesSection from '@/components/RelatedArticlesSection';
import CanonicalLink from '@/components/CanonicalLink';
import BlogExtras from '@/components/BlogExtras';
import { getBlogPostBySlug } from '@/data/blogPosts';
import NotFound from '@/pages/NotFound';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);

  if (!post) return <NotFound />;

  const url = `https://lineal.onl/blog/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    inLanguage: 'de-DE',
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'Lineal.online' },
    publisher: {
      '@type': 'Organization',
      name: 'Lineal.online',
      url: 'https://lineal.onl/',
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50/40 via-white to-white">
      <Helmet>
        <title>{post.title} | Lineal.online</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <html lang="de" />
        <meta property="og:title" content={post.ogTitle || post.title} />
        <meta property="og:description" content={post.ogDescription || post.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="de_DE" />
        {post.heroImage && <meta property="og:image" content={`https://lineal.onl${post.heroImage}`} />}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <CanonicalLink />

      <Header />

      <main className="flex-grow py-8 sm:py-12">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center text-purple-700 mb-6 hover:text-purple-900 font-medium"
          >
            <ArrowLeft size={16} className="mr-1" />
            Zurück zur Startseite
          </Link>

          {/* Article header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm">
              <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-800 font-semibold px-3 py-1 rounded-full">
                <BookOpen size={14} />
                {post.category || 'Ratgeber'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-500">
                <Clock size={14} />
                {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">ca. 4 Min. Lesezeit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15] mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {post.metaDescription}
            </p>
          </header>

          {post.heroImage && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <img
                src={post.heroImage}
                alt={post.heroAlt}
                className="w-full h-auto object-cover max-h-[460px]"
                loading="eager"
              />
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 sm:p-10">
            {post.content}

            {!post.skipBlogExtras && <BlogExtras title={post.title} keywords={post.keywords} />}

            <RelatedArticlesSection currentUrl={`/blog/${post.slug}`} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
