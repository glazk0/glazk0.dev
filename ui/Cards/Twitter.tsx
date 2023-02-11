'use client';

import Link from 'next/link';
import { SiTwitter } from 'react-icons/si';

import { cn } from '@/lib/utils';

import Card, { hoverClassName } from './Card';

export default function Twitter() {
  return (
    <Card className="col-span-2">
      <Link
        href="https://twitter.com/glazk0"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex h-full items-center justify-center rounded-2xl bg-sky-500 text-4xl text-white',
          hoverClassName
        )}
      >
        <span className="sr-only">Twitter</span>
        <span className="transition duration-300 group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
          <SiTwitter />
        </span>
      </Link>
    </Card>
  );
}
