"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Lock,
  Globe,
  Server,
  ArrowRight,
  Mail,
  Check,
  ChevronDown,
} from "lucide-react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/aidy-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "template" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error);
        return;
      }
      setSuccess(true);
    } catch {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex items-center gap-3 border border-[#E8E8E8] px-6 py-4">
        <Check className="w-4 h-4 text-[#22C55E]" />
        <p className="text-[#0D0D0D] text-sm font-[family-name:var(--font-space-grotesk)]">
          Thanks! We&apos;ll reach out at {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-0 w-full max-w-lg">
      <div className="flex items-center gap-3 border border-[#E8E8E8] border-r-0 h-12 px-4 flex-1">
        <Mail className="w-4 h-4 text-[#B0B0B0]" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="bg-transparent text-[#0D0D0D] text-sm font-[family-name:var(--font-space-grotesk)] placeholder:text-[#B0B0B0] outline-none flex-1"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-[#E42313] text-white text-sm font-medium font-[family-name:var(--font-space-grotesk)] h-12 px-6 flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-colors hover:bg-[#c91f10] shrink-0"
      >
        {loading ? "..." : "Get started"}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>
      {error && <p className="text-[#E42313] text-sm mt-1">{error}</p>}
    </form>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E8E8E8]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-[#0D0D0D] text-sm font-medium font-[family-name:var(--font-space-grotesk)]">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#B0B0B0] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-[#7A7A7A] text-sm leading-relaxed pb-5 font-[family-name:var(--font-inter)]">
          {a}
        </p>
      )}
    </div>
  );
}

