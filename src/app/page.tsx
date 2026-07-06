import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlobeBackground } from '@/components/three/GlobeBackground';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { GithubStats } from '@/components/sections/GithubStats';
import { Testimonials } from '@/components/sections/Testimonials';
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
        <Projects />
        <Experience />
        <GithubStats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
