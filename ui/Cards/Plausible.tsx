import Link from 'next/link';

import { SiPlausibleanalytics } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { cn } from '@/lib/utils';

import Card, { hoverClassName } from './Card';

export default function Plausible() {
  return (
    <Card className="col-span-3 h-52 md:col-span-4 ">
      <Link
        href="https://plausible.glazk0.dev/glazk0.dev"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#5850ec] text-white',
          hoverClassName
        )}
      >
        <span aria-hidden className="px-6 pt-6">
          <span className="flex justify-between">
            <SiPlausibleanalytics className="text-3xl" />
            <HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
          </span>
        </span>

        <span className="space-y-0.5 px-6 pb-6">
          <span className="block font-title font-bold">Plausible</span>
          <span className="block text-sm">Interested about some analytics ?</span>
        </span>
      </Link>
    </Card>
  );
}
