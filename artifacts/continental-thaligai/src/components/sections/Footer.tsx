import React from 'react';
import { KolamBackground } from '@/components/ui/kolam';

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#1C1410] text-[#F9F4EC] py-16 overflow-hidden">
      <KolamBackground className="text-[#F9F4EC]" opacity={0.03} />
      
      <div className="container relative z-10 mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl font-bold tracking-tight mb-2">Continental Thaligai</h2>
          <p className="font-serif-body text-lg italic text-[#F9F4EC]/60">A celebration of South Indian culinary heritage.</p>
        </div>

        <nav className="flex items-center gap-6 md:gap-8">
          <button onClick={() => scrollTo('the-plate')} className="font-sans text-xs uppercase tracking-widest text-[#F9F4EC]/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">
            The Thaligai
          </button>
          <button onClick={() => scrollTo('regions')} className="font-sans text-xs uppercase tracking-widest text-[#F9F4EC]/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">
            The Regions
          </button>
          <button onClick={() => scrollTo('stories')} className="font-sans text-xs uppercase tracking-widest text-[#F9F4EC]/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">
            The Pantry
          </button>
        </nav>

      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl mt-16 pt-8 border-t border-[#F9F4EC]/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-xs text-[#F9F4EC]/40">
          Continental Thaligai &middot; DEV Frontend Challenge 2025 &middot; Comfort Food Edition
        </p>
      </div>
    </footer>
  );
}
