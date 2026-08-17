export interface MenuItem {
  id: string;
  name: string;
  tamilName?: string;
  category: "signature" | "tapas" | "mains" | "breads" | "beverages" | "desserts";
  price: number;
  description: string;
  sensoryProfile: {
    spiceLevel: number;
    aroma: number;
    richness: number;
    winePairing: string;
  };
  dietary: ("vegetarian" | "vegan" | "gluten-free" | "nut-free" | "chef-special")[];
  calories: number;
  image: string;
  chefNotes?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "thali-chola",
    name: "The Royal Chola-Bordeaux Platter",
    tamilName: "இராஜ சோழ தளிகை",
    category: "signature",
    price: 68,
    description: "A grandiose 11-course degustation thali featuring Truffle-Infused Chettinad Duck Confit, Smoked Coconut Sambar, Wild Morel Kootu, and Saffron Jeera Basmati, served on an engraved brass thali.",
    sensoryProfile: {
      spiceLevel: 3,
      aroma: 5,
      richness: 5,
      winePairing: "Châteauneuf-du-Pape 2018"
    },
    dietary: ["chef-special"],
    calories: 1150,
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    chefNotes: "Slow-cooked for 14 hours using authentic heritage spices and French sous-vide techniques."
  },
  {
    id: "thali-mediterranean",
    name: "Mediterranean-Malabar Tasting Thaligai",
    tamilName: "மலபார் மத்திய தரைக்கடல் தளிகை",
    category: "signature",
    price: 62,
    description: "Pan-seared Atlantic Salmon Tikka, Porcini Mushroom Rasam shooter, Burrata & Curry Leaf Pesto, Roasted Raw Mango Poriyal, and Garlic Brioche Naan.",
    sensoryProfile: {
      spiceLevel: 2,
      aroma: 5,
      richness: 4,
      winePairing: "Sancerre Blanc 2021"
    },
    dietary: ["gluten-free", "chef-special"],
    calories: 980,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    chefNotes: "Harmonizing coastal South Indian kokum and tamarind with Mediterranean extra-virgin olive oils."
  },
  {
    id: "thali-vegan-riviera",
    name: "Vegan Riviera Thaligai",
    tamilName: "இயற்கை பிரெஞ்ச் தளிகை",
    category: "signature",
    price: 54,
    description: "Heirloom Jackfruit Osso Buco, Smoked Coconut Sambar, Crispy Plantain Carpaccio, Golden Turmeric Risotto, and Fig Curry Leaf Relish.",
    sensoryProfile: {
      spiceLevel: 2,
      aroma: 4,
      richness: 3,
      winePairing: "Organic Pinot Noir 2020"
    },
    dietary: ["vegan", "vegetarian", "gluten-free"],
    calories: 820,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    chefNotes: "100% plant-based luxury thali using organic heirloom produce from Malabar farms."
  },
  {
    id: "tapas-burrata",
    name: "Curry Leaf & Black Truffle Burrata",
    tamilName: "கறிவேப்பிலை டிரஃபிள் புர்ராட்டா",
    category: "tapas",
    price: 24,
    description: "Fresh Puglia Burrata infused with tempered curry leaf oil, roasted mustard seeds, micro-greens, and toasted sourdough.",
    sensoryProfile: {
      spiceLevel: 1,
      aroma: 4,
      richness: 5,
      winePairing: "Prosecco Superiore DOCG"
    },
    dietary: ["vegetarian"],
    calories: 420,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?auto=format&fit=crop&w=800&q=80",
    chefNotes: "Artisanal burrata flown in fresh weekly, paired with cold-pressed gingelly oil infusion."
  },
  {
    id: "tapas-scallops",
    name: "Seared Scallops in Rasam Velouté",
    tamilName: "இரசம் வேலூட் ஸ்காலப்ஸ்",
    category: "tapas",
    price: 28,
    description: "Pan-seared Hokkaido scallops seated atop a silky heirloom tomato and black pepper velouté with crispy curry leaf crisp.",
    sensoryProfile: {
      spiceLevel: 3,
      aroma: 5,
      richness: 3,
      winePairing: "Dry Riesling Reserve"
    },
    dietary: ["gluten-free"],
    calories: 310,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    chefNotes: "French classic velouté reduction spiced with Tellicherry black peppercorns."
  },
  {
    id: "mains-lamb",
    name: "Sous-Vide Lamb Pepper Fry Wellington",
    tamilName: "ஆட்டுக்கறி பெப்பர் வெலிங்டன்",
    category: "mains",
    price: 42,
    description: "Tender lamb loin coated in Chettinad pepper mushroom duxelles, wrapped in butter puff pastry with coconut jus.",
    sensoryProfile: {
      spiceLevel: 4,
      aroma: 5,
      richness: 5,
      winePairing: "Barolo DOCG 2017"
    },
    dietary: ["chef-special"],
    calories: 780,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    chefNotes: "A showstopping fusion of British Wellington craftsmanship and South Indian heat."
  },
  {
    id: "mains-paneer",
    name: "Wild Morel & Paneer Gnocchi",
    tamilName: "மோரெல் பன்னீர் ஞ்ஞாக்கி",
    category: "mains",
    price: 32,
    description: "Handcrafted potato-paneer gnocchi tossed in a creamy Kashmir saffron sauce with seared Himalayan morel mushrooms.",
    sensoryProfile: {
      spiceLevel: 1,
      aroma: 4,
      richness: 4,
      winePairing: "Chardonnay Carneros"
    },
    dietary: ["vegetarian"],
    calories: 610,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    chefNotes: "Feather-light gnocchi pillows imbued with pure saffron pistils."
  },
  {
    id: "breads-garlic-brioche",
    name: "Truffle & Garlic Brioche Naan",
    tamilName: "டிரஃபிள் பூண்டு பிரியோஷ் நான்",
    category: "breads",
    price: 12,
    description: "Clay-oven baked French brioche naan brushed with black truffle butter and roasted garlic flakes.",
    sensoryProfile: {
      spiceLevel: 1,
      aroma: 5,
      richness: 4,
      winePairing: "Champagne Brut"
    },
    dietary: ["vegetarian"],
    calories: 290,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
    chefNotes: "Laminated brioche dough baked at 700°F in traditional tandoor."
  },
  {
    id: "beverage-elixir",
    name: "Saffron & Smoked Cardamom Old Fashioned",
    tamilName: "குங்குமப்பூ காடமம் விஸ்கி",
    category: "beverages",
    price: 18,
    description: "Aged Bourbon infused with Kashmiri saffron, smoked green cardamom bitters, and jaggery syrup.",
    sensoryProfile: {
      spiceLevel: 2,
      aroma: 5,
      richness: 3,
      winePairing: "Self-Paired Signature Cocktail"
    },
    dietary: ["vegan", "gluten-free"],
    calories: 180,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    chefNotes: "Smoked tableside with clove-infused oak wood chips."
  },
  {
    id: "dessert-tiramisu",
    name: "Kumbakonam Filter Coffee Tiramisu",
    tamilName: "கும்பகோணம் ஃபில்டர் காபி திராமிசு",
    category: "desserts",
    price: 16,
    description: "Savoiardi ladyfingers soaked in chicory-rich Kumbakonam degree coffee, mascarpone mousse, and valrhona cocoa dusting.",
    sensoryProfile: {
      spiceLevel: 1,
      aroma: 5,
      richness: 4,
      winePairing: "Tawny Port 20 Year"
    },
    dietary: ["vegetarian"],
    calories: 410,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    chefNotes: "Using freshly roasted South Indian Arabica beans extracted in brass decoction filters."
  }
];
