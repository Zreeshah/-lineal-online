
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const RulerSizesTable: React.FC = () => {
  const { t } = useLanguage();
  
  // Generate rows from 1cm to 100cm
  const generateTableRows = () => {
    const rows = [];
    for (let i = 0; i < 10; i++) {
      const leftStartNum = i * 10 + 1;
      const rightStartNum = i * 10 + 51;
      
      rows.push(
        <TableRow key={`row-${i}`}>
          <TableCell className="border px-4 py-2">{t('rulerOf')} {leftStartNum} cm</TableCell>
          <TableCell className="border px-4 py-2">{t('rulerOf')} {rightStartNum} cm</TableCell>
        </TableRow>
      );
      
      for (let j = 1; j < 10; j++) {
        rows.push(
          <TableRow key={`row-${i}-${j}`}>
            <TableCell className="border px-4 py-2">{t('rulerOf')} {leftStartNum + j} cm</TableCell>
            <TableCell className="border px-4 py-2">{t('rulerOf')} {rightStartNum + j} cm</TableCell>
          </TableRow>
        );
      }
    }
    return rows;
  };
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-ruler-primary">{t('commonRulerSizes')}</h2>
      <div className="overflow-x-auto">
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow>
              <TableHead className="border bg-gray-50 px-4 py-2 w-1/2">{t('smallRulers')}</TableHead>
              <TableHead className="border bg-gray-50 px-4 py-2 w-1/2">{t('largeRulers')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {generateTableRows()}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default RulerSizesTable;
