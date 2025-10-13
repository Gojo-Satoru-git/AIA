import { Mail, Linkedin } from 'lucide-react';
import bearers from '../../server/data/officeBearers.json';

export default function OfficeBearers() {
  return (
    <div className="bg-white shadow-2xl rounded-3xl mt-20 sm:mt-40 px-4 sm:px-10 md:px-16 lg:px-32 py-10 sm:py-16 relative">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          Office Bearers
        </h1>
        <p className="text-base sm:text-lg text-gray-600 px-2 sm:px-0">
          Meet the distinguished leaders driving our mission forward
        </p>
      </div>

      {/* Bearers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {bearers.map((bearer, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-between min-h-[460px] sm:min-h-[520px]
            transform transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl group relative"
          >
            {/* Profile Image */}
            <div className="relative mb-6">
              <div
                className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-white shadow-lg transform transition-transform duration-500 group-hover:scale-105`}
              >
                <img
                  src={bearer.image}
                  alt={bearer.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Icons on hover (always visible on mobile for better UX) */}
              <div
                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4 
                opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
              >
                {/* Mail icon */}
                <a
                  href={`mailto:${bearer.email}`}
                  className="bg-white rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg transition-all"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </a>

                {/* LinkedIn icon */}
                <a
                  href={bearer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg transition-all"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
                </a>
              </div>
            </div>

            {/* Name */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
              {bearer.name}
            </h3>

            {/* Title */}
            <div
              className={`inline-block ${bearer.bgColor} bg-opacity-10 text-gray-800 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-4`}
            >
              {bearer.position}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center mb-4 sm:mb-6">
              {bearer.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
