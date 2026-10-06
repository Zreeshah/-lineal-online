
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const rulerSizes = [
  { size: 1 },
  { size: 5 },
  { size: 10, to: '/blog/lineal-10-cm-originalgroesse' },
  { size: 15 },
  { size: 20, to: '/blog/lineal-online-20-cm' },
  { size: 30, to: '/blog/lineal-30-cm-online' },
  { size: 50 },
  { size: 100 },
];

const RulerSizesTable: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-ruler-primary">{t('commonRulerSizes')}</h2>
      <ul className="grid grid-cols-2 overflow-hidden rounded-md border border-gray-200 bg-white sm:grid-cols-4">
        {rulerSizes.map(({ size, to }) => (
          <li key={size} className="border-b border-r border-gray-200 p-4 last:border-b-0 sm:[&:nth-last-child(-n+4)]:border-b-0">
            {to ? (
              <Link to={to} className="font-semibold text-purple-700 hover:text-purple-900 hover:underline">
                Lineal {size} cm
              </Link>
            ) : (
              <span className="font-semibold text-gray-800">Lineal {size} cm</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RulerSizesTable;
