import { useState } from 'react';
import { Cpu, X, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function CourseSyllabus() {
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
    { id: 6, title: "Industry Case Studies" }
  ];

  const modules = [
    {
      id: 1,
      title: "Module 1: Natural Language Processing",
      topics: [
        "Text Preprocessing & Vectorization",
        "Sentiment Analysis",
        "Named Entity Recognition (NER)",
        "Transformer Models (BERT)"
      ]
    },
    {
      id: 2,
      title: "Module 2: Robotics & Automation",
      topics: []
    },
    {
      id: 3,
      title: "Module 3: Reinforcement Learning",
      topics: []
    },
    {
      id: 4,
      title: "Module 4: AI in Practice",
      topics: []
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-96 bg-red-500 text-white p-8 overflow-y-auto">
        {/* Icon */}
        <div className="bg-white bg-opacity-20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
          <Cpu className="w-10 h-10 text-white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">Applied AI</h1>
        
        {/* Description */}
        <p className="text-white text-opacity-90 mb-8 leading-relaxed">
          Learn practical AI applications across industries and build intelligent systems.
        </p>

        {/* Learning Path */}
        <h2 className="text-xl font-bold mb-6">Learning Path</h2>
        
        <div className="space-y-3">
          {learningPath.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                {item.id}
              </div>
              <span className="text-white">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-3xl font-bold text-gray-900">Syllabus</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modules */}
        <div className="p-8">
          <div className="max-w-4xl space-y-4">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {/* Module Header */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 text-left">
                    {module.title}
                  </h3>
                  {expandedModule === module.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </button>

                {/* Module Content */}
                {expandedModule === module.id && module.topics.length > 0 && (
                  <div className="px-6 pb-6 space-y-3">
                    {module.topics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{topic}</span>
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
  );
}