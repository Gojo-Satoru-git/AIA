// Indicators.jsx
export default function Indicators({ slides, current, setCurrent }) {
  return (
    <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 md:gap-3">
      {slides.map((_, i) => (
        <div
          key={i}
          onClick={() => setCurrent(i)}
          className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-colors ${
            i === current ? "bg-white" : "bg-gray-400"
          }`}
        ></div>
      ))}
    </div>
  );
}
