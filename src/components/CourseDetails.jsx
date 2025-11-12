import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaDownload, FaPlay, FaChevronDown, FaChevronUp, FaCheck,
  FaUsers, FaChartLine, FaGraduationCap, FaQuestionCircle, FaBuilding
} from 'react-icons/fa';
import Navigation from './Navigation';
import Footer from './Footer';
const CourseDetails = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Refs for scroll animations
  const syllabusRef = useRef(null);
  const statsRef = useRef(null);
  const mentorsRef = useRef(null);
  const faqRef = useRef(null);
  const partnersRef = useRef(null);

  // Course Data
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
      { title: "Introduction to AI & ML", duration: "2 weeks", topics: ["History and evolution of AI", "Types of Machine Learning", "Real-world applications", "AI ethics and responsible AI"] },
      { title: "Python for Data Science", duration: "3 weeks", topics: ["Python fundamentals", "NumPy and Pandas", "Data visualization with Matplotlib & Seaborn", "Data preprocessing techniques"] },
      { title: "Mathematics for ML", duration: "4 weeks", topics: ["Linear Algebra", "Calculus for optimization", "Probability and Statistics", "Information Theory"] },
      { title: "Supervised Learning", duration: "5 weeks", topics: ["Linear and Logistic Regression", "Decision Trees and Random Forests", "Support Vector Machines", "Model evaluation and validation"] },
      { title: "Deep Learning Fundamentals", duration: "6 weeks", topics: ["Neural Networks basics", "TensorFlow and Keras", "Convolutional Neural Networks", "Recurrent Neural Networks"] },
      { title: "Advanced ML Topics", duration: "4 weeks", topics: ["Natural Language Processing", "Computer Vision", "Reinforcement Learning", "Generative AI"] },
      { title: "Capstone Project", duration: "4 weeks", topics: ["Project ideation and planning", "Data collection and preprocessing", "Model development and training", "Deployment and presentation"] }
    ],
    stats: { placementRate: "94%", averageSalary: "$125,000", studentCount: "2500+", completionRate: "89%" },
    features: [
      "Industry-relevant curriculum",
      "Hands-on projects",
      "1:1 mentorship sessions",
      "Career support & placement assistance",
      "Lifetime access to course materials",
      "Certificate of completion"
    ],
    faqs: [
      { q: "Is this course suitable for beginners?", a: "This course is designed for intermediate to advanced learners. Beginners should have basic Python knowledge." },
      { q: "Will I get a certificate after completion?", a: "Yes! You'll receive a verified certificate from our institute, recognized by top tech companies." },
      { q: "Are there any live sessions?", a: "Yes, weekly live doubt-clearing sessions and monthly industry expert talks." },
      { q: "What if I miss a class?", a: "All sessions are recorded and available for lifetime access." },
      { q: "Do you provide placement assistance?", a: "Absolutely! We have a dedicated placement cell with 94% placement rate." },
      { q: "Can I pay in installments?", a: "Yes, flexible EMI options are available with 0% interest." }
    ],
   hiringPartners: [
  { name: "Google", logo: "https://cdn.worldvectorlogo.com/logos/google-2015.svg" },
  { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-6.svg" },
  { name: "Amazon", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3hW6aw_rWIoKnFIpLnXSqBE8Q4Mxme0PpQ&s" },
  { name: "Meta", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
  { name: "Tesla", logo: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg" },
  { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/656px-NVIDIA_logo.svg.png" },
  { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  { name: "DeepMind", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/DeepMind_logo.png" },
  { name: "Apple", logo: "https://cdn.worldvectorlogo.com/logos/apple-2.svg" },
  { name: "Netflix", logo: "https://cdn.worldvectorlogo.com/logos/netflix-4.svg" },
  { name: "Adobe", logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg" },
  { name: "IBM", logo: "https://cdn.worldvectorlogo.com/logos/ibm-2.svg" }
]
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Syllabus
    gsap.fromTo(syllabusRef.current, { x: -100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1,
      scrollTrigger: { trigger: syllabusRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
    });

    // Stats
    gsap.fromTo(statsRef.current.children, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
      scrollTrigger: { trigger: statsRef.current, start: 'top 85%' }
    });

    // Mentors
    gsap.fromTo(mentorsRef.current.children, { y: 60, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
      scrollTrigger: { trigger: mentorsRef.current, start: 'top 80%' }
    });

    // FAQ
    gsap.fromTo(faqRef.current.children, { x: -50, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.8, stagger: 0.15,
      scrollTrigger: { trigger: faqRef.current, start: 'top 80%' }
    });

    // Partners
    gsap.fromTo(partnersRef.current.children, { scale: 0.8, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 0.7, stagger: 0.1, ease: "back.out(1.7)",
      scrollTrigger: { trigger: partnersRef.current, start: 'top 85%' }
    });

    // Floating particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((p, i) => {
      gsap.to(p, {
        y: -20,
        x: Math.sin(i) * 15,
        duration: 3 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  }, []);

  const toggleChapter = (i) => setActiveChapter(activeChapter === i ? -1 : i);
  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);
  const handleDownload = () => alert("Course brochure download started!");
  const handleVideoPlay = () => setIsVideoPlaying(true);

  return (
    <section className="min-h-screen relative py-20 overflow-hidden bg-[#151316]" data-scroll-section>
      {/* Navigation */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navigation />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151316] via-[#1a181b] to-[#151316]"></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 rounded-full blur-sm opacity-20"
          style={{
            background: 'linear-gradient(90deg,#D22D1E 0%,#963AB0 50%,#20469B 100%)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mt-20 mx-auto px-6 relative z-10">

        {/* Header */}
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
          <p className="text-xl md:text-2xl text-gray-300 mb-8">{courseData.description}</p>
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

        {/* Video + Syllabus */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Video */}
          <div className="relative">
            <div className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {!isVideoPlaying ? (
                <div
                  onClick={handleVideoPlay}
                  className="relative h-80 bg-gradient-to-br from-[#151316] to-[#1a181b] flex items-center justify-center cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#D22D1E] to-[#963AB0] flex items-center justify-center shadow-lg">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold">Course Overview</div>
                </div>
              ) : (
                <div className="h-80 bg-black flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-2xl mb-2">Video Player</div>
                    <div className="text-gray-400">Course introduction video playing...</div>
                  </div>
                </div>
              )}
            </div>
            {/* Enroll Now CTA Button - Below Video */}
<div className="mt-8 text-center">
  <button
    onClick={() => {
      // Replace this with your actual payment link
      window.open("https://rzp.io/l/your-payment-link", "_blank");
      // OR for Razorpay checkout (example)
      // const options = { ... }; new Razorpay(options).open();
    }}
    className="group relative inline-flex items-center justify-center w-full py-5 
               text-lg font-bold text-white rounded-2xl 
               bg-gradient-to-r from-[#D22D1E] via-[#963AB0] to-[#20469B] 
               shadow-2xl overflow-hidden transform transition-all duration-500 
               hover:scale-105 hover:shadow-[#963AB0]/60"
  >
    {/* Shining effect */}
    <span className="absolute inset-0 w-full h-full bg-white opacity-0 
                     group-hover:opacity-20 transition-opacity duration-500"></span>

    <span className="relative z-10 flex items-center gap-3">
      Enroll Now
      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" 
           fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </span>

    {/* Pulse ring animation */}
    <span className="absolute inset-0 rounded-2xl animate-ping bg-gradient-to-r 
                     from-[#D22D1E]/50 to-[#20469B]/50 opacity-75"></span>
  </button>

  <p className="mt-4 text-gray-200 text-lg">
    Limited seats • Early bird offer ends in <span className="text-[#D22D1E] font-bold">3 days</span>
  </p>
</div>
          </div>

          {/* Syllabus */}
          <div ref={syllabusRef}>
            <h3 className="text-3xl font-bold text-white mb-8">Course Curriculum</h3>
            <div className="space-y-4">
              {courseData.curriculum.map((chapter, i) => (
                <div key={i} className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left text-white font-semibold hover:bg-white/5 transition"
                    onClick={() => toggleChapter(i)}
                  >
                    <div>
                      <span className="text-lg">{chapter.title}</span>
                      <span className="text-sm text-gray-400 ml-3">({chapter.duration})</span>
                    </div>
                    {activeChapter === i ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {activeChapter === i && (
                    <div className="p-4 border-t border-white/10 bg-[#151316]">
                      <ul className="space-y-2">
                        {chapter.topics.map((t, ti) => (
                          <li key={ti} className="flex items-start text-gray-300">
                            <FaCheck
                              className="mt-1 mr-2 flex-shrink-0 text-transparent bg-clip-text"
                              style={{
                                background: 'linear-gradient(90deg,#D22D1E,#963AB0,#20469B)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                              }}
                            />
                            <span>{t}</span>
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

        {/* Stats */}
        <div ref={statsRef} className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Course Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaUsers, label: "Placement Rate", value: courseData.stats.placementRate },
              { icon: FaChartLine, label: "Average Salary", value: courseData.stats.averageSalary },
              { icon: FaGraduationCap, label: "Students Enrolled", value: courseData.stats.studentCount },
              { icon: FaCheck, label: "Completion Rate", value: courseData.stats.completionRate }
            ].map((stat, i) => (
              <div key={i} className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D22D1E] to-[#963AB0] mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="text-white text-xl" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Mentors */}
        <div ref={mentorsRef} className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Your Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseData.mentors.map((m, i) => (
              <div
                key={i}
                className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-3 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D22D1E] to-[#20469B] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{m.name}</h4>
                <p className="text-gray-300">{m.role}</p>
                <p className="text-sm text-gray-400">{m.experience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div ref={faqRef} className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
            <FaQuestionCircle className="text-[#963AB0]" /> Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {courseData.faqs.map((faq, i) => (
              <div key={i} className="bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-5 text-left text-white font-semibold hover:bg-white/5 transition"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  {activeFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeFaq === i && (
                  <div className="px-5 pb-5 text-gray-300 border-t border-white/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Partners */}
     {/* Hiring Partners - Infinite Auto Slider */}
{/* Hiring Partners - Infinite Auto Slider with REAL LOGOS */}
<div ref={partnersRef} className="max-w-7xl mx-auto mb-20 overflow-hidden">
  <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
    <FaBuilding className="text-[#20469B]" /> Our Hiring Partners
  </h3>

  <div className="relative">
    {/* Gradient fade edges */}
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#151316] to-transparent z-10 pointer-events-none"></div>
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#151316] to-transparent z-10 pointer-events-none"></div>

    <div className="flex animate-slide">
      {/* Duplicate array for seamless infinite loop */}
      {[...courseData.hiringPartners, ...courseData.hiringPartners].map((partner, i) => (
        <div
          key={i}
          className="flex-shrink-0 mx-10 group"
        >
          <div className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-[#963AB0]/60 transition-all duration-300">
            <img 
              src={partner.logo} 
              alt={`${partner.name} logo`}
              className="max-w-full max-h-full object-contain filter brightness-0 invert hue-rotate-180 opacity-80 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
          <p className="text-center text-gray-400 mt-3 text-sm font-medium">{partner.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>
        {/* Features */}
        <div className="max-w-4xl mb-30 mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose This Course?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseData.features.map((f, i) => (
              <div key={i} className="flex items-center space-x-3 bg-[#1a181b]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <FaCheck
                  className="text-transparent bg-clip-text flex-shrink-0"
                  style={{
                    background: 'linear-gradient(90deg,#D22D1E,#963AB0,#20469B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                />
                <span className="text-gray-300">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

        <Footer />
    </section>
  );
};

export default CourseDetails;