import Image from 'next/image';
import Link from 'next/link';

import { age } from '@/lib/utils';
import me from '@/public/assets/me.jpg';

import Card from './Card';

export default function Profil() {
  return (
    <Card className="p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl  border-pink-500 bg-pink-500/30 backdrop-blur-2xl md:col-span-4 md:h-52">
      <div className="flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4">
        <Image
          src={me}
          placeholder="blur"
          height={96}
          width={96}
          className="h-24 w-24 rounded-full border border-pink-500 object-cover"
          alt="Photo of me"
        />
        <div className="space-y-1">
          <h1 className="text-center font-title text-xl font-bold tracking-tighter text-pink-300 text-glow-pink-500/50 md:text-left">
            théo goëns
          </h1>

          <p className="text-center text-pink-300/95 text-glow-pink-500/50 md:text-left">
            {age} y/o full stack developer from belgium
          </p>

          <p className="text-center text-pink-300/80 text-glow-pink-500/30 md:text-left">
            <Link
              href="https://github.com/glazk0/glazk0.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              this website ↗️
            </Link>
          </p>
        </div>
      </div>
    </Card>
  );
}
