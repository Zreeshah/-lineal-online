import type { RouteRecord } from 'vite-react-ssg';
import Root from './Root';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';
import LinealDrucken from './pages/LinealDrucken';
import BlogPost from './pages/BlogPost';
import { blogPostSlugs } from './data/blogPosts';

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Index, entry: 'src/pages/Index.tsx' },
      { path: 'ueber-uns', Component: About, entry: 'src/pages/About.tsx' },
      { path: 'kontakt', Component: Contact, entry: 'src/pages/Contact.tsx' },
      { path: 'datenschutz', Component: Privacy, entry: 'src/pages/Privacy.tsx' },
      { path: 'impressum', Component: Disclaimer, entry: 'src/pages/Disclaimer.tsx' },
      { path: 'lineal-drucken', Component: LinealDrucken, entry: 'src/pages/LinealDrucken.tsx' },
      {
        path: 'blog/:slug',
        Component: BlogPost,
        entry: 'src/pages/BlogPost.tsx',
        getStaticPaths: () => blogPostSlugs.map((slug) => `/blog/${slug}`),
      },
      { path: '*', Component: NotFound, entry: 'src/pages/NotFound.tsx' },
    ],
  },
];
