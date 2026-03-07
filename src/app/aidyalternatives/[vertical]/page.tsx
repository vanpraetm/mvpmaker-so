"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Activity,
  Stethoscope,
  Scale,
  Building2,
  Calendar,
  MessageSquare,
  Shield,
  Clock,
  Users,
  ArrowRight,
  ArrowLeft,
  Mail,
  Check,
  Lock,
  Globe,
  Server,
} from "lucide-react";
import type { ReactNode } from "react";
import { verticals } from "../verticals";

/* ─── Icon map ─── */
const iconMap: Record<string, (cls: string) => ReactNode> = {
  Activity: (cls) => <Activity className={cls} />,
  Stethoscope: (cls) => <Stethoscope className={cls} />,
  Scale: (cls) => <Scale className={cls} />,
  Building2: (cls) => <Building2 className={cls} />,
  Calendar: (cls) => <Calendar className={cls} />,
  MessageSquare: (cls) => <MessageSquare className={cls} />,
  Shield: (cls) => <Shield className={cls} />,
  Clock: (cls) => <Clock className={cls} />,
  Users: (cls) => <Users className={cls} />,
};

/* ─── Signup form ─── */
function SignupForm({
  verticalId,
  buttonBg,
  buttonHover,
}: {
  verticalId: string;
  buttonBg: string;
  buttonHover: string;
}) {
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
        body: JSON.stringify({ email, source: verticalId }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error);
        return;
      }
      setSuccess(true);
    } catch {
      setError("Er ging iets mis. Probeer het later opnieuw.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-green-200 rounded-2xl px-6 py-5 shadow-sm">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <Check className="w-4 h-4 text-green-600" />
        </div>
        <p className="text-green-800 text-sm font-medium">
          Bedankt! We nemen snel contact op via {email}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-lg"
    >
      <div className="flex items-center gap-3 bg-white border border-zinc-200 rounded-xl h-13 px-4 flex-1 shadow-sm focus-within:ring-2 focus-within:ring-zinc-300 transition-all">
        <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Je e-mailadres"
          className="bg-transparent text-zinc-900 text-sm placeholder:text-zinc-400 outline-none flex-1"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`${buttonBg} ${buttonHover} text-white text-sm font-semibold h-13 px-7 rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all duration-200 shrink-0 shadow-md hover:shadow-lg hover:-translate-y-0.5`}
      >
        {loading ? "Even geduld..." : "Start gratis"}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </form>
  );
}

