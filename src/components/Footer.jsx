import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
return (
<footer className="bg-[#151316] border-t border-white/10 text-gray-300 relative overflow-hidden" data-scroll-section >
{/* Subtle gradient overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-[#1a181b] via-transparent to-transparent opacity-70"></div>

  <div className="container mx-auto px-6 py-14 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      
      {/* Brand Section */}
      <div className="md:col-span-2">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-4">
          The Data Science Academy
        </h3>
        <p className="text-gray-400 leading-relaxed max-w-md">
          Empowering learners to master data science through hands-on training, mentorship, and real-world projects that make an impact.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">
          Quick Links
        </h4>
        <ul className="space-y-2">
          {['About', 'Courses', 'Projects', 'Careers', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Connect Section */}
      <div>
        <h4 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">
          Connect
        </h4>
        <div className="flex space-x-4">
          {[
            { icon: FaTwitter, link: '#' },
            { icon: FaLinkedin, link: '#' },
            { icon: FaGithub, link: '#' },
            { icon: FaEnvelope, link: '#' },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-[#1a181b]/70 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-white/10 mt-10 pt-8 text-center">
      <p className="text-gray-500 text-sm">
        © 2025 The Data Science Academy. All rights reserved.
      </p>
    </div>
  </div>
</footer>


);
};

export default Footer;