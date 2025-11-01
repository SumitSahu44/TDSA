import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { FaChevronDown } from "react-icons/fa";
import LightRays from "./LightRays";
import Navigation from './Navigation';

gsap.registerPlugin(SplitText);

const NewHero = () => {
  const textRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, {
      type: "chars,words,lines",
      linesClass: "split-line",
    });

    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

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

    tl.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.3"
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#151316]">
      {/* ✅ Navbar fixed on top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navigation />
      </div>

      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151316] to-[#1a181b]" />
      <div className="absolute inset-0 scale-125">
        <LightRays
          raysOrigin="top-center"
          raysColor="#a9b2ff"
          raysSpeed={1.2}
          lightSpread={1.2}
          rayLength={2.0}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.05}
          distortion={0.03}
          className="custom-rays"
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "linear-gradient(90deg,#D22D1E 37.08%,#963AB0 62.26%,#20469B 99.82%)",
        }}
      ></div>

      {/* ✅ Hero Content Centered Vertically */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
        <h1
          ref={textRef}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-white leading-tight"
        >
          {" "}
          <span className="inline-block">
            May these lights guide you,
          </span>{" "} <br />
          on your path
         
          
        </h1>

        <p className="hero-subtext text-lg sm:text-xl md:text-2xl text-white opacity-0 translate-y-3 font-light">
          Shaping the{" "}
          <span
            className="font-bold inline-block"
            style={{
              background:
                "linear-gradient(90deg,#D22D1E 37.08%,#963AB0 62.26%,#20469B 99.82%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 8px rgba(210,45,30,0.7))",
            }}
          >
            Future
          </span>{" "}
          of Data Science Education
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center hero-subtext opacity-0 translate-y-3">
          <button
            className="px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(150,58,176,0.8)]"
            style={{
              background:
                "linear-gradient(90deg,#D22D1E 37.08%,#963AB0 62.26%,#20469B 99.82%)",
              color: "white",
            }}
          >
            Start Learning Today
          </button>
          <button className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-[#151316] transition-all duration-300 transform hover:-translate-y-1">
            View Courses
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0"
      >
        <span className="text-white text-sm mb-2">Scroll to Explore</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div
            className="w-1 h-3 rounded-full animate-bounce mt-1"
            style={{
              background:
                "linear-gradient(90deg,#D22D1E 37.08%,#963AB0 62.26%,#20469B 99.82%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
