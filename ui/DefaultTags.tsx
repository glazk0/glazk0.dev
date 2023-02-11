'use client';

import { usePathname } from 'next/navigation';

import { getURL } from '@/lib/utils';

const meta = {
  title: 'glazk0 - Junior fullstack developer',
  description:
    "I' am a Junior fullstack developer from Belgium. I'm self-thaught and I'm always happy to help. Get more informations about me on my website."
};

export function DefaultTags() {
  const pathname = usePathname();
  const href = getURL(pathname!);
  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
      <link href="/icons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/icons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <link rel="canonical" href={href} />
      <meta name="author" content="glazk0" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@glazk0" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </>
  );
}
