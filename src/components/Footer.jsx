// components/Footer.jsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-cyan-500/20" data-scroll-section>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              The Data Science Academy
            </h3>
            <p className="text-cyan-200 max-w-md">
              Shaping the future of data science education with innovative curriculum, 
              industry experts, and hands-on learning experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Courses', 'Projects', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-cyan-300 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[FaTwitter, FaLinkedin, FaGithub, FaEnvelope].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-cyan-300">
          <p>&copy; 2025 The Data Science Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;