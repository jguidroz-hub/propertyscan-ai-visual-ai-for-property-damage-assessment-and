import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PropertyScan AI - Visual AI for property damage assessment and maintenance',
  description: 'Value Proposition: Provides property managers and insurance companies with an AI tool to quickly analyze photos of property damage (e.g., leaks, cracks), recommend maintenance, or assist with preliminary claims assessment, saving time and costs.

Target Customer: Property management companies, real estate investors, home insurance providers, and home warranty companies.

---
Category: Micro-SaaS
Target Market: Property management companies, real estate investors, home insurance providers, and home warranty companies.
Source Hypothesis ID: c5a4aa1c-7c8f-4732-908d-15c87dbaffb8
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">PropertyScan AI - Visual AI for property damage assessment and maintenance</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
