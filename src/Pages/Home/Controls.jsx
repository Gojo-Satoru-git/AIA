// Controls.jsx
import { PauseIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Controls({ paused, togglePause, goPrev, goNext }) {
  return (
    <>
      {/* Pause/Play Button */}
      <button
        onClick={togglePause}
        className="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-80 p-4 rounded-full shadow-md transition"
      >
        {paused ? <PlayIcon className="h-10 w-10 text-black" /> : <PauseIcon className="h-10 w-10 text-black" />}
      </button>

      {/* Left Arrow */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-4 rounded-full shadow-md transition"
      >
        <ChevronLeftIcon className="h-10 w-10 text-black" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-4 rounded-full shadow-md transition"
      >
        <ChevronRightIcon className="h-10 w-10 text-black" />
      </button>
    </>
  );
}
