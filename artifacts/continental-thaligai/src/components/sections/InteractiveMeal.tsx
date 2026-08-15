import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { 
  Utensils, 
  Soup, 
  Flame, 
  Leaf, 
  Sparkles, 
  Droplets,
  CircleDot,
  CupSoda
} from 'lucide-react';

const COMPONENTS = [
  {
    id: 'rice',
    name: 'Steamed Rice',
    icon: Utensils,
    image: '/attached_assets/generated_images/rice.jpg',
    story: 'Rice is the quiet center of every thaligai — the canvas upon which all other flavors paint themselves. Steamed to a gentle stickiness, it absorbs sambar, rasam, and ghee with equal grace. In Tamil households, the first serving of rice is always from the newest harvest — a ritual of abundance and gratitude.'
  },
  {
    id: 'sambar',
    name: 'Sambar',
    icon: Soup,
    image: '/attached_assets/generated_images/sambar.jpg',
    story: "Sambar is South India's greatest culinary gift to the world. A lentil and vegetable stew slow-cooked with a spice blend that no two families make quite the same way. The tamarind carries memory; the mustard seeds carry laughter. A thaligai without sambar is a sentence without a verb."
  },
  {
    id: 'rasam',
    name: 'Rasam',
    icon: Flame,
    image: '/attached_assets/generated_images/rasam.jpg',
    story: 'Thin, tangy, almost translucent — rasam is the third act of every thaligai, poured over rice when the heavier dishes have been appreciated. Peppered, lemon-bright, with a warmth that settles in the chest. When you are unwell, rasam appears before medicine. It is affection in liquid form.'
  },
  {
    id: 'kootu',
    name: 'Kootu',
    icon: Leaf,
    image: '/attached_assets/generated_images/rice.jpg', // fallback or reuse
    story: 'Kootu is vegetables and lentils bound together with freshly grated coconut and toasted spice — it is the dish that makes you understand what patience produces. Yam, raw banana, ash gourd, drumstick: each kootu is a portrait of the season, the soil, the backyard garden.'
  },
  {
    id: 'poriyal',
    name: 'Thoran / Poriyal',
    icon: Sparkles,
    image: '/attached_assets/generated_images/sambar.jpg', // fallback
    story: "A dry stir-fry of vegetables with mustard seeds, curry leaves, and coconut — poriyal brings freshness and crunch to balance the richness of sambar and kootu. Each temple feast begins with poriyal's aroma rising from a hundred-liter vessel. It is the color green on a plate of gold."
  },
  {
    id: 'pickle',
    name: 'Papadum & Pickle',
    icon: CircleDot,
    image: '/attached_assets/generated_images/tamarind.jpg', // fallback/conceptual
    story: 'Crisp-fired papadum shatters with a sound that means the meal has truly begun. Alongside it: a fierce lime or mango pickle, just one teaspoon — enough to wake every nerve on the tongue. This is flavor punctuation. Tiny in portion, enormous in presence.'
  },
  {
    id: 'curd',
    name: 'Curd',
    icon: Droplets,
    image: '/attached_assets/generated_images/coconut.jpg', // fallback
    story: 'Every thaligai ends with curd — white, cool, slightly sour. It resets the palate, soothes the belly, completes the meal with the quiet assurance of an ellipsis. To leave curd on the plate is considered unlucky in most homes. Some things are ritual; some rituals are right.'
  },
  {
    id: 'payasam',
    name: 'Payasam',
    icon: CupSoda, // approximation for a bowl
    image: '/attached_assets/generated_images/payasam.jpg',
    story: 'Payasam appears at weddings, temple festivals, first days of school, and the last day of harvest. A sweet milk pudding — with rice or vermicelli or moong dal — it is the flavor of occasions. When payasam is served, something important has happened or is about to.'
  }
];

