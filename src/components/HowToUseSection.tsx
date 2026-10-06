// HowToUseSection component
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const HowToUseSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-ruler-primary">{t('howToUse')}</h2>
      <Card className="bg-white h-full">
        <CardContent className="pt-6">
          <ul className="space-y-2 list-disc pl-5">
            <li>{t('howToUseStep1')}</li>
            <li>{t('howToUseStep2')}</li>
            <li>{t('howToUseStep3')}</li>
            <li>{t('howToUseStep4')}</li>
            <li>{t('useCase1Description')}</li>
            <li>{t('useCase4Description')}</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default HowToUseSection;
