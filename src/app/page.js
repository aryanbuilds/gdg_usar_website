import React from 'react';

import Hero from './components/hero';
import BentoGrid from './components/BentoGrid';
import WeTextSection from './components/WeTextSection';
import ScrambleText from './components/ScrambleText'; // Add this line

export default function Home() {
  return (
    <div className="">
      {/* Main content */}
      <div className="">
        <main className="relative z-10">
          

          <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
              <BentoGrid />
            </div>
          </section>

          <section className="container mx-auto">
            <WeTextSection />
          </section>
          <section className="container mx-auto">
            <ScrambleText />
          </section>
        </main>
      </div>
    </div>
  );
}
