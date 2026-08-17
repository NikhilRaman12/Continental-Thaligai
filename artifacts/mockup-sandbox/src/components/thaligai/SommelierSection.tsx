import React, { useState } from "react";
import { Wine, Sparkles, Sliders, GlassWater, Award, ArrowRight } from "lucide-react";

export const SommelierSection: React.FC = () => {
  const [spicePreference, setSpicePreference] = useState(3);
  const [boldnessPreference, setBoldnessPreference] = useState(4);
  const [sweetnessPreference, setSweetnessPreference] = useState(2);

  const getRecommendations = () => {
    if (boldnessPreference >= 4) {
      return [
        {
          name: "Châteauneuf-du-Pape Domaine du Vieux Télégraphe 2018",
          type: "Red Wine (Rhône Valley)",
          dish: "The Royal Chola-Bordeaux Platter (Truffle Duck Confit)",
          matchScore: 98,
          notes: "Robust tannins and notes of dark cherry cut effortlessly through rich Chettinad spices."
        },
        {
          name: "Saffron & Smoked Cardamom Old Fashioned",
          type: "Signature Cocktail",
          dish: "Sous-Vide Lamb Pepper Fry Wellington",
          matchScore: 95,
          notes: "Smoked clove and Kashmiri saffron notes amplify the black pepper duxelles."
        }
      ];
    } else if (spicePreference <= 2) {
      return [
        {
          name: "Sancerre Blanc Les Baronnes 2021",
          type: "White Wine (Loire Valley)",
          dish: "Curry Leaf & Black Truffle Burrata",
          matchScore: 96,
          notes: "Zesty citrus acidity elevates delicate creaminess without overpowering."
        },
        {
          name: "Kumbakonam Filter Coffee Espresso Martini",
          type: "Craft Digestif",
          dish: "Kumbakonam Filter Coffee Tiramisu",
          matchScore: 94,
          notes: "Fresh chicory espresso decoction layered with dark chocolate bitters."
        }
      ];
    } else {
      return [
        {
          name: "Trimbach Riesling Reserve 2019",
          type: "White Wine (Alsace)",
          dish: "Mediterranean-Malabar Tasting Thaligai",
          matchScore: 97,
          notes: "Subtle off-dry stone fruit notes harmonize with coconut milk & tamarind acidity."
        },
        {
          name: "Saffron Coconut Sparkling Elixir",
          type: "Non-Alcoholic Botanical Elixir",
          dish: "Vegan Riviera Thaligai",
          matchScore: 92,
          notes: "Effervescent green cardamom soda with organic tender coconut nectar."
        }
      ];
    }
  };

  const recs = getRecommendations();

  return (
    <section id="sommelier-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 inline-flex items-center gap-1.5">
          <Wine className="w-3.5 h-3.5" /> Head Sommelier Matchmaker
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-100">
          Wine & Beverage Pairing Engine
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Adjust your flavor preferences to receive curated sommelier pairings for your Thaligai course.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Sliders */}
        <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border-amber-500/30 space-y-6 shadow-2xl">
          <h3 className="text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-amber-400" /> Sensory Taste Profile
          </h3>

          {/* Spice Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-300">
              <span>Spice Heat Tolerance</span>
              <span className="text-amber-400 font-bold">Level {spicePreference} / 5</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              value={spicePreference}
              onChange={(e) => setSpicePreference(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-900 rounded-lg cursor-pointer"
            />
          </div>

          {/* Boldness Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-300">
              <span>Wine Body & Tannin Boldness</span>
              <span className="text-amber-400 font-bold">Level {boldnessPreference} / 5</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              value={boldnessPreference}
              onChange={(e) => setBoldnessPreference(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-900 rounded-lg cursor-pointer"
            />
          </div>

          {/* Sweetness Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-300">
              <span>Aromatic Sweetness / Fruitiness</span>
              <span className="text-amber-400 font-bold">Level {sweetnessPreference} / 5</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              value={sweetnessPreference}
              onChange={(e) => setSweetnessPreference(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-900 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Right Column: Recommendations */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" /> Matched Sommelier Selections
          </h3>

          <div className="space-y-4">
            {recs.map((item, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover p-6 rounded-3xl border-amber-500/30 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                      {item.type}
                    </span>
                    <h4 className="text-xl font-bold font-serif text-slate-100">{item.name}</h4>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-extrabold text-xs border border-amber-400/30">
                    {item.matchScore}% Match
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Paired Dish: <strong className="text-amber-200">{item.dish}</strong></span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-2">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
