import React from "react";
import { ShieldCheck, Star, Award, Heart, Quote } from "lucide-react";

export const StorySection: React.FC = () => {
  const reviews = [
    {
      author: "Lord Alistair Sterling",
      title: "The Financial Times Gourmet Review",
      text: "Continental Thaligai has redefined Asian fusion fine dining. The Truffle Chettinad Duck Confit on brass thali is nothing short of a culinary triumph.",
      rating: 5
    },
    {
      author: "Chef François Laurent",
      title: "Three Michelin-Star Guest Chef",
      text: "The harmony between South Indian kokum acidities and classic French velouté reductions is breathtakingly executed.",
      rating: 5
    },
    {
      author: "Dr. Meenakshi Sundaram",
      title: "Heritage Food Historian",
      text: "Preserving royal Chola thali traditions while welcoming European culinary technique. Truly a temple of gastronomy.",
      rating: 5
    }
  ];

  return (
    <section id="story-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" /> Heritage & Philosophy
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-100">
          Our Culinary Story
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          A century of South Indian culinary heritage reimagined through European haute cuisine.
        </p>
      </div>

      {/* Narrative Split Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="glass-card p-8 rounded-3xl border-amber-500/30 space-y-4">
          <h3 className="text-2xl font-bold font-serif gold-gradient-text">
            The Royal Thali Tradition
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            In South Indian royal courts, the <em>Thaligai</em> was an intricate culinary ritual — a harmonious balance of six essential tastes (Arusuvai) presented on banana leaves and engraved brass platters.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            At Continental Thaligai, our master chefs honor these ancient recipes while incorporating classical European techniques such as sous-vide precision, French mother sauce reductions, and molecular garnishing.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border-amber-500/30 space-y-4">
          <h3 className="text-2xl font-bold font-serif gold-gradient-text">
            Sustainable Organic Sourcing
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            We directly partner with organic spice estates in Coorg and Chettinad to source single-origin Tellicherry black pepper, Kashmiri saffron, and cold-pressed sesame oil.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every grain of rice, every artisan cheese, and every fresh seafood catch is traceable to certified ethical farms.
          </p>
        </div>
      </div>

      {/* Press Reviews Showcase */}
      <div className="space-y-6">
        <h3 className="text-center text-xl font-bold font-serif text-slate-100">
          Critical Acclaim & Reviews
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-3xl border-amber-500/20 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-amber-500/40" />
                <div className="flex gap-1 text-amber-400">
                  {"★".repeat(r.rating)}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">"{r.text}"</p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-sm font-bold font-serif text-slate-100 block">{r.author}</span>
                <span className="text-[11px] text-amber-400 block">{r.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
