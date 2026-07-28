import React from 'react';
import {
  ArrowLeftRight,
  CreditCard,
  Maximize2,
  Monitor,
  MoveVertical,
  Printer,
  Ruler,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Wrench,
} from 'lucide-react';
import type { BlogPostData } from '@/data/blogPosts';
import { getReliableHeroImage } from '@/utils/blogImages';

interface BlogFeaturedVisualProps {
  post: BlogPostData;
  compact?: boolean;
  priority?: boolean;
}

const palettes = [
  { background: 'bg-[#e7f3ef]', ink: 'text-[#164e3d]', accent: 'bg-[#f4c95d]', line: 'border-[#79ad9b]' },
  { background: 'bg-[#f3eee6]', ink: 'text-[#5b3428]', accent: 'bg-[#e8875d]', line: 'border-[#c9a895]' },
  { background: 'bg-[#eaf0f8]', ink: 'text-[#183b66]', accent: 'bg-[#e8be4f]', line: 'border-[#91a9c6]' },
  { background: 'bg-[#f6e9ec]', ink: 'text-[#6d253d]', accent: 'bg-[#ef9d71]', line: 'border-[#c992a4]' },
  { background: 'bg-[#edf1e3]', ink: 'text-[#394b22]', accent: 'bg-[#d5a64c]', line: 'border-[#9cad76]' },
  { background: 'bg-[#edeaf5]', ink: 'text-[#3f3263]', accent: 'bg-[#8fc7b5]', line: 'border-[#a89bc2]' },
  { background: 'bg-[#f3eee2]', ink: 'text-[#3e4433]', accent: 'bg-[#d96c5f]', line: 'border-[#b3a98f]' },
  { background: 'bg-[#e8f2f2]', ink: 'text-[#244c50]', accent: 'bg-[#f0b85c]', line: 'border-[#82aeb0]' },
];

const hashSlug = (slug: string) =>
  slug.split('').reduce((total, character) => total + character.charCodeAt(0), 0);

const getVisualKind = (slug: string) => {
  if (slug.includes('handy') || slug.includes('telefon')) return 'phone';
  if (slug.includes('druck')) return 'print';
  if (slug.includes('kalibrier') || slug.includes('genau')) return 'calibration';
  if (slug.includes('karte')) return 'card';
  if (slug.includes('ring')) return 'ring';
  if (slug.includes('schraube')) return 'screw';
  if (slug.includes('bildschirm') || slug.includes('zoll')) return 'screen';
  if (slug.includes('vertikal')) return 'vertical';
  if (slug.includes('-in-')) return 'conversion';
  return 'ruler';
};

