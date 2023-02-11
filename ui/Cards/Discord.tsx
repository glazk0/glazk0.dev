'use client';

import Link from 'next/link';
import { SiDiscord } from 'react-icons/si';

import { cn, discordId } from '@/lib/utils';

import Card, { hoverClassName } from './Card';

export default function Discord() {
  return (
    <Card className="col-span-3 h-full rounded-2xl">
      <Link
        href={`https://discord.com/users/${discordId}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex h-full flex-col items-center justify-center rounded-2xl bg-indigo-500 text-4xl text-white',
          hoverClassName
        )}
      >
        <span className="sr-only">Discord</span>
        <span className="transition duration-300 group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
          <SiDiscord />
        </span>
      </Link>
    </Card>
  );
}
