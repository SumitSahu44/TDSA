// components/CTA.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';

const CTA = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: ''
  });

  useEffect(() => {
    // Floating particles animation
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -20,
        x: Math.sin(index) * 10,
        duration: 2 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    // Form slide-up animation
    gsap.fromTo(formRef.current,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: formRef.current,
          scroller: '[data-scroll-container]',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        onComplete: () => setIsFormVisible(true)
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      data-scroll-section
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-navy-900"></div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
            Join Us Today
          </h2>
          <p className="text-xl md:text-2xl text-cyan-200 mb-12">
            Start your data science journey and transform your career in 2025
          </p>
          
          {/* Contact Form */}
          <div ref={formRef} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-cyan-300 text-sm font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-cyan-300 text-sm font-semibold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-cyan-300 text-sm font-semibold">Area of Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="ml">Machine Learning</option>
                  <option value="de">Data Engineering</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="viz">Data Visualization</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:translate-y-[-2px] flex items-center justify-center space-x-2 group"
              >
                <span>Apply Now</span>
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
            
            {/* Success Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-cyan-500/20">
              {[
                "No upfront cost",
                "Flexible schedule",
                "Mentor support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-cyan-300">
                  <FaCheck className="text-cyan-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;