export default function TemplatePage() {
  const font = "font-[family-name:var(--font-space-grotesk)]";
  const fontBody = "font-[family-name:var(--font-inter)]";

  return (
    <div className={`min-h-screen bg-white ${font}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[60px] px-10">
          <span className="text-[#0D0D0D] text-lg font-semibold tracking-tight">
            Aidy
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[#7A7A7A] text-sm font-medium cursor-pointer hover:text-[#0D0D0D] transition-colors">
              Sign in
            </span>
            <a
              href="#signup"
              className="bg-[#E42313] text-white text-sm font-medium h-9 px-5 flex items-center transition-colors hover:bg-[#c91f10]"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-10 pt-20 pb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#E42313] text-xs font-semibold tracking-widest uppercase">
              Enterprise grade security
            </span>
          </div>
          <h1 className="text-[#0D0D0D] text-5xl lg:text-[64px] font-medium tracking-[-1px] leading-[1.1] max-w-[800px]">
            Your personal AI agent in the cloud
          </h1>
          <p className={`text-[#7A7A7A] text-base mt-6 max-w-xl leading-relaxed ${fontBody}`}>
            Secure, private AI bot hosting for individuals and teams. Every user
            gets their own isolated bot.
          </p>
          <div className="mt-10 flex items-center gap-0">
            <a
              href="#pricing"
              className="text-[#0D0D0D] text-sm font-medium border border-[#E8E8E8] h-12 px-6 flex items-center hover:bg-[#FAFAFA] transition-colors"
            >
              View plans
            </a>
            <a
              href="#signup"
              className="bg-[#E42313] text-white text-sm font-medium h-12 px-6 flex items-center gap-2 hover:bg-[#c91f10] transition-colors"
            >
              Get started for free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className={`mt-12 flex items-center gap-8 text-[#B0B0B0] text-xs ${fontBody}`}>
            <span>Built and hosted in Europe</span>
            <span>Secure infrastructure</span>
            <span>Designed for privacy</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-10 py-20">
          <p className="text-[#E42313] text-xs font-semibold tracking-widest uppercase mb-3">
            How it works
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-14">
            Up and running in minutes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Sign up",
                desc: "Create your account and tell Aidy your name. Your personal bot is ready in seconds.",
              },
              {
                step: "2",
                title: "Your bot is provisioned",
                desc: "Aidy spins up a private, isolated environment just for you. Enterprise-grade security from day one.",
              },
              {
                step: "3",
                title: "Connect your channels",
                desc: "Link Gmail, WhatsApp, Telegram, Discord and more. Aidy works where you already are.",
              },
            ].map((s) => (
              <div key={s.step} className="border border-[#E8E8E8] p-8">
                <div className="w-10 h-10 bg-[#E42313] text-white flex items-center justify-center text-sm font-semibold mb-6">
                  {s.step}
                </div>
                <h3 className="text-[#0D0D0D] text-base font-semibold mb-2">
                  {s.title}
                </h3>
                <p className={`text-[#7A7A7A] text-sm leading-relaxed ${fontBody}`}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-10 py-20">
          <p className="text-[#E42313] text-xs font-semibold tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-4">
            What Aidy can do for you
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-14 ${fontBody}`}>
            A personal AI agent that connects to your tools and works the way
            you do.
          </p>

          {/* Top row: 3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#E8E8E8] mb-8">
            <div className="p-8 border-r border-[#E8E8E8]">
              <h3 className="text-[#0D0D0D] text-lg font-semibold mb-2">
                Your personal AI, always ready
              </h3>
              <p className={`text-[#7A7A7A] text-sm leading-relaxed mb-6 ${fontBody}`}>
                Chat in real time with your own private bot. It remembers
                context and gets smarter over time.
              </p>
              <div className="bg-[#FAFAFA] border border-[#E8E8E8] p-4">
                <p className={`text-[#0D0D0D] text-sm ${fontBody}`}>
                  Good morning! You have 3 unread emails and a meeting at 2pm.
                </p>
              </div>
            </div>
            <div className="p-8 border-r border-[#E8E8E8] flex flex-col items-center text-center">
              <h3 className="text-[#0D0D0D] text-lg font-semibold mb-2">
                Meet Aidy
              </h3>
              <p className={`text-[#7A7A7A] text-sm mb-6 ${fontBody}`}>
                Your personal AI assistant in the cloud
              </p>
              <div className="w-48 h-48 bg-[#FAFAFA] border border-[#E8E8E8] flex items-center justify-center">
                <span className="text-[#B0B0B0] text-xs">Screenshot</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-[#0D0D0D] text-lg font-semibold mb-2">
                Make it yours
              </h3>
              <p className={`text-[#7A7A7A] text-sm leading-relaxed mb-6 ${fontBody}`}>
                Shape your bot&apos;s personality to match your style.
              </p>
              <div className="flex gap-2">
                {["Friendly", "Professional", "Playful"].map((t) => (
                  <span
                    key={t}
                    className="text-[#0D0D0D] text-xs font-medium border border-[#E8E8E8] px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E8E8E8]">
            {[
              {
                title: "Built for teams",
                desc: "Everyone gets their own isolated bot.",
              },
              {
                title: "Adaptive reasoning",
                desc: "Use standard reasoning for speed. Switch to advanced for complex tasks.",
              },
              {
                title: "Your schedule, sorted",
                desc: "Views your calendar and helps manage events.",
              },
              {
                title: "Chat on the go",
                desc: "Reach your bot from your favourite messenger.",
              },
            ].map((f, i) => (
              <div
                key={f.title}
                className={`p-6 ${i < 3 ? "border-r border-[#E8E8E8]" : ""}`}
              >
                <h3 className="text-[#0D0D0D] text-sm font-semibold mb-2">
                  {f.title}
                </h3>
                <p className={`text-[#7A7A7A] text-xs leading-relaxed ${fontBody}`}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-10 py-20">
          <p className="text-[#E42313] text-xs font-semibold tracking-widest uppercase mb-3">
            Built for security
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-4">
            Your data stays yours
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-14 ${fontBody}`}>
            Every bot runs in complete isolation. No shared resources, no data
            mixing, no compromises.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E8E8E8]">
            {[
              {
                icon: <Lock className="w-5 h-5" />,
                title: "Complete isolation",
                desc: "Each user's bot runs in its own secure sandbox. Your data never touches anyone else's infrastructure.",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "AI with standards",
                desc: "Aidy runs on EU infrastructure and is built with strict privacy standards in mind.",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "Encryption everywhere",
                desc: "All data encrypted at rest and in transit. Your API keys and secrets are protected with industry-standard encryption.",
              },
              {
                icon: <Server className="w-5 h-5" />,
                title: "Network security",
                desc: "Default-deny network policies. Your bot only connects to services you explicitly allow.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-8 ${i < 3 ? "border-r border-[#E8E8E8]" : ""}`}
              >
                <div className="w-10 h-10 bg-[#FAFAFA] border border-[#E8E8E8] flex items-center justify-center text-[#0D0D0D] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-[#0D0D0D] text-sm font-semibold mb-2">
                  {item.title}
                </h3>
                <p className={`text-[#7A7A7A] text-xs leading-relaxed ${fontBody}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="#signup"
              className="text-[#E42313] text-sm font-medium inline-flex items-center gap-2 hover:underline"
            >
              Get started for free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-10 py-20">
          <p className="text-[#E42313] text-xs font-semibold tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-4">
            Plans for everyone
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-14 ${fontBody}`}>
            From individuals to enterprises. Everyone gets their own private
            bot.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#E8E8E8]">
            {/* Free */}
            <div className="p-8 border-r border-[#E8E8E8]">
              <p className="text-[#7A7A7A] text-xs mb-1">For personal projects</p>
              <h3 className="text-[#0D0D0D] text-xl font-semibold mb-4">Free</h3>
              <p className="text-[#0D0D0D] text-4xl font-semibold tracking-[-1px] mb-8">
                $0
              </p>
              <ul className={`space-y-3 text-[#7A7A7A] text-sm ${fontBody}`}>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Personal bot
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Pay-as-you-go
                  credits
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Community support
                </li>
              </ul>
              <a
                href="#signup"
                className="mt-8 block text-center text-[#0D0D0D] text-sm font-medium border border-[#E8E8E8] py-3 hover:bg-[#FAFAFA] transition-colors"
              >
                Get started
              </a>
            </div>

            {/* Pro */}
            <div className="p-8 border-r border-[#E8E8E8] bg-[#FAFAFA]">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[#7A7A7A] text-xs">For growing teams</p>
                <span className="text-[#E42313] text-xs font-semibold border border-[#E42313] px-2 py-0.5">
                  Most popular
                </span>
              </div>
              <h3 className="text-[#0D0D0D] text-xl font-semibold mb-4">Pro</h3>
              <p className="text-[#0D0D0D] text-4xl font-semibold tracking-[-1px] mb-8">
                $9<span className="text-[#B0B0B0] text-base font-normal">/mo</span>
              </p>
              <ul className={`space-y-3 text-[#7A7A7A] text-sm ${fontBody}`}>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E42313]" /> Everything in Free
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E42313]" /> Up to 10 members
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E42313]" /> Priority support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E42313]" /> Individual bots per
                  member
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E42313]" /> Custom domains
                </li>
              </ul>
              <a
                href="#signup"
                className="mt-8 block text-center bg-[#E42313] text-white text-sm font-medium py-3 hover:bg-[#c91f10] transition-colors"
              >
                Get started
              </a>
            </div>

            {/* Enterprise */}
            <div className="p-8">
              <p className="text-[#7A7A7A] text-xs mb-1">For large organizations</p>
              <h3 className="text-[#0D0D0D] text-xl font-semibold mb-4">
                Enterprise
              </h3>
              <p className="text-[#0D0D0D] text-2xl font-semibold mb-8">
                Contact us
              </p>
              <ul className={`space-y-3 text-[#7A7A7A] text-sm ${fontBody}`}>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Unlimited members
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Volume discounts
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> SSO / SAML
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Custom SLA
                </li>
              </ul>
              <a
                href="#signup"
                className="mt-8 block text-center text-[#0D0D0D] text-sm font-medium border border-[#E8E8E8] py-3 hover:bg-[#FAFAFA] transition-colors"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[800px] mx-auto px-10 py-20">
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-10">
            Got questions?
          </h2>
          <FAQItem
            q="What is Aidy?"
            a="Aidy is your personal AI agent in the cloud. It connects to your tools, manages your schedule, and handles communication — all from a secure, isolated environment."
          />
          <FAQItem
            q="How does it work?"
            a="Sign up, and Aidy provisions a private bot just for you. Connect your channels (Gmail, WhatsApp, Telegram) and Aidy starts working immediately."
          />
          <FAQItem
            q="Is there a free plan?"
            a="Yes. The free plan includes a personal bot with pay-as-you-go credits and community support. No credit card required."
          />
          <FAQItem
            q="How do credits work?"
            a="Credits are consumed based on usage — messages processed, integrations used, and reasoning complexity. Standard reasoning uses fewer credits than advanced."
          />
          <FAQItem
            q="Where is my data stored?"
            a="All data is stored and processed in Europe on EU infrastructure. Each user gets complete data isolation. No shared resources."
          />
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto px-10 py-20">
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-3">
            Ready to get started?
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-8 ${fontBody}`}>
            Start free. Upgrade any time.
          </p>
          <SignupForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8E8E8]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[60px] px-10">
          <div className="flex items-center gap-6">
            <span className="text-[#0D0D0D] text-sm font-semibold">Aidy</span>
            <div className={`flex items-center gap-4 text-[#7A7A7A] text-xs ${fontBody}`}>
              <Link href="#" className="hover:text-[#0D0D0D] transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-[#0D0D0D] transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-[#0D0D0D] transition-colors">
                Support
              </Link>
            </div>
          </div>
          <span className={`text-[#B0B0B0] text-xs ${fontBody}`}>
            &copy; 2026 StarApps BV
          </span>
        </div>
      </footer>
    </div>
  );
}
