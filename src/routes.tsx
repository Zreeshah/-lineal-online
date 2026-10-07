import type { RouteRecord } from 'vite-react-ssg';
import Root from './Root';
import { publicBlogPostSlugs } from './data/blogRouting';

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, lazy: async () => ({ Component: (await import('./pages/Index')).default }), entry: 'src/pages/Index.tsx' },
      { path: 'ueber-uns', lazy: async () => ({ Component: (await import('./pages/About')).default }), entry: 'src/pages/About.tsx' },
      { path: 'kontakt', lazy: async () => ({ Component: (await import('./pages/Contact')).default }), entry: 'src/pages/Contact.tsx' },
      { path: 'datenschutz', lazy: async () => ({ Component: (await import('./pages/Privacy')).default }), entry: 'src/pages/Privacy.tsx' },
      { path: 'impressum', lazy: async () => ({ Component: (await import('./pages/Disclaimer')).default }), entry: 'src/pages/Disclaimer.tsx' },
      { path: 'lineal-drucken', lazy: async () => ({ Component: (await import('./pages/LinealDrucken')).default }), entry: 'src/pages/LinealDrucken.tsx' },
      { path: 'zoll-in-cm-rechner', lazy: async () => ({ Component: (await import('./pages/ZollInCmRechner')).default }), entry: 'src/pages/ZollInCmRechner.tsx' },
      { path: 'papierformate', lazy: async () => ({ Component: (await import('./pages/Papierformate')).default }), entry: 'src/pages/Papierformate.tsx' },
      {
        path: 'bildschirmgroesse-rechner',
        lazy: async () => ({ Component: (await import('./pages/BildschirmgroesseRechner')).default }),
        entry: 'src/pages/BildschirmgroesseRechner.tsx',
      },
      { path: 'blog', lazy: async () => ({ Component: (await import('./pages/BlogIndex')).default }), entry: 'src/pages/BlogIndex.tsx' },
      {
        path: 'blog/:slug',
        lazy: async () => ({ Component: (await import('./pages/BlogPost')).default }),
        entry: 'src/pages/BlogPost.tsx',
        getStaticPaths: () => publicBlogPostSlugs.map((slug) => `/blog/${slug}`),
      },
      { path: '*', lazy: async () => ({ Component: (await import('./pages/NotFound')).default }), entry: 'src/pages/NotFound.tsx' },
    ],
  },
];
