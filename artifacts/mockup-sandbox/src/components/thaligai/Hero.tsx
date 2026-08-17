import React from "react";
import { Sparkles, Calendar, Utensils, Star, ShieldCheck, Award } from "lucide-react";

interface HeroProps {
  onNavigate: (tab: string) => void;
  isReducedMotion: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, isReducedMotion }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 px-4 py-16">
      {/* Ambient Radial Lighting Glow */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none ${
          isReducedMotion ? "" : "animate-pulse"
        }`}
      />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Visual Card Container */}
      <div className="relative max-w-6xl mx-auto text-center space-y-8 z-10">
        {/* Imperial Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest shadow-xl">
          <Award className="w-4 h-4 text-amber-400" />
          <span>The World's Premier Euro-Tamil Culinary Experience</span>
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-serif tracking-tight text-slate-100 leading-tight">
          Where Imperial <span className="gold-gradient-text">South Indian Heritage</span> <br />
          Meets <span className="text-amber-200 underline decoration-amber-500/40 underline-offset-8">European Culinary Mastery</span>
        </h1>

        {/* Subtitle / Philosophy */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed">
          Experience an extraordinary 11-course degustation thali served on hand-engraved brass platters. 
          Indulge in French duck confitChettinad pepper reduction, black truffle burrata, and Kumbakonam filter coffee tiramisu.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigate("builder")}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-600 transition-all flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Sparkles className="w-5 h-5" />
            <span>Design Custom Thaligai</span>
          </button>

          <button
            onClick={() => onNavigate("menu")}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card text-slate-200 font-semibold text-sm hover:bg-amber-500/10 hover:text-amber-300 border border-amber-500/30 transition-all flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Utensils className="w-5 h-5 text-amber-400" />
            <span>Explore Degustation Menu</span>
          </button>

          <button
            onClick={() => onNavigate("reservation")}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 text-amber-300 font-semibold text-sm hover:bg-slate-800 border border-amber-500/20 transition-all flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Calendar className="w-5 h-5 text-amber-400" />
            <span>Reserve Royal Dining</span>
          </button>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-2xl text-center space-y-1">
            <div className="text-2xl font-bold font-serif text-amber-400">11-Course</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Grand Thaligai Feasts</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center space-y-1">
            <div className="text-2xl font-bold font-serif text-amber-400">100% Organic</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Heritage Sourcing</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center space-y-1">
            <div className="text-2xl font-bold font-serif text-amber-400">Michelin Trained</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Executive Chefs</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center space-y-1">
            <div className="text-2xl font-bold font-serif text-amber-400">4.9 ★ Rating</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Gourmet Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};
