import { useState } from "react";
import {
  Search,
  Menu,
  X,
  User,
  ShoppingCart,
  Home,
  Store,
  Info,
  Phone,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-brown-100 text-orange-900 font-semibold"
        : "text-gray-700 hover:bg-gray-100 hover:text-orange-900"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 w-full bg-white/75 backdrop-blur-md border-b border-white/30 shadow-sm">
        <div className="w-[90%] mx-auto">
          <div className="h-20 flex items-center justify-between relative">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* MENU */}
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2.5 text-gray-700 hover:text-orange-900 transition"
                aria-label="Open menu"
              >
                <Menu size={29} strokeWidth={1.8} />
              </button>

              {/* SEARCH */}
              <button
                className="p-2.5 text-gray-700 hover:text-orange-900 transition"
                aria-label="Search"
              >
                <Search size={26} strokeWidth={1.8} />
              </button>
            </div>

            {/* CENTER LOGO */}
            <NavLink
              to="/"
              className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold tracking-tight text-gray-900"
            >
              Countrees
            </NavLink>

            {/* RIGHT */}
            <div className="flex items-center gap-3 ml-auto">

              {/* USER */}
              <NavLink
                to="/login"
                className="p-2.5 text-gray-700 hover:text-orange-900 transition"
                aria-label="User account"
              >
                <User size={26} strokeWidth={1.8} />
              </NavLink>

              {/* CART */}
              <NavLink
                to="/cart"
                className="p-2.5 text-gray-700 hover:text-blue-600 transition"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={26} strokeWidth={1.8} />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* DARK OVERLAY */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* LEFT SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 max-w-[85%] bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* SIDEBAR HEADER */}
        <div className="h-20 px-6 flex items-center justify-between border-b">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold text-gray-900"
          >
            Countrees
          </NavLink>

          <button
            onClick={closeMenu}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-700"
            aria-label="Close menu"
          >
            <X size={25} />
          </button>
        </div>

        {/* SIDEBAR LINKS */}
        <div className="p-5">

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
            Menu
          </p>

          <div className="flex flex-col gap-2">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={closeMenu}
            >
              <Home size={21} />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/shop"
              className={navLinkClass}
              onClick={closeMenu}
            >
              <Store size={21} />
              <span>Shop</span>
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={closeMenu}
            >
              <Info size={21} />
              <span>About Us</span>
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={closeMenu}
            >
              <Phone size={21} />
              <span>Contact</span>
            </NavLink>

          </div>

          <div className="border-t my-6" />

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
            Account
          </p>

          <div className="flex flex-col gap-2">

            <NavLink
              to="/login"
              className={navLinkClass}
              onClick={closeMenu}
            >
              <User size={21} />
              <span>My Account</span>
            </NavLink>

            <NavLink
              to="/cart"
              className={navLinkClass}
              onClick={closeMenu}
            >
              <ShoppingCart size={21} />
              <span>Shopping Cart</span>
            </NavLink>

          </div>
        </div>

        {/* SIDEBAR FOOTER */}
        <div className="absolute bottom-0 left-0 right-0 border-t p-5">
          <p className="text-sm text-gray-500 text-center">
            © 2026 Countrees
          </p>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
