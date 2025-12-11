import { useState } from 'react';
import { Brain, Cpu, Eye, ArrowRight } from 'lucide-react';
import Coursepop from './Coursepop';
import styles from './Courses.module.css';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description:
        'Master the fundamentals of ML algorithms, from supervised learning to neural networks.',
      topics: [
        'Supervised Learning',
        'Deep Learning',
        'Model Optimization',
        'Real-world Projects',
      ],
      color: 'teal',
      bgColor: 'bg-teal-400',
      sidebar: 'bg-teal-400',
      lightcolor: 'bg-teal-50',
    },
    {
      icon: Cpu,
      title: 'Applied AI',
      description:
        'Learn practical AI applications across industries and build intelligent systems.',
      topics: [
        'Natural Language Processing',
        'Robotics',
        'AI Ethics',
        'Industry Applications',
      ],
      color: 'red',
      bgColor: 'bg-red-500',
      sidebar: 'bg-red-500',
      lightcolor: 'bg-red-50',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description:
        'Dive deep into image processing, object detection, and visual recognition systems.',
      topics: [
        'Image Processing',
        'Object Detection',
        'Face Recognition',
        'Medical Imaging',
      ],
      color: 'teal',
      bgColor: 'bg-teal-400',
      sidebar: 'bg-teal-400',
      lightcolor: 'bg-teal-50',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div
            key={index}
            className={`${styles.courseCard} ${
              course.color === 'teal' ? styles.tealLight : styles.redLight
            }`}
          >
            {/* Icon */}
            <div
              className={`${styles.iconContainer} ${
                course.color === 'teal' ? styles.tealDark : styles.redDark
              }`}
            >
              <course.icon className={styles.icon} strokeWidth={2} />
            </div>

            {/* Title */}
            <h2 className={styles.title}>{course.title}</h2>

            {/* Description */}
            <p className={styles.description}>{course.description}</p>

            {/* Topics List */}
            <ul className={styles.topicsList}>
              {course.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className={styles.topicItem}>
                  <span
                    className={`${styles.topicBullet} ${
                      course.color === 'teal' ? styles.tealDark : styles.redDark
                    }`}
                  ></span>
                  <span className={styles.topicText}>{topic}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => setSelectedCourse(course)}
              className={`${styles.button} ${
                course.color === 'teal' ? styles.tealDark : styles.redDark
              }`}
            >
              Explore Course
              <ArrowRight className={styles.buttonIcon} />
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedCourse && (
        <Coursepop
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}
