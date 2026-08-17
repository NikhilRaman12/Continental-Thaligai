import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle, Flame, Sparkles } from "lucide-react";
import { MenuItem } from "../../types/thaligai";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart
}) => {
  const [diningMode, setDiningMode] = useState<"Dine-In" | "Takeaway" | "Delivery">("Dine-In");
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [orderPlacedData, setOrderPlacedData] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  const discountAmount = (subtotal * appliedDiscount) / 100;
  const discountedSubtotal = subtotal - discountAmount;
  const tax = discountedSubtotal * 0.08;
  const tipAmount = (discountedSubtotal * tipPercentage) / 100;
  const total = discountedSubtotal + tax + tipAmount;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "ROYAL10" || promoCode.trim().toUpperCase() === "THALIGAI") {
      setAppliedDiscount(10);
    } else {
      alert("Invalid code. Try 'ROYAL10' for 10% off.");
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = "CT-ORD-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      setOrderPlacedData({
        id: orderId,
        diningMode,
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        tip: tipAmount.toFixed(2),
        total: total.toFixed(2),
        itemCount: cartItems.reduce((acc, ci) => acc + ci.quantity, 0)
      });
      setIsSubmitting(false);
      onClearCart();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex justify-end">
      <div
        className="w-full max-w-md h-full bg-slate-950 border-l border-amber-500/30 flex flex-col justify-between shadow-2xl p-6 overflow-y-auto"
        role="dialog"
        aria-labelledby="cart-heading"
      >
        {/* Cart Header */}
        <div className="space-y-4 pb-4 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <h3 id="cart-heading" className="text-xl font-bold font-serif gold-gradient-text flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" /> Order Basket
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Close Order Basket"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dining Mode Toggle */}
          <div className="grid grid-cols-3 gap-2 bg-slate-900 p-1.5 rounded-xl border border-amber-500/20">
            {(["Dine-In", "Takeaway", "Delivery"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setDiningMode(mode)}
                className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  diningMode === mode
                    ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 py-4 space-y-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-3 text-slate-500">
              <ShoppingBag className="w-12 h-12 mx-auto text-slate-700 stroke-[1.5]" />
              <p className="text-sm font-medium">Your basket is currently empty.</p>
              <p className="text-xs text-slate-600">Add dishes from our menu or design a custom thali.</p>
            </div>
          ) : (
            cartItems.map((ci) => (
              <div
                key={ci.item.id}
                className="glass-card p-3.5 rounded-2xl flex items-center gap-3 border-slate-800"
              >
                <img
                  src={ci.item.image}
                  alt={ci.item.name}
                  className="w-14 h-14 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-serif font-bold text-slate-100 truncate">
                    {ci.item.name}
                  </h4>
                  <span className="text-xs font-extrabold text-amber-400 block mt-0.5">
                    ${ci.item.price}
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => onUpdateQuantity(ci.item.id, -1)}
                    className="p-1 rounded-lg text-slate-400 hover:text-amber-400"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-bold px-1.5 text-slate-100">{ci.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(ci.item.id, 1)}
                    className="p-1 rounded-lg text-slate-400 hover:text-amber-400"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cartItems.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-slate-800">
            {/* Promo Code */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Promo Code (ROYAL10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 uppercase"
              />
              <button
                onClick={handleApplyPromo}
                className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-xs hover:bg-amber-500 hover:text-slate-950 border border-amber-500/30"
              >
                Apply
              </button>
            </div>

            {/* Tip Selection */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Sommelier & Staff Tip</span>
                <span className="text-amber-400 font-bold">{tipPercentage}%</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[0, 10, 15, 20].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTipPercentage(t)}
                    className={`py-1 rounded-lg text-xs font-semibold border ${
                      tipPercentage === t
                        ? "bg-amber-500/20 border-amber-400 text-amber-300"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    {t}%
                  </button>
                ))}
              </div>
            </div>

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-slate-300 pt-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Promo Discount ({appliedDiscount}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>GST Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Staff Gratuity ({tipPercentage}%)</span>
                <span>${tipAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-amber-400 pt-2 border-t border-slate-800">
                <span>Total Amount</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {isSubmitting ? "Placing Order..." : `Place Order (${diningMode}) — $${total.toFixed(2)}`}
            </button>
          </div>
        )}

        {/* Order Confirmation Modal */}
        {orderPlacedData && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="glass-card max-w-sm w-full rounded-3xl p-6 text-center space-y-5 border-amber-500/40 relative shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest">
                  Order Successfully Placed
                </span>
                <h3 className="text-xl font-bold font-serif text-slate-100">
                  {orderPlacedData.id}
                </h3>
                <p className="text-xs text-slate-400">Mode: {orderPlacedData.diningMode}</p>
              </div>

              <div className="glass-card p-3.5 rounded-2xl text-left text-xs space-y-1.5 text-slate-300">
                <div className="flex justify-between">
                  <span>Items Count:</span>
                  <span className="font-bold text-amber-300">{orderPlacedData.itemCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Paid:</span>
                  <span className="font-extrabold text-amber-400">${orderPlacedData.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kitchen Est:</span>
                  <span className="font-semibold text-emerald-400">18 Minutes</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setOrderPlacedData(null);
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-lg"
              >
                Track Live Order Progress
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
