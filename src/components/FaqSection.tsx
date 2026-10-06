
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const faqKeys = [1, 2, 3, 4, 5, 6];

const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mt-12" aria-labelledby="homepage-faq-title">
      <h2 id="homepage-faq-title" className="text-2xl font-bold mb-4 text-ruler-primary">{t('faq')}</h2>
      <div className="divide-y divide-gray-200 border-y border-gray-200">
        {faqKeys.map((number) => (
          <div key={number} className="py-5">
            <h3 className="text-lg font-semibold text-gray-900">{t(`faqQuestion${number}`)}</h3>
            <p className="mt-2 leading-7 text-gray-700">{t(`faqAnswer${number}`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
