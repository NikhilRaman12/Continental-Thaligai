import React, { useState } from "react";
import { Utensils, ShoppingBag, Calendar, Sparkles, Menu as MenuIcon, X, Volume2, ShieldCheck, Flame } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  isReducedMotion: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  isReducedMotion
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "menu", label: "Degustation Menu", icon: Utensils },
    { id: "builder", label: "Custom Thaligai Builder", icon: Sparkles },
    { id: "reservation", label: "Reserve Table", icon: Calendar },
    { id: "sommelier", label: "Sommelier Pairings", icon: Volume2 },
    { id: "tracker", label: "Live Order Status", icon: Flame },
    { id: "story", label: "Our Culinary Story", icon: ShieldCheck }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-amber-500/20 shadow-2xl transition-all">
      {/* Skip to Main Content Link for Keyboard Navigation (Requirement #13) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-amber-500 focus:text-slate-950 focus:font-bold focus:rounded-md"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => setActiveTab("hero")}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
          aria-label="Continental Thaligai Home"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <span className="text-xl font-bold text-slate-950 font-serif">தள</span>
          </div>
          <div className="text-left">
            <h1 className="text-xl font-extrabold tracking-wide font-serif gold-gradient-text">
              CONTINENTAL THALIGAI
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-amber-300/80 font-medium">
              Imperial South Indian & European Fine Dining
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isActive
                    ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-inner"
                    : "text-slate-300 hover:text-amber-200 hover:bg-slate-900/60"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-slate-400"}`} />
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Right */}
        <div className="flex items-center gap-3">
          {/* Reduced Motion Accessibility Badge */}
          {isReducedMotion && (
            <span
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-[10px] font-medium text-amber-300"
              title="Reduced motion mode active"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Reduced Motion Active
            </span>
          )}

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 font-semibold shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label={`Open Cart, ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-xs font-bold hidden sm:inline">Order Cart</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-400 text-[11px] font-extrabold flex items-center justify-center border border-amber-400">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-300 focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-amber-500/20 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors ${
                  isActive
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-400"}`} />
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
