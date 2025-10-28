import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';

const CTA = () => {
const sectionRef = useRef(null);
const formRef = useRef(null);
const [formData, setFormData] = useState({
name: '',
email: '',
interest: ''
});

useEffect(() => {
gsap.registerPlugin(ScrollTrigger);

// Floating particle animation
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

// Form reveal animation
gsap.fromTo(
  formRef.current,
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: formRef.current,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  }
);


}, []);

const handleSubmit = (e) => {
e.preventDefault();
console.log('Form submitted:', formData);
};

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

return (
<section ref={sectionRef} className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#151316]" data-scroll-section >
{/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-br from-[#151316] via-[#1a181b] to-[#151316]"></div>

  {/* Floating particles */}
  {[...Array(25)].map((_, i) => (
    <div
      key={i}
      className="particle absolute w-2 h-2 bg-white/10 rounded-full blur-sm"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    ></div>
  ))}

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
        Join Us Today
      </h2>
      <p className="text-lg md:text-2xl text-gray-300 mb-12">
        Start your Data Science journey and transform your career in 2025
      </p>

      {/* Contact Form */}
      <div
        ref={formRef}
        className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/30"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 text-left">
              <label className="text-gray-300 text-sm font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#151316] border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-all duration-300"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-gray-300 text-sm font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#151316] border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="space-y-2 text-left">
            <label className="text-gray-300 text-sm font-semibold">Area of Interest</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#151316] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all duration-300"
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
            className="w-full py-4 bg-gradient-to-r from-[#1a181b] to-[#151316] rounded-xl text-white font-semibold text-lg border border-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Apply Now</span>
            <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>

        {/* Success Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
          {[
            'No upfront cost',
            'Flexible schedule',
            '1:1 Mentor Support'
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 text-gray-300">
              <FaCheck className="text-white" />
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