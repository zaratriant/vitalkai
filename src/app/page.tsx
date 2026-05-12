"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to API endpoint
    alert("Thanks! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold gradient-text">VitalK AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#process" className="text-gray-300 hover:text-white transition">Process</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#contact" className="btn-primary">Book Consultation</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Transform Your Business with{" "}
              <span className="gradient-text">AI-Powered Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in-up-delay-1">
              Reclaim 20+ hours per week. Scale operations without adding headcount. 
              Let intelligent workflows handle the repetitive while you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
              <a href="#contact" className="btn-primary text-lg px-8 py-4">
                Get Your Free Automation Audit
              </a>
              <a href="#services" className="btn-secondary text-lg px-8 py-4">
                Explore Services
              </a>
            </div>
            
            {/* Social proof */}
            <div className="mt-16 pt-8 border-t border-[#1e293b]">
              <p className="text-gray-500 text-sm mb-4">Trusted by forward-thinking companies</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                <div className="text-gray-400 font-semibold">TechStart Inc</div>
                <div className="text-gray-400 font-semibold">GrowthLabs</div>
                <div className="text-gray-400 font-semibold">ScaleVentures</div>
                <div className="text-gray-400 font-semibold">InnovateCo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-[#0d1117]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What We <span className="gradient-text">Automate</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From customer operations to back-office workflows, we identify and implement 
            AI solutions that deliver measurable ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="card">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Customer Service Automation</h3>
            <p className="text-gray-400 mb-4">
              AI chatbots, automated ticket routing, intelligent response suggestions, 
              and 24/7 customer support without 24/7 staffing.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>✓ Reduce response time by 80%</li>
              <li>✓ Handle 70%+ of inquiries automatically</li>
              <li>✓ Seamless human handoff</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="card">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Document & Data Processing</h3>
            <p className="text-gray-400 mb-4">
              Automated invoice processing, contract analysis, data extraction, 
              and intelligent document classification.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>✓ 95%+ accuracy on data extraction</li>
              <li>✓ Process 1000s of docs/hour</li>
              <li>✓ Zero manual data entry</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="card">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Workflow Orchestration</h3>
            <p className="text-gray-400 mb-4">
              End-to-end process automation connecting your tools: CRM, email, 
              project management, accounting, and more.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>✓ Eliminate manual data transfer</li>
              <li>✓ Automated task creation & assignment</li>
              <li>✓ Real-time status updates</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="card">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Lead Qualification & Nurturing</h3>
            <p className="text-gray-400 mb-4">
              AI-powered lead scoring, automated follow-ups, personalized outreach, 
              and intelligent CRM updates.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>✓ 3x increase in qualified leads</li>
              <li>✓ Automated multi-touch campaigns</li>
              <li>✓ Smart lead routing to sales</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="card">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Reporting & Analytics</h3>
            <p className="text-gray-400 mb-4">
              Automated report generation, AI-powered insights, custom dashboards, 
              and predictive analytics.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>✓ Save 10+ hours/week on reporting</li>
              <li>✓ Real-time business intelligence</li>
              <li>✓ Predictive trend analysis</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="card">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Custom AI Solutions</h3>
            <p className="text-gray-400 mb-4">
              Bespoke AI models and integrations tailored to your unique business 
              processes and competitive advantages.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>✓ Proprietary workflow automation</li>
              <li>✓ Industry-specific solutions</li>
              <li>✓ Scalable architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven four-step process to identify, implement, and optimize 
            automation that delivers measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery Audit",
              desc: "We analyze your workflows to identify high-impact automation opportunities with clear ROI.",
              duration: "1-2 weeks",
            },
            {
              step: "02",
              title: "Strategy & Plan",
              desc: "Custom automation roadmap with prioritized initiatives, timelines, and expected outcomes.",
              duration: "1 week",
            },
            {
              step: "03",
              title: "Implementation",
              desc: "Build, test, and deploy automation solutions with minimal disruption to your operations.",
              duration: "2-6 weeks",
            },
            {
              step: "04",
              title: "Optimize & Scale",
              desc: "Continuous monitoring, refinement, and expansion of automation across your organization.",
              duration: "Ongoing",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-bold text-[#1e293b] mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-3">{item.desc}</p>
              <span className="text-sm text-sky-500 font-medium">{item.duration}</span>
              {i < 3 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 text-[#1e293b]">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-[#0d1117]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the engagement model that fits your needs. All plans include 
            dedicated support and measurable ROI tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 mb-6">Perfect for small teams getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$5,000</span>
              <span className="text-gray-400">/project</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Workflow audit (up to 5 processes)
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                1-2 automation implementations
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Basic integrations
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                30 days support
              </li>
            </ul>
            <a href="#contact" className="btn-secondary w-full block text-center">Get Started</a>
          </div>

          {/* Professional */}
          <div className="card border-sky-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sky-500 to-teal-500 px-4 py-1 rounded-full text-sm font-bold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <p className="text-gray-400 mb-6">For growing businesses ready to scale</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$15,000</span>
              <span className="text-gray-400">/project</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Comprehensive workflow audit
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                3-5 automation implementations
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Advanced integrations & APIs
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                90 days support & optimization
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ROI dashboard & reporting
              </li>
            </ul>
            <a href="#contact" className="btn-primary w-full block text-center">Get Started</a>
          </div>

          {/* Enterprise */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-400 mb-6">Full-scale transformation partnership</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$50,000+</span>
              <span className="text-gray-400">/project</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Organization-wide audit
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Unlimited automation projects
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Custom AI model development
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Dedicated automation team
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Ongoing managed service option
              </li>
            </ul>
            <a href="#contact" className="btn-secondary w-full block text-center">Contact Us</a>
          </div>
        </div>

        {/* Managed Service Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-2">
            Need ongoing support? Our <span className="text-sky-500 font-medium">Managed Automation Service</span> starts at $2,000/month
          </p>
          <p className="text-gray-500 text-sm">
            Includes monitoring, maintenance, continuous optimization, and priority support
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-gray-400 text-lg">
              Book a free 30-minute consultation. We'll discuss your challenges and 
              identify 2-3 high-impact automation opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="card">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-[#1e293b] rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-[#1e293b] rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-[#1e293b] rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">How can we help?</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-[#0a0a0f] border border-[#1e293b] rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition resize-none"
                    placeholder="Tell us about your biggest workflow challenges..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-4">
                  Book Free Consultation
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="font-medium">hello@vitalkai.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Response Time</div>
                      <div className="font-medium">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30-minute discovery call
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    2-3 identified automation opportunities
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Rough ROI estimates for each
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No-pressure consultation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="text-xl font-bold gradient-text">VitalK AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering businesses with intelligent automation solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition">Customer Service</a></li>
                <li><a href="#services" className="hover:text-white transition">Document Processing</a></li>
                <li><a href="#services" className="hover:text-white transition">Workflow Automation</a></li>
                <li><a href="#services" className="hover:text-white transition">Custom AI Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#process" className="hover:text-white transition">Process</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
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
