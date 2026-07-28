import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Printer, Ruler, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CanonicalLink from '@/components/CanonicalLink';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/data/blogPosts';

const BlogIndex: React.FC = () => {
  const metaTitle = 'Blog – Lineal online, Maßband & Umrechnung | Lineal.online';
  const metaDescription =
    'Alle Ratgeber zu Lineal online, Handy-Maßband, Kalibrierung, cm/mm/Zoll-Umrechnung, Schrauben, Ringen und Lineal zum Ausdrucken.';
  const categories = Array.from(new Set(blogPosts.map((post) => post.category || 'Ratgeber')));
  const featuredPosts = blogPosts.slice(-6).reverse();

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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50/50 via-white to-white">
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

      <main className="flex-1">
        <section className="container py-10 sm:py-14">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm">
              <BookOpen size={16} />
              Ratgeber & Messwissen
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Lineal.online Blog
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              Kurze, praktische Erklärungen zu Online-Linealen, Handy-Messungen, Kalibrierung und Umrechnung
              zwischen Zentimetern, Millimetern und Zoll.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
            <Link
              to="/"
              className="group flex items-center gap-3 rounded-lg border border-purple-100 bg-white p-4 shadow-sm transition hover:border-purple-300 hover:shadow-md"
            >
              <span className="rounded-md bg-purple-100 p-2 text-purple-700">
                <Ruler size={20} />
              </span>
              <span>
                <span className="block font-semibold text-gray-900">Online-Lineal</span>
                <span className="text-sm text-gray-500">Direkt messen</span>
              </span>
            </Link>
            <Link
              to="/lineal-drucken"
              className="group flex items-center gap-3 rounded-lg border border-purple-100 bg-white p-4 shadow-sm transition hover:border-purple-300 hover:shadow-md"
            >
              <span className="rounded-md bg-purple-100 p-2 text-purple-700">
                <Printer size={20} />
              </span>
              <span>
                <span className="block font-semibold text-gray-900">Lineal drucken</span>
                <span className="text-sm text-gray-500">A4-Vorlage</span>
              </span>
            </Link>
            <a
              href="#artikel"
              className="group flex items-center gap-3 rounded-lg border border-purple-100 bg-white p-4 shadow-sm transition hover:border-purple-300 hover:shadow-md"
            >
              <span className="rounded-md bg-purple-100 p-2 text-purple-700">
                <Search size={20} />
              </span>
              <span>
                <span className="block font-semibold text-gray-900">Alle Themen</span>
                <span className="text-sm text-gray-500">{blogPosts.length} Artikel</span>
              </span>
            </a>
          </div>
        </section>

        <section className="border-y border-purple-100 bg-white/70">
          <div className="container py-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Neue Mess-Ratgeber</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-purple-300 hover:shadow-md"
                >
                  <span className="mb-3 inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                    {post.category || 'Ratgeber'}
                  </span>
                  <h3 className="mb-2 text-lg font-bold leading-snug text-gray-900">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{post.summary || post.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="artikel" className="container py-10">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Alle Blogartikel</h2>
              <p className="mt-1 text-gray-600">Von Handy-Lineal bis Schraubenmessung: die komplette Themenbibliothek.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="h-full overflow-hidden border-gray-200 bg-white shadow-sm transition hover:border-purple-300 hover:shadow-md">
                <CardContent className="flex h-full flex-col p-0">
                  {post.heroImage && (
                    <img
                      src={post.heroImage}
                      alt={post.heroAlt}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-3 inline-flex w-fit rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                      {post.category || 'Ratgeber'}
                    </span>
                    <h3 className="mb-2 text-lg font-bold leading-snug text-gray-900">{post.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">{post.summary || post.metaDescription}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-auto inline-flex items-center gap-1 font-semibold text-purple-700 hover:text-purple-900"
                    >
                      Weiterlesen
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
