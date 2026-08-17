import React, { useState } from "react";
import { MenuItem, MENU_ITEMS } from "../../types/thaligai";
import { Search, Flame, Wine, Info, Plus, Check, Star, Sparkles, Filter, X } from "lucide-react";

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDietary, setSelectedDietary] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: "all", label: "Full Menu" },
    { id: "signature", label: "Grand Thaligais" },
    { id: "tapas", label: "Small Plates & Tapas" },
    { id: "mains", label: "Euro-Tamil Mains" },
    { id: "breads", label: "Artisan Breads" },
    { id: "beverages", label: "Sommelier Pairings" },
    { id: "desserts", label: "Fine Desserts" }
  ];

  const filteredItems = MENU_ITEMS.filter((item: MenuItem) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tamilName && item.tamilName.includes(searchQuery));
    const matchesDietary =
      selectedDietary === "all" || item.dietary.includes(selectedDietary as any);

    return matchesCategory && matchesSearch && matchesDietary;
  });

  const handleAdd = (item: MenuItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      {/* Section Title */}
      <div className="text-center space-y-3">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
          The Culinary Collection
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-100">
          Degustation & Fine Dining Menu
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Explore masterfully balanced South Indian traditional thali courses elevated with European gastronomy.
        </p>
      </div>

      {/* Controls Bar: Category Tabs, Search, Dietary Filter */}
      <div className="space-y-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-amber-400 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20"
                  : "glass-card text-slate-300 hover:text-amber-300 hover:bg-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Dietary Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-4 rounded-2xl">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, Tamil names, spices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-amber-500/20 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              aria-label="Search Menu Dishes"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Dietary Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" /> Filter:
            </span>
            {[
              { id: "all", label: "All" },
              { id: "vegetarian", label: "Vegetarian" },
              { id: "vegan", label: "Vegan" },
              { id: "gluten-free", label: "Gluten-Free" },
              { id: "chef-special", label: "Chef Special" }
            ].map((diet) => (
              <button
                key={diet.id}
                onClick={() => setSelectedDietary(diet.id)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  selectedDietary === diet.id
                    ? "bg-amber-400/20 text-amber-300 border border-amber-400/40"
                    : "bg-slate-950 text-slate-400 hover:text-slate-200"
                }`}
              >
                {diet.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item: MenuItem) => {
          const isAdded = addedItemIds[item.id];
          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              {/* Image & Badges Overlay */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Dietary Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.dietary.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-[10px] font-bold text-amber-300 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-base font-extrabold shadow-lg">
                  ${item.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-bold font-serif text-slate-100 group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  {item.tamilName && (
                    <p className="text-xs text-amber-400/80 font-serif mt-0.5">{item.tamilName}</p>
                  )}
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Sensory Profile & Wine Pairing */}
                <div className="space-y-3 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-amber-400 font-medium">
                      <Flame className="w-3.5 h-3.5" /> Spice: {"★".repeat(item.sensoryProfile.spiceLevel)}
                    </span>
                    <span className="text-slate-400">{item.calories} kcal</span>
                  </div>

                  {item.sensoryProfile.winePairing && (
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-300/90 bg-amber-950/40 p-2 rounded-lg border border-amber-500/20">
                      <Wine className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{item.sensoryProfile.winePairing}</span>
                    </div>
                  )}

                  {/* Add to Cart / View Details Button */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={(e) => handleAdd(item, e)}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-amber-400 ${
                        isAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-slate-950 border border-amber-500/40"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" /> Added to Order
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" /> Add to Order (${item.price})
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dish Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div
            className="glass-card max-w-lg w-full rounded-3xl overflow-hidden p-6 space-y-5 border-amber-500/40 shadow-2xl relative"
            role="dialog"
            aria-labelledby="modal-title"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Close dish details"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-48 object-cover rounded-2xl"
            />

            <div>
              <span className="text-amber-400 text-[10px] uppercase font-bold tracking-widest">
                {selectedItem.category} Course
              </span>
              <h3 id="modal-title" className="text-2xl font-bold font-serif text-slate-100">
                {selectedItem.name}
              </h3>
              {selectedItem.tamilName && (
                <p className="text-sm text-amber-300 font-serif">{selectedItem.tamilName}</p>
              )}
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{selectedItem.description}</p>
            </div>

            {selectedItem.chefNotes && (
              <div className="bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/20 text-xs text-amber-200">
                <span className="font-bold flex items-center gap-1.5 mb-1 text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" /> Executive Chef's Note:
                </span>
                {selectedItem.chefNotes}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="glass-card p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px]">Aroma Complexity</span>
                <span className="font-bold text-amber-300">
                  {"★".repeat(selectedItem.sensoryProfile.aroma)} / 5
                </span>
              </div>
              <div className="glass-card p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px]">Richness</span>
                <span className="font-bold text-amber-300">
                  {"★".repeat(selectedItem.sensoryProfile.richness)} / 5
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-2xl font-extrabold text-amber-400">${selectedItem.price}</span>
              <button
                onClick={() => {
                  handleAdd(selectedItem);
                  setSelectedItem(null);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
