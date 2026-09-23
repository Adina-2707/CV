import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-15% 0px -60% 0px',
        threshold: [0.2, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Navbar activeSection={activeSection} mobileOpen={mobileOpen} onToggleMobile={() => setMobileOpen((prev) => !prev)} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
