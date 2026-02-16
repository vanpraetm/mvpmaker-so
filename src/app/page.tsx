import {
  Scan,
  Mic,
  ShieldCheck,
  LayoutTemplate,
  MapPin,
  FileText,
  Settings,
  WifiOff,
  QrCode,
  Check,
  ShoppingCart,
  Clock3,
  User,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-[family-name:var(--font-inter)]">
      {/* Header */}
      <header className="flex items-center justify-between h-[72px] px-12 border-b border-[#1A1A1A]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#E53E3E] rounded-md flex items-center justify-center">
            <Zap className="w-[18px] h-[18px] text-white" />
          </div>
          <span className="font-[family-name:var(--font-anton)] text-[22px] text-white tracking-[0.44px]">
            PUNCH
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-[#A1A1AA] text-[15px] font-medium">
            Log in
          </a>
          <a
            href="#"
            className="bg-[#DC2626] text-white text-sm font-semibold h-10 px-6 rounded-full flex items-center justify-center"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center pt-20 pb-16 px-12">
        <div className="flex items-center gap-2 border border-[#333333] rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-[#E53E3E] rounded-full" />
          <span className="text-[#A1A1AA] text-[13px] font-medium">
            LMRA — Last Minute Risk Assessment
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-anton)] text-[80px] text-white text-center leading-[1.05] tracking-[-1.6px] max-w-[900px] mt-8">
          Scan. Speak. Safe.
        </h1>
        <p className="text-[#A1A1AA] text-xl leading-[1.6] text-center max-w-[680px] mt-8">
          Your crew scans a QR code, answers safety questions by voice, and gets
          back to work. Location, time, and answers — all logged automatically.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <a
            href="#"
            className="bg-[#DC2626] text-white text-base font-semibold h-[52px] px-9 rounded-full flex items-center justify-center"
          >
            Start Free Trial
          </a>
          <a
            href="#"
            className="border border-[#333333] text-[#A1A1AA] text-base font-medium h-[52px] px-9 rounded-full flex items-center justify-center"
          >
            See How It Works
          </a>
        </div>

        {/* Phone Mockup */}
        <div className="flex items-center justify-center pt-10 w-full max-w-[1100px]">
          <div className="w-[320px] h-[580px] bg-[#111111] rounded-[32px] border-2 border-[#2A2A2A] overflow-hidden flex flex-col gap-4 pt-12 px-5 pb-5">
            <div className="flex flex-col items-center gap-2 w-full">
              <Scan className="w-12 h-12 text-[#E53E3E]" />
              <span className="text-white text-lg font-bold text-center">
                LMRA Check
              </span>
              <span className="text-[#71717A] text-xs text-center w-full">
                Station A — Waterzuivering Noord
              </span>
            </div>
            <div className="h-px bg-[#222222] w-full" />
            <div className="flex flex-col gap-3 py-2 w-full">
              <span className="text-[#71717A] text-[11px] font-medium tracking-[1px]">
                Question 1 of 5
              </span>
              <span className="text-[#F4F4F5] text-base font-semibold leading-[1.4] w-full">
                Are all emergency exits clear and accessible?
              </span>
            </div>
            <div className="flex items-center h-[52px] bg-[#1C1C1C] border border-[#333333] rounded-xl px-4 w-full">
              <div className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-[#E53E3E]" />
                <span className="text-[#52525B] text-sm">Tap to speak...</span>
              </div>
            </div>
            <div className="flex gap-2 w-full flex-wrap">
              <div className="flex items-center gap-1.5 bg-[#1A2E1A] rounded-lg px-2.5 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="text-[#22C55E] text-[11px] font-semibold">
                  GPS logged
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#1A2E1A] rounded-lg px-2.5 py-1.5">
                <Clock3 className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="text-[#22C55E] text-[11px] font-semibold">
                  14:32
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#1A2E1A] rounded-lg px-2.5 py-1.5">
                <User className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="text-[#22C55E] text-[11px] font-semibold">
                  Jan D.
                </span>
              </div>
            </div>
            <div className="w-full bg-[#222222] rounded-sm h-1">
              <div className="bg-[#E53E3E] rounded-sm h-1 w-[56px]" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="flex flex-col items-center py-20 px-12">
        <span className="text-white text-xs font-semibold tracking-[1.8px]">
          HOW IT WORKS
        </span>
        <h2 className="font-[family-name:var(--font-anton)] text-[44px] text-white text-center leading-[1.1] max-w-[500px] mt-4">
          Three steps.
          <br />
          Zero paperwork.
        </h2>
        <div className="flex gap-6 pt-10 w-full max-w-[1100px]">
          {[
            {
              num: "01",
              icon: <QrCode className="w-7 h-7 text-white" />,
              title: "Scan the QR code",
              desc: "Every location, machine, or zone gets a unique QR sticker. Workers scan it with their phone — no app download needed.",
            },
            {
              num: "02",
              icon: <Mic className="w-7 h-7 text-white" />,
              title: "Answer by voice",
              desc: "Safety questions appear one by one. Tap the mic and speak your answer. No typing, no forms — just talk.",
            },
            {
              num: "03",
              icon: <ShieldCheck className="w-7 h-7 text-white" />,
              title: "Done. Everything logged.",
              desc: "Location, timestamp, worker ID, and all answers are saved automatically. Reports ready for compliance.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="flex-1 flex flex-col gap-5 bg-[#111111] border border-[#222222] rounded-2xl p-8"
            >
              <span className="font-[family-name:var(--font-anton)] text-[48px] text-[#E53E3E]">
                {step.num}
              </span>
              <div className="w-14 h-14 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl flex items-center justify-center">
                {step.icon}
              </div>
              <span className="text-white text-xl font-bold">{step.title}</span>
              <p className="text-[#71717A] text-[15px] leading-[1.6]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col items-center py-20 px-12 bg-[#0F0F0F]">
        <span className="text-white text-xs font-semibold tracking-[1.8px]">
          FEATURES
        </span>
        <h2 className="font-[family-name:var(--font-anton)] text-[44px] text-white text-center leading-[1.1] max-w-[600px] mt-4">
          Built for the field.
          <br />
          Managed from the office.
        </h2>
        <div className="grid grid-cols-3 gap-6 pt-10 w-full max-w-[1100px]">
          {[
            {
              icon: <LayoutTemplate className="w-7 h-7 text-[#E53E3E]" />,
              title: "Template Library",
              desc: "Choose from ready-made LMRA templates or create your own. Deploy them to any location in seconds.",
            },
            {
              icon: <MapPin className="w-7 h-7 text-[#E53E3E]" />,
              title: "Auto Location",
              desc: "GPS coordinates are captured automatically. Know exactly where each assessment was completed.",
            },
            {
              icon: <FileText className="w-7 h-7 text-[#E53E3E]" />,
              title: "Instant Reports",
              desc: "Every LMRA is logged and exportable. CSV, PDF — ready for audits and compliance reviews.",
            },
            {
              icon: <Mic className="w-7 h-7 text-[#E53E3E]" />,
              title: "Voice-First Input",
              desc: "Workers speak their answers. No typing with dirty gloves. Speech-to-text handles the rest.",
            },
            {
              icon: <Settings className="w-7 h-7 text-[#E53E3E]" />,
              title: "Admin Dashboard",
              desc: "Manage templates, deploy to locations, and monitor compliance. All from one central dashboard.",
            },
            {
              icon: <WifiOff className="w-7 h-7 text-[#E53E3E]" />,
              title: "Works Offline",
              desc: "No signal on site? No problem. Assessments sync automatically when connection returns.",
            },
          ].map((feat) => (
            <div
              key={feat.title}
              className="flex flex-col gap-4 bg-[#111111] border border-[#222222] rounded-2xl p-7"
            >
              {feat.icon}
              <span className="text-white text-[17px] font-bold">
                {feat.title}
              </span>
              <p className="text-[#71717A] text-sm leading-[1.6]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QR Stickers */}
      <section className="flex items-center gap-16 p-20">
        <div className="flex flex-col gap-6 flex-1">
          <span className="text-[#E53E3E] text-xs font-semibold tracking-[1.8px]">
            QR STICKERS
          </span>
          <h2 className="font-[family-name:var(--font-anton)] text-[44px] text-white leading-[1.1] max-w-[500px]">
            Stick it on your helmet.
            <br />
            Or your toolbox.
          </h2>
          <p className="text-[#A1A1AA] text-[17px] leading-[1.7] max-w-[480px]">
            Order branded QR stickers that link directly to your LMRA
            checklists. Weatherproof, industrial-grade, and designed to last.
            Place them anywhere your crew works.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Weatherproof & UV resistant",
              "Custom branded with your company logo",
              "Each sticker links to a specific checklist",
              "Works on helmets, toolboxes, machines",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="w-[18px] h-[18px] text-[#22C55E]" />
                <span className="text-[#A1A1AA] text-[15px]">{item}</span>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="bg-[#DC2626] text-white text-base font-semibold h-12 px-8 rounded-full flex items-center justify-center gap-2.5 w-fit"
          >
            <ShoppingCart className="w-[18px] h-[18px]" />
            Order Stickers
          </a>
        </div>
        <div className="w-[420px] h-[420px] bg-[#111111] border border-[#222222] rounded-3xl flex flex-col items-center justify-center gap-5 shrink-0">
          <div className="w-[200px] h-[200px] bg-white rounded-2xl flex flex-col items-center justify-center gap-3 p-4">
            <QrCode className="w-20 h-20 text-[#0A0A0A]" />
            <span className="font-[family-name:var(--font-anton)] text-base text-[#0A0A0A] text-center tracking-[0.5px]">
              PUNCH LMRA
            </span>
            <span className="text-[#71717A] text-[11px] text-center">
              Station A-12
            </span>
          </div>
          <span className="text-[#52525B] text-[13px] text-center leading-[1.5]">
            Industrial-grade vinyl
            <br />
            70mm × 70mm
          </span>
        </div>
      </section>

      {/* Final CTA */}
      <section className="flex flex-col items-center py-24 px-12 bg-[#0F0F0F]">
        <h2 className="font-[family-name:var(--font-anton)] text-[48px] text-white text-center leading-[1.1] max-w-[600px]">
          Safety starts before
          <br />
          the first step.
        </h2>
        <p className="text-[#A1A1AA] text-lg text-center mt-8">
          Join hundreds of teams using PUNCH LMRA to protect their crews.
        </p>
        <a
          href="#"
          className="bg-[#DC2626] text-white text-base font-semibold h-[52px] px-9 rounded-full flex items-center justify-center mt-8"
        >
          Get Started — It&apos;s Free
        </a>
      </section>

      {/* Divider */}
      <div className="h-px bg-[#222222] w-full" />

      {/* Footer */}
      <footer className="flex items-center justify-between h-[72px] px-12">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#E53E3E] rounded flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-[family-name:var(--font-anton)] text-base text-white tracking-[0.32px]">
            PUNCH
          </span>
        </div>
        <span className="text-[#52525B] text-[13px]">
          © 2026 PUNCH. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
