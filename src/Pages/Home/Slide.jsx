// Slide.jsx
export default function Slide({ slide, slideWidth }) {
  return (
    <div
      className="w-full flex-shrink-0 h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] relative"
      style={{ width: `${slideWidth}%` }}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Text overlay */}
      <div className="absolute top-4 sm:top-8 md:top-16 lg:top-24 left-4 sm:left-8 md:left-16 lg:left-24 text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <h1 className="font-bold text-2xl sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl">{slide.title}</h1>
        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 md:mt-6">{slide.subtitle}</p>
        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 md:mt-6">{slide.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 mt-4 sm:mt-6">
          <button className="rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl bg-red-500 px-4 sm:px-4 md:px-8 py-2 sm:py-3 font-bold text-white hover:bg-red-300">
            Learn more
          </button>
          <button className="rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl bg-white px-4 sm:px-4 md:px-8 py-2 sm:py-3 font-bold text-black hover:bg-gray-300">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
}
