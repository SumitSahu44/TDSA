// App.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      lerp: 0.05
    });

    locomotiveScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length ? 
          locomotiveScroll.scrollTo(value, 0, 0) : 
          locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });

    ScrollTrigger.addEventListener('refresh', () => locomotiveScroll.update());
    ScrollTrigger.refresh();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div 
      ref={scrollRef} 
      className="app scroll-smooth bg-navy-900 text-white overflow-hidden"
      data-scroll-container
    >
      <Navigation />
      <Hero />
      <About />
      <Courses />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;