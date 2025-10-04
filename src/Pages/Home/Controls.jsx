// Controls.jsx
import { PauseIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Controls({ paused, togglePause, goPrev, goNext }) {
  return (
    <>
      {/* Pause/Play Button */}
      <button
        onClick={togglePause}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 sm:p-3 md:p-4 rounded-full shadow-md transition"
      >
        {paused ? (
          <PlayIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-black" />
        ) : (
          <PauseIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-black" />
        )}
      </button>

      {/* Left Arrow */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 sm:p-3 md:p-4 rounded-full shadow-md transition"
      >
        <ChevronLeftIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-black" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 sm:p-3 md:p-4 rounded-full shadow-md transition"
      >
        <ChevronRightIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-black" />
      </button>
    </>
  );
}
