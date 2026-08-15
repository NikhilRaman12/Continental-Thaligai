import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const REGIONS = [
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    title: 'The Classical Standard',
    image: '/attached_assets/generated_images/tamil-nadu.jpg',
    description: 'Emphasis on rice, sambar, and a long procession of side dishes. The banana leaf feast at Saivite temples is the archetype. Deep tamarind, bold mustard, fresh coconut.'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    title: 'The Coastal Chapter',
    image: '/attached_assets/generated_images/kerala.jpg',
    description: 'Where the thaligai meets the Arabian Sea. Coconut oil instead of ghee, fish curry alongside the vegetarian spread, appam at breakfast. Gentle, tropical, layered.'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    title: 'The Bolder Palette',
    image: '/attached_assets/generated_images/karnataka.jpg',
    description: 'Jowar roti alongside rice, a spicier sambar, and the legendary Bisi Bele Bath — a one-pot meal that is itself a universe. Ragi, groundnut, tamarind.'
  },
  {
    id: 'andhra',
    name: 'Andhra / Telangana',
    title: 'Fire and Fragrance',
    image: '/attached_assets/generated_images/andhra.jpg',
    description: 'The most intensely spiced of the four traditions. Gongura chutney, fiery pickles, green chili in everything. A meal that respects you enough to challenge you.'
  }
];

export function RegionalDiversity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="regions" className="py-24 md:py-32 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
          >
            Four Regions, Four Souls
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {REGIONS.map((region, idx) => (
            <motion.article 
              key={region.id}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : idx * 0.15 }}
              className="group flex flex-col bg-card rounded-sm overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img 
                  src={region.image} 
                  alt={region.description}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold bg-background/90 text-foreground px-3 py-1.5 rounded-sm backdrop-blur-sm">
                    {region.name}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {region.title}
                </h3>
                <p className="font-serif-body text-lg text-foreground/80 leading-relaxed italic">
                  {region.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