/* ─── Main landing page ─── */
export default function VerticalLandingPage() {
  const params = useParams();
  const slug = params.vertical as string;
  const v = verticals[slug];

  if (!v) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-[family-name:var(--font-inter)]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">
            Pagina niet gevonden
          </h1>
          <Link
            href="/aidyalternatives"
            className="text-zinc-500 text-sm hover:text-zinc-700"
          >
            Terug naar overzicht
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = (name: string, cls: string) =>
    iconMap[name]?.(cls) ?? null;

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-inter)]">
      {/* ══════ Header ══════ */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-5">
          <div className="flex items-center gap-4">
            <Link
              href="/aidyalternatives"
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-zinc-900 text-lg font-bold tracking-tight">
              Aidy
            </span>
            <span
              className={`text-xs font-semibold tracking-wide uppercase ${v.accentColor} ${v.accentBg} ${v.accentBorder} border rounded-full px-2.5 py-0.5`}
            >
              {v.label}
            </span>
          </div>
          <a
            href="#signup"
            className={`${v.buttonBg} ${v.buttonHover} text-white text-sm font-semibold h-9 px-5 rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-md cursor-pointer`}
          >
            Start gratis
          </a>
        </div>
      </header>

      {/* ══════ Hero ══════ */}
      <section className="relative overflow-hidden">
        {/* Gradient blob background */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: v.accentColorHex }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl"
          style={{ background: v.accentColorHex }}
        />

        <div className="relative max-w-5xl mx-auto px-5 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <p
            className={`text-sm font-semibold tracking-widest uppercase ${v.accentColor} mb-5`}
          >
            {v.tagline}
          </p>
          <h1 className="text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-2xl whitespace-pre-line">
            {v.headline}
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
            {v.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#signup"
              className={`${v.buttonBg} ${v.buttonHover} text-white text-base font-semibold h-13 px-8 rounded-xl flex items-center gap-2.5 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer`}
            >
              {v.ctaText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-zinc-400 text-sm mt-2 sm:mt-3.5">
              Gratis starten. Geen creditcard nodig.
            </span>
          </div>
        </div>
      </section>

      {/* ══════ Pain points ══════ */}
      <section className="border-y border-zinc-100 bg-zinc-50/80">
        <div className="max-w-5xl mx-auto px-5 py-16 sm:py-24">
          <p
            className={`text-xs font-semibold tracking-widest uppercase ${v.accentColor} mb-3`}
          >
            Het probleem
          </p>
          <h2 className="text-zinc-900 text-2xl sm:text-4xl font-bold tracking-tight mb-12 max-w-lg">
            Herkenbaar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {v.painPoints.map((pain, i) => (
              <div
                key={pain.title}
                className="group bg-white border border-zinc-200 rounded-2xl p-7 relative transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-zinc-300"
              >
                <div
                  className={`w-9 h-9 rounded-full ${v.accentBg} ${v.accentBorder} border flex items-center justify-center ${v.accentColor} text-sm font-bold mb-5`}
                >
                  {i + 1}
                </div>
                <h3 className="text-zinc-900 text-base font-semibold mb-2.5 leading-snug">
                  {pain.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ How it works ══════ */}
      <section className="max-w-5xl mx-auto px-5 py-16 sm:py-24">
        <p
          className={`text-xs font-semibold tracking-widest uppercase ${v.accentColor} mb-3`}
        >
          Hoe het werkt
        </p>
        <h2 className="text-zinc-900 text-2xl sm:text-4xl font-bold tracking-tight mb-14 max-w-lg">
          In 3 stappen actief
        </h2>

        {/* Step indicators with connecting line */}
        <div className="relative mb-10 hidden sm:block">
          <div className="absolute top-5 left-[16.67%] right-[16.67%] h-0.5 bg-zinc-200" />
          <div className="grid grid-cols-3">
            {v.howItWorks.map((step) => (
              <div key={step.step} className="flex justify-center">
                <div
                  className={`w-10 h-10 rounded-full ${v.accentBg} ${v.accentBorder} border-2 flex items-center justify-center ${v.accentColor} text-sm font-bold relative bg-white z-10`}
                >
                  {step.step}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {v.howItWorks.map((step) => (
            <div key={step.step} className="text-center">
              {/* Mobile step indicator */}
              <div
                className={`w-10 h-10 rounded-full ${v.accentBg} ${v.accentBorder} border flex items-center justify-center ${v.accentColor} text-sm font-bold mb-4 mx-auto sm:hidden`}
              >
                {step.step}
              </div>
              <h3 className="text-zinc-900 text-base font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ Features (Bento Grid) ══════ */}
      <section className="border-y border-zinc-100 bg-zinc-50/80">
        <div className="max-w-5xl mx-auto px-5 py-16 sm:py-24">
          <p
            className={`text-xs font-semibold tracking-widest uppercase ${v.accentColor} mb-3`}
          >
            Wat Aidy doet
          </p>
          <h2 className="text-zinc-900 text-2xl sm:text-4xl font-bold tracking-tight mb-12 max-w-lg">
            Gebouwd voor jouw werkdag
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {v.features.map((feat, i) => (
              <div
                key={feat.title}
                className={`group bg-white border border-zinc-200 rounded-2xl p-7 flex flex-col transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-zinc-300 ${
                  i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${v.accentBg} ${v.accentBorder} border flex items-center justify-center ${v.accentColor} mb-5 transition-transform duration-200 group-hover:scale-110`}
                >
                  {getIcon(feat.iconName, "w-5 h-5")}
                </div>
                <h3 className="text-zinc-900 text-lg font-semibold mb-2">
                  {feat.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Security / Trust ══════ */}
      <section className="max-w-5xl mx-auto px-5 py-16 sm:py-24">
        <div className="text-center mb-12">
          <p
            className={`text-xs font-semibold tracking-widest uppercase ${v.accentColor} mb-3`}
          >
            Veiligheid
          </p>
          <h2 className="text-zinc-900 text-2xl sm:text-4xl font-bold tracking-tight max-w-lg mx-auto">
            Privacy ingebouwd, niet opgeplakt
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Lock className="w-5 h-5" />,
              title: "Data-isolatie",
              desc: "Elke gebruiker krijgt een eigen ge\u00efsoleerde omgeving. Geen gedeelde data.",
            },
            {
              icon: <Shield className="w-5 h-5" />,
              title: "GDPR-compliant",
              desc: "Voldoet aan alle Europese privacywetgeving. Standaard, niet optioneel.",
            },
            {
              icon: <Globe className="w-5 h-5" />,
              title: "Europese hosting",
              desc: "Alle data wordt opgeslagen en verwerkt in Europa. Geen US-servers.",
            },
            {
              icon: <Server className="w-5 h-5" />,
              title: "Encryptie overal",
              desc: "Data versleuteld in transit en at rest. Industriestandaard beveiliging.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-white border border-zinc-200 rounded-2xl p-6 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <div
                className="w-11 h-11 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 mx-auto mb-4 transition-colors duration-200 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900"
              >
                {item.icon}
              </div>
              <h3 className="text-zinc-900 text-sm font-semibold mb-1.5">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ CTA / Signup ══════ */}
      <section id="signup" className="relative overflow-hidden">
        {/* Gradient background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${v.accentColorHex}, transparent 70%), radial-gradient(ellipse at 70% 50%, ${v.accentColorHex}, transparent 70%)`,
          }}
        />
        <div className={`${v.accentBg} border-y ${v.accentBorder}`}>
          <div className="relative max-w-5xl mx-auto px-5 py-16 sm:py-24">
            <div className="max-w-xl">
              <p className={`${v.accentColor} text-sm font-semibold mb-3`}>
                {v.roiLine}
              </p>
              <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {v.ctaText}
              </h2>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                Laat je e-mailadres achter en we helpen je op weg. Gratis
                starten, geen creditcard nodig.
              </p>
              <SignupForm
                verticalId={v.id}
                buttonBg={v.buttonBg}
                buttonHover={v.buttonHover}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════ Footer ══════ */}
      <footer className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 h-auto sm:h-16 px-5 py-4 sm:py-0">
          <div className="flex items-center gap-4">
            <span className="text-zinc-900 text-sm font-semibold">
              Aidy
            </span>
            <Link
              href="/aidyalternatives"
              className="text-zinc-400 text-xs hover:text-zinc-600 transition-colors"
            >
              Alle beroepen bekijken
            </Link>
          </div>
          <span className="text-zinc-400 text-xs">
            Europese hosting. GDPR-compliant. &copy; 2026 StarApps BV.
          </span>
        </div>
      </footer>
    </div>
  );
}
