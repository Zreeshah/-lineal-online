
// Internal links utility for SEO optimization
import React from 'react';

export type ArticleLink = {
  url: string;
  title: string;
  keywords: string[];
};

export const blogArticles: ArticleLink[] = [
  {
    url: "/",
    title: "Linijka Online w Rzeczywistym Rozmiarze - Wirtualna Linijka",
    keywords: ["linijka", "pomiary", "online", "wirtualna", "rzeczywisty rozmiar"]
  },
  {
    url: "/blog/jak-uzywac-linijki",
    title: "Jak Prawidłowo Używać Linijki",
    keywords: ["linijka", "pomiary", "instrukcja", "precyzja"]
  },
  {
    url: "/blog/1-cm-ile-mm",
    title: "1 cm ile mm - Przelicznik Jednostek",
    keywords: ["centymetr", "milimetr", "przelicznik", "jednostki"]
  }
];

export const getRelatedArticles = (currentUrl: string, count: number = 2): ArticleLink[] => {
  const currentArticle = blogArticles.find(article => article.url === currentUrl);
  
  if (!currentArticle) {
    const filtered = blogArticles.filter(article => article.url !== "/");
    return [blogArticles[0], ...filtered.slice(0, count - 1)];
  }
  
  const scored = blogArticles
    .filter(article => article.url !== currentUrl)
    .map(article => {
      const commonKeywords = article.keywords.filter(keyword => 
        currentArticle.keywords.includes(keyword)
      );
      return { article, score: commonKeywords.length };
    })
    .sort((a, b) => b.score - a.score);
  
  const homepage = blogArticles.find(article => article.url === "/");
  const relatedArticles = scored.map(item => item.article).slice(0, homepage && currentUrl !== "/" ? count - 1 : count);
  
  if (homepage && currentUrl !== "/") {
    relatedArticles.unshift(homepage);
  }
  
  return relatedArticles;
};

export const createContextualLink = (article: ArticleLink): string => {
  if (article.url === "/") {
    return 'Wypróbuj naszą <a href="/" class="text-blue-600 hover:underline">linijkę online</a> do precyzyjnych pomiarów na ekranie.';
  }
  return 'Dowiedz się więcej w naszym <a href="' + article.url + '" class="text-blue-600 hover:underline">artykule</a>.';
};
