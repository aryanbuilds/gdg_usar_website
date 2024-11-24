import React from 'react';
import Hero from './components/hero';
import Footer from './components/Footer';
import BentoGrid from './components/BentoGrid';
import WeTextSection from './components/WeTextSection';

export default function Home() {
  return (
    <div className="relative">

      {/* Main content */}
      <div className="relative min-h-screen">
        <main className="relative z-10">
          <section className="h-screen">
            <Hero/>
          </section>

          <section>
            <BentoGrid />
          </section>

          <section>
            <WeTextSection />
          </section>
        </main>
      </div>
      <Footer/>
  </div>
  );
}

