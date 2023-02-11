import About from '@/ui/Cards/About';
import Discord from '@/ui/Cards/Discord';
import Github from '@/ui/Cards/Github';
import Profil from '@/ui/Cards/Profil';
import Tech from '@/ui/Cards/Tech';
import Twitter from '@/ui/Cards/Twitter';
import Plausible from '@/ui/Cards/Plausible';

export default function Page() {
  return (
    <>
      <Profil />
      <Twitter />
      <Github />
      <Discord />
      <About />
      <Tech />
      <Plausible />
    </>
  );
}
