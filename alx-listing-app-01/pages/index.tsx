import Image from "next/image";
import { FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/Pill";

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg" // <-- replace with your imported image or actual local path
            alt="Hero Background"
            fill
            className="object-cover opacity-70"
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        <div className="flex flex-wrap gap-3">
          {FILTERS.map((filter, index) => (
            <Pill key={index} label={filter} />
          ))}
        </div>
      </section>

      {/* LISTING SECTION */}
      <section className="px-6 pb-20">
        <h2 className="text-xl font-semibold mb-6">Popular Listings</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div className="w-full h-56 relative">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{property.name}</h3>

                <p className="text-sm text-gray-600 mt-1">
                  {property.address.city}, {property.address.country}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-bold">${property.price}</p>
                  <span className="text-yellow-500 font-medium">
                    ⭐ {property.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
