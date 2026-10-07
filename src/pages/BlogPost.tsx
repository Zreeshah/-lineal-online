import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import { Link, useParams } from 'react-router-dom';
import {
  BookOpen,
  CalendarDays,
  ChevronRight,
  Home,
  List,
  Ruler,
  UserRound,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedArticlesSection from '@/components/RelatedArticlesSection';
import CanonicalLink from '@/components/CanonicalLink';
import BlogFeaturedVisual from '@/components/BlogFeaturedVisual';
import { getBlogPostBySlug } from '@/data/blogPosts';
import { getReliableHeroImage } from '@/utils/blogImages';
import NotFound from '@/pages/NotFound';

type TocItem = {
  id: string;
  label: string;
};

const slugifyHeading = (value: string) =>
  value
    .toLocaleLowerCase('de-DE')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);
  const articleRef = React.useRef<HTMLDivElement>(null);
  const [tableOfContents, setTableOfContents] = React.useState<TocItem[]>([]);

  React.useEffect(() => {
    if (!articleRef.current) return;

    const usedIds = new Set<string>();
    const items = Array.from(articleRef.current.querySelectorAll<HTMLHeadingElement>('h2:not(#article-cta-title)')).map((heading) => {
      const baseId = heading.id || slugifyHeading(heading.textContent || 'abschnitt');
      let id = baseId;
      let suffix = 2;

      while (usedIds.has(id)) {
        id = `${baseId}-${suffix}`;
        suffix += 1;
      }

      usedIds.add(id);
      heading.id = id;
      return { id, label: heading.textContent || 'Abschnitt' };
    });

    setTableOfContents(items);
  }, [post?.slug]);

  if (!post) return <NotFound />;

  const url = `https://www.lineal.onl/blog/${post.slug}`;
  const reliableHeroImage = getReliableHeroImage(post);
  const shareImage = reliableHeroImage || '/lovable-uploads/online-lineal-messen.jpg';
  const authorName = post.author || 'Redaktion Lineal.online';
  const authorBio = post.authorBio ||
    'Die Redaktion von Lineal.online erstellt und prüft Anleitungen zu Bildschirmmessung, Kalibrierung und Einheitenumrechnung.';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    inLanguage: 'de-DE',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `https://www.lineal.onl${shareImage}`,
    author: {
      '@type': authorName === 'Redaktion Lineal.online' ? 'Organization' : 'Person',
      name: authorName,
      url: 'https://www.lineal.onl/ueber-uns',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lineal.online',
      url: 'https://www.lineal.onl/',
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://www.lineal.onl/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.lineal.onl/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#fbfbfa]">
      <Helmet>
        <title>{post.seoTitle || `${post.title} | Lineal.online`}</title>
        <meta name="description" content={post.metaDescription} />
        <html lang="de" />
        <meta property="og:title" content={post.ogTitle || post.title} />
        <meta property="og:description" content={post.ogDescription || post.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content={`https://www.lineal.onl${shareImage}`} />
        <meta name="twitter:title" content={post.ogTitle || post.title} />
        <meta name="twitter:description" content={post.ogDescription || post.metaDescription} />
        <meta name="twitter:image" content={`https://www.lineal.onl${shareImage}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <CanonicalLink />
      <Header />

      <main className="flex-grow pb-16">
        <div className="container max-w-7xl px-4 sm:px-6">
          <nav aria-label="Brotkrümelnavigation" className="mb-7 flex min-h-11 items-center gap-2 overflow-hidden text-sm text-gray-500">
            <Link to="/" className="inline-flex min-h-11 shrink-0 items-center gap-1.5 transition-colors hover:text-purple-700">
              <Home size={15} />
              Startseite
            </Link>
            <ChevronRight size={14} className="shrink-0 text-gray-300" />
            <Link to="/blog" className="inline-flex min-h-11 shrink-0 items-center transition-colors hover:text-purple-700">
              Blog
            </Link>
            <ChevronRight size={14} className="hidden shrink-0 text-gray-300 sm:block" />
            <span className="hidden truncate text-gray-700 sm:block">{post.title}</span>
          </nav>

          <article>
            <header className="mx-auto mb-10 max-w-5xl">
              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5 font-bold uppercase text-purple-700">
                  <BookOpen size={15} />
                  {post.category || 'Ratgeber'}
                </span>
                <span aria-hidden="true" className="text-gray-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={15} />
                  Veröffentlicht{' '}
                  {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                {post.updatedAt && (
                  <>
                    <span aria-hidden="true" className="text-gray-300">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      Aktualisiert{' '}
                      {new Date(post.updatedAt).toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </>
                )}
                <span aria-hidden="true" className="text-gray-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <UserRound size={15} />
                  {authorName}
                </span>
              </div>

              <h1 className="max-w-4xl text-3xl font-black leading-[1.12] text-gray-950 sm:text-5xl lg:text-[3.5rem]">
                {post.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl">
                {post.summary || post.metaDescription}
              </p>
            </header>

            <div className="mx-auto mb-12 aspect-[16/9] max-w-6xl overflow-hidden rounded-md border border-black/10 shadow-[0_18px_50px_rgba(29,24,38,0.12)] sm:aspect-[2/1]">
              <BlogFeaturedVisual post={post} priority />
            </div>

            <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,760px)_260px] lg:justify-between">
              <div ref={articleRef} className="blog-prose min-w-0">
                {post.content}

                <aside className="not-prose my-10 flex gap-4 rounded-md border border-purple-200 bg-purple-50/60 p-5" aria-label="Über die Redaktion">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                      <UserRound size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-purple-700">Redaktion</p>
                      <p className="mt-1 font-bold text-gray-950">{authorName}</p>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{authorBio}</p>
                      <Link to="/ueber-uns" className="mt-2 inline-block text-sm font-semibold text-purple-700 hover:underline">
                        Mehr über unsere Arbeitsweise
                      </Link>
                    </div>
                  </aside>

                {!post.hideArticleCta && (
                  <section className="article-cta" aria-labelledby="article-cta-title">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-100 text-purple-700">
                      <Ruler size={25} />
                    </div>
                    <div>
                      <h2 id="article-cta-title">Jetzt direkt am Bildschirm messen</h2>
                      <p>Öffnen Sie das kostenlose Online-Lineal, kalibrieren Sie die Skala und messen Sie in cm, mm oder Zoll.</p>
                      <Link to="/" className="article-cta-link">
                        Online-Lineal 1:1 starten
                        <ChevronRight size={17} />
                      </Link>
                    </div>
                  </section>
                )}
              </div>

              <aside className="hidden lg:block">
                <div className="sticky top-6 border-l border-gray-200 pl-6">
                  <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-gray-900">
                    <List size={16} className="text-purple-700" />
                    Inhaltsverzeichnis
                  </div>
                  <nav aria-label="Inhaltsverzeichnis">
                    <ol className="space-y-1">
                      {tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="block border-l-2 border-transparent py-1.5 pl-3 text-sm leading-5 text-gray-600 transition-colors hover:border-purple-500 hover:text-purple-800"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </aside>
            </div>
          </article>

          <section className="mx-auto mt-16 max-w-6xl border-t border-gray-200 pt-12">
            <RelatedArticlesSection currentUrl={`/blog/${post.slug}`} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
