import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const blogLinks = [
  { to: '/blog/lineal-10-cm-originalgroesse', label: 'Lineal 10 cm Originalgröße' },
  { to: '/blog/lineal-fuer-handy', label: 'Lineal für Handy' },
  { to: '/blog/massband-online', label: 'Maßband online' },
  { to: '/blog/wie-benutzt-man-ein-lineal', label: 'Wie benutzt man ein Lineal' },
  { to: '/blog/1-cm-in-mm', label: '1 cm in mm' },
  { to: '/blog/metrisches-system', label: 'Metrisches System' },
  { to: '/blog/mks-system', label: 'MKS-System' },
  { to: '/blog/angloamerikanisches-system', label: 'Angloamerikanisches System' },
  { to: '/blog/natuerliches-einheitensystem', label: 'Natürliches Einheitensystem' },
  { to: '/blog/klinometer', label: 'Klinometer' },
  { to: '/blog/tiefenmesser', label: 'Tiefenmesser' },
  { to: '/blog/dimensionslose-zahlen', label: 'Dimensionslose Zahlen' },
];

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-ruler-primary hover:bg-gray-100" aria-label="Menü öffnen">
          <Menu size={24} />
          <span className="sr-only">Menü</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-ruler-primary">Menü</SheetTitle>
        </SheetHeader>
        <div className="py-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
          <nav className="flex flex-col space-y-1">
            <Link to="/" className="text-lg font-medium hover:text-ruler-primary py-2" onClick={() => setIsOpen(false)}>
              Startseite
            </Link>
            <Link to="/lineal-drucken" className="text-lg font-medium hover:text-ruler-primary py-2" onClick={() => setIsOpen(false)}>
              Lineal drucken
            </Link>

            <div className="pt-4 pb-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Informationen</p>
            </div>
            <Link to="/ueber-uns" className="text-base font-medium hover:text-ruler-primary py-2 pl-2" onClick={() => setIsOpen(false)}>
              Über uns
            </Link>
            <Link to="/kontakt" className="text-base font-medium hover:text-ruler-primary py-2 pl-2" onClick={() => setIsOpen(false)}>
              Kontakt
            </Link>
            <Link to="/datenschutz" className="text-base font-medium hover:text-ruler-primary py-2 pl-2" onClick={() => setIsOpen(false)}>
              Datenschutz
            </Link>
            <Link to="/impressum" className="text-base font-medium hover:text-ruler-primary py-2 pl-2" onClick={() => setIsOpen(false)}>
              Impressum
            </Link>

            <div className="pt-4 pb-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Blog</p>
            </div>
            {blogLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuButton;
