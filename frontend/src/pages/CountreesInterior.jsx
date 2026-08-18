import React, { useEffect, useState } from "react";

const images = [
  "/src/assets/images/Burgundy & Gold — Luxury Furniture.png",
  "/src/assets/images/Emerald Green — Nature & Premium.png",
  "/src/assets/images/interior.png",
  "/src/assets/images/Moody Charcoal and Gold Luxury Lounge.png",
  "/src/assets/images/Moody Navy Lounge with Warm Accents.png",
  "/src/assets/images/Terracotta  Beige — Warm Contemporary.png",
];

const CountreesInterior = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2700);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="w-[92%] mx-auto">

        {/* WIDE BANNER */}
        <div className="relative w-full h-[170px] sm:h-[210px] md:h-[260px] lg:h-[290px] overflow-hidden bg-[#e9e6e0]">

          {/* SLIDING TRACK */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${
                currentIndex * (100 / images.length)
              }%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="h-full flex-shrink-0"
                style={{
                  width: `${100 / images.length}%`,
                }}
              >
                <img
                  src={image}
                  alt={`Countrees interior ${index + 1}`}
                  className="w-full h-full object-cover object-center scale-[1.12]"
                />
              </div>
            ))}
          </div>

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-7 bg-[#363332]"
                  : "w-2 bg-[#363332]/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CountreesInterior;