import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
const sectionRef = useRef(null);
const horizontalRef = useRef(null);

const courses = [
{
id: 1,
title: "Machine Learning Mastery",
duration: "6 Months",
level: "Advanced",
description:
"Deep dive into ML algorithms, neural networks, and real-world applications.",
color: "from-cyan-500 to-blue-500",
},
{
id: 2,
title: "Data Engineering",
duration: "4 Months",
level: "Intermediate",
description: "Build scalable data pipelines and master big data technologies.",
color: "from-teal-500 to-cyan-500",
},
{
id: 3,
title: "AI & Deep Learning",
duration: "8 Months",
level: "Expert",
description:
"Advanced neural networks, transformers, and cutting-edge AI research.",
color: "from-blue-500 to-purple-500",
},
{
id: 4,
title: "Data Visualization",
duration: "3 Months",
level: "Beginner",
description: "Create stunning visualizations and interactive dashboards.",
color: "from-purple-500 to-pink-500",
},
{
id: 5,
title: "Business Analytics",
duration: "4 Months",
level: "Intermediate",
description:
"Data-driven decision making and business intelligence strategies.",
color: "from-pink-500 to-red-500",
},
{
id: 6,
title: "MLOps & Deployment",
duration: "5 Months",
level: "Advanced",
description:
"Model deployment, monitoring, and machine learning operations.",
color: "from-red-500 to-orange-500",
},
{
id: 7,
title: "Natural Language Processing",
duration: "6 Months",
level: "Advanced",
description: "Text analysis, sentiment analysis, and language models.",
color: "from-orange-500 to-yellow-500",
},
{
id: 8,
title: "Computer Vision",
duration: "7 Months",
level: "Expert",
description: "Image recognition, object detection, and video analysis.",
color: "from-yellow-500 to-green-500",
},
];

useEffect(() => {
const ctx = gsap.context(() => {
const totalWidth = horizontalRef.current.scrollWidth;
const viewportWidth = window.innerWidth;
const scrollDistance = totalWidth - viewportWidth; // stop when last card fully in view

  const tween = gsap.to(horizontalRef.current, {
    x: () => -scrollDistance,
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${scrollDistance}`, // match horizontal distance
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}, sectionRef);

return () => ctx.revert();


}, []);

return (
<section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#151316] to-[#1a181b]" data-scroll-section >
<h2 className="absolute top-10 w-full text-center text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 z-10">
Our Courses
</h2>

  <div className="h-full flex items-center">
    <div ref={horizontalRef} className="flex h-full items-center space-x-12 px-12">
      {courses.map((course, index) => (
        <div
          key={course.id}
          className="course-card-container flex-shrink-0 w-[80vw] md:w-[50vw]"
        >
          <div className="group relative h-[28rem] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            {/* Shine Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} mb-6 flex items-center justify-center`}
              >
                <span className="text-white font-bold text-lg">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {course.title}
              </h3>
              <p className="text-gray-300 mb-6 flex-grow">
                {course.description}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-300">Duration</span>
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-300">Level</span>
                  <span className="text-white">{course.level}</span>
                </div>
              </div>

              <button className="mt-6 w-full py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


);
};

export default Courses;