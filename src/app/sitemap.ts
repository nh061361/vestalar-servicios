
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.vestalar.es';

  const staticRoutes = [
    '',
    '/proyectos',
    '/quienes-somos',
    '/aviso-legal',
    '/politica-de-privacidad',
    '/politica-de-cookies',
    '/programa-fse-aragon',
  ];

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
