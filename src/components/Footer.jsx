import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#151316] text-gray-300 pt-5 pb-15 relative overflow-hidden border-t border-white/10">
      {/* Gradient background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151316] via-[#1a181b] to-[#151316]" />

      {/* 📱 Responsive Grid: 2 on mobile, 3 on tablet, 5 on large */}
      <div className="relative container mx-auto px-6 py-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 z-10">

        {/* Company Info */}
        <div className="col-span-2 sm:col-span-1">
          <h2 className="text-2xl font-extrabold text-white mb-4 tracking-wide">
            The Data Science Academy
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Empowering Students through innovation, data, and intelligence.
            Join us in redefining digital transformation.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#963AB0] hover:text-[#963AB0] transition-all"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#20469B] hover:text-[#20469B] transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#D22D1E] hover:text-[#D22D1E] transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#963AB0] hover:text-[#963AB0] transition-all"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
            Address
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              123 Knowledge Street,
              <br />
              Indore, Madhya Pradesh, India
            </li>
            <li>
              <span className="text-white font-medium">Email:</span>{" "}
              info@tdsa.ac.in
            </li>
            <li>
              <span className="text-white font-medium">Phone:</span>{" "}
              +91 98765 43210
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
            Company
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-[#963AB0] transition-all">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#963AB0] transition-all">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#963AB0] transition-all">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#963AB0] transition-all">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
            Courses
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-[#D22D1E] transition-all">
                Data Science
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D22D1E] transition-all">
                Data Engineering
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D22D1E] transition-all">
                Machine Learning
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D22D1E] transition-all">
                AI & Visualization
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
            Policies
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-[#20469B] transition-all">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#20469B] transition-all">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#20469B] transition-all">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#20469B] transition-all">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-white/10 mt-8 pt-6 text-center text-lg text-gray-500 relative z-10">
        © {new Date().getFullYear()} TDSA. All Rights Reserved. | Design & Developed By{" "}
        <span
          className="text-transparent bg-clip-text"
          style={{
            background:
              "linear-gradient(90deg, #D22D1E 30%, #963AB0 60%, #20469B 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ❤️ Digital Success Solutions
        </span>
      </div>
    </footer>
  );
};

export default Footer;
