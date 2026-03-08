"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  Shield,
  Lock,
  Globe,
  Server,
  ArrowRight,
  Mail,
  Check,
  ChevronDown,
  Users,
  Brain,
  Calendar,
  MessageCircle,
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
      <div className="flex items-center gap-3 bg-[#1a1a1a] rounded-xl px-6 py-4">
        <Check className="w-4 h-4 text-[#22C55E]" />
        <p className="text-white text-sm font-[family-name:var(--font-space-grotesk)]">
          Thanks! We&apos;ll reach out at {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-0 w-full max-w-lg">
      <div className="flex items-center gap-3 bg-[#1a1a1a] rounded-l-xl h-12 px-4 flex-1">
        <Mail className="w-4 h-4 text-[#7A7A7A]" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="bg-transparent text-white text-sm font-[family-name:var(--font-space-grotesk)] placeholder:text-[#7A7A7A] outline-none flex-1"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-[#E42313] text-white text-sm font-medium font-[family-name:var(--font-space-grotesk)] h-12 px-6 flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-colors hover:bg-[#c91f10] shrink-0 rounded-r-xl"
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
    <div className="rounded-xl bg-[#FAFAFA] mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
      >
        <span className="text-[#0D0D0D] text-sm font-medium font-[family-name:var(--font-space-grotesk)]">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#B0B0B0] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-[#7A7A7A] text-sm leading-relaxed px-6 pb-5 font-[family-name:var(--font-inter)]">
          {a}
        </p>
      )}
    </div>
  );
}

