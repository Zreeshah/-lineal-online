import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t mt-10 bg-white">
      <div className="container">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
