import React, { useMemo, useState } from "react";
import {
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Heart,
  X,
  Star,
} from "lucide-react";

import products from "../data/product";
import ShopInterior from "../pages/ShopInterior";
import CountreesInterior from "../pages/CountreesInterior";
const CATEGORIES = ["Chair", "Sofa", "Table"];

const MATERIALS = [
  "Boucle",
  "Velvet",
  "Linen",
  "Leather",
  "Oak",
];

const STYLES = [
  "Classic",
  "Contemporary",
  "Modern",
];

const SORT_OPTIONS = [
  "Relevance",
  "Popularity",
  "Price: Low to High",
  "Price: High to Low",
  "New Arrivals",
];

/* --------------------------------
   FILTER SECTION
-------------------------------- */

function FilterSection({
  title,
  children,
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#363332]/10 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between"
      >
        <span className="text-sm font-medium">
          {title}
        </span>

        {open ? (
          <ChevronUp size={17} />
        ) : (
          <ChevronDown size={17} />
        )}
      </button>

      {open && (
        <div className="mt-5">
          {children}
        </div>
      )}
    </div>
  );
}

/* --------------------------------
   FILTER SIDEBAR
-------------------------------- */

function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
  selectedMaterials,
  setSelectedMaterials,
  selectedStyles,
  setSelectedStyles,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  clearFilters,
}) {
  const toggle = (value, selected, setter) => {
    setter(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    );
  };

  return (
    <aside className="w-full">

      {/* FILTER HEADER */}

      <div className="flex items-center justify-between pb-4 border-b border-[#363332]/15">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} />
          <span className="text-base font-medium">
            Filters
          </span>
        </div>

        <button
          onClick={clearFilters}
          className="text-xs underline underline-offset-4 text-[#363332]/60"
        >
          Clear All
        </button>
      </div>

      {/* CATEGORY */}

      <FilterSection title="Category">
        <div className="space-y-3">

          {CATEGORIES.map((category) => {

            const count = products.filter(
              (product) =>
                product.category === category
            ).length;

            return (
              <label
                key={category}
                className="flex items-center justify-between cursor-pointer text-sm"
              >
                <span className="flex items-center gap-3">

                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      category
                    )}
                    onChange={() =>
                      toggle(
                        category,
                        selectedCategories,
                        setSelectedCategories
                      )
                    }
                    className="w-4 h-4 accent-[#363332]"
                  />

                  {category}
                </span>

                <span className="text-xs text-[#363332]/40">
                  {count}
                </span>
              </label>
            );
          })}

        </div>
      </FilterSection>

      {/* PRICE */}

      <FilterSection title="Price">

        <div className="grid grid-cols-2 gap-3">

          <div className="border border-[#363332]/20 px-3 py-2">
            <p className="text-[10px] uppercase tracking-wider text-[#363332]/50">
              Min
            </p>

            <input
              type="number"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(e.target.value)
              }
              placeholder="₹0"
              className="w-full outline-none text-sm mt-1"
            />
          </div>

          <div className="border border-[#363332]/20 px-3 py-2">
            <p className="text-[10px] uppercase tracking-wider text-[#363332]/50">
              Max
            </p>

            <input
              type="number"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value)
              }
              placeholder="₹100000"
              className="w-full outline-none text-sm mt-1"
            />
          </div>

        </div>

        <div className="flex justify-between mt-4 text-xs text-[#363332]/50">
          <span>₹0</span>
          <span>₹1,00,000+</span>
        </div>

      </FilterSection>

      {/* MATERIAL */}

      <FilterSection title="Material">

        <div className="space-y-3">

          {MATERIALS.map((material) => (

            <label
              key={material}
              className="flex items-center gap-3 cursor-pointer text-sm"
            >

              <input
                type="checkbox"
                checked={selectedMaterials.includes(
                  material
                )}
                onChange={() =>
                  toggle(
                    material,
                    selectedMaterials,
                    setSelectedMaterials
                  )
                }
                className="w-4 h-4 accent-[#363332]"
              />

              {material}

            </label>

          ))}

        </div>

      </FilterSection>

      {/* STYLE */}

      <FilterSection title="Design Style">

        <div className="space-y-3">

          {STYLES.map((style) => (

            <label
              key={style}
              className="flex items-center gap-3 cursor-pointer text-sm"
            >

              <input
                type="checkbox"
                checked={selectedStyles.includes(style)}
                onChange={() =>
                  toggle(
                    style,
                    selectedStyles,
                    setSelectedStyles
                  )
                }
                className="w-4 h-4 accent-[#363332]"
              />

              {style}

            </label>

          ))}

        </div>

      </FilterSection>

    </aside>
  );
}

