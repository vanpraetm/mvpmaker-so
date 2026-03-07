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
      <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4">
        <Check className="w-5 h-5 text-green-600 shrink-0" />
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
      <div className="flex items-center gap-3 bg-white border border-zinc-200 rounded-xl h-12 px-4 flex-1 shadow-sm">
        <Mail className="w-4 h-4 text-zinc-400" />
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
        className={`${buttonBg} ${buttonHover} text-white text-sm font-semibold h-12 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-colors shrink-0 shadow-sm`}
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
      <header className="border-b border-zinc-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-5">
          <div className="flex items-center gap-4">
            <Link
              href="/aidyalternatives"
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-zinc-900 text-lg font-bold tracking-tight">
              aidy.bot
            </span>
            <span
              className={`text-xs font-semibold tracking-wide uppercase ${v.accentColor} ${v.accentBg} ${v.accentBorder} border rounded-full px-2.5 py-0.5`}
            >
              {v.label}
            </span>
          </div>
          <a
            href="#signup"
            className={`${v.buttonBg} ${v.buttonHover} text-white text-sm font-semibold h-9 px-5 rounded-full flex items-center gap-2 transition-colors`}
          >
            Start gratis
          </a>
        </div>
      </header>

      {/* ══════ Hero ══════ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(${v.accentColorHex} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-5 pt-16 pb-14 sm:pt-24 sm:pb-20">
          <p
            className={`text-sm font-semibold tracking-widest uppercase ${v.accentColor} mb-4`}
          >
            {v.tagline}
          </p>
          <h1 className="text-zinc-900 text-4xl sm:text-6xl font-bold tracking-tight leading-tight max-w-2xl whitespace-pre-line">
            {v.headline}
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
            {v.subheadline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#signup"
              className={`${v.buttonBg} ${v.buttonHover} text-white text-base font-semibold h-12 px-8 rounded-full flex items-center gap-2 transition-colors shadow-lg`}
            >
              {v.ctaText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-zinc-400 text-sm mt-2 sm:mt-3">
              Gratis starten. Geen creditcard nodig.
            </span>
          </div>
        </div>
      </section>

      {/* ══════ Pain points ══════ */}
      <section className="border-y border-zinc-100 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-5 py-14 sm:py-20">
          <p
            className={`text-xs font-semibold tracking-widest uppercase ${v.accentColor} mb-3`}
          >
            Het probleem
          </p>
          <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold tracking-tight mb-10 max-w-lg">
            Herkenbaar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {v.painPoints.map((pain, i) => (
              <div
                key={pain.title}
                className="bg-white border border-zinc-200 rounded-2xl p-6 relative"
              >
                <span className="text-zinc-200 text-5xl font-bold absolute top-4 right-5">
                  {i + 1}
                </span>
                <h3 className="text-zinc-900 text-base font-semibold mb-2 relative">
                  {pain.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed relative">
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ How it works ══════ */}
      <section className="max-w-5xl mx-auto px-5 py-14 sm:py-20">
        <p
          className={`text-xs font-semibold tracking-widest uppercase ${v.accentColor} mb-3`}
        >
          Hoe het werkt
        </p>
        <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold tracking-tight mb-10 max-w-lg">
          In 3 stappen actief
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {v.howItWorks.map((step) => (
            <div key={step.step} className="relative">
              <div
                className={`w-10 h-10 rounded-full ${v.accentBg} ${v.accentBorder} border flex items-center justify-center ${v.accentColor} text-sm font-bold mb-4`}
              >
                {step.step}
              </div>
              <h3 className="text-zinc-900 text-base font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ Features ══════ */}
      <section className="border-y border-zinc-100 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-5 py-14 sm:py-20">
          <p
            className={`text-xs font-semibold tracking-widest uppercase ${v.accentColor} mb-3`}
          >
            Wat Aidy doet
          </p>
          <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold tracking-tight mb-10 max-w-lg">
            Gebouwd voor jouw werkdag
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {v.features.map((feat) => (
              <div
                key={feat.title}
                className="bg-white border border-zinc-200 rounded-2xl p-6 flex gap-4"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${v.accentBg} ${v.accentBorder} border flex items-center justify-center ${v.accentColor} shrink-0`}
                >
                  {getIcon(feat.iconName, "w-5 h-5")}
                </div>
                <div>
                  <h3 className="text-zinc-900 text-base font-semibold mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Security / Trust ══════ */}
      <section className="max-w-5xl mx-auto px-5 py-14 sm:py-20">
        <p
          className={`text-xs font-semibold tracking-widest uppercase ${v.accentColor} mb-3`}
        >
          Veiligheid
        </p>
        <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold tracking-tight mb-10 max-w-lg">
          Privacy ingebouwd, niet opgeplakt
        </h2>
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
              className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 mx-auto mb-3">
                {item.icon}
              </div>
              <h3 className="text-zinc-900 text-sm font-semibold mb-1">
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
      <section
        id="signup"
        className={`${v.accentBg} border-y ${v.accentBorder}`}
      >
        <div className="max-w-5xl mx-auto px-5 py-14 sm:py-20">
          <p className={`${v.accentColor} text-sm font-semibold mb-2`}>
            {v.roiLine}
          </p>
          <h2 className="text-zinc-900 text-2xl sm:text-4xl font-bold tracking-tight mb-3 max-w-xl">
            {v.ctaText}
          </h2>
          <p className="text-zinc-500 text-sm mb-8 max-w-md">
            Laat je e-mailadres achter en we helpen je op weg. Gratis starten,
            geen creditcard nodig.
          </p>
          <SignupForm
            verticalId={v.id}
            buttonBg={v.buttonBg}
            buttonHover={v.buttonHover}
          />
        </div>
      </section>

      {/* ══════ Footer ══════ */}
      <footer className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 h-auto sm:h-16 px-5 py-4 sm:py-0">
          <div className="flex items-center gap-4">
            <span className="text-zinc-900 text-sm font-semibold">
              aidy.bot
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
