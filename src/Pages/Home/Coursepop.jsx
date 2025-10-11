import { Cpu, X, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Coursepop({ onClose, course }) {
  const [expandedModule, setExpandedModule] = useState(1);

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const learningPath = [
    { id: 1, title: "Core AI Concepts" },
    { id: 2, title: "Natural Language Processing (NLP)" },
    { id: 3, title: "Introduction to Robotics" },
    { id: 4, title: "Reinforcement Learning" },
    { id: 5, title: "AI Ethics and Governance" },
    { id: 6, title: "Industry Case Studies" },
  ];

  const modules = [
    {
      id: 1,
      title: "Module 1: Natural Language Processing",
      topics: [
        "Text Preprocessing & Vectorization",
        "Sentiment Analysis",
        "Named Entity Recognition (NER)",
        "Transformer Models (BERT)",
      ],
    },
    { id: 2, title: "Module 2: Robotics & Automation", topics: [] },
    { id: 3, title: "Module 3: Reinforcement Learning", topics: [] },
    { id: 4, title: "Module 4: AI in Practice", topics: [] },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-16 sm:px-4"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="flex flex-col lg:flex-row h-[92vh] w-full sm:w-[90vw] lg:w-[75vw] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Left Sidebar */}
        <div
          className={`${course.bgColor} text-white p-4 sm:p-8 overflow-y-auto w-full lg:w-80 flex-shrink-0`}
        >
          <div className="bg-white bg-opacity-20 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-3 sm:mb-6 mx-auto lg:mx-0">
            <course.icon className="w-7 h-7 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
          </div>

          <h1 className="text-xl sm:text-3xl font-bold mb-3 text-center lg:text-left leading-snug">
            {course.title}
          </h1>

          <p className="text-white text-opacity-90 mb-5 sm:mb-8 leading-relaxed text-xs sm:text-base text-center lg:text-left">
            {course.description}
          </p>

          <h2 className="text-base sm:text-xl font-bold mb-3 sm:mb-6 text-center lg:text-left">
            Learning Path
          </h2>

          <div className="space-y-2 sm:space-y-4">
            {learningPath.map((item) => (
              <div key={item.id} className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="bg-white bg-opacity-20 w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                  {item.id}
                </div>
                <span className="text-white text-xs sm:text-base">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 overflow-y-auto bg-white rounded-r-2xl">
          <div className="border-b border-gray-200 p-3 sm:p-6 flex items-center justify-between sticky top-0 z-10 bg-white">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900">Syllabus</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="p-3 sm:p-8">
            <div className="max-w-full sm:max-w-4xl space-y-3 sm:space-y-4">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full p-3 sm:p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-base sm:text-xl font-semibold text-gray-900 text-left">
                      {module.title}
                    </h3>
                    {expandedModule === module.id ? (
                      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                    )}
                  </button>

                  {expandedModule === module.id && module.topics.length > 0 && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-2 sm:space-y-3">
                      {module.topics.map((topic, index) => (
                        <div key={index} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs sm:text-base">{topic}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}