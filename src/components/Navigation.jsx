import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Navigation ke liye
import { AuthContext } from '../context/AuthContext'; // Auth Context import karein
import { User, LogOut, LogIn } from 'lucide-react'; // Icons for better UI

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // User data aur logout function lein
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/#courses' }, // Assuming homepage sections
    { name: 'About', href: '/#about' },
    { name: 'Success Stories', href: '/#success' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="relative z-50 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Clean White Version */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/images/tdsalogo-wbg.png" 
                  alt="The DataScience Academy Logo" 
                  className="w-14 object-contain mt-0"
                />
              </div>
              <span className="text-white font-bold text-xl tracking-tight leading-tight">
                The DataScience<br/> <span className="text-gray-300">Academy</span>
              </span>
            </Link>

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

            {/* CTA Buttons (Login / User Profile) */}
            <div className="hidden lg:flex items-center space-x-6">
              {user ? (
                // --- VIEW IF LOGGED IN ---
                <div className="flex items-center gap-4">
                  {/* User Name Display */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10">
                    <User size={18} className="text-[#D22D1E]" />
                    <span className="text-white font-medium capitalize">
                      {user.name || "Student"}
                    </span>
                  </div>

                  {/* Logout Button */}
                  <button 
                    onClick={handleLogout}
                    title="Logout"
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    <LogOut size={20} />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              ) : (
                // --- VIEW IF NOT LOGGED IN ---
                <Link 
                  to="/login"
                  className="px-6 py-2.5 text-gray-300 hover:text-white transition-colors duration-300 font-medium flex items-center gap-2"
                >
                  <LogIn size={18} /> Login
                </Link>
              )}
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
        <div className={`lg:hidden absolute top-20 left-0 right-0 bg-[#151316] border-t border-white/10 transition-all duration-500 transform ${
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

            <div className="flex flex-col space-y-4 mt-4 w-full px-8">
              {user ? (
                // --- MOBILE LOGGED IN VIEW ---
                <>
                  <div className="flex items-center justify-center gap-2 text-white text-lg font-bold">
                     <User size={24} className="text-[#D22D1E]" />
                     Hello, {user.name}
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 px-8 py-3 text-lg text-red-400 border border-red-500/30 rounded-xl hover:bg-red-500/10 transition-all duration-300"
                  >
                    <LogOut size={20} /> Logout
                  </button>
                </>
              ) : (
                // --- MOBILE LOGGED OUT VIEW ---
                <Link 
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-center px-8 py-3 text-lg text-gray-300 border border-gray-600 rounded-xl hover:border-white transition-all duration-300"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;