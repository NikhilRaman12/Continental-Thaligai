import React from "react";
import { MapPin, Phone, Mail, Clock, Award, ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-800 flex items-center justify-center font-bold text-slate-950 font-serif">
                தள
              </div>
              <span className="font-serif font-bold text-base gold-gradient-text">
                CONTINENTAL THALIGAI
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Where Imperial South Indian thali tradition converges with European fine dining technique.
            </p>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-100 uppercase tracking-wider text-amber-300">
              Dining Hours
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Lunch Degustation: 12:00 PM – 3:30 PM
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Dinner Experience: 6:30 PM – 11:30 PM
              </p>
              <p className="text-amber-400/90 text-[11px] pt-1">
                Reservations recommended 48h in advance.
              </p>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-100 uppercase tracking-wider text-amber-300">
              Grand Flagship Location
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                42 Imperial Boulevard, Mayfair, London
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                +44 (0) 20 7946 0912
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                concierge@continentalthaligai.com
              </p>
            </div>
          </div>

          {/* Accessibility & Safety */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-100 uppercase tracking-wider text-amber-300">
              Accessibility & Safety
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full keyboard accessibility (WCAG 2.1 AA) and Reduced Motion media support enabled across our digital portal.
            </p>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Allergen & Halal Certified
            </span>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Continental Thaligai Group. All rights reserved.
          </p>
          <div className="flex gap-4 text-[11px] text-slate-500">
            <a href="#accessibility" className="hover:text-amber-300">Accessibility Statement</a>
            <a href="#privacy" className="hover:text-amber-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-amber-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
