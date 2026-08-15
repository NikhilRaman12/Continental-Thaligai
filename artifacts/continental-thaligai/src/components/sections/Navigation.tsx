import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'The Thaligai', id: 'what-is-thaligai' },
    { label: 'The Plate', id: 'the-plate' },
    { label: 'Regions', id: 'regions' },
    { label: 'Stories', id: 'stories' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => scrollTo('hero')}
          className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
          data-testid="link-home"
        >
          Continental Thaligai
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-500 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground/90'
              }`}
              data-testid={`link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 -mr-2 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          data-testid="button-menu-open"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col px-6 py-6"
          >
            <div className="flex justify-end">
              <button
                className="p-2 -mr-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                data-testid="button-menu-close"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-8 pb-20">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={() => scrollTo(link.id)}
                  className="font-serif text-4xl text-left text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
