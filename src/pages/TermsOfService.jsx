import React from "react";
import { Shield, Lock, FileText, ChevronRight, AlertCircle, CheckCircle, Ban } from "lucide-react";
import Footer from "../components/Footer";

export default function TermsOfService() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#151325] to-[#1a1625] text-gray-100">
      {/* Hero Section */}
      <div className="relative pt-10 pb-10 text-center overflow-hidden">
        <div className="absolute inset-0" />
        <div className="relative mt-5 z-10 container mx-auto px-6 max-w-5xl">
          <h1 className="text-2xl md:text-5xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 leading-tight">
            Terms of Service
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our platform.
          </p>
          <p className="text-gray-500 mt-1 text-sm">Last Updated: November 27, 2025</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto hidden lg:block px-6 max-w-5xl mb-20">
        <div className="rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 text-purple-300">
            <FileText className="w-10 h-10" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "introduction", label: "1. Introduction" },
              { id: "eligibility", label: "2. Eligibility" },
              { id: "account", label: "3. Account Creation & Responsibilities" },
              { id: "enrollment", label: "4. Course Enrollment" },
              { id: "payment", label: "5. Payments & Refunds" },
              { id: "usage", label: "6. Acceptable Use Policy" },
              { id: "ip", label: "7. Intellectual Property" },
              { id: "instructor", label: "8. Instructor Responsibilities" },
              { id: "student", label: "9. Student Responsibilities" },
              { id: "liability", label: "10. Limitation of Liability" },
              { id: "termination", label: "11. Termination & Suspension" },
              { id: "governing", label: "12. Governing Law" },
              { id: "changes", label: "13. Changes to Terms" }
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

      {/* Main Content Sections */}
      <div className="container mx-auto px-6 max-w-5xl pb-32 space-y-10">

        {/* 1. Introduction */}
        <section id="introduction">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">01. Introduction</h2>
          <div className="text-gray-300 text-sm lg:text-base leading-relaxed space-y-4">
            <p>Welcome to <strong>Your Course Platform</strong> ("we," "our," or "the Platform"), an online learning platform offering courses in Data Science, Machine Learning, AI Engineering, and related technical fields.</p>
            <p>By accessing or using our website, mobile app, or services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use our platform.</p>
          </div>
        </section>

        {/* 2. Eligibility */}
        <section id="eligibility">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">02. Eligibility</h2>
          <div className="text-gray-300 text-sm lg:text-base leading-relaxed space-y-4">
            <p>You must be at least <strong>16 years old</strong> to use our platform.</p>
            <p>Users under 18 must have parental or legal guardian consent. By using the platform, you represent that you meet these requirements.</p>
            <div className="bg-red-900/20 border border-red-600/50 rounded-2xl p-6 flex items-start gap-4">
              <Ban className="w-8 h-8 text-red-400 flex-shrink-0" />
              <p className="text-red-200">Users found to be under 16 without consent will have their accounts terminated immediately.</p>
            </div>
          </div>
        </section>

        {/* 3. Account Creation */}
        <section id="account">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">03. Account Creation & Responsibilities</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="space-y-3 list-disc pl-8">
              <li>You must provide accurate and complete information during registration.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
              <li>You are fully responsible for all activities that occur under your account.</li>
              <li>Only one account per person is allowed. Account sharing is strictly prohibited.</li>
            </ul>
          </div>
        </section>

        {/* 4. Course Enrollment */}
        <section id="enrollment">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">04. Course Enrollment</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" /> Enrollment grants you a limited, non-transferable license to access the course for personal use.</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" /> Lifetime access is provided unless stated otherwise.</li>
              <li className="flex items-start gap-3"><Ban className="w-6 h-6 text-red-400 flex-shrink-0" /> You may not share, distribute, or resell course access.</li>
            </ul>
          </div>
        </section>

        {/* 5. Payments & Refunds */}
        <section id="payment">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">05. Payments & Refunds</h2>
          <div className="text-gray-300 space-y-5">
            <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-600/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-emerald-300 mb-4">Refund Policy</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• Full refund within <strong>7 days</strong> of purchase if less than 10% of course is consumed.</li>
                <li>• No refunds after 7 days or if more than 10% content is accessed.</li>
                <li>• Refunds processed within 5–10 business days.</li>
                <li>• Bundle purchases follow the same policy based on primary course progress.</li>
              </ul>
            </div>
            <p>All payments are processed securely via Razorpay, Stripe, or other PCI-DSS compliant gateways.</p>
          </div>
        </section>

        {/* 6. Acceptable Use */}
        <section id="usage">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">06. Acceptable Use Policy</h2>
          <div className="text-gray-300 space-y-4">
            <p>You agree not to:</p>
            <ul className="space-y-2 pl-6">
              <li>• Copy, distribute, or modify course content without permission</li>
              <li>• Use bots, scrapers, or automate access to the platform</li>
              <li>• Attempt to reverse engineer or extract source code</li>
              <li>• Harass, threaten, or abuse instructors or other students</li>
              <li>• Upload malicious code or spam</li>
              <li>• Impersonate any person or entity</li>
            </ul>
          </div>
        </section>

        {/* 7. Intellectual Property */}
        <section id="ip">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">07. Intellectual Property</h2>
          <div className="text-gray-300 space-y-4">
            <p>All course content, including videos, code, notes, projects, and quizzes, is owned by the Platform or its instructors and protected by copyright laws.</p>
            <p>You are granted a limited license for personal, non-commercial use only. Commercial use, redistribution, or creation of derivative courses is strictly prohibited.</p>
          </div>
        </section>

        {/* 8. Instructor Responsibilities */}
        <section id="instructor">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">08. Instructor Responsibilities</h2>
          <div className="text-gray-300 space-y-3">
            <p>Instructors agree to:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Provide accurate, high-quality, original content</li>
              <li>Respond to student queries within 48 hours</li>
              <li>Update courses when significant changes occur in the field</li>
              <li>Not promote competing platforms within course content</li>
            </ul>
          </div>
        </section>

        {/* 9. Student Responsibilities */}
        <section id="student">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">09. Student Responsibilities</h2>
          <div className="text-gray-300 space-y-3">
            <ul className="list-disc pl-8 space-y-2">
              <li>Complete courses with honesty and integrity</li>
              <li>Not share solutions or cheat on assessments</li>
              <li>Respect community guidelines in discussions</li>
              <li>Provide constructive feedback</li>
            </ul>
          </div>
        </section>

        {/* 10. Limitation of Liability */}
        <section id="liability">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">10. Limitation of Liability</h2>
          <div className="text-gray-300 space-y-4">
            <p>The platform is provided "as is". We do not guarantee job placement, specific outcomes, or error-free operation.</p>
            <p>To the fullest extent permitted by law, we shall not be liable for indirect, incidental, or consequential damages.</p>
          </div>
        </section>

        {/* 11. Termination */}
        <section id="termination">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">11. Termination & Suspension</h2>
          <div className="text-gray-300 space-y-4">
            <p>We reserve the right to suspend or terminate your account at any time for violation of these Terms, including:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Piracy or content sharing</li>
              <li>Fraudulent activity</li>
              <li>Abusive behavior</li>
              <li>Multiple accounts</li>
            </ul>
            <p>No refunds will be issued for terminated accounts due to violations.</p>
          </div>
        </section>

        {/* 12. Governing Law */}
        <section id="governing">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">12. Governing Law</h2>
          <p className="text-gray-300">These Terms shall be governed by the laws of India. Any disputes will be resolved in the courts of [Your City], India.</p>
        </section>

        {/* 13. Changes to Terms */}
        <section id="changes">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-2 lg:mb-5 text-purple-300">13. Changes to Terms</h2>
          <p className="text-gray-300">We may update these Terms from time to time. We will notify you of material changes via email or platform notice. Continued use constitutes acceptance.</p>
        </section>

     
      </div>

 <Footer/>
    </div>
  );
}