function ScrollHeader({ font }: { font: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm shadow-black/5"
          : "bg-white"
      } ${font}`}
    >
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
            className="bg-[#E42313] text-white text-sm font-medium h-9 px-5 flex items-center transition-colors hover:bg-[#c91f10] rounded-xl"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}

export default function TemplatePage() {
  const font = "font-[family-name:var(--font-space-grotesk)]";
  const fontBody = "font-[family-name:var(--font-inter)]";

  return (
    <div className={`min-h-screen bg-white ${font}`}>
      {/* Header */}
      <ScrollHeader font={font} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0D0D0D 1px, transparent 1px), linear-gradient(90deg, #0D0D0D 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-10 pt-24 pb-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E42313] animate-pulse" />
            <span className="text-[#E42313] text-xs font-semibold tracking-widest uppercase">
              Enterprise grade security
            </span>
          </div>
          <h1 className="text-[#0D0D0D] text-5xl lg:text-[72px] font-medium tracking-[-2px] leading-[1.05] max-w-[800px]">
            Your personal AI agent in the cloud
          </h1>
          <p className={`text-[#7A7A7A] text-lg mt-6 max-w-xl leading-relaxed ${fontBody}`}>
            Secure, private AI bot hosting for individuals and teams. Every user
            gets their own isolated bot.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <a
              href="#pricing"
              className="text-[#0D0D0D] text-sm font-medium border border-[#E8E8E8] h-12 px-6 flex items-center hover:bg-[#FAFAFA] transition-colors rounded-xl"
            >
              View plans
            </a>
            <a
              href="#signup"
              className="bg-[#E42313] text-white text-sm font-medium h-12 px-6 flex items-center gap-2 hover:bg-[#c91f10] transition-colors rounded-xl"
            >
              Get started for free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className={`mt-14 flex items-center gap-6 text-[#B0B0B0] text-xs ${fontBody}`}>
            <span className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              Built and hosted in Europe
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" />
              Secure infrastructure
            </span>
            <span className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              Designed for privacy
            </span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p className="text-[#E42313] text-xs font-semibold tracking-widest uppercase mb-3">
            How it works
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-14">
            Up and running in minutes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <div key={s.step} className="rounded-xl shadow-sm shadow-black/5 p-8 bg-white">
                <div className="w-10 h-10 bg-[#E42313] text-white flex items-center justify-center text-sm font-semibold mb-6 rounded-lg">
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

      {/* Features — Bento Grid */}
      <section className="bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-10 py-24">
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

          <BentoGrid className="lg:grid-rows-3">
            {/* Chat — tall left card with mock chat UI */}
            <BentoCard
              name="Your personal AI, always ready"
              description="Chat in real time with your own private bot. It remembers context and gets smarter over time."
              Icon={MessageCircle}
              href="#signup"
              cta="Try it free"
              className="lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2"
              background={
                <div className="absolute right-4 top-4 w-[220px] rounded-xl overflow-hidden opacity-80 transition-opacity duration-300 group-hover:opacity-100 shadow-sm shadow-black/10">
                  <div className="bg-[#0D0D0D] px-3 py-1.5 flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#E42313] flex items-center justify-center">
                      <span className="text-white text-[7px] font-bold">A</span>
                    </div>
                    <span className="text-white text-[10px] font-medium">Aidy</span>
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                  </div>
                  <div className="p-2 space-y-1.5 bg-white">
                    <div className="bg-[#F5F5F5] px-2.5 py-1.5 rounded-lg rounded-tl-none max-w-[85%]">
                      <p className={`text-[#0D0D0D] text-[10px] leading-snug ${fontBody}`}>
                        Good morning! You have 3 unread emails and a meeting at 2pm.
                      </p>
                    </div>
                    <div className="bg-[#E42313] px-2.5 py-1.5 rounded-lg rounded-tr-none max-w-[70%] ml-auto">
                      <p className="text-white text-[10px] leading-snug">Summarize the emails</p>
                    </div>
                    <div className="bg-[#F5F5F5] px-2.5 py-1.5 rounded-lg rounded-tl-none max-w-[85%]">
                      <p className={`text-[#0D0D0D] text-[10px] leading-snug ${fontBody}`}>
                        Done! Here&apos;s your summary...
                      </p>
                    </div>
                  </div>
                </div>
              }
            />

            {/* Personality — top center */}
            <BentoCard
              name="Make it yours"
              description="Shape your bot's personality to match your style."
              Icon={Brain}
              href="#signup"
              cta="Get started"
              className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
              background={
                <div className="absolute right-4 top-4 flex gap-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  {["Friendly", "Professional", "Playful"].map((t) => (
                    <span
                      key={t}
                      className="text-[#0D0D0D] text-[10px] font-medium bg-white shadow-sm shadow-black/5 rounded-lg px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              }
            />

            {/* Teams — bottom center */}
            <BentoCard
              name="Built for teams"
              description="Everyone gets their own isolated bot. Invite members, manage access."
              Icon={Users}
              href="#pricing"
              cta="View plans"
              className="lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4"
              background={<div />}
            />

            {/* Calendar — top right */}
            <BentoCard
              name="Your schedule, sorted"
              description="Views your calendar and helps manage events."
              Icon={Calendar}
              href="#signup"
              cta="Connect calendar"
              className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
              background={<div />}
            />

            {/* Adaptive reasoning — bottom right tall */}
            <BentoCard
              name="Adaptive reasoning"
              description="Use standard reasoning for speed. Switch to advanced for complex tasks."
              Icon={Brain}
              href="#signup"
              cta="Learn more"
              className="lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4"
              background={<div />}
            />
          </BentoGrid>
        </div>
      </section>

      {/* Security */}
      <section className="bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p className="text-[#E42313] text-xs font-semibold tracking-widest uppercase mb-3">
            Built for security
          </p>
          <h2 className="text-white text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-4">
            Your data stays yours
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-14 ${fontBody}`}>
            Every bot runs in complete isolation. No shared resources, no data
            mixing, no compromises.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-[#1a1a1a] rounded-xl"
              >
                <div className="w-10 h-10 bg-[#252525] flex items-center justify-center text-[#E42313] mb-4 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-white text-sm font-semibold mb-2">
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
      <section id="pricing">
        <div className="max-w-[1280px] mx-auto px-10 py-24">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Free */}
            <div className="p-8 rounded-xl shadow-sm shadow-black/5 bg-white">
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
                className="mt-8 block text-center text-[#0D0D0D] text-sm font-medium border border-[#E8E8E8] py-3 hover:bg-[#FAFAFA] transition-colors rounded-xl"
              >
                Get started
              </a>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-xl shadow-md shadow-black/10 bg-white ring-2 ring-[#E42313]/10 relative">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[#7A7A7A] text-xs">For growing teams</p>
                <span className="text-[#E42313] text-xs font-semibold bg-[#E42313]/10 rounded-full px-3 py-0.5">
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
                className="mt-8 block text-center bg-[#E42313] text-white text-sm font-medium py-3 hover:bg-[#c91f10] transition-colors rounded-xl"
              >
                Get started
              </a>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-xl shadow-sm shadow-black/5 bg-white">
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
                className="mt-8 block text-center text-[#0D0D0D] text-sm font-medium border border-[#E8E8E8] py-3 hover:bg-[#FAFAFA] transition-colors rounded-xl"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-[800px] mx-auto px-10 py-24">
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
      <section id="signup" className="relative bg-[#0D0D0D] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-10 py-24">
          <div className="max-w-xl">
            <h2 className="text-white text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-3">
              Ready to get started?
            </h2>
            <p className={`text-[#7A7A7A] text-base mb-8 ${fontBody}`}>
              Start free. No credit card required. Upgrade any time.
            </p>
            <SignupForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
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
