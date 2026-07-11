import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlobeBackground } from '@/components/three/GlobeBackground';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Services } from '@/components/sections/Services';
import { Tools } from '@/components/sections/Tools';
import { Projects } from '@/components/sections/Projects';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

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
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
