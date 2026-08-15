import React from 'react';
import { motion } from 'framer-motion';
import { KolamBackground } from '@/components/ui/kolam';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import heroImg from '@assets/generated_images/hero.jpg'; // We'll just construct the string below since Vite handles imports

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/attached_assets/generated_images/hero.jpg"
          alt="Aerial view of a traditional South Indian banana leaf feast, many steel katoris arranged in a circle, steaming food, warm dramatic candlelight"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep gradient overlay - terracotta to near-black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-primary/40 to-[#0A0705]/90" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.h1 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-tight leading-tight max-w-4xl"
        >
          Where Every Meal Tells A Story
        </motion.h1>

        <motion.p 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-sans text-lg md:text-xl text-primary-foreground/90 max-w-2xl font-light tracking-wide"
        >
          The South Indian thaligai — a circle of steel, a universe of flavor, a ritual of belonging.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-primary-foreground/70">Scroll</span>
        <motion.div 
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary-foreground/70 to-transparent"
        />
      </motion.div>

      {/* Kolam watermark at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 z-1 overflow-hidden">
        <KolamBackground className="text-white translate-y-24 scale-[2]" opacity={0.08} />
      </div>
    </section>
  );
}
