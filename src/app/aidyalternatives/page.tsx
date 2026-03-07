import {
  Activity,
  Stethoscope,
  Scale,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { verticals, verticalOrder } from "./verticals";
import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  Activity: <Activity className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
};

export default function AidyAlternativesHub() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-inter)]">
      {/* Header */}
      <header className="border-b border-zinc-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-5">
          <span className="text-zinc-900 text-lg font-bold tracking-tight">
            aidy.bot
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://aidy.bot"
              className="text-zinc-400 text-sm hover:text-zinc-600 transition-colors"
            >
              Naar aidy.bot
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-5 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-4">
          Aidy voor vrije beroepen
        </p>
        <h1 className="text-zinc-900 text-4xl sm:text-5xl font-bold tracking-tight leading-tight max-w-2xl">
          Jouw AI-assistent.
          <br />
          Gebouwd voor jouw praktijk.
        </h1>
        <p className="text-zinc-500 text-base sm:text-lg mt-5 max-w-xl leading-relaxed">
          Elk vrij beroep heeft een specifiek administratieprobleem. Aidy lost
          het op via WhatsApp, met Europese hosting en GDPR-compliance ingebouwd.
        </p>
      </section>

      {/* Cards grid */}
      <section className="max-w-5xl mx-auto px-5 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {verticalOrder.map((key) => {
            const v = verticals[key];
            return (
              <Link
                key={v.id}
                href={`/aidyalternatives/${v.id}`}
                className={`group relative rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 transition-all duration-200 hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${v.accentBg} ${v.accentBorder} border flex items-center justify-center ${v.accentColor} mb-5`}
                >
                  {icons[v.iconName]}
                </div>
                <h2 className="text-zinc-900 text-xl font-bold mb-2">
                  {v.label}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                  {v.subheadline}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:gap-3 transition-all duration-200">
                  Bekijk landing page
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-5">
          <span className="text-zinc-900 text-sm font-semibold">aidy.bot</span>
          <span className="text-zinc-400 text-xs">
            Europese hosting. GDPR-compliant. Data-isolatie per gebruiker.
          </span>
        </div>
      </footer>
    </div>
  );
}