/* --------------------------------
   PRODUCT CARD
-------------------------------- */

function ProductCard({ product }) {

  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative">

      {/* IMAGE */}

      <div className="relative bg-[#f5f5f3] overflow-hidden aspect-[0.82]">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* NEW */}

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-white px-2.5 py-1 text-[10px] tracking-widest">
            NEW
          </span>
        )}

        {/* WISHLIST */}

        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm"
        >
          <Heart
            size={17}
            strokeWidth={1.6}
            fill={liked ? "#363332" : "none"}
          />
        </button>

        {/* QUICK VIEW */}

        <button className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-3.5 text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          Quick View
        </button>

      </div>

      {/* DETAILS */}

      <div className="pt-4 pb-7">

        {/* CATEGORY */}

        <p className="text-[10px] uppercase tracking-[0.18em] text-[#363332]/45">
          {product.category}
        </p>

        {/* NAME */}

        <h3 className="text-sm md:text-[15px] mt-1 font-medium leading-6">
          {product.name}
        </h3>

        {/* RATING */}

        <div className="flex items-center gap-1 mt-2">

          <div className="flex">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={12}
                fill="#363332"
                strokeWidth={1}
              />
            ))}

          </div>

          <span className="text-[11px] text-[#363332]/45">
            (12)
          </span>

        </div>

        {/* PRICE */}

        <div className="flex items-center gap-2 mt-2">

          <span className="text-sm font-medium">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.isNew && (
            <span className="text-[10px] uppercase tracking-wider text-[#363332]/50">
              New Arrival
            </span>
          )}

        </div>

      </div>

    </div>
  );
}

/* --------------------------------
   SHOP
-------------------------------- */

