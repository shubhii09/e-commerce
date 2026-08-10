import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const categories = [
    { label: "New Arrivals", to: "/shop" },
    { label: "Best Sellers", to: "/shop" },
    { label: "Home & Living", to: "/shop" },
    { label: "Wall Decor", to: "/shop" },
    { label: "Outdoor", to: "/shop" },
    { label: "Accessories", to: "/shop" },
    { label: "Shop by Room", to: "/shop" },
  ];

  const customerService = [
    { label: "Contact Us", to: "/contact" },
    { label: "About Us", to: "/about" },
    { label: "FAQ", to: "/contact" },
    { label: "Track Your Order", to: "/contact" },
    { label: "Returns & Replacements", to: "/contact" },
  ];

  const waysToShop = [
    { label: "Blog", to: "/blog" },
    { label: "Find a Store", to: "/contact" },
    { label: "Gift Cards", to: "/shop" },
    { label: "Catalogs", to: "/shop" },
  ];

  return (
    <footer className="bg-[#363332] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

        {/* Logo */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white mb-12">
          COUNTREES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Contact */}
          <div>
            <h3 className="text-gray-400 font-semibold tracking-wide text-sm mb-4">
              CONTACT US
            </h3>

            <a
              href="tel:+18003382150"
              className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition mb-8"
            >
              <Phone size={18} />
              1-800-338-2150
            </a>

            <h3 className="text-gray-400 font-semibold tracking-wide text-sm mb-4">
              FOLLOW US
            </h3>

            <div className="flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold hover:bg-blue-500 hover:text-white transition"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold hover:bg-blue-500 hover:text-white transition"
              >
                F
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold hover:bg-blue-500 hover:text-white transition"
              >
                X
              </a>

              <a
                href="#"
                aria-label="Youtube"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold hover:bg-red-500 hover:text-white transition"
              >
                YT
              </a>

            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">
              CATEGORIES
            </h3>

            <ul className="space-y-3">
              {categories.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">
              CUSTOMER SERVICE
            </h3>

            <ul className="space-y-3">
              {customerService.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ways to Shop */}
          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">
              WAYS TO SHOP
            </h3>

            <ul className="space-y-3">
              {waysToShop.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="#" className="hover:text-white transition">
              Terms Of Sale
            </Link>

            <Link to="#" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link to="#" className="hover:text-white transition">
              Cookie Policy
            </Link>

            <Link to="#" className="hover:text-white transition">
              Accessibility
            </Link>

            <Link to="#" className="hover:text-white transition">
              Sitemap
            </Link>
          </div>

          <p>© 2026 Countrees. All Rights Reserved.</p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;