import React from 'react'
import img from '../../Images/moon.png'

const Section7 = () => {
  return (
    <section className="w-full bg-stone-50 relative overflow-hidden border-b border-t border-[#C89B6D]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[750px]">
          {/* Left Column - Planet Images */}
          <div className="relative lg:absolute lg:left-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-start">
            {/* Main Venus Image */}
            <div className="relative w-full h-full">
              <img
                src="https://i.pinimg.com/736x/53/cd/3e/53cd3e10c5a5fd0ec7fa01d5fbf28628.jpg"
                alt=""
                className="w-[500px] h-[700px] object-cover  translate-y-20 translate-x-28 "
              />

             {/* {/*
              <div className="absolute top-40 right-40 w-32 h-32 md:w-40 md:h-40 lg:w-[450px] lg:h-[600px] ">
                <img
                  src=""
                  alt="Venus atmospheric view"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -top-72 -left-72 w-12 h-12 md:w-[500px] md:h-[500px]">
                  <img
                    src=""
                    alt="Rotating logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center py-16 lg:py-24 pl-0 lg:pl-12 z-10 relative  lg:col-start-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-medium font-cinzel leading-tight mb-8 text-[#C89B6D]">
              What's Included in Your Reading
            </h1>

            <div className="text-lg md:text-xl leading-relaxed mb-12 font-cinzel max-w-lg text-[#666666] space-y-4">
  <ul className="list-disc list-inside space-y-2">
    <li>
      <strong>Detailed birth chart reading:</strong> Deep analysis and interpretation of your natal chart, offering practical guidance tailored to your life’s journey.
    </li>
    <li>
      <strong>Planetary period analysis:</strong> Understand the influence of cosmic cycles and timing, empowering your decisions with clarity and foresight.
    </li>
    <li>
      <strong>Life predictions and guidance:</strong> Get actionable insights into future opportunities and challenges to navigate your path effectively.
    </li>
    <li>
      <strong>Remedial measures:</strong> Powerful Vedic solutions and ancient wisdom to harmonize your energies and overcome life’s obstacles.
    </li>
  </ul>
</div>


            <button className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-gray-900 hover:shadow-lg group w-fit">
              <span className="text-lg" style={{ color: "#C89B6D" }}>
                ✦
              </span>
              <span>LEARN MORE</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section7
