// Indicators.jsx
export default function Indicators({ slides, current, setCurrent }) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      {slides.map((_, i) => (
        <div
          key={i}
          onClick={() => setCurrent(i)}
          className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
            i === current ? "bg-white" : "bg-gray-400"
          }`}
        ></div>
      ))}
    </div>
  );
}
