import React from "react";
import { Shield, AlertCircle, CheckCircle, XCircle, Clock, FileCheck, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
export default function RefundPolicy() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#151325] to-[#1a1625] text-gray-100">
      {/* Hero Section */}
      <div className="relative pt-10 pb-10 text-center overflow-hidden">
        <div className="absolute inset-0" />
        <div className="relative mt-5 z-10 container mx-auto px-6 max-w-5xl">
          <h1 className="text-2xl md:text-5xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 leading-tight">
            Refund & Return Policy
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our Job-Oriented Courses come with a strict but fair refund guarantee.
          </p>
          <p className="text-gray-500 mt-1 text-sm">Last Updated: November 27, 2025</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-6 max-w-5xl mb-10 lg:mb-20">
        <div className="rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 text-emerald-300">
            <FileCheck className="w-10 h-10" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "overview", label: "1. Overview" },
              { id: "eligibility", label: "2. Eligibility Criteria" },
              { id: "non-refundable", label: "3. Non-Refundable Scenarios" },
              { id: "process", label: "4. Refund Process" },
              { id: "documents", label: "5. Required Documents" },
              { id: "timeline", label: "6. Timeline" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center justify-between py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 text-left"
              >
                <span className="font-medium text-emerald-300 group-hover:text-white">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-2 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-5xl pb-32 space-y-20">

        {/* 1. Overview */}
        <section id="overview">
          <h2 className="text-4xl font-semibold mb-5 text-emerald-300">01. Overview</h2>
          <div className="text-gray-300 text-sm lg:text-base leading-relaxed space-y-4">
            <p>We offer a <strong>100% Job-or-Refund Guarantee</strong> only for our premium <strong>Data Science, Machine Learning, and AI Engineer</strong> bootcamp-style courses.</p>
            <p className="text-yellow-300 font-semibold">This is NOT a "money-back if you don't like it" policy.</p>
            <p>This refund is exclusively for serious students who complete the entire program with full dedication but do not secure a relevant job within 6 months of completion.</p>
          </div>
        </section>

        {/* 2. Eligibility Criteria - STRICT */}
        <section id="eligibility">
          <h2 className="text-4xl font-semibold mb-5 text-emerald-300">02. Eligibility Criteria (All Mandatory)</h2>
          <div className="rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              You Must Fulfill ALL These Conditions:
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-200">
              <div className="flex gap-4">
                <CheckCircle className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <strong>Minimum 85% Attendance</strong><br />
                  <span className="text-sm text-gray-400">In all live sessions & workshops</span>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <strong>100% Quizzes Attempted</strong><br />
                  <span className="text-sm text-gray-400">All weekly & module quizzes</span>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <strong>3 Capstone Projects Completed</strong><br />
                  <span className="text-sm text-gray-400">Deployed & approved by mentor</span>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <strong>Final Test Score ≥ 70%</strong><br />
                  <span className="text-sm text-gray-400">Proctored final assessment</span>
                </div>
              </div>
              <div className="flex gap-4 md:col-span-2">
                <Clock className="w-7 h-7 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <strong>No Job in Relevant Field Within 6 Months</strong><br />
                  <span className="text-sm text-gray-400">After official course completion date</span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-black/30 rounded-2xl border border-emerald-600/50">
              <p className="text-emerald-200 font-semibold text-center">
                Only students who complete ALL requirements honestly are eligible for refund consideration.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Non-Refundable Scenarios */}
        <section id="non-refundable">
          <h2 className="text-4xl font-semibold mb-5 text-red-400">03. Non-Refundable Scenarios (Zero Refund)</h2>
          <div className="bg-red-900/20 border border-red-600/50 rounded-3xl p-10 space-y-5">
            {[
              "Less than 85% attendance in live sessions",
              "Not attempting or failing to complete all quizzes",
              "Incomplete or rejected capstone projects",
              "Final test score below 70%",
              "Not actively applying to jobs (minimum 50 applications required)",
              "Found cheating, copying, or using unfair means",
              "Not following mentor instructions or feedback",
              "Taking breaks or delaying project submissions without valid reason",
              "Course accessed partially and then requesting refund",
              "Purchased via discount/coupon (special offers are non-refundable)"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Refund Process */}
        <section id="process">
          <h2 className="text-4xl font-semibold mb-5 text-emerald-300">04. How to Apply for Refund</h2>
          <div className="text-gray-300 space-y-6">
            <ol className="space-y-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                <div>Wait exactly 6 months after your course completion certificate date</div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                <div>Email <strong>refund@yourplatform.com</strong> with subject: <code className="bg-black/50 px-2 py-1 rounded">Refund Request – [Your Name] – [Batch ID]</code></div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                <div>Our team verifies all eligibility criteria (usually takes 7–10 days)</div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                <div>If approved → Full refund processed within 15 business days</div>
              </li>
            </ol>
          </div>
        </section>

        {/* 5. Required Documents */}
        <section id="documents">
          <h2 className="text-4xl font-semibold mb-5 text-emerald-300">05. Required Documents</h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><AlertCircle className="w-5 h-5 text-yellow-400" /> Proof of 50+ job applications (screenshots/links)</li>
              <li className="flex items-center gap-3"><AlertCircle className="w-5 h-5 text-yellow-400" /> Updated Resume & LinkedIn profile</li>
              <li className="flex items-center gap-3"><AlertCircle className="w-5 h-5 text-yellow-400" /> Course completion certificate</li>
              <li className="flex items-center gap-3"><AlertCircle className="w-5 h-5 text-yellow-400" /> Declaration of no job offer in relevant field</li>
            </ul>
          </div>
        </section>

        {/* 6. Timeline */}
        <section id="timeline">
          <h2 className="text-4xl font-semibold mb-5 text-emerald-300">06. Refund Timeline</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-b from-emerald-900/30 to-transparent border border-emerald-600/50 rounded-2xl p-8">
              <Clock className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
              <h4 className="text-xl font-bold text-emerald-300">6 Months</h4>
              <p className="text-gray-400">From course completion</p>
            </div>
            <div className="bg-gradient-to-b from-yellow-900/30 to-transparent border border-yellow-600/50 rounded-2xl p-8">
              <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-bold text-yellow-300">7–10 Days</h4>
              <p className="text-gray-400">Verification process</p>
            </div>
            <div className="bg-gradient-to-b from-cyan-900/30 to-transparent border border-cyan-600/50 rounded-2xl p-8">
              <Clock className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h4 className="text-xl font-bold text-cyan-300">15 Days</h4>
              <p className="text-gray-400">Refund processing</p>
            </div>
          </div>
        </section>

     
      </div>

 <Footer/>
    </div>
  );
}