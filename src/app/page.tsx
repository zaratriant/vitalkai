"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", challenge: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", company: "", challenge: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <main className="min-h-screen">
      {/* ─── NAV ─── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#060608]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
              </div>
              <span className="text-xl font-semibold tracking-tight">VitalK</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-[#8b8b9e] hover:text-white transition-colors">Services</a>
              <a href="#how" className="text-sm text-[#8b8b9e] hover:text-white transition-colors">How It Works</a>
              <a href="#contact" className="text-sm text-white bg-white/10 hover:bg-white/15 border border-white/10 px-5 py-2 rounded-full transition-all">
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 mesh-bg noise overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pulse-glow" style={{ animationDelay: "2s" }} />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-[#8b8b9e]">Now accepting clients for August 2026</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6 fade-in-up" style={{ animationDelay: "0.1s" }}>
            AI that runs your <span className="gradient-text">growth.</span>
            <br />
            So you can run your <span className="gradient-text-blue">business.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg sm:text-xl text-[#8b8b9e] max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up" style={{ animationDelay: "0.2s" }}>
            VitalK replaces costly human tasks — customer outreach, marketing, email engagement,
            sales campaigns, web development — with AI that works 24/7. No headcount. No overhead. Just growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="group relative px-8 py-4 rounded-full font-semibold text-base text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform group-hover:scale-105" />
              <span className="relative flex items-center justify-center gap-2">
                Get Your Free AI Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </a>
            <a href="#services" className="px-8 py-4 rounded-full font-semibold text-base text-white glass glass-hover">
              See What We Do
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-20 fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-xs text-[#5a5a6e] uppercase tracking-widest mb-6">Replaces expensive hires for</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[#8b8b9e] text-sm font-medium">
              <span>Customer Outreach</span>
              <span className="text-[#3a3a45]">•</span>
              <span>Email Marketing</span>
              <span className="text-[#3a3a45]">•</span>
              <span>Sales Campaigns</span>
              <span className="text-[#3a3a45]">•</span>
              <span>Web Development</span>
              <span className="text-[#3a3a45]">•</span>
              <span>Lead Generation</span>
              <span className="text-[#3a3a45]">•</span>
              <span>Content Creation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="max-w-3xl mb-20">
            <p className="text-sm text-indigo-400 font-semibold mb-3 tracking-wider">WHAT WE AUTOMATE</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Every expensive human task.
              <br />
              <span className="text-[#5a5a6e]">Done by AI. For less.</span>
            </h2>
            <p className="text-lg text-[#8b8b9e] leading-relaxed">
              You're not just buying software. You're replacing $60K-$150K in annual salary costs
              with AI that never sleeps, never takes PTO, and never misses a follow-up.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🎯", title: "Customer Outreach", desc: "AI agents that prospect, cold outreach, follow up, and book meetings — across email, LinkedIn, and phone.", stat: "$72K/yr role", stat2: "Replaced" },
              { icon: "📣", title: "Marketing Campaigns", desc: "Full campaign strategy, copy, creative, and execution — launched and optimized by AI. From concept to conversion.", stat: "$85K/yr role", stat2: "Replaced" },
              { icon: "✉️", title: "Email Engagement", desc: "Automated sequences, personalized at scale, triggered by behavior. Nurture flows that convert cold leads to warm.", stat: "$65K/yr role", stat2: "Replaced" },
              { icon: "🌐", title: "Web Development", desc: "AI builds, deploys, and maintains your website. New pages, landing pages, A/B tests — all without a developer.", stat: "$95K/yr role", stat2: "Replaced" },
              { icon: "🚀", title: "Sales Initiatives", desc: "Lead scoring, pipeline management, proposal generation, objection handling scripts — all automated.", stat: "$120K/yr role", stat2: "Replaced" },
              { icon: "✍️", title: "Content & Social", desc: "Blog posts, social media, case studies, newsletters — researched, written, designed, and published by AI.", stat: "$70K/yr role", stat2: "Replaced" },
            ].map((s, i) => (
              <div key={i} className="glass glass-hover rounded-3xl p-8 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{s.icon}</div>
                  <div className="text-right">
                    <div className="text-xs text-[#5a5a6e] line-through">{s.stat}</div>
                    <div className="text-sm font-semibold text-green-400">{s.stat2}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{s.title}</h3>
                <p className="text-[#8b8b9e] leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* ROI bar */}
          <div className="mt-16 glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Total cost replaced: $507K/year</h3>
              <p className="text-[#8b8b9e]">Your cost with VitalK: starting at $2,000/month</p>
            </div>
            <div className="text-5xl font-bold gradient-text">96% savings</div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how" className="py-32 px-6 bg-[#0a0a0e] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-20">
            <p className="text-sm text-indigo-400 font-semibold mb-3 tracking-wider">HOW IT WORKS</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Three steps. <span className="gradient-text-blue">No friction.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Audit", desc: "We analyze your business to identify the 3-5 most expensive, most repetitive human tasks eating your margins. You get a detailed ROI report — free.", time: "Week 1" },
              { num: "02", title: "Deploy", desc: "We build, train, and deploy AI agents tailored to your workflows. They integrate with your existing tools — CRM, email, website, social platforms.", time: "Week 2-4" },
              { num: "03", title: "Scale", desc: "Your AI runs 24/7. We monitor, optimize, and expand. You see real metrics — leads generated, emails sent, deals moved — every month.", time: "Ongoing" },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-7xl font-bold text-white/5 mb-4">{step.num}</div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-[#8b8b9e] leading-relaxed mb-4">{step.desc}</p>
                <div className="inline-flex items-center gap-2 text-sm text-indigo-400 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {step.time}
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-white/10">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ─── */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Get your free <span className="gradient-text">AI Audit</span>
            </h2>
            <p className="text-lg text-[#8b8b9e] max-w-2xl mx-auto">
              30-minute call. We'll identify 3-5 tasks you're paying humans to do that AI can handle better.
              No pressure, no fluff — just real numbers.
            </p>
          </div>

          {formStatus === "success" ? (
            <div className="glass rounded-3xl p-16 text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-3">You're in.</h3>
              <p className="text-[#8b8b9e]">We'll reach out within 24 hours to schedule your audit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#8b8b9e] mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#060608] border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder-[#5a5a6e] focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8b8b9e] mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#060608] border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder-[#5a5a6e] focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8b8b9e] mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#060608] border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder-[#5a5a6e] focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#8b8b9e] mb-2">What's your biggest expense we could automate?</label>
                <textarea
                  required
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  rows={4}
                  className="w-full bg-[#060608] border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder-[#5a5a6e] focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition resize-none"
                  placeholder="We spend $8K/month on a marketing agency and $5K on a cold caller..."
                />
              </div>
              {formStatus === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
                  Something went wrong. Email us at hello@vitalkai.com
                </div>
              )}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="group relative w-full py-4 rounded-full font-semibold text-base text-white overflow-hidden disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform group-hover:scale-105" />
                <span className="relative flex items-center justify-center gap-2">
                  {formStatus === "submitting" ? "Sending..." : "Book My Free AI Audit"}
                  {formStatus !== "submitting" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  )}
                </span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/5 py-12 px-6 bg-[#060608]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">VitalK</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-[#8b8b9e]">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#how" className="hover:text-white transition">How It Works</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="mailto:hello@vitalkai.com" className="hover:text-white transition">hello@vitalkai.com</a>
          </div>
          <p className="text-sm text-[#5a5a6e]">© 2026 VitalK. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}