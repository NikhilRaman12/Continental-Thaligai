import React, { useState } from "react";
import { Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, QrCode, ShieldCheck, X } from "lucide-react";

export const ReservationSection: React.FC = () => {
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("2026-08-20");
  const [time, setTime] = useState("19:30");
  const [partySize, setPartySize] = useState("2");
  const [seatingArea, setSeatingArea] = useState("Chef's Counter");
  const [specialRequests, setSpecialRequests] = useState("");
  const [reservationResult, setReservationResult] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const seatingOptions = [
    { id: "Chef's Counter", label: "Chef's Counter", desc: "Front-row interactive view of executive chefs plating thalis." },
    { id: "Garden Terrace", label: "Garden Terrace", desc: "Al fresco dining under ambient romantic fairy lanterns." },
    { id: "Royal Pods", label: "Royal Dining Pods", desc: "Private enclosed plush booths with dedicated butler service." },
    { id: "Wine Vault", label: "Private Wine Cellar", desc: "Exclusive subterranean vault surrounded by rare vintage vintages." }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const code = "CT-RES-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      setReservationResult({
        id: code,
        guestName,
        email,
        phone: phone || "+1 (555) 234-5678",
        date,
        time,
        partySize: Number(partySize),
        seatingArea,
        specialRequests: specialRequests || "None",
        qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${code}`
      });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="reservation-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 inline-flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" /> VIP Concierge
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-100">
          Reserve Your Imperial Table
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Immerse yourself in fine dining luxury. Book your private dining pod or chef counter seat.
        </p>
      </div>

      <div className="max-w-4xl mx-auto glass-card p-6 sm:p-10 rounded-3xl border-amber-500/30 shadow-2xl space-y-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Seating Area Picker */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
              Select Seating Atmosphere
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {seatingOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setSeatingArea(opt.id)}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    seatingArea === opt.id
                      ? "bg-amber-500/20 border-amber-400 text-amber-200 shadow-lg"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="font-serif font-bold text-sm text-slate-100 flex items-center justify-between">
                    <span>{opt.label}</span>
                    {seatingArea === opt.id && <Sparkles className="w-4 h-4 text-amber-400" />}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Guest Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">Guest Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Lady Victoria"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full bg-slate-950/80 border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                aria-label="Full Name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">Email Address *</label>
              <input
                type="email"
                required
                placeholder="victoria@luxury.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950/80 border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                aria-label="Email Address"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 019-2834"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950/80 border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                aria-label="Phone Number"
              />
            </div>
          </div>

          {/* Date, Time, Party Size */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">Reservation Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-slate-950/80 border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-slate-100"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">Dining Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-slate-950/80 border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-slate-100"
              >
                {["17:30", "18:30", "19:30", "20:30", "21:30"].map((t) => (
                  <option key={t} value={t}>{t} PM</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">Party Size</label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                className="w-full bg-slate-950/80 border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-slate-100"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 block">Special Occasion / Dietary Notes</label>
            <textarea
              rows={2}
              placeholder="e.g. 10th Wedding Anniversary, severe nut allergy, sommelier wine pairing required..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="w-full bg-slate-950/80 border border-amber-500/20 rounded-xl p-3 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-600 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {isSubmitting ? "Confirming Reservation..." : "Confirm Royal Table Reservation"}
          </button>
        </form>

        {/* Confirmation Modal */}
        {reservationResult && (
          <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
            <div
              className="glass-card max-w-md w-full rounded-3xl p-6 space-y-6 border-amber-500/40 text-center relative shadow-2xl"
              role="dialog"
            >
              <button
                onClick={() => setReservationResult(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center mx-auto text-amber-400">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest">
                  Reservation Confirmed
                </span>
                <h3 className="text-2xl font-bold font-serif text-slate-100">
                  {reservationResult.guestName}
                </h3>
                <p className="text-xs text-amber-300 font-mono">Code: {reservationResult.id}</p>
              </div>

              <div className="glass-card p-4 rounded-2xl text-left text-xs space-y-2 text-slate-300 border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Atmosphere:</span>
                  <span className="font-bold text-amber-200">{reservationResult.seatingArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Date & Time:</span>
                  <span className="font-bold text-amber-200">{reservationResult.date} @ {reservationResult.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Guests:</span>
                  <span className="font-bold text-amber-200">{reservationResult.partySize} Persons</span>
                </div>
              </div>

              {/* Digital Pass Simulation */}
              <div className="bg-slate-900 p-4 rounded-2xl border border-amber-500/20 inline-block">
                <img
                  src={reservationResult.qrCode}
                  alt="Digital Pass QR Code"
                  className="w-32 h-32 mx-auto rounded-lg"
                />
                <span className="text-[10px] text-slate-400 block mt-2">Present QR upon arrival at Concierge</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
