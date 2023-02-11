import {
    SiDiscord, SiDocker, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql,
    SiReact, SiRedis, SiSpotify, SiSupabase, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiWebstorm
} from 'react-icons/si';

import Card from './Card';

export default function Tech() {
  return (
    <Card className="col-span-3 flex items-center justify-center rounded-2xl bg-fuchsia-700 p-6 text-fuchsia-100 md:col-span-2">
      <div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
        <SiTypescript size={24} />
        <SiDocker size={24} />
        <SiNextdotjs size={24} />
        <SiRedis size={24} />
        <SiPostgresql size={24} />
        <SiReact size={24} />
        <SiTailwindcss size={24} />
        <SiNodedotjs size={24} />
        <SiJavascript size={24} />
        <SiWebstorm size={24} />
        <SiGit size={24} />
        <SiSpotify size={24} />
        <SiSupabase size={24} />
        <SiMongodb size={24} />
        <SiVisualstudiocode size={24} />
        <SiDiscord size={24} />
      </div>
    </Card>
  );
}
