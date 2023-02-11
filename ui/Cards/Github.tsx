'use client';

import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

import { cn } from '@/lib/utils';

import Card, { hoverClassName } from './Card';

export default function Github() {
  return (
    <Card className="col-span-3 h-52 md:col-span-3 ">
      <Link
        href="https://github.com/glazk0"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#f5f5f5] text-black',
          hoverClassName
        )}
      >
        <span aria-hidden className="px-6 pt-6">
          <span className="flex justify-between">
            <SiGithub className="text-3xl" />
            <HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
          </span>
        </span>

        <span className="space-y-0.5 px-6 pb-6">
          <span className="block font-title font-bold">github</span>

          <span className="block text-sm">my open source work &amp; contributions</span>
        </span>
      </Link>
    </Card>
  );
}
