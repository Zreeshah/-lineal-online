import type { BlogPostData } from '@/data/blogPosts';

const unreliableHeroImages = new Set([
  '/lovable-uploads/77d87cd2-00a5-424e-bf36-dc75ce21996e.jpg',
  '/lovable-uploads/6f49caed-ebfe-4019-9c87-44395c2b5eef.jpg',
  '/lovable-uploads/2bfee74f-0a29-4825-ba3c-d22d5a01c53d.jpg',
  '/lovable-uploads/6328a843-2738-47e0-a58d-69f6ab06586b.jpg',
  '/lovable-uploads/cb6e8a8e-753f-42a5-9096-0c85f9ac17d4.jpg',
  '/lovable-uploads/ac043476-ab03-4ce6-b0b3-942cb4d79ac5.jpg',
  '/lovable-uploads/c058baa5-0359-41f1-a81f-fdaeb13aa151.jpg',
  '/lovable-uploads/7f2b24cb-d011-4b17-aeb8-901c4b6b5fef.jpg',
  '/lovable-uploads/cfc618aa-7a76-41fd-b3e3-7680ab8f7538.jpg',
]);

export const getReliableHeroImage = (post: BlogPostData) =>
  post.heroImage && !unreliableHeroImages.has(post.heroImage) ? post.heroImage : undefined;
