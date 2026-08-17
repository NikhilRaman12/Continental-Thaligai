import React, { useState } from "react";
import { Sparkles, Check, Flame, ShieldAlert, Plus, Utensils, RefreshCw, ShoppingBag } from "lucide-react";
import { MenuItem } from "../../types/thaligai";

interface ThaligaiBuilderProps {
  onAddToCart: (customBuildItem: MenuItem) => void;
}

export const ThaligaiBuilder: React.FC<ThaligaiBuilderProps> = ({ onAddToCart }) => {
  const [guestName, setGuestName] = useState("");
  const [selectedBase, setSelectedBase] = useState("Truffle Jeera Jasmine Pilaf");
  const [selectedGravies, setSelectedGravies] = useState<string[]>(["Smoked Coconut Sambar", "Wild Morel Kootu"]);
  const [selectedProteins, setSelectedProteins] = useState<string[]>(["Sous-Vide Pepper Lamb Medallions", "Seared Salmon Tikka"]);
  const [selectedChutney, setSelectedChutney] = useState("Fig & Curry Leaf Relish");
  const [selectedBeverage, setSelectedBeverage] = useState("Saffron Coconut Elixir");
  const [selectedDessert, setSelectedDessert] = useState("Elaneer Panna Cotta");
  const [isCreated, setIsCreated] = useState(false);

  const baseOptions = [
    { name: "Truffle Jeera Jasmine Pilaf", cal: 240, extra: 0 },
    { name: "Saffron Biryani Rice", cal: 280, extra: 4 },
    { name: "Malabar Garlic Brioche Naan", cal: 260, extra: 2 },
    { name: "Heritage Red Matta Rice", cal: 210, extra: 0 }
  ];

  const gravyOptions = [
    { name: "Smoked Coconut Sambar", cal: 140 },
    { name: "Wild Morel Kootu", cal: 120 },
    { name: "Roasted Red Pepper Poriyal", cal: 95 },
    { name: "Tellicherry Black Pepper Rasam", cal: 70 }
  ];

  const proteinOptions = [
    { name: "Sous-Vide Pepper Lamb Medallions", cal: 320, extra: 8 },
    { name: "Seared Salmon Tikka", cal: 290, extra: 6 },
    { name: "Herb-Crusted Cottage Cheese (Paneer)", cal: 260, extra: 0 },
    { name: "Truffle Roasted Heirloom Cauliflower", cal: 180, extra: 0 }
  ];

  const chutneyOptions = [
    "Fig & Curry Leaf Relish",
    "Truffle Tzatziki Chutney",
    "Spicy Kokum Tamarind Chutney",
    "Crispy Plantain Carpaccio Chips"
  ];

  const beverageOptions = [
    "Saffron Coconut Elixir (Mocktail)",
    "Cardamom Smoked Old Fashioned (Cocktail +$6)",
    "Kumbakonam Degree Iced Filter Coffee",
    "Sparkling Cardamom Limeade"
  ];

  const dessertOptions = [
    "Elaneer Panna Cotta (Tender Coconut)",
    "Filter Coffee Tiramisu",
    "Saffron Cardamom Crème Brûlée",
    "Mango Coconut Tart"
  ];

  const toggleGravy = (name: string) => {
    if (selectedGravies.includes(name)) {
      if (selectedGravies.length > 1) {
        setSelectedGravies(selectedGravies.filter((g) => g !== name));
      }
    } else {
      if (selectedGravies.length < 2) {
        setSelectedGravies([...selectedGravies, name]);
      } else {
        setSelectedGravies([selectedGravies[1], name]);
      }
    }
  };

  const toggleProtein = (name: string) => {
    if (selectedProteins.includes(name)) {
      if (selectedProteins.length > 1) {
        setSelectedProteins(selectedProteins.filter((p) => p !== name));
      }
    } else {
      if (selectedProteins.length < 2) {
        setSelectedProteins([...selectedProteins, name]);
      } else {
        setSelectedProteins([selectedProteins[1], name]);
      }
    }
  };

  const calculatePrice = () => {
    let price = 52;
    if (selectedBase.includes("Saffron")) price += 4;
    if (selectedBase.includes("Naan")) price += 2;
    selectedProteins.forEach((p) => {
      if (p.includes("Lamb")) price += 8;
      if (p.includes("Salmon")) price += 6;
    });
    if (selectedBeverage.includes("Old Fashioned")) price += 6;
    return price;
  };

  const calculateCalories = () => {
    let cal = 450;
    const b = baseOptions.find((o) => o.name === selectedBase);
    if (b) cal += b.cal;
    selectedGravies.forEach((g) => {
      const found = gravyOptions.find((o) => o.name === g);
      if (found) cal += found.cal;
    });
    selectedProteins.forEach((p) => {
      const found = proteinOptions.find((o) => o.name === p);
      if (found) cal += found.cal;
    });
    return cal;
  };

  const handleBuildSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customItem: MenuItem = {
      id: "custom-thali-" + Date.now(),
      name: `${guestName || "Custom"} Signature Thaligai Platter`,
      tamilName: "தனிப்பயன் அரச தளிகை",
      category: "signature",
      price: calculatePrice(),
      description: `Custom Thali: ${selectedBase}, ${selectedGravies.join(" & ")}, ${selectedProteins.join(" & ")}, ${selectedChutney}, ${selectedBeverage}, and ${selectedDessert}.`,
      sensoryProfile: {
        spiceLevel: 3,
        aroma: 5,
        richness: 4,
        winePairing: "Chef Sommelier Custom Select"
      },
      dietary: ["chef-special"],
      calories: calculateCalories(),
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
      chefNotes: "Custom constructed to order by Executive Chef on brass thali."
    };

    onAddToCart(customItem);
    setIsCreated(true);
    setTimeout(() => setIsCreated(false), 3000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Interactive Studio
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-100">
          Design Your Signature Thaligai
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Tailor every course on your hand-carved copper thali platter. Select your base grains, gravies, gourmet proteins, craft chutneys, beverage, and dessert.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Controls */}
        <form onSubmit={handleBuildSubmit} className="lg:col-span-7 space-y-8 glass-card p-6 sm:p-8 rounded-3xl border-amber-500/30 shadow-2xl">
          {/* Guest Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
              Connoisseur Name / Title
            </label>
            <input
              type="text"
              placeholder="e.g. Lord Alexander / Priya Raman"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full bg-slate-950/80 border border-amber-500/20 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              aria-label="Connoisseur Name"
            />
          </div>

          {/* Step 1: Base Grain / Bread */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-serif font-bold text-slate-100">1. Base Grain & Bread</span>
              <span className="text-[11px] text-amber-400">Select 1</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {baseOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.name}
                  onClick={() => setSelectedBase(opt.name)}
                  className={`p-3.5 rounded-2xl text-left border text-xs font-medium transition-all ${
                    selectedBase === opt.name
                      ? "bg-amber-500/20 border-amber-400 text-amber-200 shadow-md"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{opt.name}</span>
                    {opt.extra > 0 && <span className="text-amber-400 text-[10px]">+${opt.extra}</span>}
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-1">{opt.cal} kcal</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Gravies & Curries */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-serif font-bold text-slate-100">2. Signature Gravies & Veloutés</span>
              <span className="text-[11px] text-amber-400">Select up to 2</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {gravyOptions.map((opt) => {
                const isSelected = selectedGravies.includes(opt.name);
                return (
                  <button
                    type="button"
                    key={opt.name}
                    onClick={() => toggleGravy(opt.name)}
                    className={`p-3.5 rounded-2xl text-left border text-xs font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-amber-500/20 border-amber-400 text-amber-200 shadow-md"
                        : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span>{opt.name}</span>
                    {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Gourmet Protein */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-serif font-bold text-slate-100">3. Gourmet Protein / Main Course</span>
              <span className="text-[11px] text-amber-400">Select up to 2</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {proteinOptions.map((opt) => {
                const isSelected = selectedProteins.includes(opt.name);
                return (
                  <button
                    type="button"
                    key={opt.name}
                    onClick={() => toggleProtein(opt.name)}
                    className={`p-3.5 rounded-2xl text-left border text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-amber-500/20 border-amber-400 text-amber-200 shadow-md"
                        : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{opt.name}</span>
                      {opt.extra > 0 && <span className="text-amber-400 text-[10px]">+${opt.extra}</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Chutney & Beverage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">4. Artisan Chutney</label>
              <select
                value={selectedChutney}
                onChange={(e) => setSelectedChutney(e.target.value)}
                className="w-full bg-slate-950 border border-amber-500/20 rounded-xl px-3 py-2.5 text-xs text-slate-100"
              >
                {chutneyOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">5. Craft Beverage</label>
              <select
                value={selectedBeverage}
                onChange={(e) => setSelectedBeverage(e.target.value)}
                className="w-full bg-slate-950 border border-amber-500/20 rounded-xl px-3 py-2.5 text-xs text-slate-100"
              >
                {beverageOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 5: Dessert */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 block">6. Signature Dessert</label>
            <select
              value={selectedDessert}
              onChange={(e) => setSelectedDessert(e.target.value)}
              className="w-full bg-slate-950 border border-amber-500/20 rounded-xl px-3 py-2.5 text-xs text-slate-100"
            >
              {dessertOptions.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-600 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {isCreated ? (
              <>
                <Check className="w-5 h-5 text-slate-950" /> Platter Added to Order!
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" /> Add Platter to Order (${calculatePrice()})
              </>
            )}
          </button>
        </form>

        {/* Right Column: Visual Brass Thali Platter Interactive Diagram */}
        <div className="lg:col-span-5 space-y-6 sticky top-28">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border-amber-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase rounded-bl-xl border-l border-b border-amber-500/30">
              Live Brass Thali Rendering
            </div>

            <h3 className="text-xl font-bold font-serif text-slate-100 gold-gradient-text">
              {guestName ? `${guestName}'s` : "Royal"} Thaligai Platter
            </h3>

            {/* Circular Copper Thali Representation */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full border-4 border-amber-600/60 bg-gradient-to-br from-amber-950/60 via-slate-950 to-amber-900/40 p-4 shadow-2xl flex items-center justify-center">
              {/* Center Base Grain */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-amber-500/20 border-2 border-amber-400/50 flex flex-col items-center justify-center p-2 text-center shadow-inner">
                <span className="text-[9px] uppercase tracking-wider text-amber-300 font-bold">Base</span>
                <span className="text-xs font-semibold text-slate-100 line-clamp-2">{selectedBase}</span>
              </div>

              {/* Surrounding Bowls (Katori) */}
              {selectedGravies.map((g, idx) => (
                <div
                  key={g}
                  className={`absolute w-16 h-16 rounded-full bg-slate-900/90 border border-amber-500/40 flex flex-col items-center justify-center p-1 text-[9px] text-amber-200 text-center shadow-md ${
                    idx === 0 ? "top-2 left-6" : "top-2 right-6"
                  }`}
                >
                  <span className="text-[8px] text-amber-400 uppercase">Gravy</span>
                  <span className="line-clamp-1">{g}</span>
                </div>
              ))}

              {selectedProteins.map((p, idx) => (
                <div
                  key={p}
                  className={`absolute w-16 h-16 rounded-full bg-slate-900/90 border border-amber-500/40 flex flex-col items-center justify-center p-1 text-[9px] text-amber-200 text-center shadow-md ${
                    idx === 0 ? "bottom-2 left-6" : "bottom-2 right-6"
                  }`}
                >
                  <span className="text-[8px] text-amber-400 uppercase">Protein</span>
                  <span className="line-clamp-1">{p}</span>
                </div>
              ))}
            </div>

            {/* Nutrition & Price Summary Bar */}
            <div className="grid grid-cols-2 gap-4 text-xs pt-2">
              <div className="glass-card p-3 rounded-2xl">
                <span className="text-slate-400 block text-[10px]">Estimated Calories</span>
                <span className="text-lg font-bold text-amber-300">{calculateCalories()} kcal</span>
              </div>
              <div className="glass-card p-3 rounded-2xl">
                <span className="text-slate-400 block text-[10px]">Total Price</span>
                <span className="text-lg font-extrabold text-amber-400">${calculatePrice()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
