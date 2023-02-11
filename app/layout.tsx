import './globals.css';

import { Inter, Overpass } from '@next/font/google';

import PlausibleTracker from '@/ui/PlausibleTracker';
import { cn } from '@/lib/utils';

const title = Overpass({
  variable: '--font-title',
  subsets: ['latin'],
  weight: 'variable'
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: 'variable'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-grid-neutral-800/50 select-none bg-neutral-900 text-neutral-100',
        title.variable,
        inter.variable
      )}
    >
      <head>
        <PlausibleTracker />
      </head>
      <body>
        <main className="m-auto grid max-w-3xl grid-cols-6 gap-6 px-6 py-16">{children}</main>
      </body>
    </html>
  );
}
