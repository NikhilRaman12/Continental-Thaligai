import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const INGREDIENTS = [
  { name: 'Tamarind', story: 'The deep, tart backbone of sambar and rasam.', image: '/attached_assets/generated_images/tamarind.jpg' },
  { name: 'Mustard Seeds', story: 'Tempered in hot oil to release a nutty, sharp aroma.', image: '/attached_assets/generated_images/curry-leaves.jpg' }, // fallback
  { name: 'Curry Leaves', story: 'Fresh and citrusy, the unmistakable scent of the South.', image: '/attached_assets/generated_images/curry-leaves.jpg' },
  { name: 'Asafoetida', story: 'Pungent resin that mimics the depth of alliums.', image: '/attached_assets/generated_images/tamarind.jpg' }, // fallback
  { name: 'Fresh Coconut', story: 'Grated daily to bind vegetables and thicken gravies.', image: '/attached_assets/generated_images/coconut.jpg' },
  { name: 'Turmeric', story: 'The golden healer that gives color and earthiness.', image: '/attached_assets/generated_images/coconut.jpg' }, // fallback
  { name: 'Dried Red Chili', story: 'Heat that builds slowly and lingers beautifully.', image: '/attached_assets/generated_images/curry-leaves.jpg' }, // fallback
  { name: 'Urad Dal', story: 'Toasted in oil for crunch, or ground for idli batter.', image: '/attached_assets/generated_images/tamarind.jpg' }, // fallback
  { name: 'Toor Dal', story: 'The hearty, comforting foundation of everyday sambar.', image: '/attached_assets/generated_images/curry-leaves.jpg' }, // fallback
  { name: 'Fenugreek', story: 'Bitter seeds that balance the sourness of tamarind.', image: '/attached_assets/generated_images/tamarind.jpg' }, // fallback
  { name: 'Black Pepper', story: 'The original heat of the region, sharp and medicinal.', image: '/attached_assets/generated_images/coconut.jpg' }, // fallback
  { name: 'Fresh Ginger', story: 'Warming and bright, essential for digestion.', image: '/attached_assets/generated_images/curry-leaves.jpg' }, // fallback
];

export function IngredientsStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="stories" className="py-24 md:py-32 bg-card border-y border-border overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">The Pantry</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Twelve Ingredients That Built a Cuisine
          </h2>
        </motion.div>
      </div>

      <div className="w-full overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar pl-6 md:pl-[calc(50vw-36rem)] pr-6">
        <div className="flex gap-6 w-max">
          {INGREDIENTS.map((item, i) => (
            <motion.div 
              key={item.name}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : i * 0.05 }}
              className="snap-start w-[280px] md:w-[320px] flex-shrink-0 flex flex-col group"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-background mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">{item.name}</h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">{item.story}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
