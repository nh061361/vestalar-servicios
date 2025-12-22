
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.vestalar.es';

  // Prioritize commercial pages over legal ones
  const routes: { url: string; priority: number }[] = [
    { url: '', priority: 1.0 },
    { url: '/proyectos', priority: 0.9 },
    { url: '/quienes-somos', priority: 0.9 },
    { url: '/aviso-legal', priority: 0.5 },
    { url: '/politica-de-privacidad', priority: 0.5 },
    { url: '/politica-de-cookies', priority: 0.5 },
    { url: '/programa-fse-aragon', priority: 0.4 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}
