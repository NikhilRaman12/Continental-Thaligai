import React, { useState, useEffect } from "react";
import { Flame, CheckCircle, Clock, MapPin, RefreshCw, ChefHat, UtensilsCrossed, Sparkles } from "lucide-react";

export const OrderTracker: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(1);
  const [simulatedMinutes, setSimulatedMinutes] = useState<number>(14);

  const steps = [
    { title: "Order Received", desc: "Ticket sent to executive kitchen display.", status: "completed" },
    { title: "Sous Chef Prep & Spicing", desc: "Grinding fresh Tellicherry peppercorns & tempered gingelly oil.", status: "completed" },
    { title: "Tandoor & Grill Sear", desc: "700°F clay oven roasting and sous-vide finishing.", status: "current" },
    { title: "Plating & Garnish", desc: "Arranging courses on hand-engraved brass thali.", status: "pending" },
    { title: "Tableside Delivery", desc: "Sommelier & silver service presentation at your table.", status: "pending" }
  ];

  const advanceStep = () => {
    setCurrentStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    setSimulatedMinutes((prev) => Math.max(0, prev - 4));
  };

  return (
    <section id="tracker-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 inline-flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5" /> Kitchen Live Feed
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-100">
          Live Order Status & Kitchen Counter
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Track your Thaligai order in real-time as executive chefs prepare and plate each course.
        </p>
      </div>

      <div className="max-w-4xl mx-auto glass-card p-6 sm:p-10 rounded-3xl border-amber-500/30 space-y-8 shadow-2xl">
        {/* Order Meta Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Active Order</span>
            <h3 className="text-xl font-bold font-serif text-slate-100">Order #CT-8924</h3>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Table 7 — Chef's Counter Section
            </p>
          </div>

          <div className="text-center sm:text-right bg-slate-950 px-5 py-3 rounded-2xl border border-amber-500/20">
            <span className="text-[10px] uppercase text-slate-400 block font-bold">Estimated Delivery</span>
            <span className="text-2xl font-extrabold text-amber-400 flex items-center gap-1 justify-center sm:justify-end">
              <Clock className="w-5 h-5" /> {simulatedMinutes} mins
            </span>
          </div>
        </div>

        {/* Multi-stage Progress Stepper */}
        <div className="space-y-6">
          {steps.map((step, idx) => {
            const isDone = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <div key={step.title} className="flex items-start gap-4 group">
                {/* Status Dot / Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                    isDone
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                      : isCurrent
                      ? "bg-amber-500 text-slate-950 ring-4 ring-amber-500/30 shadow-lg shadow-amber-500/30 animate-pulse"
                      : "bg-slate-900 text-slate-600 border border-slate-800"
                  }`}
                >
                  {isDone ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4 border-b border-slate-900 last:border-none">
                  <div className="flex items-center justify-between">
                    <h4
                      className={`text-base font-serif font-bold ${
                        isDone
                          ? "text-emerald-400"
                          : isCurrent
                          ? "text-amber-300"
                          : "text-slate-500"
                      }`}
                    >
                      {step.title}
                    </h4>
                    {isCurrent && (
                      <span className="text-[10px] uppercase font-bold text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-500/20">
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Simulator Controller */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={advanceStep}
            disabled={currentStepIndex >= steps.length - 1}
            className="px-6 py-3 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-xs hover:bg-amber-500 hover:text-slate-950 border border-amber-500/30 transition-all flex items-center gap-2 disabled:opacity-40"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Simulate Kitchen Progress Step</span>
          </button>
        </div>
      </div>
    </section>
  );
};
