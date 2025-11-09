import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDownload, FaPlay, FaChevronDown, FaChevronUp, FaCheck, FaUsers, FaChartLine, FaGraduationCap } from 'react-icons/fa';

const CourseDetails = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef(null);
  const syllabusRef = useRef(null);
  const statsRef = useRef(null);

  // Course data
  const courseData = {
    title: "AI & Machine Learning Mastery",
    description: "Master the fundamentals and advanced concepts of Artificial Intelligence and Machine Learning with our comprehensive program designed for 2025.",
    duration: "6 Months",
    level: "Intermediate to Advanced",
    mentors: [
      { name: "Dr. Sarah Johnson", role: "AI Research Lead", experience: "10+ years" },
      { name: "Michael Chen", role: "ML Engineer", experience: "8+ years" },
      { name: "Priya Sharma", role: "Data Scientist", experience: "7+ years" }
    ],
    curriculum: [
      {
        title: "Introduction to AI & ML",
        duration: "2 weeks",
        topics: [
          "History and evolution of AI",
          "Types of Machine Learning",
          "Real-world applications",
          "AI ethics and responsible AI"
        ]
      },
      {
        title: "Python for Data Science",
        duration: "3 weeks",
        topics: [
          "Python fundamentals",
          "NumPy and Pandas",
          "Data visualization with Matplotlib & Seaborn",
          "Data preprocessing techniques"
        ]
      },
      {
        title: "Mathematics for ML",
        duration: "4 weeks",
        topics: [
          "Linear Algebra",
          "Calculus for optimization",
          "Probability and Statistics",
          "Information Theory"
        ]
      },
      {
        title: "Supervised Learning",
        duration: "5 weeks",
        topics: [
          "Linear and Logistic Regression",
          "Decision Trees and Random Forests",
          "Support Vector Machines",
          "Model evaluation and validation"
        ]
      },
      {
        title: "Deep Learning Fundamentals",
        duration: "6 weeks",
        topics: [
          "Neural Networks basics",
          "TensorFlow and Keras",
          "Convolutional Neural Networks",
          "Recurrent Neural Networks"
        ]
      },
      {
        title: "Advanced ML Topics",
        duration: "4 weeks",
        topics: [
          "Natural Language Processing",
          "Computer Vision",
          "Reinforcement Learning",
          "Generative AI"
        ]
      },
      {
        title: "Capstone Project",
        duration: "4 weeks",
        topics: [
          "Project ideation and planning",
          "Data collection and preprocessing",
          "Model development and training",
          "Deployment and presentation"
        ]
      }
    ],
    stats: {
      placementRate: "94%",
      averageSalary: "$125,000",
      studentCount: "2500+",
      completionRate: "89%"
    },
    features: [
      "Industry-relevant curriculum",
      "Hands-on projects",
      "1:1 mentorship sessions",
      "Career support & placement assistance",
      "Lifetime access to course materials",
      "Certificate of completion"
    ]
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Syllabus animation
    gsap.fromTo(
      syllabusRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: syllabusRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Stats animation
    gsap.fromTo(
      statsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Floating particles animation (same as CTA)
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -15,
        x: Math.sin(index) * 10,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  const toggleChapter = (index) => {
    setActiveChapter(activeChapter === index ? -1 : index);
  };

  const handleDownload = () => {
    // In a real app, this would trigger a file download
    alert("Course brochure download started!");
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative py-20 overflow-hidden bg-[#151316]"
      data-scroll-section
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151316] via-[#1a181b] to-[#151316]"></div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 rounded-full blur-sm opacity-20"
          style={{
            background: 'linear-gradient(90deg,#D22D1E 0%,#963AB0 50%,#20469B 100%)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
            AI & ML{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: 'linear-gradient(90deg, #D22D1E 30%, #963AB0 60%, #20469B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mastery
            </span>{' '}
            Course
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {courseData.description}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-xl px-6 py-3">
              <span className="text-gray-300 font-semibold">Duration: </span>
              <span className="text-white">{courseData.duration}</span>
            </div>
            <div className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-xl px-6 py-3">
              <span className="text-gray-300 font-semibold">Level: </span>
              <span className="text-white">{courseData.level}</span>
            </div>
          </div>
          <button
            onClick={handleDownload}
            className="inline-flex items-center space-x-2 bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-xl px-6 py-3 text-white font-semibold hover:bg-[#1a181b] transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaDownload />
            <span>Download Course Brochure</span>
          </button>
        </div>

        {/* Video & Syllabus Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Video Section */}
          <div className="relative">
            <div className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              {!isVideoPlaying ? (
                <div 
                  className="relative h-80 bg-gradient-to-br from-[#151316] to-[#1a181b] flex items-center justify-center cursor-pointer"
                  onClick={handleVideoPlay}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#D22D1E] to-[#963AB0] flex items-center justify-center shadow-lg">
                      <FaPlay className="text-white text-xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    Course Overview
                  </div>
                </div>
              ) : (
                <div className="h-80 bg-black flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl mb-2">Video Player</div>
                    <div className="text-gray-400">Course introduction video would play here</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Syllabus Section */}
          <div ref={syllabusRef}>
            <h3 className="text-3xl font-bold text-white mb-8">Course Curriculum</h3>
            <div className="space-y-4">
              {courseData.curriculum.map((chapter, index) => (
                <div 
                  key={index} 
                  className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left text-white font-semibold hover:bg-white/5 transition-colors duration-300"
                    onClick={() => toggleChapter(index)}
                  >
                    <div>
                      <span className="text-lg">{chapter.title}</span>
                      <span className="text-sm text-gray-400 ml-3">({chapter.duration})</span>
                    </div>
                    {activeChapter === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {activeChapter === index && (
                    <div className="p-4 border-t border-white/10 bg-[#151316]">
                      <ul className="space-y-2">
                        {chapter.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start text-gray-300">
                            <FaCheck className="text-transparent bg-clip-text mt-1 mr-2 flex-shrink-0" style={{
                              background: 'linear-gradient(90deg,#D22D1E 37.08%,#963AB0 62.26%,#20469B 99.82%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                            }} />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Course Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D22D1E] to-[#963AB0] flex items-center justify-center">
                  <FaUsers className="text-white text-xl" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{courseData.stats.placementRate}</div>
              <div className="text-gray-300">Placement Rate</div>
            </div>
            <div className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#963AB0] to-[#20469B] flex items-center justify-center">
                  <FaChartLine className="text-white text-xl" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{courseData.stats.averageSalary}</div>
              <div className="text-gray-300">Average Salary</div>
            </div>
            <div className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#20469B] to-[#D22D1E] flex items-center justify-center">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{courseData.stats.studentCount}</div>
              <div className="text-gray-300">Students Enrolled</div>
            </div>
            <div className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D22D1E] to-[#20469B] flex items-center justify-center">
                  <FaCheck className="text-white text-xl" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{courseData.stats.completionRate}</div>
              <div className="text-gray-300">Completion Rate</div>
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Your Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseData.mentors.map((mentor, index) => (
              <div 
                key={index} 
                className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#D22D1E] to-[#963AB0] mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{mentor.name}</h4>
                <div className="text-gray-300 mb-2">{mentor.role}</div>
                <div className="text-sm text-gray-400">{mentor.experience} experience</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Course Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseData.features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4"
              >
                <FaCheck className="text-transparent bg-clip-text flex-shrink-0" style={{
                  background: 'linear-gradient(90deg,#D22D1E 37.08%,#963AB0 62.26%,#20469B 99.82%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;