const VisualObject = ({ kind, ink }: { kind: string; ink: string }) => {
  const iconClass = `h-16 w-16 sm:h-20 sm:w-20 ${ink}`;

  switch (kind) {
    case 'phone':
      return (
        <div className="relative flex h-36 w-24 items-center justify-center rounded-[18px] border-[5px] border-current bg-white/65 shadow-sm">
          <Smartphone className={`h-16 w-16 ${ink}`} strokeWidth={1.5} />
          <div className="absolute right-2 top-4 h-24 w-2 border-r-2 border-current ruler-ticks-vertical" />
        </div>
      );
    case 'print':
      return (
        <div className="relative flex h-36 w-28 items-center justify-center border border-current bg-white/80 shadow-sm">
          <Printer className={iconClass} strokeWidth={1.4} />
          <div className="absolute bottom-3 left-3 right-3 h-4 border-b-2 border-current ruler-ticks-horizontal" />
        </div>
      );
    case 'card':
      return (
        <div className="relative flex aspect-[1.586/1] w-40 items-center justify-center rounded-md border-2 border-current bg-white/70 shadow-sm">
          <CreditCard className={iconClass} strokeWidth={1.4} />
          <span className="absolute bottom-2 right-3 text-[10px] font-bold">85,60 mm</span>
        </div>
      );
    case 'ring':
      return (
        <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[12px] border-current bg-white/60 shadow-sm">
          <ScanLine className={`absolute h-16 w-16 ${ink}`} strokeWidth={1.5} />
          <span className="absolute -bottom-7 whitespace-nowrap text-xs font-bold">Innenmaß in mm</span>
        </div>
      );
    case 'screw':
      return (
        <div className="relative flex h-32 w-44 items-center justify-center border-b-2 border-current ruler-ticks-horizontal">
          <Wrench className={`h-20 w-20 -rotate-45 ${ink}`} strokeWidth={1.5} />
        </div>
      );
    case 'screen':
      return (
        <div className="relative flex h-28 w-44 items-center justify-center rounded-md border-[5px] border-current bg-white/65 shadow-sm">
          <Monitor className={iconClass} strokeWidth={1.4} />
          <Maximize2 className={`absolute h-20 w-28 ${ink}`} strokeWidth={1.4} />
        </div>
      );
    case 'vertical':
      return (
        <div className="relative flex h-40 w-20 items-center justify-center border-l-4 border-current bg-white/55 ruler-ticks-vertical">
          <MoveVertical className={iconClass} strokeWidth={1.4} />
        </div>
      );
    case 'conversion':
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-20 w-20 items-center justify-center border-2 border-current bg-white/70 text-xl font-black">cm</div>
          <ArrowLeftRight className={`h-9 w-9 ${ink}`} />
          <div className="flex h-20 w-20 items-center justify-center border-2 border-current bg-white/70 text-xl font-black">mm</div>
        </div>
      );
    case 'calibration':
      return (
        <div className="relative flex h-32 w-44 items-center justify-center border-2 border-current bg-white/65 shadow-sm">
          <ShieldCheck className={iconClass} strokeWidth={1.4} />
          <div className="absolute bottom-2 left-3 right-3 h-4 border-b-2 border-current ruler-ticks-horizontal" />
        </div>
      );
    default:
      return (
        <div className="relative flex h-32 w-48 items-center justify-center border-b-4 border-current bg-white/55 ruler-ticks-horizontal">
          <Ruler className={iconClass} strokeWidth={1.4} />
        </div>
      );
  }
};

const BlogFeaturedVisual: React.FC<BlogFeaturedVisualProps> = ({ post, compact = false, priority = false }) => {
  const reliableHeroImage = getReliableHeroImage(post);
  const useEditorialArt = post.skipBlogExtras || !reliableHeroImage;

  if (!useEditorialArt && reliableHeroImage) {
    return (
      <img
        src={reliableHeroImage}
        alt={post.heroAlt}
        className="h-full w-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        width={1200}
        height={760}
      />
    );
  }

  const palette = palettes[hashSlug(post.slug) % palettes.length];
  const visualKind = getVisualKind(post.slug);

  return (
    <div
      role="img"
      aria-label={post.heroAlt}
      className={`relative flex h-full w-full overflow-hidden ${palette.background} ${palette.ink}`}
    >
      <div className={`absolute inset-x-0 top-0 h-7 border-b ${palette.line} ruler-ticks-horizontal opacity-70`} />
      <div className={`absolute bottom-0 left-0 top-0 w-7 border-r ${palette.line} ruler-ticks-vertical opacity-70`} />

      <div className={`absolute right-5 top-5 h-8 w-8 ${palette.accent}`} />
      <div className={`absolute bottom-5 right-5 h-3 w-20 ${palette.accent}`} />

      <div className={`relative z-10 grid w-full items-center gap-4 ${compact ? 'grid-cols-[1fr_auto] p-6' : 'grid-cols-1 p-9 sm:grid-cols-[1fr_1.1fr] sm:p-12'}`}>
        <div className={compact ? 'min-w-0' : 'max-w-md'}>
          <p className="mb-3 text-xs font-bold uppercase text-current">{post.category || 'Messwissen'}</p>
          <p className={`${compact ? 'line-clamp-3 text-lg' : 'text-2xl sm:text-4xl'} max-w-lg font-black leading-tight`}>
            {post.title}
          </p>
          {!compact && <p className="mt-4 text-sm font-semibold opacity-75">Lineal.online Ratgeber</p>}
        </div>
        <div className={`flex items-center justify-center ${compact ? 'scale-75' : ''}`} aria-hidden="true">
          <VisualObject kind={visualKind} ink={palette.ink} />
        </div>
      </div>
    </div>
  );
};

export default BlogFeaturedVisual;
