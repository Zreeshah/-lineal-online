import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, FileText, Monitor, Ruler } from 'lucide-react';
import MenuButton from './MenuButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const Header: React.FC = () => {
  return (
    <header className="mb-6 border-b border-gray-200 bg-white py-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center" aria-label="Lineal Online Startseite">
          <Ruler size={28} className="text-ruler-primary mr-2" />
          <span className="text-2xl font-bold text-ruler-primary">
            Lineal<span className="text-gray-800">.online</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={`${navigationMenuTriggerStyle()} px-4`}>
                  Startseite
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/lineal-drucken" className={`${navigationMenuTriggerStyle()} px-4`}>
                  Lineal drucken
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/blog"
                  className={`${navigationMenuTriggerStyle()} mx-1 gap-2 border border-purple-200 bg-purple-50 px-4 text-purple-800 hover:bg-purple-100 hover:text-purple-950`}
                >
                  <BookOpen size={16} />
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Mehr</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-4 w-[300px]">
                    <li className="px-3 pb-2 text-xs font-semibold uppercase text-muted-foreground">
                      Werkzeuge
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/zoll-in-cm-rechner" className="flex select-none items-center gap-3 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <Calculator size={18} aria-hidden="true" />
                          Zoll in cm Rechner
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/papierformate" className="flex select-none items-center gap-3 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <FileText size={18} aria-hidden="true" />
                          Papierformate
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/bildschirmgroesse-rechner" className="flex select-none items-center gap-3 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <Monitor size={18} aria-hidden="true" />
                          Bildschirmgröße Rechner
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="mt-2 border-t px-3 pb-1 pt-4 text-xs font-semibold uppercase text-muted-foreground">
                      Informationen
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/ueber-uns" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          Über uns
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
                        <Link to="/datenschutz" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          Datenschutz
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/impressum" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          Impressum
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
