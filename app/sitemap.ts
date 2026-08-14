import type { MetadataRoute } from 'next';
import { site, nav } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return nav.map((n) => ({
    url: `${site.url}${n.href === '/' ? '' : n.href}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: n.href === '/' ? 1 : 0.7,
  }));
}
