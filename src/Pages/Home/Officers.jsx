import { Mail, Linkedin } from "lucide-react";

export default function OfficeBearers() {
  const bearers = [
    {
      name: "Dr. Sarah Chen",
      title: "Chairman",
      description:
        "Leading AI research with 15+ years of experience in machine learning.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bgColor: "bg-teal-400",
      email: "naveenkumar03202006@gmail.com",
      linkedin: "https://www.linkedin.com/in/naveenkumar0320/",
    },
    {
      name: "Prof. M. Rodriguez",
      title: "Vice Chairman",
      description:
        "Expert in computer vision and robotics, published author of 50+ papers.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bgColor: "bg-red-500",
      email: "mayilvagananezhil@gmail.com",
      linkedin: "https://www.linkedin.com/in/ezhil-mayil-vaganan-s/",
    },
    {
      name: "Dr. Priya Sharma",
      title: "General Secretary",
      description:
        "Specializes in NLP and AI ethics, former Google Research scientist.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bgColor: "bg-purple-500",
      email: "praveenchandru1209@gmail.com",
      linkedin: "https://www.linkedin.com/in/praveen-kumar1209/",
    },
    {
      name: "Alex Thompson",
      title: "Joint Secretary",
      description:
        "Ph.D. in Deep Learning, leads our student outreach and educational programs.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bgColor: "bg-green-500",
      email: "sunthar2736@gmail.com",
      linkedin: "https://www.linkedin.com/in/rahul-sundarraj-a04860353/",
    },
  ];

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
              {bearer.title}
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
