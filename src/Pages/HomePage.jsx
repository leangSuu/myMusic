import { Link } from "react-router-dom";
import home from '../assets/Banner/home.png'
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Your <span className="text-black">Perfect Mood</span>
            </h1>
            <p className="mt-6 text-gray-600">
              Discover the latest music trends with premium sound quality at affordable prices. 
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/music"
                className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 border border-black rounded-xl hover:bg-black hover:text-white transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={home}
              alt="fashion"
              className="rounded-3xl shadow-lg w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Feature
            title="Premium Quality"
            desc="High-quality materials designed to last."
          />
          <Feature
            title="Fast Delivery"
            desc="Get your orders delivered quickly and safely."
          />
          <Feature
            title="Easy Returns"
            desc="Hassle-free returns within 7 days."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to upgrade your playlist?
          </h2>
          <p className="mt-4 text-gray-300">
            Start listening today and find your new favorite track.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl border hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-600">{desc}</p>
    </div>
  );
}
