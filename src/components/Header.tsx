
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="py-4 mb-6 border-b">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Ruler size={28} className="text-ruler-primary mr-2" />
          <span className="text-2xl font-bold text-ruler-primary">Linijka<span className="text-gray-800">-Online</span></span>
        </Link>
        
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={`${navigationMenuTriggerStyle()} px-4`}>
                  Strona Główna
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/drukuj" className={`${navigationMenuTriggerStyle()} px-4`}>
                  Drukuj Linijkę
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[250px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/system-metryczny" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          System Metryczny Dziesiętny
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/system-mks" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          System MKS
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/system-naturalny-jednostek" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Naturalny System Jednostek
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/system-anglosaski-jednostek" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          System Anglosaski Jednostek
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/klinometr" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Klinometr: Co To i Jak Używać
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/miernik-glebokosci" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Miernik Głębokości: Co To i Jak Używać
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/liczby-bezwymiarowe" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Liczby Bezwymiarowe
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/jak-uzywac-linijki" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Jak Używać Linijki
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/1-cm-ile-mm" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          1 cm ile mm
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Więcej</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/o-nas" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          O Nas
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/kontakt" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          Kontakt
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/privacy" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          {t('privacy')}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/disclaimer" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          {t('disclaimer')}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex md:hidden items-center">
          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
