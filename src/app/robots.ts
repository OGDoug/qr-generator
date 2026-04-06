import { MetadataRoute } from 'next';

const QR_SITE_URL = 'https://qrcode.tools.woodstockaie.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${QR_SITE_URL}/sitemap.xml`,
  };
}
