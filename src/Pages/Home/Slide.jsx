// Slide.jsx
export default function Slide({ slide, slideWidth }) {
  return (
    <div
      className="w-full flex-shrink-0 h-[800px] relative"
      style={{ width: `${slideWidth}%` }}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Text overlay */}
      <div className="absolute top-0 left-0 p-24 mt-36 w-max-[200px] text-white">
        <h1 className="font-bold text-7xl">{slide.title}</h1>
        <p className="text-4xl mt-8">{slide.subtitle}</p>
        <p className="text-4xl mt-8">{slide.description}</p>
        <div className="flex gap-8 mt-6">
          <button className="rounded-2xl text-lg bg-red-500 px-6 py-3 font-bold text-white hover:bg-red-300">
            Learn more
          </button>
          <button className="rounded-2xl text-lg bg-white px-6 py-3 font-bold text-black hover:bg-gray-300">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
}
