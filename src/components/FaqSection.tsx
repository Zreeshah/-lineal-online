
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-ruler-primary">{t('faq')}</h2>
      <Accordion type="single" collapsible className="bg-white rounded-md shadow">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4 hover:no-underline hover:bg-ruler-secondary font-medium">
            {t('faqQuestion1')}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            {t('faqAnswer1')}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="px-4 hover:no-underline hover:bg-ruler-secondary font-medium">
            {t('faqQuestion2')}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            {t('faqAnswer2')}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="px-4 hover:no-underline hover:bg-ruler-secondary font-medium">
            {t('faqQuestion3')}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            {t('faqAnswer3')}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
