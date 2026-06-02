import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CalibrationProvider } from '@/contexts/CalibrationContext';

const queryClient = new QueryClient();

const Root: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <CalibrationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Outlet />
        </TooltipProvider>
      </CalibrationProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default Root;
