import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Head as Helmet } from 'vite-react-ssg';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof console !== 'undefined') {
      console.error('404: route not found:', location.pathname);
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Seite nicht gefunden – Lineal.online</title>
        <meta name="robots" content="noindex" />
        <html lang="de" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-4">Hoppla! Diese Seite wurde nicht gefunden.</p>
            <Link to="/" className="text-ruler-primary hover:underline">
              Zurück zur Startseite
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
