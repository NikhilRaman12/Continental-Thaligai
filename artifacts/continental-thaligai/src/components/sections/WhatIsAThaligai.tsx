import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { KolamDivider } from '@/components/ui/kolam';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export function WhatIsAThaligai() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const prefersReducedMotion = useReducedMotion();

  const animationProps = prefersReducedMotion 
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 40 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      };

  return (
    <section id="what-is-thaligai" className="bg-background pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-6xl" ref={ref}>
        <motion.div {...animationProps} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Pull Quote */}
          <div className="relative">
            <span className="absolute -top-12 -left-6 text-[8rem] font-serif text-muted-foreground/10 leading-none select-none">"</span>
            <h2 className="font-serif-body text-3xl md:text-5xl italic text-foreground leading-snug font-medium text-balance">
              In South India, the thaligai is not merely a plate. It is a philosophy — every component in conversation with the next, every flavor earned through sequence.
            </h2>
          </div>

          {/* Right Column - Editorial Body */}
          <div className="flex flex-col gap-6 font-serif-body text-lg md:text-xl text-foreground/80 leading-relaxed font-normal">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2 font-semibold">A Meal That Never Ends</h3>
            
            <p>
              The word <em>thaligai</em> refers to the offering, the setting, and the feast itself. It is anchored by the large steel or brass plate — the universe in which the meal takes place. Around its perimeter sit the <em>katoris</em>, small bowls waiting to be filled with an orchestrated sequence of flavors: sweet, sour, spicy, bitter, salty, and astringent.
            </p>
            <p>
              To eat from a thaligai is to participate in a ritual older than memory. You begin with the subtle purity of rice and ghee, moving into the robust complexity of sambar, transitioning to the medicinal tang of rasam, and concluding always — without exception — with the cooling solace of curd.
            </p>
            <p>
              It is not just food; it is an architecture of belonging. To be served a thaligai is to be told that you are welcomed, that there is time, and that you will not leave hungry.
            </p>
          </div>
          
        </motion.div>

        {/* Editorial Image */}
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-32 w-full aspect-[21/9] md:aspect-[2/1] relative overflow-hidden rounded-sm"
        >
          <img 
            src="/attached_assets/generated_images/what-is-thaligai.jpg" 
            alt="Close-up of polished steel thaligai katoris arranged on a fresh banana leaf, warm golden light, minimalist editorial style" 
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="mt-24 md:mt-32 text-primary">
        <KolamDivider />
      </div>
    </section>
  );
}
