
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Mission from './components/Mission.tsx';
import Skills from './components/Skills.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-slate-200">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="mission" className="bg-white">
          <Mission />
        </section>
        
        <section id="curriculum" className="bg-[#fcfcfc]">
          <Skills />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
