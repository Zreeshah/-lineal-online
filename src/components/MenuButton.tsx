
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-ruler-primary hover:bg-gray-100">
          <Menu size={24} />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-ruler-primary">Menu</SheetTitle>
        </SheetHeader>
        <div className="py-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/"
              className="text-lg font-medium hover:text-ruler-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Strona Główna
            </Link>
            <Link
              to="/drukuj"
              className="text-lg font-medium hover:text-ruler-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Drukuj Linijkę
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Informacje</p>
            </div>
            <Link 
              to="/o-nas" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              O Nas
            </Link>
            <Link 
              to="/kontakt" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <Link 
              to="/privacy" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              {t('privacy')}
            </Link>
            <Link 
              to="/disclaimer" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              {t('disclaimer')}
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Blog</p>
            </div>
            <Link 
              to="/blog/system-metryczny" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              System Metryczny Dziesiętny
            </Link>
            <Link 
              to="/blog/system-mks" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              System MKS
            </Link>
            <Link 
              to="/blog/system-naturalny-jednostek" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Naturalny System Jednostek
            </Link>
            <Link 
              to="/blog/system-anglosaski-jednostek" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              System Anglosaski Jednostek
            </Link>
            <Link 
              to="/blog/klinometr" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Klinometr: Co To i Jak Używać
            </Link>
            <Link 
              to="/blog/miernik-glebokosci" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Miernik Głębokości: Co To i Jak Używać
            </Link>
            <Link 
              to="/blog/liczby-bezwymiarowe" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Liczby Bezwymiarowe
            </Link>
            <Link 
              to="/blog/jak-uzywac-linijki" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Jak Używać Linijki
            </Link>
            <Link 
              to="/blog/1-cm-ile-mm" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              1 cm ile mm
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuButton;
