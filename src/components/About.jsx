import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
const sectionRef = useRef(null);
const textRef = useRef(null);
const imageRef = useRef(null);

useEffect(() => {
// Text Animation
gsap.fromTo(
textRef.current,
{ opacity: 0, x: -100 },
{
opacity: 1,
x: 0,
duration: 1.3,
ease: "power3.out",
scrollTrigger: {
trigger: textRef.current,
start: "top 80%",
end: "bottom 20%",
toggleActions: "play none none reverse",
},
}
);

// Image Animation
gsap.fromTo(
  imageRef.current,
  { opacity: 0, x: 100, scale: 0.9, rotationY: 15 },
  {
    opacity: 1,
    x: 0,
    scale: 1,
    rotationY: 0,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: imageRef.current,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  }
);


}, []);

return (
<section ref={sectionRef} className="min-h-screen py-24 bg-gradient-to-br from-[#151316] via-[#1a181b] to-[#151316] relative overflow-hidden" data-scroll-section >
{/* Subtle glowing background accents */}
<div className="absolute top-1/3 -left-40 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/3 -right-40 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text Section */}
      <div ref={textRef} className="space-y-8">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Us</span>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Welcome to <span className="text-white font-semibold">The Data Science Academy 2025</span>, 
          where innovation meets education. We blend advanced AI-driven learning with 
          expert mentorship, helping you transform your passion for data into professional mastery.
        </p>

        <div className="space-y-4 pt-4">
          {[
            "Industry-Expert Instructors",
            "Hands-On Real-World Projects",
            "Global Learning Community",
            "AI & Machine Learning Integrated Curriculum",
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full group-hover:scale-125 transition-transform"></div>
              <span className="text-lg text-gray-200 group-hover:text-white transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Data Globe */}
      <div ref={imageRef} className="relative flex justify-center">
        <div className="relative w-96 h-96 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden">
          {/* Outer glowing rings */}
          <div className="absolute w-80 h-80 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
          <div className="absolute w-64 h-64 border-2 border-teal-400/40 rounded-full animate-spin-slow reverse"></div>

          {/* Dynamic data nodes */}
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full animate-pulse"
              style={{
                left: `${50 + 42 * Math.cos((i * 25.7 * Math.PI) / 180)}%`,
                top: `${50 + 42 * Math.sin((i * 25.7 * Math.PI) / 180)}%`,
                animationDelay: `${i * 0.15}s`,
              }}
            ></div>
          ))}

          {/* Connecting lines */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/70 to-transparent transform origin-bottom"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                }}
              ></div>
            ))}
          </div>

          {/* Glow Center */}
          <div className="absolute w-6 h-6 bg-cyan-300/70 blur-lg rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</section>


);
};

export default About;