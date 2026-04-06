import { MetadataRoute } from 'next';

const QR_SITE_URL = 'https://qrcode.tools.woodstockaie.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: QR_SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
