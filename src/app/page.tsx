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
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (res.ok) { setFormStatus("success"); setFormData({ name: "", email: "", company: "", challenge: "" }); }
      else { setFormStatus("error"); }
    } catch { setFormStatus("error"); }
  };

  return (
    <main className="min-h-screen">
      {/* ═══ NAV ═══ */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#050507]/90 backdrop-blur-xl border-b border-[#1a1a24]" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-red-600 rounded-lg blur-md opacity-40 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center border border-red-500/30">
                <span className="text-white font-bold text-lg font-mono">V</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-none">VitalK</span>
              <span className="text-[10px] text-[#4b5563] tracking-wider-2 uppercase font-mono leading-none mt-0.5">AI Automation</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-[#6b7280] hover:text-white transition-colors font-mono uppercase tracking-wider-2">Services</a>
            <a href="#how" className="text-sm text-[#6b7280] hover:text-white transition-colors font-mono uppercase tracking-wider-2">Process</a>
            <a href="#contact" className="text-sm text-white bg-red-600/90 hover:bg-red-600 border border-red-500/30 px-5 py-2 rounded-md transition-all font-mono uppercase tracking-wider-2 text-xs">
              // Initiate
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-30" />
        
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[140px] pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/6 rounded-full blur-[120px] pulse-soft" style={{ animationDelay: "2s" }} />

        {/* Scanline overlay */}
        <div className="absolute inset-0 scanline" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Status bar */}
          <div className="flex items-center justify-center gap-3 mb-10 fade-in-up">
            <div className="flex items-center gap-2 panel rounded-full px-4 py-1.5">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 bg-green-500 rounded-full pulse-ring" />
                <span className="relative w-2 h-2 bg-green-500 rounded-full" />
              </span>
              <span className="text-xs text-[#6b7280] font-mono uppercase tracking-wider-2">System Online — August 2026 Slots Open</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-6 fade-in-up" style={{ animationDelay: "0.1s" }}>
            AI that runs your <span className="gradient-red text-glow-red">growth</span>.
            <br />
            You run your <span className="gradient-cyan text-glow-cyan">business</span>.
          </h1>

          {/* Sub */}
          <p className="text-lg sm:text-xl text-[#6b7280] max-w-3xl mx-auto mb-10 leading-relaxed fade-in-up" style={{ animationDelay: "0.2s" }}>
            VitalK deploys AI systems that replace costly human tasks — customer outreach, marketing campaigns,
            email engagement, sales initiatives, web development. <span className="text-white">24/7 execution. Zero headcount.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="group relative px-8 py-4 rounded-md font-mono text-sm uppercase tracking-wider-2 text-white overflow-hidden transition-all hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                ▶ Request AI Audit
              </span>
            </a>
            <a href="#services" className="px-8 py-4 rounded-md font-mono text-sm uppercase tracking-wider-2 text-white panel panel-hover">
              View Capabilities
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px max-w-4xl mx-auto fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { val: "$507K", label: "Annual Roles Replaced" },
              { val: "96%", label: "Cost Reduction" },
              { val: "24/7", label: "AI Execution" },
              { val: "<48h", label: "Deployment Time" },
            ].map((s, i) => (
              <div key={i} className="panel border-x border-[#1a1a24]/50 px-4 py-6 first:border-l-0 last:border-r-0">
                <div className="text-3xl font-bold font-mono gradient-red mb-1">{s.val}</div>
                <div className="text-xs text-[#4b5563] uppercase tracking-wider-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE DIVIDER ═══ */}
      <div className="border-y border-[#1a1a24] py-4 overflow-hidden bg-[#0a0a0f]">
        <div className="flex marquee whitespace-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 px-6">
              {["Customer Outreach", "Email Marketing", "Sales Campaigns", "Web Development", "Lead Generation", "Content Creation", "Social Media", "Cold Calling", "SEO", "Proposal Writing"].map((item, i) => (
                <span key={i} className="text-sm font-mono uppercase tracking-wider-2 text-[#4b5563] flex items-center gap-12">
                  {item} <span className="text-red-600/40">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-red-600" />
              <span className="text-xs font-mono uppercase tracking-mega text-red-500">01 — Capabilities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
              Every expensive human task.
              <br />
              <span className="text-[#4b5563]">Automated by AI. For less.</span>
            </h2>
            <p className="text-lg text-[#6b7280] mt-6 max-w-2xl leading-relaxed">
              You're not buying software. You're replacing $60K-$150K salary lines with AI that
              never sleeps, never takes PTO, and never misses a follow-up.
            </p>
          </div>

          {/* Service grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a24]">
            {[
              { icon: "◈", title: "Customer Outreach", desc: "AI agents that prospect, cold outreach, follow up, and book meetings across email, LinkedIn, and phone.", cost: "$72K/yr", color: "red" },
              { icon: "▣", title: "Marketing Campaigns", desc: "Full campaign strategy, copy, creative, and execution — launched and optimized by AI. Concept to conversion.", cost: "$85K/yr", color: "cyan" },
              { icon: "✉", title: "Email Engagement", desc: "Automated sequences personalized at scale, triggered by behavior. Nurture flows that convert cold to warm.", cost: "$65K/yr", color: "red" },
              { icon: "⌘", title: "Web Development", desc: "AI builds, deploys, and maintains your website. New pages, landing pages, A/B tests — no developer needed.", cost: "$95K/yr", color: "cyan" },
              { icon: "◆", title: "Sales Initiatives", desc: "Lead scoring, pipeline management, proposal generation, objection handling scripts — all automated.", cost: "$120K/yr", color: "red" },
              { icon: "▤", title: "Content & Social", desc: "Blog posts, social media, case studies, newsletters — researched, written, designed, and published by AI.", cost: "$70K/yr", color: "cyan" },
            ].map((s, i) => (
              <div key={i} className="bg-[#0a0a0f] panel-hover p-8 group relative">
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-3xl ${s.color === "red" ? "text-red-500" : "text-cyan-500"}`}>{s.icon}</div>
                  <div className="text-right">
                    <div className="text-xs text-[#4b5563] line-through font-mono">{s.cost}</div>
                    <div className="text-xs font-mono uppercase tracking-wider-2 text-green-500">REPLACED</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 tracking-tight">{s.title}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{s.desc}</p>
                <div className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 ${s.color === "red" ? "bg-red-600" : "bg-cyan-600"}`} />
              </div>
            ))}
          </div>

          {/* ROI summary */}
          <div className="mt-8 panel rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10" />
            <div className="relative">
              <div className="text-xs font-mono uppercase tracking-mega text-[#4b5563] mb-2">TOTAL ANNUAL REPLACEMENT VALUE</div>
              <h3 className="text-3xl font-bold tracking-tight">$507,000/year in human roles</h3>
              <p className="text-[#6b7280] mt-1">Your cost with VitalK: <span className="text-white font-mono">$2,000/month</span></p>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold gradient-red font-mono">96%</div>
              <div className="text-xs text-[#4b5563] uppercase tracking-wider-2 text-right">savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how" className="py-32 px-6 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-600/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/4 rounded-full blur-[140px]" />

        <div className="max-w-5xl mx-auto relative">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-cyan-600" />
              <span className="text-xs font-mono uppercase tracking-mega text-cyan-500">02 — Deployment</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Three steps. <span className="text-[#4b5563]">No friction.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#1a1a24]">
            {[
              { num: "01", title: "AUDIT", desc: "We analyze your business to identify the 3-5 most expensive, repetitive human tasks eating your margins. You get a detailed ROI report — free.", time: "Week 1" },
              { num: "02", title: "DEPLOY", desc: "We build, train, and deploy AI agents tailored to your workflows. They integrate with your existing tools — CRM, email, website, social.", time: "Week 2-4" },
              { num: "03", title: "SCALE", desc: "Your AI runs 24/7. We monitor, optimize, and expand. You see real metrics — leads generated, emails sent, deals moved — every month.", time: "Ongoing" },
            ].map((step, i) => (
              <div key={i} className="bg-[#0a0a0f] p-8 panel-hover relative">
                <div className="text-6xl font-bold font-mono text-[#1a1a24] mb-2">{step.num}</div>
                <h3 className="text-lg font-semibold tracking-wider-2 uppercase font-mono mb-4 text-white">{step.title}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed mb-4">{step.desc}</p>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider-2 text-red-500">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {step.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/8 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-red-600" />
              <span className="text-xs font-mono uppercase tracking-mega text-red-500">03 — Initiate</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Get your free <span className="gradient-red text-glow-red">AI Audit</span>
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              30-minute call. We'll identify 3-5 tasks you're paying humans to do that AI can handle better.
              No pressure, no fluff — just real numbers.
            </p>
          </div>

          {formStatus === "success" ? (
            <div className="panel rounded-lg p-16 text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 font-mono tracking-tight">// TRANSMISSION RECEIVED</h3>
              <p className="text-[#6b7280]">We'll reach out within 24 hours to schedule your audit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="panel rounded-lg p-8 md:p-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider-2 text-[#4b5563] mb-2">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#050507] border border-[#1a1a24] rounded-md px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition font-mono text-sm"
                    placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider-2 text-[#4b5563] mb-2">Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#050507] border border-[#1a1a24] rounded-md px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition font-mono text-sm"
                    placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider-2 text-[#4b5563] mb-2">Company</label>
                <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#050507] border border-[#1a1a24] rounded-md px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition font-mono text-sm"
                  placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider-2 text-[#4b5563] mb-2">What's your biggest expense we could automate?</label>
                <textarea required value={formData.challenge} onChange={(e) => setFormData({ ...formData, challenge: e.target.value })} rows={4}
                  className="w-full bg-[#050507] border border-[#1a1a24] rounded-md px-4 py-3 text-white placeholder-[#4b5563] focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition font-mono text-sm resize-none"
                  placeholder="We spend $8K/month on a marketing agency and $5K on a cold caller..." />
              </div>
              {formStatus === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-md text-sm font-mono">
                  ERROR: Transmission failed. Email hello@vitalkai.com
                </div>
              )}
              <button type="submit" disabled={formStatus === "submitting"}
                className="group relative w-full py-4 rounded-md font-mono text-sm uppercase tracking-wider-2 text-white overflow-hidden disabled:opacity-50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 group-hover:from-red-500 group-hover:to-orange-600 transition-all" />
                <span className="relative flex items-center justify-center gap-2">
                  {formStatus === "submitting" ? "PROCESSING..." : "▶ Submit AI Audit Request"}
                </span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[#1a1a24] py-12 px-6 bg-[#050507]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center border border-red-500/30">
                <span className="text-white font-bold text-sm font-mono">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight leading-none">VitalK</span>
                <span className="text-[10px] text-[#4b5563] tracking-wider-2 uppercase font-mono leading-none mt-0.5">AI Automation</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider-2 text-[#4b5563]">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#how" className="hover:text-white transition">Process</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="mailto:hello@vitalkai.com" className="hover:text-white transition">hello@vitalkai.com</a>
            </div>
            <p className="text-xs font-mono text-[#4b5563]">© 2026 VitalK // All rights reserved</p>
          </div>
        </div>
      </footer>
    </main>
  );
}