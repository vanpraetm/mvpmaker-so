"use client";

import {
  Mic,
  LayoutTemplate,
  MapPin,
  FileText,
  Settings,
  WifiOff,
  QrCode,
  Check,
  Clock3,
  User,
  AlertTriangle,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, type ReactNode } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

/* ─── Animated counter ─── */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, target]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

/* ─── Glow card with mouse-follow spotlight ─── */
function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--spotlight-x", `${x}px`);
    card.style.setProperty("--spotlight-y", `${y}px`);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#0f0f0f] p-6 sm:p-7 transition-all duration-300 hover:border-[#333] cursor-pointer ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 spotlight-gradient" />
      {children}
    </div>
  );
}

/* ─── Step card (How it works) ─── */
function StepCard({
  num,
  title,
  visual,
  delay,
}: {
  num: number;
  title: string;
  visual: ReactNode;
  delay: number;
}) {
  return (
    <BlurFade delay={delay} inView>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group flex flex-row rounded-2xl border border-[#1a1a1a] bg-[#0f0f0f] p-5 sm:p-7 gap-5 sm:gap-6 cursor-pointer hover:border-[#333] transition-colors duration-300"
      >
        <div className="flex w-1/3 shrink-0 flex-col gap-2">
          <span className="font-[family-name:var(--font-anton)] text-[32px] text-white/20 group-hover:text-[#DC2626] transition-colors duration-300">
            {num}
          </span>
          <h3 className="text-sm font-medium text-white">{title}</h3>
        </div>
        <div className="flex w-2/3 items-center justify-center rounded-xl bg-white p-5 sm:p-6">
          <div className="w-full">{visual}</div>
        </div>
      </motion.div>
    </BlurFade>
  );
}

export default function Risky1() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-[family-name:var(--font-inter)] overflow-hidden">
      {/* ══════ Ambient glow behind hero ══════ */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08)_0%,transparent_70%)]" />

      {/* ══════ Header ══════ */}
      <header className="relative z-10 flex items-center justify-between h-[72px] px-5 sm:px-12 border-b border-[#1A1A1A]">
        <div className="flex items-center gap-2.5">
          <img src="/risky-logo.png" alt="Risky" className="h-8" />
          <span className="font-[family-name:var(--font-anton)] text-[22px] text-white tracking-[0.44px]">
            RISKY
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <a href="/early-access" className="text-[#A1A1AA] text-[15px] font-medium hover:text-white transition-colors">
            Inloggen
          </a>
          <a
            href="/early-access"
            className="group relative bg-[#DC2626] text-white text-sm font-semibold h-10 px-5 sm:px-6 rounded-full flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_rgba(220,38,38,0.4)] hover:scale-105 active:scale-95"
          >
            Start nu
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* ══════ Hero ══════ */}
      <section className="relative flex flex-col items-center pt-16 pb-12 px-5 sm:pt-24 sm:pb-16 sm:px-12">
        <BlurFade delay={0}>
          <div className="flex items-center gap-2 border border-[#333333] rounded-full px-4 py-2">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 bg-[#E53E3E] rounded-full" />
              <div className="absolute inset-0 bg-[#E53E3E] rounded-full animate-ping" />
            </div>
            <span className="text-[#A1A1AA] text-[13px] font-medium">
              LMRA — Last Minute Risk Assessment
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={0.15}>
          <h1 className="font-[family-name:var(--font-anton)] text-5xl sm:text-[80px] text-white text-center leading-[1.05] tracking-[-1.6px] max-w-[900px] mt-6 sm:mt-8">
            Veiligheidschecks die{" "}
            <span className="relative inline-block">
              <span className="relative z-10">w&eacute;l</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 sm:h-4 bg-[#DC2626]/30 -rotate-1 rounded-sm" />
            </span>{" "}
            worden ingevuld.
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="text-[#A1A1AA] text-base sm:text-xl leading-[1.6] text-center max-w-[680px] mt-6 sm:mt-8">
            Risky laat je team snel veiligheidschecks (LMRA&apos;s) invullen
            op de werf via QR-code en stem. Jouw inspectielogboek wordt
            automatisch opgebouwd waardoor je altijd klaar bent voor controle.
          </p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-10">
            <a
              href="/early-access"
              className="group relative bg-[#DC2626] text-white text-base font-semibold h-[52px] px-9 rounded-full flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95"
            >
              Start gratis
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <span className="text-[#52525B] text-sm">
              Geen creditcard nodig
            </span>
          </div>
        </BlurFade>

        {/* Phone Mockup */}
        <BlurFade delay={0.55}>
          <div className="flex items-center justify-center pt-10 sm:pt-14 w-full max-w-[1100px]">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
              className="relative"
            >
              {/* Glow behind phone */}
              <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.12)_0%,transparent_70%)] blur-2xl" />
              <div className="relative w-[280px] h-[510px] sm:w-[320px] sm:h-[580px] bg-white rounded-[32px] overflow-hidden flex flex-col p-5 gap-2.5 shadow-2xl shadow-black/50 ring-1 ring-white/10">
                {/* Logo + Steps */}
                <div className="flex flex-col gap-2.5 w-full">
                  <div className="flex items-center gap-2.5">
                    <img src="/risky-logoblack.png" alt="Risky" className="h-7" />
                    <span className="font-[family-name:var(--font-anton)] text-[22px] text-[#111111]">
                      RISKY
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1.5 bg-[#111111] rounded-full px-2.5 py-1">
                      <div className="w-1.5 h-1.5 bg-[#E53E3E] rounded-full" />
                      <span className="text-white text-[10px] font-semibold">STOP</span>
                    </div>
                    <div className="w-1.5 h-1.5 bg-[#D4D4D8] rounded-full" />
                    <span className="text-[#A1A1AA] text-[10px] font-medium">THINK</span>
                    <div className="w-1.5 h-1.5 bg-[#D4D4D8] rounded-full" />
                    <span className="text-[#A1A1AA] text-[10px] font-medium">ACT</span>
                  </div>
                </div>
                <div className="h-[67px] w-full" />
                <div className="flex flex-col gap-2.5 w-full px-1">
                  <span className="text-[#111111] text-lg font-bold leading-[1.35]">
                    Heb ik alle info om mijn taak veilig uit te voeren?
                  </span>
                  <div className="flex gap-2.5 pt-2 w-full">
                    <div className="flex items-center justify-center gap-1.5 bg-[#111111] rounded-xl py-3 flex-1">
                      <Check className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">Ja</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 bg-white border border-[#E5E7EB] rounded-xl py-3 flex-1">
                      <span className="text-[#111111] text-sm">&times;</span>
                      <span className="text-[#111111] text-sm font-semibold">Nee</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between h-[52px] bg-white border border-[#E5E7EB] rounded-xl px-4 w-full mt-3 shadow-sm">
                  <Mic className="w-[18px] h-[18px] text-[#E53E3E]" />
                  <span className="text-[#A1A1AA] text-sm">Tap to speak...</span>
                </div>
                <div className="flex gap-2 w-full">
                  <div className="flex items-center gap-1.5 bg-[#F5F5F5] rounded-full px-2 py-1">
                    <MapPin className="w-3 h-3 text-[#A1A1AA]" />
                    <span className="text-[#71717A] text-[10px] font-medium">GPS gelogd</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#F5F5F5] rounded-full px-2 py-1">
                    <Clock3 className="w-3 h-3 text-[#A1A1AA]" />
                    <span className="text-[#71717A] text-[10px] font-medium">14:32</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#F5F5F5] rounded-full px-2 py-1">
                    <User className="w-3 h-3 text-[#A1A1AA]" />
                    <span className="text-[#71717A] text-[10px] font-medium">Jan D.</span>
                  </div>
                </div>
                <div className="w-full pt-3">
                  <div className="w-full bg-[#F0F0F0] rounded-sm h-1.5">
                    <div className="progress-animate bg-[#E53E3E] rounded-sm h-1.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </BlurFade>
      </section>

      {/* ══════ Social proof bar ══════ */}
      <section className="relative border-y border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-0">
          {[
            { value: 30, suffix: "+", label: "Bedrijven" },
            { value: 2500, suffix: "+", label: "Checks per maand" },
            { value: 98, suffix: "%", label: "Compliance score" },
            { value: 45, suffix: "sec", label: "Gem. invultijd" },
          ].map((stat, i) => (
            <BlurFade key={stat.label} delay={0.1 * i} inView>
              <div className="flex flex-col items-center py-8 sm:py-10 border-r border-[#1A1A1A] last:border-r-0">
                <span className="font-[family-name:var(--font-anton)] text-3xl sm:text-[40px] text-white tracking-tight">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[#52525B] text-sm mt-1">{stat.label}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ══════ How It Works ══════ */}
      <section className="flex flex-col items-center py-16 px-5 sm:py-24 sm:px-12">
        <BlurFade inView>
          <span className="text-[#DC2626] text-xs font-semibold tracking-[1.8px]">
            HOE HET WERKT
          </span>
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-[44px] text-white text-center leading-[1.1] max-w-[500px] mt-4">
            Drie stappen.
            <br />
            Nul papierwerk.
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 w-full max-w-[1100px]">
          <StepCard
            num={1}
            title="Scan de QR code"
            delay={0.15}
            visual={
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-zinc-100 rounded-2xl flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-zinc-800" />
                </div>
                <span className="text-sm font-medium text-zinc-700">Station A-12</span>
                <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium text-zinc-500">
                  <MapPin className="w-3.5 h-3.5" />
                  GPS automatisch gelogd
                </div>
              </div>
            }
          />
          <StepCard
            num={2}
            title="Beantwoord de vragenlijst"
            delay={0.25}
            visual={
              <div className="flex flex-col gap-3 w-full">
                <div className="text-sm font-semibold text-zinc-800">
                  Zijn alle uitgangen vrij?
                </div>
                <div className="rounded-xl bg-red-50 p-3">
                  <div className="mb-2 text-xs text-zinc-400">Spraakantwoord</div>
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-red-500" />
                    <div className="flex items-end gap-[2px]">
                      {[12, 18, 10, 20, 14, 22, 11, 16].map((h, j) => (
                        <div
                          key={j}
                          className="wave-bar w-[3px] rounded-full bg-red-500"
                          style={{ height: `${h}px`, animationDelay: `${j * 0.15}s` }}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-red-500 ml-1">Opnemen...</span>
                  </div>
                </div>
              </div>
            }
          />
          <StepCard
            num={3}
            title="Volg alles op"
            delay={0.35}
            visual={
              <div className="flex flex-col gap-2 w-full">
                {[
                  { label: "Medewerker", value: "Jan D." },
                  { label: "Locatie", value: "Station A-12" },
                  { label: "Tijd", value: "14:32" },
                  { label: "Status", value: "Afgerond" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-1.5 border-b border-zinc-100 last:border-0">
                    <span className="text-xs text-zinc-400">{row.label}</span>
                    <span className="text-xs font-medium text-zinc-700">{row.value}</span>
                  </div>
                ))}
              </div>
            }
          />
          <StepCard
            num={4}
            title="Rapporteer bij incidenten"
            delay={0.45}
            visual={
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="text-xs font-semibold text-red-600">Bijna-ongeval</span>
                </div>
                <div className="text-sm font-semibold text-zinc-800">
                  Stelling niet vastgezet
                </div>
                <div className="text-xs text-zinc-400 leading-[1.5]">
                  &quot;De stelling op niveau 2 was niet geborgd. Meteen gemeld en afgezet.&quot;
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center">
                      <User className="w-3 h-3 text-zinc-500" />
                    </div>
                    <span className="text-[11px] font-medium text-zinc-500">Jan D.</span>
                  </div>
                  <span className="text-[11px] text-zinc-400">Vandaag, 14:47</span>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* ══════ Features (spotlight cards) ══════ */}
      <section className="flex flex-col items-center py-16 px-5 sm:py-24 sm:px-12 relative">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        <div className="relative z-10 w-full max-w-[1100px]">
          <BlurFade inView>
            <span className="text-[#DC2626] text-xs font-semibold tracking-[1.8px]">
              FUNCTIES
            </span>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-[44px] text-white leading-[1.1] max-w-[600px] mt-4">
              Gebouwd voor de werf.
              <br />
              Beheerd vanuit kantoor.
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
            {[
              {
                icon: <LayoutTemplate className="w-6 h-6" />,
                title: "Template Bibliotheek",
                desc: "Kies uit kant-en-klare LMRA-templates of maak je eigen. Zet ze in seconden live op elke locatie.",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Automatische Locatie",
                desc: "GPS-co\u00F6rdinaten worden automatisch vastgelegd. Weet precies waar elke check is uitgevoerd.",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Directe Rapporten",
                desc: "Elke LMRA wordt gelogd en is exporteerbaar. CSV, PDF — klaar voor audits en inspecties.",
              },
              {
                icon: <Mic className="w-6 h-6" />,
                title: "Spraakgestuurd",
                desc: "Medewerkers spreken hun antwoorden in. Geen getik met vuile handschoenen. Speech-to-text doet de rest.",
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Admin Dashboard",
                desc: "Beheer templates, koppel ze aan locaties en monitor naleving. Alles vanuit \u00E9\u00E9n centraal dashboard.",
              },
              {
                icon: <WifiOff className="w-6 h-6" />,
                title: "Werkt Offline",
                desc: "Geen bereik op de werf? Geen probleem. Checks worden automatisch gesynchroniseerd zodra er weer verbinding is.",
              },
            ].map((feat, i) => (
              <BlurFade key={feat.title} delay={0.1 + i * 0.08} inView>
                <SpotlightCard>
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#DC2626]/10 border border-[#DC2626]/20 flex items-center justify-center text-[#E53E3E] transition-all duration-300 group-hover:bg-[#DC2626]/20 group-hover:scale-110">
                      {feat.icon}
                    </div>
                    <span className="text-white text-[17px] font-bold">
                      {feat.title}
                    </span>
                    <p className="text-[#71717A] text-sm leading-[1.6]">
                      {feat.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ QR Stickers ══════ */}
      <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-5 py-16 sm:p-20 max-w-[1200px] mx-auto">
        <BlurFade inView className="flex-1">
          <div className="flex flex-col gap-6">
            <span className="text-[#E53E3E] text-xs font-semibold tracking-[1.8px]">
              QR STICKERS
            </span>
            <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-[44px] text-white leading-[1.1] max-w-[500px]">
              Plak het op je helm.
              <br />
              Of je gereedschapskist.
            </h2>
            <p className="text-[#71717A] text-sm leading-[1.6] max-w-[400px]">
              Genereer unieke QR-codes per locatie of werkpost. Werknemers scannen en starten direct hun veiligheidscheck — zonder app download.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {[
                "Werkt met elke smartphone camera",
                "Unieke code per werkpost of locatie",
                "Bestand tegen weer en slijtage",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#E53E3E]" />
                  </div>
                  <span className="text-[#A1A1AA] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full sm:w-[340px] lg:w-[420px] aspect-square bg-[#111111] border border-[#222222] rounded-3xl flex items-center justify-center overflow-hidden shrink-0 shadow-2xl shadow-black/50"
          >
            <img src="/risky-sticker.png" alt="RISKY QR sticker" className="w-full h-full object-cover rounded-3xl" />
          </motion.div>
        </BlurFade>
      </section>

      {/* ══════ Trust strip ══════ */}
      <section className="border-y border-[#1A1A1A]">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-10 px-5">
          {[
            { icon: <Shield className="w-5 h-5" />, text: "GDPR Compliant" },
            { icon: <Zap className="w-5 h-5" />, text: "99.9% Uptime" },
            { icon: <WifiOff className="w-5 h-5" />, text: "Offline-first" },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-3 text-[#52525B]">
              <div className="text-[#DC2626]/60">{badge.icon}</div>
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ Final CTA ══════ */}
      <section className="relative flex flex-col items-center py-24 px-5 sm:py-32 sm:px-12 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.06)_0%,transparent_70%)]" />
        </div>

        <BlurFade inView>
          <h2 className="relative font-[family-name:var(--font-anton)] text-3xl sm:text-[56px] text-white text-center leading-[1.1] max-w-[700px]">
            Veiligheid begint voor
            <br />
            de eerste stap.
          </h2>
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <p className="relative text-[#71717A] text-base sm:text-lg text-center max-w-[500px] mt-5">
            Start vandaag nog gratis. Zet je eerste LMRA-template live in minder dan 5 minuten.
          </p>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <a
            href="/early-access"
            className="relative group bg-[#DC2626] text-white text-base font-semibold h-[56px] px-10 rounded-full flex items-center justify-center gap-2 mt-8 sm:mt-10 transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95"
          >
            Start nu — het is gratis
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </BlurFade>
      </section>

      {/* ══════ Divider ══════ */}
      <div className="h-px bg-[#1A1A1A] w-full" />

      {/* ══════ Footer ══════ */}
      <footer className="flex items-center justify-between h-[72px] px-5 sm:px-12">
        <div className="flex items-center gap-2">
          <img src="/risky-logo.png" alt="Risky" className="h-6" />
          <span className="font-[family-name:var(--font-anton)] text-base text-white tracking-[0.32px]">
            RISKY
          </span>
        </div>
        <span className="text-[#52525B] text-[13px]">
          &copy; 2026 RISKY. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
