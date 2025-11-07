// App.jsx - Simplified version
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './components/Hero';
import UserCarousel from './components/UserCarousel';
import HeroSection from './components/HeroSections';
import Projects from './components/Projects';
import Courses from './components/Courses';
import CTA from './components/CTA'; 
import About from './components/About';
import NewHero from "./components/NewHero";
import Navigation from './components/Navigation';
import ScrollVelocity from './components/ScrollVelocity';
import Journey from './components/Journey';
import ChromaGrid from './components/ChromaGrid';
import CoursesSlider from './components/CoursesSlider';
import Footer from './components/Footer';
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Simple GSAP ScrollTrigger setup without Locomotive Scroll
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="app bg-navy-900 text-white">
      
       {/* <Navigation/> */}
     
      <NewHero />
      {/* <Hero /> */}
      <About/>
       {/* <HeroSection /> */}
 





   <CoursesSlider />
   
   <ChromaGrid/>

      {/* <Projects /> */}
      {/* <Courses /> */}
      {/* <UserCarousel /> */}

      <CTA />
<Footer />
    </div>
  );
}

export default App;