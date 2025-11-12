import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Success Stories', href: '#success' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="relative z-50 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Clean White Version */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xlflex items-center justify-center">
                <img 
                  src="/images/tdsalogo-wbg.png" 
                  alt="The DataScience Academy Logo" 
                  className="w-14 object-contain mt-0"
                />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                The DataScience<span className="text-white"><br/> Academy</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D22D1E] to-[#963AB0] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-6 py-2.5 text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                Login
              </button>
              <button className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-[#D22D1E] to-[#963AB0] text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#D22D1E]/20 hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
                <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
                <div className="w-6 h-0.5 bg-white transition-all"></div>
              </div>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="w-6 h-0.5 bg-white rotate-45 absolute"></div>
                <div className="w-6 h-0.5 bg-white -rotate-45 absolute"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-20 left-0 right-0 bg-gradient-to-br from-[#151316] to-[#1a181b] border-t border-white/10 transition-all duration-500 transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col items-center py-8 space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-medium text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-[#D22D1E] to-[#963AB0] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-4 mt-4">
              <button className="px-8 py-3 text-lg text-gray-300 border border-gray-600 rounded-xl hover:border-white transition-all duration-300">
                Login
              </button>
              <button className="px-8 py-3 text-lg rounded-xl bg-gradient-to-r from-[#D22D1E] to-[#963AB0] text-white font-semibold transition-all duration-300 hover:shadow-2xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;