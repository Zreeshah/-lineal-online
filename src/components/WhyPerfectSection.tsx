
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const WhyPerfectSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-ruler-primary">{t('whyPerfect')}</h2>
      <Card className="bg-white h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{t('whyPerfect')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex">
              <Check className="text-green-500 mr-2 shrink-0" size={20} />
              <span>{t('whyPerfectItem1')}</span>
            </li>
            <li className="flex">
              <Check className="text-green-500 mr-2 shrink-0" size={20} />
              <span>{t('whyPerfectItem2')}</span>
            </li>
            <li className="flex">
              <Check className="text-green-500 mr-2 shrink-0" size={20} />
              <span>{t('whyPerfectItem3')}</span>
            </li>
            <li className="flex">
              <Check className="text-green-500 mr-2 shrink-0" size={20} />
              <span>Regla digital con múltiples unidades (cm, mm, pulgadas)</span>
            </li>
            <li className="flex">
              <Check className="text-green-500 mr-2 shrink-0" size={20} />
              <span>Regla tamaño real con calibración para medidas exactas</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default WhyPerfectSection;
