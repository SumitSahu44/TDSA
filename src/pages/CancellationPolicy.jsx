import React from "react";
import { Shield, CalendarX, Clock, ChevronRight, CheckCircle, XCircle, FileX } from "lucide-react";
import Footer from "../components/Footer";
export default function CancellationPolicy() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#151325] to-[#1a1625] text-gray-100">
      {/* Hero */}
      <div className="relative pt-10 pb-10 text-center overflow-hidden">
        <div className="absolute inset-0" />
        <div className="relative mt-5 z-10 container mx-auto px-6 max-w-5xl">
          <h1 className="text-2xl md:text-5xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 leading-tight">
            Cancellation Policy
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Clear guidelines on when and how you can cancel your enrollment.
          </p>
          <p className="text-gray-500 mt-1 text-sm">Last Updated: November 27, 2025</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-6 max-w-5xl mb-20">
        <div className="rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 text-purple-300">
            <CalendarX className="w-10 h-10" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "overview", label: "1. Overview" },
              { id: "allowed", label: "2. Cancellation Window" },
              { id: "not-allowed", label: "3. When Cancellation is Not Possible" },
              { id: "auto-cancel", label: "4. Automatic Cancellation" },
              { id: "batch-change", label: "5. Batch Transfer Policy" },
              { id: "payment-effect", label: "6. Effect on Payments" },
              { id: "process", label: "7. Cancellation Process" },
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

      {/* Content Sections */}
      <div className="container mx-auto px-6 max-w-5xl pb-32 space-y-20">

        <section id="overview">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">01. Overview</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            This policy outlines the conditions under which you may cancel your course enrollment and the applicable refund rules.
          </p>
        </section>

        <section id="allowed">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">02. Cancellation Window</h2>
          <div className="bg-white/5 border border-purple-500/30 rounded-3xl p-10 space-y-8">
            <div className="flex items-start gap-5">
              <CheckCircle className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <strong>Within 24 hours of purchase</strong> → Full refund (automatic)
              </div>
            </div>
            <div className="flex items-start gap-5">
              <CheckCircle className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <strong>Before official batch start date</strong> → Full refund minus ₹2,000 admin fee
              </div>
            </div>
            <div className="flex items-start gap-5">
              <Clock className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <strong>Within 7 days after batch starts</strong> → 50% refund only if ≤2 classes attended
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl text-center">
              <p className="text-purple-200 font-medium">No cancellations accepted after 7 days of batch commencement.</p>
            </div>
          </div>
        </section>

        <section id="not-allowed">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">03. When Cancellation is Not Possible</h2>
          <div className="bg-white/5 border border-purple-500/30 rounded-3xl p-10 space-y-5">
            {[
              "More than 7 days after batch start",
              "Attended 3 or more live sessions",
              "Accessed >15% of course content",
              "Submitted any quiz, assignment, or project",
              "Enrolled through scholarship, EMI, or special offer",
              "Bundle/combo purchases",
              "Self-paced or recorded-only courses"
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <XCircle className="w-6 h-6 text-purple-400/70" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="auto-cancel">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">04. Automatic Cancellation by Platform</h2>
          <div className="bg-white/5 border border-purple-500/30 rounded-3xl p-10">
            <p className="text-gray-300 mb-6">We reserve the right to cancel your enrollment without refund if you:</p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-4"><FileX className="w-6 h-6 text-purple-400 mt-0.5" /> Engage in fraudulent payment or chargeback</li>
              <li className="flex items-start gap-4"><FileX className="w-6 h-6 text-purple-400 mt-0.5" /> Create multiple/fake accounts</li>
              <li className="flex items-start gap-4"><FileX className="w-6 h-6 text-purple-400 mt-0.5" /> Share login credentials or course content</li>
              <li className="flex items-start gap-4"><FileX className="w-6 h-6 text-purple-400 mt-0.5" /> Violate Terms of Service or Community Guidelines</li>
            </ul>
          </div>
        </section>

        <section id="batch-change">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">05. Batch Transfer Policy</h2>
          <div className="text-gray-300 space-y-4">
            <p>→ One free batch transfer allowed before course starts</p>
            <p>→ Not permitted after batch commencement</p>
            <p>→ Schedule changes by platform do not entitle refund</p>
          </div>
        </section>

        <section id="payment-effect">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">06. Effect on Payments</h2>
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-3xl p-10 text-center">
            <p className="text-lg text-gray-200">Eligible cancellations → Refund to original payment method within 10–15 business days</p>
            <p className="text-sm text-gray-400 mt-3">Non-eligible / Auto-cancel → No refund</p>
          </div>
        </section>

        <section id="process">
          <h2 className=" text-2xl lg:text-4xl font-semibold mb-5 text-white">07. How to Request Cancellation</h2>
          <div className="text-gray-300">
            <p className="mb-6">Send an email to <strong>cancel@yourplatform.com</strong> with:</p>
            <ul className="space-y-3">
              <li>• Full Name & Registered Email</li>
              <li>• Course Name & Batch ID</li>
              <li>• Reason for cancellation (optional)</li>
            </ul>
            <p className="mt-6 text-purple-300">We’ll respond within 48 hours.</p>
          </div>
        </section>
{/* 
        <section id="contact" className="pt-20">
          <h2 className="text-5xl font-semibold mb-12 text-purple-300 text-center">08. Questions?</h2>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-3xl p-16 text-center">
            <Shield className="w-20 h-20 mx-auto mb-8 text-purple-400" />
            <p className="text-2xl mb-6 text-gray-200">We're here to help</p>
            <a href="mailto:cancel@yourplatform.com" className="inline-block px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl">
              cancel@yourplatform.com
            </a>
          </div>
        </section> */}
      </div>

     <Footer/>  
    </div>
  );
}