const Shop = () => {

  const [mobileFilter, setMobileFilter] =
    useState(false);

  const [sort, setSort] =
    useState("Relevance");

  const [selectedCategories, setSelectedCategories] =
    useState([]);

  const [selectedMaterials, setSelectedMaterials] =
    useState([]);

  const [selectedStyles, setSelectedStyles] =
    useState([]);

  const [minPrice, setMinPrice] =
    useState("");

  const [maxPrice, setMaxPrice] =
    useState("");

  /* --------------------------------
     FILTER + SORT
  -------------------------------- */

  const filteredProducts = useMemo(() => {

    let result = products.filter((product) => {

      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const materialMatch =
        selectedMaterials.length === 0 ||
        selectedMaterials.includes(product.material);

      const styleMatch =
        selectedStyles.length === 0 ||
        selectedStyles.includes(product.style);

      const minMatch =
        minPrice === "" ||
        product.price >= Number(minPrice);

      const maxMatch =
        maxPrice === "" ||
        product.price <= Number(maxPrice);

      return (
        categoryMatch &&
        materialMatch &&
        styleMatch &&
        minMatch &&
        maxMatch
      );
    });

    if (sort === "Price: Low to High") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "Price: High to Low") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "New Arrivals") {
      result.sort(
        (a, b) =>
          Number(b.isNew) - Number(a.isNew)
      );
    }

    return result;

  }, [
    selectedCategories,
    selectedMaterials,
    selectedStyles,
    minPrice,
    maxPrice,
    sort,
  ]);

  /* --------------------------------
     CLEAR
  -------------------------------- */

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedStyles([]);
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <main className="w-full bg-white text-[#363332]">
            <ShopInterior />
            <CountreesInterior />
      {/* ==================================
          HEADER / INTRO
      ================================== */}

      <section className="w-[92%] mx-auto pt-10 md:pt-14 pb-8">

        <p className="text-xs text-[#363332]/45 mb-5">
          Home / Shop / Furniture
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

          <div>

            <h1 className="text-3xl md:text-5xl font-light tracking-wide">
              Furniture
            </h1>

            <p className="mt-3 text-sm text-[#363332]/55 max-w-xl leading-6">
              Thoughtfully designed furniture made to bring
              comfort, character and timeless style into your space.
            </p>

          </div>

        </div>

      </section>

      {/* ==================================
          TOOLBAR
      ================================== */}

      <section className="w-[92%] mx-auto border-y border-[#363332]/10 py-4">

        <div className="flex items-center justify-between gap-4">

          {/* MOBILE FILTER */}

          <button
            onClick={() => setMobileFilter(true)}
            className="md:hidden flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>

          {/* DESKTOP INFO */}

          <p className="text-sm text-[#363332]/60">
            {filteredProducts.length} Products
          </p>

          {/* SORT */}

          <div className="flex items-center gap-3">

            <span className="hidden sm:block text-sm text-[#363332]/55">
              Sort By
            </span>

            <div className="relative">

              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
                className="appearance-none border border-[#363332]/15 pl-4 pr-10 py-2.5 text-sm bg-white outline-none cursor-pointer"
              >

                {SORT_OPTIONS.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}

              </select>

              <ChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ==================================
          MAIN SHOP AREA
      ================================== */}

      <section className="w-[92%] mx-auto py-8 md:py-10">

        <div className="flex gap-8 lg:gap-10">

          {/* DESKTOP FILTER */}
<div className="hidden md:block w-[220px] lg:w-[250px] shrink-0 self-start sticky top-24">

            <FilterSidebar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              selectedStyles={selectedStyles}
              setSelectedStyles={setSelectedStyles}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              clearFilters={clearFilters}
            />

          </div>

          {/* PRODUCTS */}

          <div className="flex-1 min-w-0">

            {filteredProducts.length === 0 ? (

              <div className="py-32 text-center">

                <h2 className="text-xl font-light">
                  No products found
                </h2>

                <p className="text-sm text-[#363332]/50 mt-2">
                  Try changing or clearing your filters.
                </p>

                <button
                  onClick={clearFilters}
                  className="mt-6 bg-[#363332] text-white px-7 py-3 text-xs uppercase tracking-widest"
                >
                  Clear Filters
                </button>

              </div>

            ) : (

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-5">

                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

              </div>

            )}

          </div>

        </div>

      </section>

      {/* ==================================
          MOBILE FILTER DRAWER
      ================================== */}

      {mobileFilter && (

        <div className="fixed  inset-0 z-[100] md:hidden">

          {/* BACKDROP */}

          <div
            onClick={() => setMobileFilter(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* PANEL */}

          <div className="absolute right-0 top-0 h-full w-[88%] max-w-[400px] bg-white overflow-y-auto">

            <div className="sticky top-0 bg-white z-10 px-5 py-5 border-b border-[#363332]/10 flex items-center justify-between">

              <h2 className="text-lg font-medium">
                Filters
              </h2>

              <button
                onClick={() => setMobileFilter(false)}
              >
                <X size={21} />
              </button>

            </div>

            <div className="px-5 py-5">

              <FilterSidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedMaterials={selectedMaterials}
                setSelectedMaterials={setSelectedMaterials}
                selectedStyles={selectedStyles}
                setSelectedStyles={setSelectedStyles}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                clearFilters={clearFilters}
              />

            </div>

            <div className="sticky bottom-0 bg-white border-t p-4">

              <button
                onClick={() => setMobileFilter(false)}
                className="w-full bg-[#363332] text-white py-3.5 text-xs uppercase tracking-widest"
              >
                Show {filteredProducts.length} Products
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default Shop;