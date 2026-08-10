import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      title: "New Arrivals",
      description: "Discover the latest products",
    },
    {
      title: "Best Sellers",
      description: "Our most loved products",
    },
    {
      title: "Home & Living",
      description: "Beautiful things for your home",
    },
  ];

  const products = [
    {
      name: "Premium Table Collection",
      price: "₹2,499",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Modern Home Decor",
      price: "₹1,899",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Elegant Interior Piece",
      price: "₹3,299",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="bg-white text-gray-900">

{/* HERO SECTION */}
      <section className="relative h-[600px] md:h-[750px] bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
          alt="Countrees home collection"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-gray-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Welcome to Countrees
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Make Your Space
            <span className="block">Beautiful & Better</span>
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed max-w-lg mb-8">
            Explore our carefully selected collection of stylish,
            functional and quality products made to bring something
            special to your everyday life.
          </p>
     
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gray-600 text-white px-8 py-3.5 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#363332] transition"
          >
            Shop Now
          </Link>
        </div>

        <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-4 text-sm md:text-base tracking-wide">
          Designer Home Decor & Living Essentials for Every Space
        </div>
      </section>

      {/* FEATURES */}

<section className="border-b">
  <div className="w-[90%] mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-6">

    {/* feature content */}
    
  </div>
</section>

<section className="w-[90%] mx-auto py-16 md:py-20">
  <div className="flex items-end justify-between mb-10">
    
    <div>
      <p className="text-gray-600 font-semibold mb-2">
        SHOP BY CATEGORY
      </p>

      <h2 className="text-3xl md:text-4xl font-bold">
        Find Something You Love
      </h2>
    </div>

    <Link
      to="/shop"
      className="hidden md:flex items-center gap-2 text-gray-600 font-semibold"
    >
      View All
      <ArrowRight size={18} />
    </Link>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {categories.map((category, index) => (
      <Link
        to="/shop"
        key={index}
        className="group rounded-2xl bg-gray-100 p-8 min-h-[190px] flex flex-col justify-end hover:bg-orange-900 transition duration-300"
      >
        <p className="text-sm text-gray-600 group-hover:text-blue-100 mb-2">
          COLLECTION 0{index + 1}
        </p>

        <h3 className="text-2xl font-bold group-hover:text-white">
          {category.title}
        </h3>

        <p className="text-gray-500 group-hover:text-blue-100 mt-2">
          {category.description}
        </p>
      </Link>
    ))}
  </div>
</section>



<section className="bg-gray-50">
  <div className="w-[90%] mx-auto py-16 md:py-20">

    <div className="text-center mb-10">
      <p className="text-gray-600 font-semibold mb-2">
        OUR COLLECTION
      </p>

      <h2 className="text-3xl md:text-4xl font-bold">
        Featured Products
      </h2>

      <p className="text-gray-500 mt-3 max-w-xl mx-auto">
        Explore some of our favourite products selected especially
        for you.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden group"
        >
          <div className="overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="p-5">
            <div className="flex items-center gap-1 text-sm mb-2">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
              <span>{product.rating}</span>
            </div>

            <h3 className="font-semibold text-lg">
              {product.name}
            </h3>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold">
                {product.price}
              </span>

              <Link
                to="/shop"
                className="text-gray-600 font-semibold text-sm"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-10">
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#363332] transition"
      >
        View All Products
        <ArrowRight size={18} />
      </Link>
    </div>

  </div>
</section>

    </main>
  );
};

export default Home;

