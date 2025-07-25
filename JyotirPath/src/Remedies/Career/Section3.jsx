import React from 'react'
import img from './careerimages/bhud.png'
import img1 from './careerimages/chair.png'
import img2 from './careerimages/shell.png'
import img3 from './careerimages/natraj.png'

const Section3 = () => {
    const services = [
    {
    title: "Saraswati Puja",
    description: "Invoke divine blessings for knowledge, learning, and artistic growth through sacred rituals.",
    image: img,
    alt: "Astrology compass symbol",
  },
  {
    title: "Mercury Strengthening",
    description: "Boost intellect, communication skills, and mental clarity with tailored astrological remedies.",
    image: img1,
    alt: "Tarot moon symbol",
  },
  {
    title: "Vidya Mantras",
    description: "Chant powerful mantras to sharpen memory, focus, and academic success.",
    image: img2,
    alt: "Yin yang relationship symbol",
  },
  {
    title: "Success Rituals",
    description: "Attract growth, victory, and abundance with time-tested Vedic rituals for success.",
    image: img3,
    alt: "Ancient rune symbol",
  },
  ]
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 min-h-[400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-32 h-32">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                fill
                className="object-contain filter sepia opacity-60"
              />
            </div>
            <h3 className="text-xl font-semibold text-orange-300 tracking-wide font-cinzel">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-[200px] ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Section3
