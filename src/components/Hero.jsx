// components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { FaChevronDown } from "react-icons/fa";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, {
      type: "chars,words,lines",
      linesClass: "split-line",
    });

    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

    // Animate text entry and keep it visible
    tl.fromTo(
      split.chars,
      { opacity: 0, y: 80, rotationX: 90, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        stagger: 0.04,
        duration: 1.2,
      }
    );

    // Animate subtitle fade-in
    tl.to(
      ".hero-subtext",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Scroll indicator fade-in
    tl.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.3"
    );

    // Background gradient animation (looping)
    gsap.to(".gradient-bg", {
      backgroundPosition: "200% 200%",
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      data-scroll-section
    >
      {/* Animated Gradient Background */}
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-[#151316] via-[#1a181b] to-[#151316] bg-[size:200%_200%]"></div>

      {/* Subtle decorative circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-gray-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-gray-400 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Text Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1
          ref={textRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-white"
        >
          The Data Science Academy
        </h1>
        <p className="hero-subtext text-lg sm:text-xl md:text-2xl text-gray-200 opacity-0 translate-y-3">
          Shaping the Future of Data Science Education
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0"
      >
        <span className="text-gray-300 text-sm mb-2">Scroll to Explore</span>
        <FaChevronDown className="text-white animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
