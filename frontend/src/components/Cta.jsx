import React from 'react'

const Cta = () => {
  return (
    <div>
        {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Next Favourite?
          </h2>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Browse our collection and discover products that fit your
            style, needs and everyday life.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Shopping
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Cta
