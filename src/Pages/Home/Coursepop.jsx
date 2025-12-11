import { Cpu, X, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Portal from '../../Components/Portal';
import styles from './Coursepop.module.css';

export default function Coursepop({ onClose, course }) {
  const [expandedModule, setExpandedModule] = useState(1);

  // Prevent body scroll when modal is open and handle escape key
  useEffect(() => {
    document.body.classList.add('modal-open');

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const learningPath = [
    { id: 1, title: 'Core AI Concepts' },
    { id: 2, title: 'Natural Language Processing (NLP)' },
    { id: 3, title: 'Introduction to Robotics' },
    { id: 4, title: 'Reinforcement Learning' },
    { id: 5, title: 'AI Ethics and Governance' },
    { id: 6, title: 'Industry Case Studies' },
  ];

  const modules = [
    {
      id: 1,
      title: 'Module 1: Natural Language Processing',
      topics: [
        'Text Preprocessing & Vectorization',
        'Sentiment Analysis',
        'Named Entity Recognition (NER)',
        'Transformer Models (BERT)',
      ],
    },
    { id: 2, title: 'Module 2: Robotics & Automation', topics: [] },
    { id: 3, title: 'Module 3: Reinforcement Learning', topics: [] },
    { id: 4, title: 'Module 4: AI in Practice', topics: [] },
  ];

  return (
    <Portal>
      <div
        className={styles.overlay}
        onClick={onClose} // Close when clicking outside
      >
        <div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          {/* Left Sidebar */}
          <div
            className={`${styles.sidebar} ${
              course.color === 'teal' ? styles.tealSidebar : styles.redSidebar
            }`}
          >
            <div className={styles.iconContainer}>
              <course.icon className={styles.icon} strokeWidth={2} />
            </div>

            <h1 className={styles.title}>{course.title}</h1>

            <p className={styles.description}>{course.description}</p>

            <h2 className={styles.learningPathTitle}>Learning Path</h2>

            <div className={styles.learningPathList}>
              {learningPath.map((item) => (
                <div key={item.id} className={styles.learningPathItem}>
                  <div className={styles.learningPathNumber}>{item.id}</div>
                  <span className={styles.learningPathText}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className={styles.contentArea}>
            <div className={styles.header}>
              <h2 className={styles.headerTitle}>Syllabus</h2>
              <button onClick={onClose} className={styles.closeButton}>
                <X className={styles.closeIcon} />
              </button>
            </div>

            <div className={styles.content}>
              <div className={styles.modulesList}>
                {modules.map((module) => (
                  <div key={module.id} className={styles.module}>
                    <button
                      onClick={() => toggleModule(module.id)}
                      className={styles.moduleButton}
                    >
                      <h3 className={styles.moduleTitle}>{module.title}</h3>
                      {expandedModule === module.id ? (
                        <ChevronUp className={styles.moduleIcon} />
                      ) : (
                        <ChevronDown className={styles.moduleIcon} />
                      )}
                    </button>

                    {expandedModule === module.id &&
                      module.topics.length > 0 && (
                        <div className={styles.topicsContainer}>
                          {module.topics.map((topic, index) => (
                            <div key={index} className={styles.topicItem}>
                              <CheckCircle2 className={styles.topicIcon} />
                              <span className={styles.topicText}>{topic}</span>
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
    </Portal>
  );
}
