import { useState, useEffect } from 'react';

import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import Skills    from './components/Skills';
import Projects  from './components/Projects';
import Education from './components/Education';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

export default function App() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    // ── scroll progress bar ──
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);

    // ── fade-in observer ──
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
          }
        });
      },
      { threshold: 0.08 }
    );

    // Small delay to ensure all child components are mounted
    const timer = setTimeout(() => {
      document.querySelectorAll('.fi').forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="prog">
        <div className="prog-fill" style={{ width: `${scrollPct}%` }} />
      </div>

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}