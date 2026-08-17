import { useEffect, useState, type ComponentType } from "react";

import { modules as discoveredModules } from "./.generated/mockup-components";
import { Header } from "./components/thaligai/Header";
import { Hero } from "./components/thaligai/Hero";
import { MenuSection } from "./components/thaligai/MenuSection";
import { ThaligaiBuilder } from "./components/thaligai/ThaligaiBuilder";
import { ReservationSection } from "./components/thaligai/ReservationSection";
import { SommelierSection } from "./components/thaligai/SommelierSection";
import { OrderTracker } from "./components/thaligai/OrderTracker";
import { StorySection } from "./components/thaligai/StorySection";
import { CartDrawer, CartItem } from "./components/thaligai/CartDrawer";
import { Footer } from "./components/thaligai/Footer";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { MenuItem } from "./types/thaligai";

type ModuleMap = Record<string, () => Promise<Record<string, unknown>>>;

function _resolveComponent(
  mod: Record<string, unknown>,
  name: string,
): ComponentType | undefined {
  const fns = Object.values(mod).filter(
    (v) => typeof v === "function",
  ) as ComponentType[];
  return (
    (mod.default as ComponentType) ||
    (mod.Preview as ComponentType) ||
    (mod[name] as ComponentType) ||
    fns[fns.length - 1]
  );
}

function PreviewRenderer({
  componentPath,
  modules,
}: {
  componentPath: string;
  modules: ModuleMap;
}) {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setComponent(null);
    setError(null);

    async function loadComponent(): Promise<void> {
      const key = `./components/mockups/${componentPath}.tsx`;
      const loader = modules[key];
      if (!loader) {
        setError(`No component found at ${componentPath}.tsx`);
        return;
      }

      try {
        const mod = await loader();
        if (cancelled) {
          return;
        }
        const name = componentPath.split("/").pop()!;
        const comp = _resolveComponent(mod, name);
        if (!comp) {
          setError(
            `No exported React component found in ${componentPath}.tsx\n\nMake sure the file has at least one exported function component.`,
          );
          return;
        }
        setComponent(() => comp);
      } catch (e) {
        if (cancelled) {
          return;
        }

        const message = e instanceof Error ? e.message : String(e);
        setError(`Failed to load preview.\n${message}`);
      }
    }

    void loadComponent();

    return () => {
      cancelled = true;
    };
  }, [componentPath, modules]);

  if (error) {
    return (
      <pre style={{ color: "red", padding: "2rem", fontFamily: "system-ui" }}>
        {error}
      </pre>
    );
  }

  if (!Component) return null;

  return <Component />;
}

function getBasePath(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

function getPreviewPath(): string | null {
  const basePath = getBasePath();
  const { pathname } = window.location;
  const local =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const match = local.match(/^\/preview\/(.+)$/);
  return match ? match[1] : null;
}

function ContinentalThaligaiExperience() {
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const isReducedMotion = useReducedMotion();

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        isReducedMotion={isReducedMotion}
      />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Render sections based on navigation or show rich combined landing */}
        {activeTab === "hero" && (
          <>
            <Hero onNavigate={setActiveTab} isReducedMotion={isReducedMotion} />
            <MenuSection onAddToCart={handleAddToCart} />
            <ThaligaiBuilder onAddToCart={handleAddToCart} />
            <ReservationSection />
            <SommelierSection />
            <OrderTracker />
            <StorySection />
          </>
        )}

        {activeTab === "menu" && <MenuSection onAddToCart={handleAddToCart} />}
        {activeTab === "builder" && <ThaligaiBuilder onAddToCart={handleAddToCart} />}
        {activeTab === "reservation" && <ReservationSection />}
        {activeTab === "sommelier" && <SommelierSection />}
        {activeTab === "tracker" && <OrderTracker />}
        {activeTab === "story" && <StorySection />}
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      <Footer />
    </div>
  );
}

function App() {
  const previewPath = getPreviewPath();

  if (previewPath) {
    return (
      <PreviewRenderer
        componentPath={previewPath}
        modules={discoveredModules}
      />
    );
  }

  return <ContinentalThaligaiExperience />;
}

export default App;
