import React from 'react';
import { Link } from 'react-router-dom';

const openCookieSettings = () => {
  if (typeof window === 'undefined') return;

  const googlefc = window.googlefc || { callbackQueue: [] };
  window.googlefc = googlefc;
  if (googlefc?.showRevocationMessage) {
    googlefc.showRevocationMessage();
    return;
  }

  googlefc.callbackQueue = googlefc.callbackQueue || [];
  googlefc.callbackQueue.push({
    CONSENT_API_READY: () => window.googlefc?.showRevocationMessage?.(),
  });
};

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t mt-10 bg-white">
      <div className="container">
        <nav aria-label="Werkzeuge" className="mb-5 flex flex-wrap justify-center gap-x-5 gap-y-2 border-b border-gray-100 pb-5">
          <Link to="/zoll-in-cm-rechner" className="text-sm text-ruler-primary hover:underline">
            Zoll in cm Rechner
          </Link>
          <Link to="/papierformate" className="text-sm text-ruler-primary hover:underline">
            Papierformate
          </Link>
          <Link to="/bildschirmgroesse-rechner" className="text-sm text-ruler-primary hover:underline">
            Bildschirmgröße Rechner
          </Link>
          <Link to="/lineal-drucken" className="text-sm text-ruler-primary hover:underline">
            Lineal drucken
          </Link>
        </nav>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">© 2026 Lineal Online. Alle Rechte vorbehalten.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link to="/ueber-uns" className="text-sm text-ruler-primary hover:underline">
              Über uns
            </Link>
            <Link to="/kontakt" className="text-sm text-ruler-primary hover:underline">
              Kontakt
            </Link>
            <Link to="/blog" className="text-sm text-ruler-primary hover:underline">
              Blog
            </Link>
            <Link to="/datenschutz" className="text-sm text-ruler-primary hover:underline">
              Datenschutz
            </Link>
            <Link to="/impressum" className="text-sm text-ruler-primary hover:underline">
              Impressum
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-sm text-ruler-primary hover:underline"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
