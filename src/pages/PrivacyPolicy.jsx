import React from "react";
import { Shield, Lock, Eye, Mail, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
export default function PrivacyPolicy() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#151325] to-[#1a1625] text-gray-100">
      {/* Hero */}
      <div className="relative pt-10 pb-10  text-center overflow-hidden">
        <div className="absolute inset-0" />
        <div className="relative mt-5 z-10 container mx-auto px-6 max-w-5xl">
       
          <h1 className="text-2xl md:text-5xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy matters to us. Learn how we protect your data.
          </p>
          <p className="text-gray-500 mt-1 text-sm">Last Updated: November 27, 2025</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-6 max-w-5xl mb-20">
        <div className=" rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 text-purple-300">
            {/* <Eye className="w-10 h-10" /> */}
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "introduction", label: "1. Introduction" },
              { id: "data-collection", label: "2. Information We Collect" },
              { id: "data-usage", label: "3. How We Use Your Information" },
              { id: "payment-info", label: "4. Payment & Transaction Information" },
              { id: "cookies", label: "5. Cookies and Tracking Technologies" },
              { id: "data-storage", label: "6. Data Storage and Security" },
              { id: "third-party", label: "7. Third-Party Services" },
              { id: "user-rights", label: "8. Your Rights and Choices" },
              { id: "data-retention", label: "9. Data Retention" },
              { id: "children", label: "10. Children's Privacy" },
              { id: "changes", label: "11. Changes to This Policy" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center justify-between py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-left"
              >
                <span className="font-medium text-purple-300 group-hover:text-white">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-2 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Sections - Full Content */}
      <div className="container mx-auto px-6 max-w-5xl pb-32 space-y-20">

        {/* 1. Introduction */}
        <section id="introduction">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">01. Introduction</h2>
          <div className="text-gray-300 text-sm lg:text-base leading-relaxed space-y-4">
            <p>Welcome to our platform. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our course-selling platform for Data Science, Machine Learning, AI Engineering, and other technical courses.</p>
            <p>By accessing or using our platform, you agree to the terms outlined in this Privacy Policy. If you do not agree with our practices, please do not use our services.</p>
          </div>
        </section>

        {/* 2. Information We Collect */}
        <section id="data-collection">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">02. Information We Collect</h2>
          <div className="text-gray-300 text-sm lg:text-base leading-relaxed space-y-4">
            <p>We collect information that you provide directly to us and information that is automatically collected when you use our platform.</p>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">2.1 Personal Information</h3>
              <ul className="list-disc pl-8 space-y-3">
                <li><strong>Name:</strong> Your full name for account registration and certificates</li>
                <li><strong>Email Address:</strong> For communication, account verification, and course updates</li>
                <li><strong>Phone Number:</strong> For account security and important notifications</li>
                <li><strong>Profile Information:</strong> Educational background, professional experience, and profile picture (optional)</li>
                <li><strong>Communication Data:</strong> Messages, feedback, and support inquiries</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">2.2 Learning Activity Data</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>Course enrollment and completion status</li>
                <li>Quiz attempts and scores</li>
                <li>Assignment submissions and grades</li>
                <li>Project work and capstone submissions</li>
                <li>Video watch time and progress tracking</li>
                <li>Attendance records for live sessions</li>
                <li>Interaction with course materials and resources</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">2.3 Device and Technical Information</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Device type, operating system, and unique device identifiers</li>
                <li>Referring URLs and pages visited</li>
                <li>Time and date of access</li>
                <li>Network connection information</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. How We Use */}
        <section id="data-usage">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">03. How We Use Your Information</h2>
          <div className="text-gray-300 text-sm lg:text-base leading-relaxed space-y-4">
            <p>We use the collected information for the following purposes:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="text-purple-400 mt-1">→</span> <strong>Course Delivery:</strong> To provide access to courses, track progress, and issue certificates</li>
                <li className="flex items-start gap-3"><span className="text-purple-400 mt-1">→</span> <strong>Communication:</strong> To send course updates, announcements, and respond to inquiries</li>
                <li className="flex items-start gap-3"><span className="text-purple-400 mt-1">→</span> <strong>Account Management:</strong> To create and maintain your account, verify identity, and provide support</li>
                <li className="flex items-start gap-3"><span className="text-purple-400 mt-1">→</span> <strong>Personalization:</strong> To recommend relevant courses and customize your learning experience</li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="text-purple-400 mt-1">→</span> <strong>Analytics:</strong> To analyze platform usage, improve content, and enhance user experience</li>
                <li className="flex items-start gap-3"><span className="text-purple-400 mt-1">→</span> <strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms of service</li>
                <li className="flex items-start gap-3"><span className="text-purple-400 mt-1">→</span> <strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Payment */}
        <section id="payment-info">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">04. Payment & Transaction Information</h2>
          <div className="text-gray-300 text-sm lg:text-base leading-relaxed space-y-4">
            <p>When you make a purchase on our platform, we collect payment and transaction information to process your enrollment and provide services.</p>
            <div className="bg-yellow-900/20 border border-yellow-600/50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Lock className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <div>
                  <h4 className="text-2xl font-bold text-yellow-300 mb-3">Important Security Note</h4>
                  <p className="text-yellow-200">We do NOT store your complete credit card numbers, CVV codes, or bank account passwords. All sensitive payment information is processed and stored by our certified payment gateway providers who comply with PCI-DSS regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Cookies */}
        <section id="cookies">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">05. Cookies and Tracking Technologies</h2>
          <p className="text-gray-300 text-lgbaseeading-relaxed">We use co4kies and similar tracking technologies to enhance your experience on our platform. You can control and manage cookies through your browser settings.</p>
        </section>

        {/* 6. Data Storage & Security */}
        <section id="data-storage">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">06. Data Storage and Security</h2>
          <p className="text-gray-300 text-lgbaseeading-relaxed">We take t4e security of your personal information seriously and implement industry-standard measures: SSL/TLS encryption, regular audits, access controls, and secure cloud storage. While no system is 100% secure, we continuously work to protect your data.</p>
        </section>

        {/* 7. Third-Party */}
        <section id="third-party">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">07. Third-Party Services</h2>
          <p className="text-gray-300 text-lgbaseeading-relaxed">We work w4th trusted providers (Razorpay, Stripe, Google Analytics, etc.) who may access your data only to perform tasks on our behalf and are obligated to maintain confidentiality.</p>
        </section>

        {/* 8. Your Rights */}
        <section id="user-rights">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">08. Your Rights and Choices</h2>
          <p className="text-gray-300 text-lgbaseeading-relaxed">You have 4he right to access, correct, delete, or export your data. You can withdraw consent or object to processing. Contact us to exercise these rights — we respond within 30 days.</p>
        </section>

        {/* 9. Data Retention */}
        <section id="data-retention">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">09. Data Retention</h2>
          <p className="text-gray-300 text-lgbaseeading-relaxed">We retain4your data only as long as necessary. Active accounts: ongoing; financial records: 7 years; deleted accounts: removed within 90 days (except legal requirements).</p>
        </section>

        {/* 10. Children's Privacy */}
        <section id="children">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">10. Children's Privacy</h2>
          <p className="text-gray-300 text-lgbaseeading-relaxed">Our platf4rm is not intended for individuals under 16. We do not knowingly collect data from children. If discovered, we delete it immediately.</p>
        </section>

        {/* 11. Changes */}
        <section id="changes">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">11. Changes to This Policy</h2>
          <p className="text-gray-300 text-lgbaseeading-relaxed">We may up4ate this policy. Material changes will be notified via email and on-platform notice. Continued use after changes means acceptance.</p>
        </section>

      
      </div>

 <Footer/>
    </div>
  );
}