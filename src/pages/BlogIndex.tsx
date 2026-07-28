import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CalendarDays, Ruler } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CanonicalLink from '@/components/CanonicalLink';
import BlogFeaturedVisual from '@/components/BlogFeaturedVisual';
import { blogPosts } from '@/data/blogPosts';

const BlogIndex: React.FC = () => {
  const metaTitle = 'Blog – Lineal online, Maßband & Umrechnung | Lineal.online';
  const metaDescription =
    'Alle Ratgeber zu Lineal online, Handy-Maßband, Kalibrierung, cm/mm/Zoll-Umrechnung, Schrauben, Ringen und Lineal zum Ausdrucken.';
  const featuredPost =
    blogPosts.find((post) => post.slug === 'handy-als-massband') ||
    blogPosts[blogPosts.length - 1];
  const sortedPosts = [...blogPosts]
    .filter((post) => post.slug !== featuredPost.slug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Lineal.online Blog',
    description: metaDescription,
    url: 'https://lineal.onl/blog',
    inLanguage: 'de-DE',
    mainEntity: blogPosts.map((post) => ({
      '@type': 'Article',
      headline: post.title,
      url: `https://lineal.onl/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#fbfbfa]">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="lineal online blog, maßband online, cm in mm, lineal für handy" />
        <html lang="de" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://lineal.onl/blog" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>
      <CanonicalLink />

      <Header />

      <main className="flex-1 pb-16">
        <section className="container max-w-7xl px-4 pb-10 pt-5 sm:px-6 sm:pb-14 sm:pt-9">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase text-purple-700">
              <BookOpen size={17} />
              Messwissen & Werkzeuge
            </div>
            <h1 className="text-4xl font-black leading-tight text-gray-950 sm:text-6xl">
              Blog über Messen und Online-Lineale
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Klare Anleitungen, Umrechnungstabellen und praktische Tipps für Messungen am Bildschirm,
              Kalibrierung und druckbare Lineale.
            </p>
          </div>

          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group mt-10 grid overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 lg:grid-cols-[1.35fr_1fr]"
          >
            <div className="aspect-[16/10] min-h-0 overflow-hidden border-b border-gray-200 lg:aspect-auto lg:border-b-0 lg:border-r">
              <BlogFeaturedVisual post={featuredPost} priority />
            </div>
            <article className="flex flex-col justify-center p-7 sm:p-10">
              <span className="mb-4 text-sm font-bold uppercase text-purple-700">Ausgewählter Artikel</span>
              <h2 className="text-2xl font-black leading-tight text-gray-950 sm:text-4xl">{featuredPost.title}</h2>
              <p className="mt-4 line-clamp-3 text-base leading-7 text-gray-600">
                {featuredPost.summary || featuredPost.metaDescription}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} />
                  {new Date(featuredPost.publishedAt).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="inline-flex min-h-11 items-center gap-2 font-bold text-purple-700">
                  Artikel lesen
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          </Link>
        </section>

        <section className="border-t border-gray-200 bg-white py-12 sm:py-16" aria-labelledby="all-posts-title">
          <div className="container max-w-7xl px-4 sm:px-6">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-bold uppercase text-purple-700">Bibliothek</p>
                <h2 id="all-posts-title" className="text-3xl font-black text-gray-950 sm:text-4xl">Alle Artikel</h2>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500">
                <Ruler size={16} />
                {blogPosts.length} Ratgeber
              </span>
            </div>

            <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {sortedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group min-w-0 overflow-hidden rounded-md border border-gray-200 bg-[#fbfbfa] transition duration-200 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                >
                  <article className="flex h-full flex-col">
                    <div className="aspect-[16/10] overflow-hidden border-b border-gray-200">
                      <BlogFeaturedVisual post={post} compact />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="mb-3 text-xs font-bold uppercase text-purple-700">
                        {post.category || 'Ratgeber'}
                      </span>
                      <h3 className="line-clamp-3 text-xl font-black leading-snug text-gray-950 transition-colors group-hover:text-purple-800">
                        {post.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.summary || post.metaDescription}
                      </p>
                      <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-sm">
                        <time dateTime={post.publishedAt} className="text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </time>
                        <span className="inline-flex min-h-11 items-center gap-2 font-bold text-purple-700">
                          Mehr
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
