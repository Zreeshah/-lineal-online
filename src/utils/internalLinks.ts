// Internal links utility for SEO optimisation (German content for lineal.onl)
import React from 'react';

export type ArticleLink = {
  url: string;
  title: string;
  keywords: string[];
};

export const blogArticles: ArticleLink[] = [
  {
    url: '/',
    title: 'Lineal online in Originalgröße – Virtuelles Lineal',
    keywords: ['lineal', 'lineal online', 'maßband online', 'lineal für handy', 'originalgröße'],
  },
  {
    url: '/blog/wie-benutzt-man-ein-lineal',
    title: 'Wie benutzt man ein Lineal richtig?',
    keywords: ['lineal', 'messen', 'anleitung', 'präzision'],
  },
  {
    url: '/blog/1-cm-in-mm',
    title: '1 cm in mm – Einheiten umrechnen',
    keywords: ['zentimeter', 'millimeter', 'umrechnen', 'einheiten', '1 centymetr'],
  },
  {
    url: '/blog/lineal-10-cm-originalgroesse',
    title: 'Lineal 10 cm in Originalgröße anzeigen',
    keywords: ['lineal 10 cm anzeigen', 'lineal 10 cm originalgröße', 'lineal online'],
  },
  {
    url: '/blog/lineal-fuer-handy',
    title: 'Lineal für Handy – Online messen auf dem Smartphone',
    keywords: ['lineal für handy', 'lineal online handy', 'mobile messen'],
  },
  {
    url: '/blog/massband-online',
    title: 'Maßband online – kostenlos in cm und mm messen',
    keywords: ['maßband online', 'maßband', 'messen'],
  },
  {
    url: '/blog/metrisches-system',
    title: 'Das metrische Dezimalsystem erklärt',
    keywords: ['metrisches system', 'einheiten', 'meter'],
  },
  {
    url: '/blog/mks-system',
    title: 'Das MKS-System (Meter, Kilogramm, Sekunde)',
    keywords: ['mks', 'einheiten', 'physik'],
  },
  {
    url: '/blog/angloamerikanisches-system',
    title: 'Das angloamerikanische Maßsystem',
    keywords: ['zoll', 'fuß', 'angloamerikanisch'],
  },
  {
    url: '/blog/natuerliches-einheitensystem',
    title: 'Das natürliche Einheitensystem',
    keywords: ['natürliche einheiten', 'physik'],
  },
  {
    url: '/blog/klinometer',
    title: 'Klinometer – Was ist das und wie benutzt man es?',
    keywords: ['klinometer', 'winkel messen'],
  },
  {
    url: '/blog/tiefenmesser',
    title: 'Tiefenmesser – Anwendung und Funktionsweise',
    keywords: ['tiefenmesser', 'messen'],
  },
  {
    url: '/blog/dimensionslose-zahlen',
    title: 'Dimensionslose Zahlen in der Physik',
    keywords: ['dimensionslos', 'physik'],
  },
];

export const getRelatedArticles = (currentUrl: string, count: number = 2): ArticleLink[] => {
  const currentArticle = blogArticles.find((article) => article.url === currentUrl);

  if (!currentArticle) {
    const filtered = blogArticles.filter((article) => article.url !== '/');
    return [blogArticles[0], ...filtered.slice(0, count - 1)];
  }

  const scored = blogArticles
    .filter((article) => article.url !== currentUrl)
    .map((article) => {
      const commonKeywords = article.keywords.filter((keyword) => currentArticle.keywords.includes(keyword));
      return { article, score: commonKeywords.length };
    })
    .sort((a, b) => b.score - a.score);

  const homepage = blogArticles.find((article) => article.url === '/');
  const relatedArticles = scored.map((item) => item.article).slice(0, homepage && currentUrl !== '/' ? count - 1 : count);

  if (homepage && currentUrl !== '/') {
    relatedArticles.unshift(homepage);
  }

  return relatedArticles;
};

export const createContextualLink = (article: ArticleLink): string => {
  if (article.url === '/') {
    return 'Probieren Sie unser <a href="/" class="text-blue-600 hover:underline">Lineal online</a> für präzise Messungen direkt auf dem Bildschirm.';
  }
  return 'Mehr dazu lesen Sie in unserem <a href="' + article.url + '" class="text-blue-600 hover:underline">Artikel</a>.';
};
