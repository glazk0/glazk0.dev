import Link from 'next/link';
import Card from './Card';

export default function About() {
  return (
    <Card className="flex flex-col justify-between space-y-6 rounded-2xl p-6 bg-blue-600 h-full col-span-full">
      <h2 className="font-title text-xl font-bold">
        hello world <span className="inline">⭐</span>
      </h2>
      <p>
        I'm Théo, I'm a software engineer from Belgium and I'm currently studying computer science at the{' '}
        <Link
          href="https://www.helmo.be/Formations/Economique/Bachelier-en-Informatique-de-gestion/Formation.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-300/95 text-glow-blue-500/50"
        >
          Haute École Libre Mosane
        </Link>
        .
      </p>

        <p>
            I'm passionate about development, I'm currently working on a{' '}
            <Link
                href="https://www.hogwarts.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-300/95 text-glow-blue-500/50"
            >
                Hogwarts Legacy fan website
            </Link>
            {' '}and a{' '}
            <Link
                href="https://aeternum.me"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-300/95 text-glow-blue-500/50"
            >
                New World themed Discord bot
            </Link>
            .
        </p>
    </Card>
  );
}
