"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#1e293b]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-gradient-to-br from-sky-500 via-teal-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">VitalK AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Services</a>
              <a href="#process" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Process</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Pricing</a>
              <a href="#contact" className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40">
                Book Consultation
              </a>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-teal-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-[#1e293b]/50 border border-[#1e293b] rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-400">Accepting new clients for Q2 2026</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">AI Automation</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                Reclaim 20+ hours per week. Scale operations without adding headcount. 
                Let intelligent workflows handle the repetitive while you focus on growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105">
                  Get Your Free Automation Audit
                </a>
                <a href="#services" className="bg-[#1e293b]/50 hover:bg-[#1e293b] border border-[#1e293b] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:border-sky-500/50">
                  Explore Services
                </a>
              </div>
              
              {/* Social proof */}
              <div className="mt-12 pt-8 border-t border-[#1e293b]/50">
                <p className="text-gray-500 text-sm mb-4">Trusted by forward-thinking companies</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-50">
                  <div className="text-gray-400 font-semibold text-sm">TechStart Inc</div>
                  <div className="text-gray-400 font-semibold text-sm">GrowthLabs</div>
                  <div className="text-gray-400 font-semibold text-sm">ScaleVentures</div>
                  <div className="text-gray-400 font-semibold text-sm">InnovateCo</div>
                  <div className="text-gray-400 font-semibold text-sm">DataFlow</div>
                </div>
              </div>
            </div>
            
            {/* Right: Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                {/* Main illustration container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 500 500" className="w-full h-full">
                    <defs>
                      <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#0ea5e9", stopOpacity: 0.3 }} />
                        <stop offset="100%" style={{ stopColor: "#14b8a6", stopOpacity: 0.1 }} />
                      </linearGradient>
                      <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#6366f1", stopOpacity: 0.4 }} />
                        <stop offset="100%" style={{ stopColor: "#0ea5e9", stopOpacity: 0.2 }} />
                      </linearGradient>
                    </defs>
                    
                    {/* Background circles */}
                    <circle cx="250" cy="250" r="200" fill="url(#heroGrad1)" />
                    <circle cx="280" cy="220" r="140" fill="url(#heroGrad2)" />
                    <circle cx="220" cy="280" r="90" fill="url(#heroGrad1)" />
                    
                    {/* Network nodes with glow */}
                    <g filter="url(#glow)">
                      <circle cx="180" cy="150" r="10" fill="#0ea5e9" />
                      <circle cx="320" cy="150" r="10" fill="#14b8a6" />
                      <circle cx="250" cy="250" r="14" fill="#6366f1" />
                      <circle cx="140" cy="300" r="8" fill="#0ea5e9" />
                      <circle cx="360" cy="300" r="8" fill="#14b8a6" />
                      <circle cx="250" cy="350" r="10" fill="#6366f1" />
                    </g>
                    
                    {/* Connection lines */}
                    <g stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4">
                      <line x1="180" y1="150" x2="250" y2="250" />
                      <line x1="320" y1="150" x2="250" y2="250" />
                      <line x1="140" y1="300" x2="250" y2="250" />
                      <line x1="360" y1="300" x2="250" y2="250" />
                      <line x1="250" y1="350" x2="250" y2="250" />
                    </g>
                    
                    {/* Animated pulses */}
                    <circle cx="250" cy="250" r="20" fill="none" stroke="#0ea5e9" strokeWidth="2" opacity="0.6">
                      <animate attributeName="r" from="20" to="50" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What We <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">Automate</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From customer operations to back-office workflows, we identify and implement 
              AI solutions that deliver measurable ROI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                gradient: "from-sky-500 to-sky-600",
                title: "Customer Service Automation",
                desc: "AI chatbots, automated ticket routing, intelligent response suggestions, and 24/7 customer support.",
                benefits: ["80% faster response time", "70%+ auto-handled", "Seamless handoff"],
              },
              {
                icon: "📄",
                gradient: "from-teal-500 to-teal-600",
                title: "Document Processing",
                desc: "Automated invoice processing, contract analysis, data extraction, and intelligent classification.",
                benefits: ["95%+ accuracy", "1000s docs/hour", "Zero manual entry"],
              },
              {
                icon: "⚡",
                gradient: "from-indigo-500 to-indigo-600",
                title: "Workflow Orchestration",
                desc: "End-to-end automation connecting CRM, email, project management, accounting, and more.",
                benefits: ["No manual transfers", "Auto task creation", "Real-time updates"],
              },
              {
                icon: "🎯",
                gradient: "from-purple-500 to-purple-600",
                title: "Lead Qualification",
                desc: "AI-powered lead scoring, automated follow-ups, personalized outreach, and CRM updates.",
                benefits: ["3x more qualified leads", "Multi-touch campaigns", "Smart routing"],
              },
              {
                icon: "📊",
                gradient: "from-pink-500 to-pink-600",
                title: "Reporting & Analytics",
                desc: "Automated report generation, AI-powered insights, custom dashboards, and predictive analytics.",
                benefits: ["Save 10+ hrs/week", "Real-time BI", "Predictive trends"],
              },
              {
                icon: "🔧",
                gradient: "from-orange-500 to-orange-600",
                title: "Custom AI Solutions",
                desc: "Bespoke AI models and integrations tailored to your unique business processes.",
                benefits: ["Proprietary workflows", "Industry-specific", "Scalable architecture"],
              },
            ].map((service, i) => (
              <div key={i} className="group bg-[#1e293b]/30 border border-[#1e293b]/50 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-5 text-2xl shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              How We <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven four-step process to identify, implement, and optimize automation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Audit", desc: "Analyze workflows to identify high-impact opportunities with clear ROI.", duration: "1-2 weeks" },
              { step: "02", title: "Strategy & Plan", desc: "Custom roadmap with prioritized initiatives, timelines, and outcomes.", duration: "1 week" },
              { step: "03", title: "Implementation", desc: "Build, test, and deploy with minimal disruption to operations.", duration: "2-6 weeks" },
              { step: "04", title: "Optimize & Scale", desc: "Continuous monitoring, refinement, and expansion across your org.", duration: "Ongoing" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-7xl font-bold text-[#1e293b]/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-3 leading-relaxed">{item.desc}</p>
                <span className="text-sm text-sky-500 font-medium">{item.duration}</span>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-[#1e293b]/30">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-[#0d1117] to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Simple, <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">Transparent Pricing</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the engagement that fits your needs. All plans include dedicated support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$5,000",
                desc: "Perfect for small teams",
                features: ["Workflow audit (up to 5)", "1-2 automations", "Basic integrations", "30 days support"],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Professional",
                price: "$15,000",
                desc: "For growing businesses",
                features: ["Comprehensive audit", "3-5 automations", "Advanced integrations", "90 days support", "ROI dashboard"],
                cta: "Get Started",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$50,000+",
                desc: "Full transformation",
                features: ["Org-wide audit", "Unlimited automations", "Custom AI models", "Dedicated team", "Managed service option"],
                cta: "Contact Us",
                popular: false,
              },
            ].map((plan, i) => (
              <div key={i} className={`relative bg-[#1e293b]/30 border rounded-2xl p-8 ${plan.popular ? 'border-sky-500 shadow-xl shadow-sky-500/10' : 'border-[#1e293b]/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-teal-500 px-4 py-1.5 rounded-full text-sm font-bold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.desc}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400"> /project</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all ${plan.popular ? 'bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white shadow-lg shadow-sky-500/25' : 'bg-[#1e293b] hover:bg-[#1e293b]/80 text-white border border-[#1e293b]'}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-2">
              Need ongoing support? Our <span className="text-sky-500 font-medium">Managed Automation Service</span> starts at $2,000/month
            </p>
            <p className="text-gray-500 text-sm">Includes monitoring, maintenance, and continuous optimization</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready to <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Book a free 30-minute consultation. We'll identify 2-3 high-impact automation opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-[#1e293b]/30 border border-[#1e293b]/50 rounded-2xl p-8">
              {formStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0a0a0f] border border-[#1e293b] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0a0a0f] border border-[#1e293b] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0a0a0f] border border-[#1e293b] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">How can we help? *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full bg-[#0a0a0f] border border-[#1e293b] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition resize-none"
                      placeholder="Tell us about your biggest workflow challenges..."
                    />
                  </div>
                  {formStatus === "error" && (
                    <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-xl text-sm">
                      Something went wrong. Please try again or email us at hello@vitalkai.com
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 disabled:shadow-none"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Book Free Consultation"}
                  </button>
                </div>
              )}
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#1e293b]/30 border border-[#1e293b]/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="font-medium text-white">hello@vitalkai.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Response Time</div>
                      <div className="font-medium text-white">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1e293b]/30 border border-[#1e293b]/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    "30-minute discovery call",
                    "2-3 identified automation opportunities",
                    "Rough ROI estimates for each",
                    "No-pressure consultation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] py-12 px-4 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-sky-500 via-teal-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">VitalK AI</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering businesses with intelligent automation solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-sky-400 transition">Customer Service</a></li>
                <li><a href="#services" className="hover:text-sky-400 transition">Document Processing</a></li>
                <li><a href="#services" className="hover:text-sky-400 transition">Workflow Automation</a></li>
                <li><a href="#services" className="hover:text-sky-400 transition">Custom AI Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#process" className="hover:text-sky-400 transition">Process</a></li>
                <li><a href="#pricing" className="hover:text-sky-400 transition">Pricing</a></li>
                <li><a href="#contact" className="hover:text-sky-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1e293b] pt-8 text-center text-gray-500 text-sm">
            © 2026 VitalK AI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
