import { Brain, Cpu, Eye, ArrowRight } from 'lucide-react';
import { useNavigate  } from 'react-router-dom'; "react-router-dom";
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
    <div className="mt-16 pl-32 pr-32 h-[900px]">
      <div className="mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={` ${course.lightBg} rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[600px] 
              transform transition-all duration-500 hover:-translate-y-5 hover:shadow-3xl group`}
            >
              {/* Icon */}
              <div className={`${course.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-md 
              transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110`}>
                <course.icon className="w-10 h-10 text-white transition-transform duration-500 group-hover:scale-110" strokeWidth={2} />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-green-900 mb-3">
                {course.title}
              </h2>

              {/* Description */}
              <p className="text-green-900 mb-6 ml-10 items-center text-2xl leading-relaxed">
                {course.description}
              </p>

              <div className="w-full">
                {/* Topics List */}
                <ul className="space-y-3 mb-8 ml-10 flex-grow">
                  {course.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className={`inline-block w-2 h-2 rounded-full ${course.bgColor} mt-2 mr-3 flex-shrink-0`}></span>
                      <span className="text-gray-700 text-xl">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button 
              onClick={() => navigate("Coursepop")}
              className={`${course.bgColor} text-white font-semibold py-4 px-6 rounded-xl hover:opacity-90 transition-all duration-500 flex items-center justify-center group`}>
                Explore Course
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
