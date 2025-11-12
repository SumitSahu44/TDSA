// App.jsx
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import UserCarousel from "./components/UserCarousel";
import HeroSection from "./components/HeroSections";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import CTA from "./components/CTA";
import About from "./components/About";
import NewHero from "./components/NewHero";
import Navigation from "./components/Navigation";
import ScrollVelocity from "./components/ScrollVelocity";
import Journey from "./components/Journey";
import ChromaGrid from "./components/ChromaGrid";
import CoursesSlider from "./components/CoursesSlider";
import Footer from "./components/Footer";
import CourseDetails from "./components/CourseDetails";
import AdminPanel from './pages/AdminPanel';
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="app bg-navy-900 text-white">
      {/* <Navigation /> */}

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <NewHero />
              <About />
              <CoursesSlider />
              <ChromaGrid />
              <CTA />
              <Footer />
            </>
          }
        />

        {/* Course Details Page */}
        <Route path="/course/:id" element={<CourseDetails />} />


         <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
