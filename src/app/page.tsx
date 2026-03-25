'use client';

import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';

const FEATURES = [
  { icon: '⚡', title: 'Instant Preview', desc: 'See your QR code update in real-time as you type.' },
  { icon: '📐', title: 'Custom Size', desc: 'Choose your preferred QR code size for any use case.' },
  { icon: '📥', title: 'Download PNG', desc: 'Export high-quality PNG images with one click.' },
  { icon: '🌐', title: 'Works Offline', desc: 'Everything runs in your browser. No internet needed after loading.' },
  { icon: '🔒', title: 'No Tracking', desc: "We don't collect, store, or track any of your data. Ever." },
  { icon: '🆓', title: '100% Free', desc: 'No signup, no limits, no hidden fees. Just QR codes.' },
];

export default function Home() {
  const [text, setText] = useState('');
  const [size, setSize] = useState(256);
  const [qrDataUrl, setQrDataUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!text.trim()) {
      setQrDataUrl('');
      return;
    }
    QRCode.toDataURL(text, {
      width: size,
      margin: 2,
      color: { dark: '#000000', light: '#ffffff' },
    }).then(setQrDataUrl).catch(() => setQrDataUrl(''));
  }, [text, size]);

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = 'qrcode.png';
    a.click();
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-emerald-400">QR</span> Generator
          </h1>
          <a
            href="https://get-billflow.vercel.app"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition"
          >
            by BillFlow
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Free QR Code Generator
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto">
              Create QR codes instantly for any URL or text. No signup, no tracking, no limits.
              Just paste and download.
            </p>
          </div>
        </section>

        {/* Generator */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Input side */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Text or URL
                    </label>
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="https://example.com"
                      rows={4}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Size: {size}px
                    </label>
                    <input
                      type="range"
                      min={128}
                      max={1024}
                      step={64}
                      value={size}
                      onChange={(e) => setSize(Number(e.target.value))}
                      className="w-full accent-emerald-500"
                    />
                    <div className="flex justify-between text-xs text-zinc-500 mt-1">
                      <span>128px</span>
                      <span>1024px</span>
                    </div>
                  </div>
                  <button
                    onClick={handleDownload}
                    disabled={!qrDataUrl}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white font-medium rounded-lg px-4 py-3 transition"
                  >
                    Download PNG
                  </button>
                </div>

                {/* Preview side */}
                <div className="flex items-center justify-center">
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt="Generated QR Code"
                      className="rounded-lg max-w-full"
                      style={{ width: Math.min(size, 300), height: Math.min(size, 300) }}
                    />
                  ) : (
                    <div className="w-48 h-48 bg-zinc-800 border-2 border-dashed border-zinc-700 rounded-lg flex items-center justify-center text-zinc-500 text-sm text-center px-4">
                      Enter text or URL to generate a QR code
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">Why use our QR Generator?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                >
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h4 className="font-semibold mb-1">{f.title}</h4>
                  <p className="text-sm text-zinc-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Cross-Promo */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-3">
            More Free Tools for Freelancers
          </h3>
          <p className="text-zinc-400 text-center mb-10 text-sm">
            Simple tools that save you hours. No signup, no fees.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="https://get-billflow.vercel.app"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors group"
            >
              <div className="text-3xl mb-3">📄</div>
              <h4 className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                BillFlow — Free Invoice Generator
              </h4>
              <p className="text-sm text-zinc-400">
                Create professional invoices, export PDFs, track payments. All in your browser.
              </p>
            </a>
            <a
              href="https://woodstockaie.gumroad.com"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors group"
            >
              <div className="text-3xl mb-3">🧰</div>
              <h4 className="font-semibold mb-1 group-hover:text-emerald-400 transition-colors">
                Freelancer Toolkit
              </h4>
              <p className="text-sm text-zinc-400">
                AI prompts, cold outreach templates, pricing guides, content calendars — all under $10.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="max-w-5xl mx-auto text-center text-sm text-zinc-500">
          <p>
            Built with ♥ by{' '}
            <a
              href="https://get-billflow.vercel.app"
              className="text-emerald-400 hover:text-emerald-300 transition"
            >
              BillFlow
            </a>
          </p>
          <p className="mt-1">Free forever. No tracking. No signup required.</p>
        </div>
      </footer>
    </div>
  );
}
