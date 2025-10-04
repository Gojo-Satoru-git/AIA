import { Brain, Cpu, Eye, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Coursepop from "./Coursepop";

export default function Courses() {
  const navigate = useNavigate();
  const courses = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Master the fundamentals of ML algorithms, from supervised learning to neural networks.",
      topics: [
        "Supervised Learning",
        "Deep Learning",
        "Model Optimization",
        "Real-world Projects"
      ],
      color: "teal",
      bgColor: "bg-teal-400",
      lightBg: "bg-teal-40"
    },
    {
      icon: Cpu,
      title: "Applied AI",
      description: "Learn practical AI applications across industries and build intelligent systems.",
      topics: [
        "Natural Language Processing",
        "Robotics",
        "AI Ethics",
        "Industry Applications"
      ],
      color: "red",
      bgColor: "bg-red-500",
      lightBg: "bg-red-50"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Dive deep into image processing, object detection, and visual recognition systems.",
      topics: [
        "Image Processing",
        "Object Detection",
        "Face Recognition",
        "Medical Imaging"
      ],
      color: "teal",
      bgColor: "bg-teal-400",
      lightBg: "bg-teal-40"
    }
  ];

  return (
    <div className="mt-12 sm:mt-16 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`${course.lightBg} rounded-2xl shadow-2xl p-6 sm:p-8 md:p-8 lg:p-8 flex flex-col items-center justify-center min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px]
              transform transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-5 hover:shadow-3xl group`}
            >
              {/* Icon */}
              <div className={`${course.bgColor} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-md 
              transform transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 sm:group-hover:scale-110`}>
                <course.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110" strokeWidth={2} />
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-green-900 mb-2 sm:mb-3 text-center">
                {course.title}
              </h2>

              {/* Description */}
              <p className="text-green-900 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center px-2 sm:px-4">
                {course.description}
              </p>

              <div className="w-full">
                {/* Topics List */}
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow px-2 sm:px-4">
                  {course.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className={`inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${course.bgColor} mt-1 mr-2 flex-shrink-0`}></span>
                      <span className="text-gray-700 text-sm sm:text-base md:text-lg">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button 
                onClick={() => navigate("Coursepop")}
                className={`${course.bgColor} text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:opacity-90 transition-all duration-500 flex items-center justify-center group text-sm sm:text-base md:text-lg`}
              >
                Explore Course
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
