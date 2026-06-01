import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler } from 'lucide-react';
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

const blogLinks: { to: string; label: string }[] = [
  { to: '/blog/lineal-10-cm-originalgroesse', label: 'Lineal 10 cm Originalgröße' },
  { to: '/blog/lineal-fuer-handy', label: 'Lineal für Handy' },
  { to: '/blog/massband-online', label: 'Maßband online' },
  { to: '/blog/wie-benutzt-man-ein-lineal', label: 'Wie benutzt man ein Lineal' },
  { to: '/blog/1-cm-in-mm', label: '1 cm in mm' },
  { to: '/blog/metrisches-system', label: 'Metrisches System' },
  { to: '/blog/mks-system', label: 'MKS-System' },
  { to: '/blog/klinometer', label: 'Klinometer' },
];

const Header: React.FC = () => {
  return (
    <header className="py-4 mb-6 border-b">
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
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[280px]">
                    {blogLinks.map((link) => (
                      <li key={link.to}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.to}
                            className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Mehr</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
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
