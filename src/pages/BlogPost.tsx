import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft } from 'lucide-react';
import RelatedArticlesSection from '@/components/RelatedArticlesSection';
import CanonicalLink from '@/components/CanonicalLink';
import { getBlogPostBySlug } from '@/data/blogPosts';
import NotFound from '@/pages/NotFound';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);

  if (!post) return <NotFound />;

  const url = `https://lineal.online/blog/${post.slug}`;

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
      url: 'https://lineal.online/',
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title} | Lineal.online</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <html lang="de" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="de_DE" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <CanonicalLink />

      <Header />

      <main className="flex-grow py-6">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-ruler-primary mb-6 hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Zurück zur Startseite
          </Link>

          <div className="bg-white rounded-xl shadow-sm p-5 sm:p-8 mb-8">
            <div className="mb-6 flex items-center text-gray-500 text-sm">
              <Clock size={16} className="mr-1" />
              <span>Veröffentlicht: {new Date(post.publishedAt).toLocaleDateString('de-DE')}</span>
            </div>

            {post.content}

            <RelatedArticlesSection currentUrl={`/blog/${post.slug}`} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
