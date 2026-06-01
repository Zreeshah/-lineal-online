
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CalibrationProvider } from "@/contexts/CalibrationContext";
import { HelmetProvider } from "react-helmet-async";
import React, { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DrukujLinijke = lazy(() => import("./pages/DrukujLinijke"));
const JakUzywacLinijkiBlogPost = lazy(() => import("./pages/JakUzywacLinijkiBlogPost"));
const SystemMetrycznyBlogPost = lazy(() => import("./pages/SystemMetrycznyBlogPost"));
const SystemMKSBlogPost = lazy(() => import("./pages/SystemMKSBlogPost"));
const KlinometrBlogPost = lazy(() => import("./pages/KlinometrBlogPost"));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9b87f5]"></div>
  </div>
);

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <CalibrationProvider>
          <HelmetProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/kontakt" element={<Contact />} />
                    <Route path="/o-nas" element={<About />} />
                    <Route path="/drukuj" element={<DrukujLinijke />} />
                    <Route path="/blog/jak-uzywac-linijki" element={<JakUzywacLinijkiBlogPost />} />
                    <Route path="/blog/system-metryczny" element={<SystemMetrycznyBlogPost />} />
                    <Route path="/blog/system-mks" element={<SystemMKSBlogPost />} />
                    <Route path="/blog/klinometr" element={<KlinometrBlogPost />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </TooltipProvider>
          </HelmetProvider>
        </CalibrationProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
