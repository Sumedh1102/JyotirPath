import React from 'react'
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "One-faced Rudrākṣa",
    description: "Represents Lord Śiva. Known to bestow divine power, spiritual enlightenment, and detachment.",
    image: "https://i.pinimg.com/736x/14/df/05/14df0587d3b0e948ed18d3528cce906e.jpg",
    alt: "One-faced Rudrākṣa symbolizing Shiva",
  },
  {
    id: 2,
    name: "Two-faced Rudrākṣa",
    description: "Represents the union of Śiva and Pārvatī (Ardhanārīśvara). Promotes harmony in relationships and emotional balance.",
    image: "https://i.pinimg.com/736x/d2/4e/af/d24eaf3925be6f38f6a1256cc54ccdd4.jpg",
    alt: "Two-faced Rudrākṣa symbolizing Ardhanārīśvara",
  },
  {
    id: 3,
    name: "Three-faced Rudrākṣa",
    description: "Symbolic of Agni Devatā. Helps purify and energize the wearer, healing trauma and boosting self-confidence.",
    image: "https://i.pinimg.com/736x/b9/07/ba/b907ba43be9731283f41a1219e885d17.jpg",
    alt: "Three-faced Rudrākṣa representing fire energy",
  },
  {
    id: 4,
    name: "Four-faced Rudrākṣa",
    description: "Linked to Lord Brahmā. Enhances intellect, creativity, and communication skills.",
    image: "https://i.pinimg.com/736x/f1/f0/c4/f1f0c4f061ff872c10c267f77fb2fff4.jpg",
    alt: "Four-faced Rudrākṣa representing Brahmā",
  },
  {
    id: 5,
    name: "Five-faced Rudrākṣa",
    description: "Represents Lord Śiva in Kalagni Rudra form. Known for health, knowledge, and peace.",
    image: "https://i.pinimg.com/736x/2a/f9/94/2af994387190bf5e3d1443b0b8950f5b.jpg",
    alt: "Five-faced Rudrākṣa representing Kalagni Rudra",
  },
  {
    id: 6,
    name: "Six-faced Rudrākṣa",
    description: "Associated with Lord Kārtikeya and Mars. Brings success, prosperity, and strength.",
    image: "https://i.pinimg.com/736x/a7/b0/7e/a7b07eb171b45ce382ca62c3462a2615.jpg",
    alt: "Six-faced Rudrākṣa symbolizing Kārtikeya",
  },
  {
    id: 7,
    name: "Seven-faced Rudrākṣa",
    description: "Represents Devī Lakṣmī and Venus. Attracts abundance, enhances financial stability, and business success.",
    image: "https://i.pinimg.com/736x/c0/a5/8a/c0a58aaa33517d0b6542b3b26a3f903e.jpg",
    alt: "Seven-faced Rudrākṣa representing Lakṣmī",
    hasAddToCart: true
  },
  {
    id: 8,
    name: "Eight-faced Rudrākṣa",
    description: "Symbolizing Lord Gaṇeśa and Rāhu. Removes obstacles and helps overcome financial difficulties.",
    image: "https://i.pinimg.com/736x/49/b6/1d/49b61d121a3f8eeb18ad8d397b47de58.jpg",
    alt: "Eight-faced Rudrākṣa representing Gaṇeśa",
  },

];

const Section1 = () => {
 const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section className="bg-stone-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cinzel text-[#7a5737] mb-3 sm:mb-4 md:mb-6 tracking-wide leading-tight">
            Gemstone Therapy
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-sans max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4">
            Cosmic Power of Sacred Gemstones
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative mb-3 sm:mb-4 overflow-hidden  transition-shadow duration-300">
                {/* Product Image */}
                <div className="aspect-square relative bg-white">
                 <img
                    src={product.image || "/placeholder.svg?height=400&width=400"}
                    alt={product.alt}
                    className="object-cover transition-transform duration-300 group-hover:scale-110 w-full h-full"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />

                 
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center px-1 sm:px-2">
                <h3 className="font-serif text-[#7a5737] text-base sm:text-lg md:text-xl mb-2 sm:mb-3 tracking-wide leading-tight">
                  {product.name}
                </h3>
                {/* Product Description */}
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section1