export function InteractiveMeal() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const prefersReducedMotion = useReducedMotion();

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setCompletedIds(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const selectedComponent = COMPONENTS.find(c => c.id === selectedId);
  const allCompleted = completedIds.size === COMPONENTS.length;

  // Calculate positions in a circle for desktop
  const radius = 180;
  
  return (
    <section id="the-plate" className="py-24 md:py-32 bg-card relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Build Your Thaligai
          </motion.h2>
          <motion.p 
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Tap each component to explore its story. A thaligai is personal — no two are ever the same.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          
          {/* The Plate Interaction */}
          <div className="relative w-full max-w-[340px] md:max-w-[500px] aspect-square flex items-center justify-center">
            
            {/* The Steel Plate */}
            <motion.div 
              className={`absolute inset-16 md:inset-20 rounded-full border border-card-border shadow-2xl flex flex-col items-center justify-center transition-colors duration-1000 ${
                allCompleted ? 'bg-[#D4A373]/20 shadow-[0_0_60px_rgba(212,163,115,0.4)] border-[#D4A373]' : 'bg-background'
              }`}
              animate={allCompleted && !prefersReducedMotion ? {
                boxShadow: ["0px 0px 0px rgba(212,163,115,0)", "0px 0px 80px rgba(212,163,115,0.6)", "0px 0px 40px rgba(212,163,115,0.3)"]
              } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {/* Inner Rim */}
              <div className="absolute inset-4 md:inset-6 rounded-full border border-card-border/50 opacity-50" />
              
              <span className="font-serif text-2xl md:text-3xl text-foreground font-semibold relative z-10">
                {allCompleted ? "Complete" : "Your Thaligai"}
              </span>
              <span className="font-sans text-sm text-muted-foreground mt-2 relative z-10">
                {completedIds.size} / 8 dishes
              </span>

              {allCompleted && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-12 font-sans text-xs text-primary font-medium tracking-wide"
                >
                  May this meal nourish you.
                </motion.span>
              )}
            </motion.div>

            {/* The Components (Radial on Desktop, Grid on Mobile - approximated by flex wrap/absolute) */}
            {COMPONENTS.map((comp, i) => {
              const angle = (i * (360 / COMPONENTS.length)) - 90; // Start top
              const rad = angle * (Math.PI / 180);
              
              const isSelected = selectedId === comp.id;
              const isCompleted = completedIds.has(comp.id);
              
              return (
                <motion.button
                  key={comp.id}
                  onClick={() => handleSelect(comp.id)}
                  aria-pressed={isSelected}
                  aria-label={`Select ${comp.name}`}
                  data-testid={`button-meal-${comp.id}`}
                  className={`absolute flex flex-col items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-card rounded-full`}
                  style={{
                    // Use CSS vars for responsive positioning via media queries, or simple inline style magic
                    left: `calc(50% + ${Math.cos(rad) * 100}%)`,
                    top: `calc(50% + ${Math.sin(rad) * 100}%)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  // Fallback for strict responsive: we will use a special class to handle radial vs grid if needed, 
                  // but absolute positioning with percentages works beautifully responsively if the parent is a square.
                  // Wait, percentage of radius!
                >
                </motion.button>
              );
            })}

            {/* We'll rewrite the layout logic to make it robustly responsive without complex calc. */}
            <div className="absolute inset-0 hidden md:block">
               {COMPONENTS.map((comp, i) => {
                  const angle = (i * (360 / COMPONENTS.length)) - 90; 
                  const rad = angle * (Math.PI / 180);
                  const isSelected = selectedId === comp.id;
                  const isCompleted = completedIds.has(comp.id);
                  const Icon = comp.icon;

                  return (
                    <button
                      key={`desktop-${comp.id}`}
                      onClick={() => handleSelect(comp.id)}
                      aria-pressed={isSelected}
                      aria-label={`Select ${comp.name}`}
                      data-testid={`button-desktop-meal-${comp.id}`}
                      className="absolute group focus-visible:outline-none rounded-full flex flex-col items-center justify-center transition-all duration-300 w-24 h-24"
                      style={{
                        left: `calc(50% + ${Math.cos(rad) * radius}px)`,
                        top: `calc(50% + ${Math.sin(rad) * radius}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected ? 'bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/20' : 
                        isCompleted ? 'bg-primary/20 text-primary border border-primary/30' : 
                        'bg-background text-muted-foreground border border-border group-hover:border-primary/50'
                      }`}>
                        <Icon size={24} className={isSelected && !prefersReducedMotion ? 'animate-pulse' : ''} />
                      </div>
                      <span className={`text-xs font-sans mt-2 whitespace-nowrap font-medium transition-colors ${
                        isSelected ? 'text-primary' : 'text-foreground/70'
                      }`}>
                        {comp.name}
                      </span>
                    </button>
                  );
               })}
            </div>

            {/* Mobile Grid Layout */}
            <div className="absolute inset-0 md:hidden flex items-center justify-center pointer-events-none">
              {/* On mobile, we might just stack them in a grid below the plate instead of radial to save space,
                  or place them around the edge. Since the plate is large, let's just make the radius smaller. */}
            </div>
          </div>

          {/* Mobile Grid layout block (visible only on small screens below the plate) */}
          <div className="grid grid-cols-4 gap-4 md:hidden w-full max-w-[340px]">
            {COMPONENTS.map(comp => {
              const isSelected = selectedId === comp.id;
              const isCompleted = completedIds.has(comp.id);
              const Icon = comp.icon;
              return (
                <button
                  key={`mobile-${comp.id}`}
                  onClick={() => handleSelect(comp.id)}
                  aria-pressed={isSelected}
                  className="flex flex-col items-center justify-start gap-2 focus-visible:outline-none"
                  data-testid={`button-mobile-meal-${comp.id}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-primary text-primary-foreground' : 
                    isCompleted ? 'bg-primary/20 text-primary' : 
                    'bg-background text-muted-foreground border border-border'
                  }`}>
                    <Icon size={18} />
                  </div>
                  <span className={`text-[10px] text-center font-sans font-medium leading-tight ${
                    isSelected ? 'text-primary' : 'text-foreground/70'
                  }`}>
                    {comp.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Story Panel */}
          <div className="w-full lg:w-[480px] min-h-[400px] relative" aria-live="polite">
            <AnimatePresence mode="wait">
              {selectedComponent ? (
                <motion.div
                  key={selectedComponent.id}
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-background rounded-sm shadow-sm overflow-hidden border border-border flex flex-col h-full"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={selectedComponent.image} 
                      alt={selectedComponent.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 font-serif text-3xl font-bold text-white">
                      {selectedComponent.name}
                    </h3>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <p className="font-serif-body text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                      "{selectedComponent.story}"
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-border rounded-sm bg-background/50"
                >
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Utensils className="text-muted-foreground opacity-50" size={24} />
                  </div>
                  <p className="font-serif-body text-xl text-muted-foreground italic max-w-xs">
                    Select a component from the thaligai to discover its story.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
