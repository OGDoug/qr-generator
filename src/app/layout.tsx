import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Free QR Code Generator — Create QR Codes Instantly',
  description:
    'Generate QR codes instantly for any URL or text. Free, no signup, no tracking. Download as PNG. Works offline.',
  keywords: ['QR code generator', 'free QR code', 'QR code maker', 'create QR code', 'download QR code PNG'],
  openGraph: {
    title: 'Free QR Code Generator — Create QR Codes Instantly',
    description: 'Generate QR codes instantly for any URL or text. Free, no signup, no tracking.',
    type: 'website',
    url: 'https://qr.get-billflow.vercel.app',
    siteName: 'QR Code Generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free QR Code Generator — Create QR Codes Instantly',
    description: 'Generate QR codes instantly for any URL or text. Free, no signup, no tracking.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  );
}
