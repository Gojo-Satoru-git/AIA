import { useState } from "react";
import { Brain, Cpu, Eye, ArrowRight } from "lucide-react";
import Coursepop from "./Coursepop";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Master the fundamentals of ML algorithms, from supervised learning to neural networks.",
      topics: ["Supervised Learning", "Deep Learning", "Model Optimization", "Real-world Projects"],
      color: "teal",
      bgColor: "bg-teal-400",
      sidebar: "bg-teal-400",
       lightcolor: "bg-teal-50",
    },
    {
      icon: Cpu,
      title: "Applied AI",
      description: "Learn practical AI applications across industries and build intelligent systems.",
      topics: ["Natural Language Processing", "Robotics", "AI Ethics", "Industry Applications"],
      color: "red",
      bgColor: "bg-red-500",
      sidebar: "bg-red-500",
       lightcolor: "bg-red-50",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Dive deep into image processing, object detection, and visual recognition systems.",
      topics: ["Image Processing", "Object Detection", "Face Recognition", "Medical Imaging"],
      color: "teal",
      bgColor: "bg-teal-400",
      sidebar: "bg-teal-400",
      lightcolor: "bg-teal-50",
    },
  ];

  return (
    <div className="mt-12 px-4 sm:px-8 md:px-16 lg:px-32 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`${course.lightcolor}  rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[600px]
            transform transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl group`}
          >
            {/* Icon */}
            <div
              className={`${course.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-md transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110`}
            >
              <course.icon className="w-10 h-10 text-white" strokeWidth={2} />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-green-900 mb-3 text-center">
              {course.title}
            </h2>

            {/* Description */}
            <p className="text-green-900 mb-6 text-lg leading-relaxed text-center">
              {course.description}
            </p>

            {/* Topics List */}
            <ul className="space-y-3 mb-8 w-full px-4">
              {course.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="flex items-start">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${course.bgColor} mt-2 mr-3 flex-shrink-0`}
                  ></span>
                  <span className="text-gray-700">{topic}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => setSelectedCourse(course)}
              className={`${course.bgColor} text-white font-semibold py-4 px-6 rounded-xl hover:opacity-90 transition-all duration-500 flex items-center justify-center group`}
            >
              Explore Course
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[90%] h-[90%] overflow-hidden relative">
            <Coursepop
              course={selectedCourse}
              onClose={() => setSelectedCourse(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
