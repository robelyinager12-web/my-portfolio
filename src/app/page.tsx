import { Navbar } from '@/components/layout/Navbar';
import { GlobeBackground } from '@/components/three/GlobeBackground';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Services } from '@/components/sections/Services';
import { Tools } from '@/components/sections/Tools';
import { Projects } from '@/components/sections/Projects';
import { Pricing } from '@/components/sections/Pricing';

export default function Page() {
  return (
    <>
      <GlobeBackground />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Tools />
        <Projects />
        <Pricing />
      </main>
    </>
  );
}
