
import React from 'react';
import { getRelatedArticles } from '@/utils/internalLinks';

interface RelatedArticlesSectionProps {
  currentUrl: string;
}

const RelatedArticlesSection: React.FC<RelatedArticlesSectionProps> = ({ currentUrl }) => {
  const relatedArticles = getRelatedArticles(currentUrl, 3);
  
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-semibold mb-3">Artículos Relacionados</h3>
      <ul className="space-y-2">
        {relatedArticles.map((article, index) => (
          <li key={index}>
            <a 
              href={article.url} 
              className="text-blue-600 hover:underline flex items-center"
            >
              <span className="mr-2">•</span>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedArticlesSection;
