import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function ComfortMemory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const prefersReducedMotion = useReducedMotion();

  const scrollToPlate = () => {
    const element = document.getElementById('the-plate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-primary py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/attached_assets/generated_images/grandmother-hands.jpg" 
          alt="Close-up of elderly Indian woman's hands gently mixing rice and sambar on a steel plate" 
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-4xl flex flex-col items-center text-center">
        <motion.h2 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-12 text-balance leading-tight"
        >
          Every Meal Is A Coming Home
        </motion.h2>

        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 font-serif-body text-xl md:text-2xl text-primary-foreground/90 leading-relaxed italic max-w-3xl"
        >
          <p>
            Somewhere right now, a grandmother is tempering mustard seeds in a seasoned iron pan. The oil is hot; the seeds are about to crack. In twenty minutes, her grandchildren will sit cross-legged on the floor, banana leaf laid before them, and eat the same meal she ate as a girl.
          </p>
          <p>
            The thaligai does not need to be reimagined. It needs to be remembered. Continental Thaligai is an act of memory — a long table set for everyone who has ever eaten with their hands and felt, for a moment, completely at home.
          </p>
        </motion.div>

        <motion.button 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToPlate}
          className="mt-16 bg-background text-primary px-8 py-4 font-sans text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          data-testid="button-explore-full"
        >
          Explore The Full Thaligai
        </motion.button>
      </div>
    </section>
  );
}
