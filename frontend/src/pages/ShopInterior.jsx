import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const furnitureCategories = [
  {
    name: "Living Room",
    slug: "living-room",
    items: [
      "Sofas",
      "Lounge Chairs",
      "Recliners",
      "Coffee Tables",
      "Side Tables",
      "TV Units",
      "Console Tables",
    ],
  },
  {
    name: "Bedroom",
    slug: "bedroom",
    items: [
      "Beds",
      "Bedside Tables",
      "Wardrobes",
      "Dressers",
      "Nightstands",
      "Benches",
    ],
  },
  {
    name: "Dining",
    slug: "dining",
    items: [
      "Dining Tables",
      "Dining Chairs",
      "Sideboards",
      "Bar Furniture",
      "Benches",
    ],
  },
  {
    name: "Office",
    slug: "office",
    items: [
      "Office Desks",
      "Office Chairs",
      "Bookcases",
      "Cabinets",
      "Shelving",
    ],
  },
  {
    name: "Outdoor",
    slug: "outdoor",
    items: [
      "Outdoor Chairs",
      "Outdoor Tables",
      "Benches",
      "Loungers",
    ],
  },
  {
    name: "Kitchen",
    slug: "kitchen",
    items: [
      "Kitchen Tables",
      "Kitchen Chairs",
      "Bar Stools",
      "Storage Units",
      "Kitchen Shelves",
    ],
  },
  {
    name: "Storage",
    slug: "storage",
    items: [
      "Cabinets",
      "Bookcases",
      "Shelving Units",
      "Sideboards",
      "Storage Benches",
    ],
  },
  {
    name: "Study Room",
    slug: "study-room",
    items: [
      "Study Tables",
      "Study Chairs",
      "Bookcases",
      "Desks",
      "Storage",
    ],
  },
  {
    name: "Kids Room",
    slug: "kids-room",
    items: [
      "Kids Beds",
      "Study Tables",
      "Kids Chairs",
      "Storage",
      "Shelves",
    ],
  },
  {
    name: "Decor",
    slug: "decor",
    items: [
      "Mirrors",
      "Lamps",
      "Wall Decor",
      "Rugs",
      "Cushions",
    ],
  },
  {
    name: "Mattresses",
    slug: "mattresses",
    items: [
      "Memory Foam",
      "Spring Mattresses",
      "Latex Mattresses",
      "Single Mattresses",
      "King Mattresses",
    ],
  },

  {
    name: "More",
    slug: "more",
    items: [
      "Benches",
      "Ottomans",
      "Footstools",
      "Bar Furniture",
      "Accent Furniture",
      "New Arrivals",
      "Best Sellers",
    ],
  },
];

const ShopInterior = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  const goToCategory = (category) => {
    navigate(`/shop?category=${category.slug}`);
    setActiveCategory(null);
  };

  const goToItem = (category, item) => {
    navigate(
      `/shop?category=${category.slug}&type=${encodeURIComponent(item)}`
    );
    setActiveCategory(null);
  };

  return (
    <section className="sticky top-20 z-40 w-full bg-white border-b border-[#363332]/10">
      {/* CATEGORY BAR */}
      <div className="w-[77%] mx-auto">
        <div className="flex items-center gap-8 md:gap-10 lg:gap-12 h-14 overflow-x-auto no-scrollbar">

          {furnitureCategories.map((category) => (
            <div
              key={category.slug}
              className="relative h-full flex items-center shrink-0"
              onMouseEnter={() => setActiveCategory(category)}
            >
              <button
                type="button"
                onClick={() => goToCategory(category)}
                className={`flex items-center gap-1.5 h-full text-sm tracking-wide whitespace-nowrap transition ${
                  activeCategory?.slug === category.slug
                    ? "text-[#363332] font-medium"
                    : "text-[#363332]/65 hover:text-[#363332]"
                }`}
              >
                {category.name}

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeCategory?.slug === category.slug
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MEGA MENU */}
      {activeCategory && (
        <div
          className="absolute left-0 top-full w-full bg-white border-t border-[#363332]/10 shadow-xl"
          onMouseLeave={() => setActiveCategory(null)}
        >
          <div className="w-[92%] mx-auto py-8">
            <div className="flex items-start justify-between gap-10">

              {/* LEFT */}
              <div className="min-w-[220px]">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#363332]/45 mb-3">
                  Furniture
                </p>

                <h2 className="text-2xl font-light">
                  {activeCategory.name}
                </h2>

                <button
                  type="button"
                  onClick={() => goToCategory(activeCategory)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
                >
                  View All {activeCategory.name}
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* ITEMS */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4">
                {activeCategory.items.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      goToItem(activeCategory, item)
                    }
                    className="text-left text-sm text-[#363332]/65 hover:text-[#363332] hover:translate-x-1 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShopInterior;