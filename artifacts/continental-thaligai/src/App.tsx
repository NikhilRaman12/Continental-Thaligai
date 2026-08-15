import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

// Sections
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { WhatIsAThaligai } from '@/components/sections/WhatIsAThaligai';
import { InteractiveMeal } from '@/components/sections/InteractiveMeal';
import { RegionalDiversity } from '@/components/sections/RegionalDiversity';
import { IngredientsStories } from '@/components/sections/IngredientsStories';
import { ComfortMemory } from '@/components/sections/ComfortMemory';
import { Footer } from '@/components/sections/Footer';

const queryClient = new QueryClient();

// Skip navigation link for accessibility
const SkipNav = () => (
  <a 
    href="#main-content" 
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:font-sans focus:font-bold focus:rounded-sm focus:outline-none"
  >
    Skip to main content
  </a>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <SkipNav />
          <Navigation />
          <main id="main-content" className="flex flex-col w-full min-h-screen bg-background">
            <Hero />
            <WhatIsAThaligai />
            <InteractiveMeal />
            <RegionalDiversity />
            <IngredientsStories />
            <ComfortMemory />
          </main>
          <Footer />
        </ErrorBoundary>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
