// components/Projects.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChartLine, FaUsers, FaRocket, FaAward } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Predictive Analytics Platform",
      description: "Built a real-time prediction system for e-commerce",
      tech: ["Python", "TensorFlow", "React", "AWS"],
      metrics: "98% accuracy",
    },
    {
      title: "Computer Vision for Healthcare",
      description: "Medical image analysis for early disease detection",
      tech: ["PyTorch", "OpenCV", "FastAPI", "Docker"],
      metrics: "95% detection rate",
    },
    {
      title: "Natural Language Chatbot",
      description: "AI-powered customer service automation",
      tech: ["Transformers", "Node.js", "MongoDB", "Redis"],
      metrics: "40% cost reduction",
    },
  ];

  const stats = [
    { icon: FaChartLine, value: "80%", label: "Scholarships Awarded", color: "from-cyan-500 to-blue-500" },
    { icon: FaUsers, value: "100%", label: "Placement Assistance", color: "from-teal-500 to-cyan-500" },
    { icon: FaRocket, value: "500+", label: "Projects Completed", color: "from-blue-500 to-purple-500" },
    { icon: FaAward, value: "94%", label: "Success Rate", color: "from-purple-500 to-pink-500" },
  ];

  useEffect(() => {
    // Left Side Animation
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Right Side Animation
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Auto Rotate Projects
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [projects.length]);

  useEffect(() => {
    // Animate Progress Bars
    stats.forEach((_, index) => {
      gsap.to(`.progress-bar-${index}`, {
        width: '100%',
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: `.progress-bar-${index}`,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-br from-[#151316] to-[#1a181b]"
      data-scroll-section
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Projects Carousel */}
          <div ref={leftRef} className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Hands-on Projects
            </h2>

            <div className="relative h-80">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentProject ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-cyan-400 font-bold text-lg">
                      {project.metrics}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Career Stats */}
          <div ref={rightRef} className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Career Success
            </h2>

            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}
                      >
                        <stat.icon className="text-white text-lg" />
                      </div>
                      <span className="text-white font-semibold">
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-cyan-400 font-bold text-xl">
                      {stat.value}
                    </span>
                  </div>

                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`progress-bar-${index} h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl text-white font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
