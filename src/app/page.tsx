import {
  Scan,
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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-[family-name:var(--font-inter)]">
      {/* Header */}
      <header className="flex items-center justify-between h-[72px] px-5 sm:px-12 border-b border-[#1A1A1A]">
        <div className="flex items-center gap-2.5">
          <img src="/punch-logo.png" alt="RISKY" className="w-8 h-8 rounded-md" />
          <span className="font-[family-name:var(--font-anton)] text-[22px] text-white tracking-[0.44px]">
            RISKY
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <a href="#" className="text-[#A1A1AA] text-[15px] font-medium">
            Inloggen
          </a>
          <a
            href="#"
            className="bg-[#DC2626] text-white text-sm font-semibold h-10 px-5 sm:px-6 rounded-full flex items-center justify-center"
          >
            Start nu
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center pt-16 pb-12 px-5 sm:pt-20 sm:pb-16 sm:px-12">
        <div className="flex items-center gap-2 border border-[#333333] rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-[#E53E3E] rounded-full" />
          <span className="text-[#A1A1AA] text-[13px] font-medium">
            LMRA — Last Minute Risk Assessment
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-anton)] text-5xl sm:text-[80px] text-white text-center leading-[1.05] tracking-[-1.6px] max-w-[900px] mt-6 sm:mt-8">
          Veiligheidschecks die w&eacute;l worden ingevuld.
        </h1>
        <p className="text-[#A1A1AA] text-base sm:text-xl leading-[1.6] text-center max-w-[680px] mt-6 sm:mt-8">
          Risky laat je team snel veiligheidschecks (LMRA&apos;s) invullen
          op de werf via QR-code en stem. Jouw inspectielogboek wordt
          automatisch opgebouwd waardoor je altijd klaar bent voor controle.
        </p>

        {/* Phone Mockup */}
        <div className="flex items-center justify-center pt-10 w-full max-w-[1100px]">
          <div className="w-[280px] h-[510px] sm:w-[320px] sm:h-[580px] bg-[#111111] rounded-[32px] border-2 border-[#2A2A2A] overflow-hidden flex flex-col gap-4 pt-10 sm:pt-12 px-4 sm:px-5 pb-4 sm:pb-5">
            <div className="flex flex-col items-center gap-2 w-full">
              <Scan className="w-10 h-10 sm:w-12 sm:h-12 text-[#E53E3E]" />
              <span className="text-white text-base sm:text-lg font-bold text-center">
                LMRA Check
              </span>
              <span className="text-[#71717A] text-xs text-center w-full">
                Station A — Waterzuivering Noord
              </span>
            </div>
            <div className="h-px bg-[#222222] w-full" />
            <div className="flex flex-col gap-3 py-2 w-full">
              <span className="text-[#71717A] text-[11px] font-medium tracking-[1px]">
                Vraag 1 van 5
              </span>
              <span className="text-[#F4F4F5] text-sm sm:text-base font-semibold leading-[1.4] w-full">
                Zijn alle nooduitgangen vrij en bereikbaar?
              </span>
            </div>
            <div className="flex items-center h-[48px] sm:h-[52px] bg-[#1C1C1C] border border-[#333333] rounded-xl px-4 w-full">
              <div className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-[#E53E3E]" />
                <span className="text-[#52525B] text-sm">Tik om te spreken...</span>
              </div>
            </div>
            <div className="flex gap-2 w-full flex-wrap">
              <div className="flex items-center gap-1.5 bg-[#1A2E1A] rounded-lg px-2.5 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="text-[#22C55E] text-[11px] font-semibold">
                  GPS gelogd
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
      <section className="flex flex-col items-center py-16 px-5 sm:py-20 sm:px-12">
        <span className="text-white text-xs font-semibold tracking-[1.8px]">
          HOE HET WERKT
        </span>
        <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-[44px] text-white text-center leading-[1.1] max-w-[500px] mt-4">
          Drie stappen.
          <br />
          Nul papierwerk.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 w-full max-w-[1100px]">
          {[
            {
              num: 1,
              title: "Scan de QR code",
              visual: (
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
              ),
            },
            {
              num: 2,
              title: "Beantwoord de vragenlijst",
              visual: (
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
                            className="w-[3px] rounded-full bg-red-500"
                            style={{ height: `${h}px` }}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-red-500 ml-1">Opnemen...</span>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              num: 3,
              title: "Volg alles op",
              visual: (
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
              ),
            },
            {
              num: 4,
              title: "Rapporteer bij incidenten",
              visual: (
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
              ),
            },
          ].map((step) => (
            <div
              key={step.num}
              className="group flex flex-row rounded-2xl border border-[#222222] bg-[#111111] p-5 sm:p-7 gap-5 sm:gap-6"
            >
              <div className="flex w-1/3 shrink-0 flex-col gap-2">
                <span className="font-[family-name:var(--font-anton)] text-[32px] text-white">
                  {step.num}
                </span>
                <h3 className="text-sm font-medium text-white">{step.title}</h3>
              </div>
              <div className="flex w-2/3 items-center justify-center rounded-xl bg-white p-5 sm:p-6">
                <div className="w-full">{step.visual}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col items-center py-16 px-5 sm:py-20 sm:px-12 bg-[#0F0F0F]">
        <span className="text-white text-xs font-semibold tracking-[1.8px]">
          FUNCTIES
        </span>
        <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-[44px] text-white text-center leading-[1.1] max-w-[600px] mt-4">
          Gebouwd voor de werf.
          <br />
          Beheerd vanuit kantoor.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 w-full max-w-[1100px]">
          {[
            {
              icon: <LayoutTemplate className="w-7 h-7 text-[#E53E3E]" />,
              title: "Template Bibliotheek",
              desc: "Kies uit kant-en-klare LMRA-templates of maak je eigen. Zet ze in seconden live op elke locatie.",
            },
            {
              icon: <MapPin className="w-7 h-7 text-[#E53E3E]" />,
              title: "Automatische Locatie",
              desc: "GPS-co\u00F6rdinaten worden automatisch vastgelegd. Weet precies waar elke check is uitgevoerd.",
            },
            {
              icon: <FileText className="w-7 h-7 text-[#E53E3E]" />,
              title: "Directe Rapporten",
              desc: "Elke LMRA wordt gelogd en is exporteerbaar. CSV, PDF — klaar voor audits en inspecties.",
            },
            {
              icon: <Mic className="w-7 h-7 text-[#E53E3E]" />,
              title: "Spraakgestuurd",
              desc: "Medewerkers spreken hun antwoorden in. Geen getik met vuile handschoenen. Speech-to-text doet de rest.",
            },
            {
              icon: <Settings className="w-7 h-7 text-[#E53E3E]" />,
              title: "Admin Dashboard",
              desc: "Beheer templates, koppel ze aan locaties en monitor naleving. Alles vanuit \u00E9\u00E9n centraal dashboard.",
            },
            {
              icon: <WifiOff className="w-7 h-7 text-[#E53E3E]" />,
              title: "Werkt Offline",
              desc: "Geen bereik op de werf? Geen probleem. Checks worden automatisch gesynchroniseerd zodra er weer verbinding is.",
            },
          ].map((feat) => (
            <div
              key={feat.title}
              className="flex flex-col gap-4 bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-7"
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
      <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-5 py-16 sm:p-20">
        <div className="flex flex-col gap-6 flex-1">
          <span className="text-[#E53E3E] text-xs font-semibold tracking-[1.8px]">
            QR STICKERS
          </span>
          <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-[44px] text-white leading-[1.1] max-w-[500px]">
            Plak het op je helm.
            <br />
            Of je gereedschapskist.
          </h2>
          <div className="flex flex-col gap-3">
            {[
              "Weerbestendig & UV-resistent",
              "Op maat met jouw bedrijfslogo",
              "Elke sticker linkt naar een specifieke checklist",
              "Werkt op helmen, gereedschapskisten, machines",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="w-[18px] h-[18px] text-white shrink-0" />
                <span className="text-[#A1A1AA] text-[15px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-[340px] lg:w-[420px] aspect-square bg-[#111111] border border-[#222222] rounded-3xl flex flex-col items-center justify-center gap-5 shrink-0">
          <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] bg-white rounded-2xl flex flex-col items-center justify-center gap-3 p-4">
            <QrCode className="w-16 h-16 sm:w-20 sm:h-20 text-[#0A0A0A]" />
            <span className="font-[family-name:var(--font-anton)] text-sm sm:text-base text-[#0A0A0A] text-center tracking-[0.5px]">
              RISKY LMRA
            </span>
            <span className="text-[#71717A] text-[11px] text-center">
              Station A-12
            </span>
          </div>
          <span className="text-[#52525B] text-[13px] text-center leading-[1.5]">
            Industrieel vinyl
            <br />
            70mm × 70mm
          </span>
        </div>
      </section>

      {/* Final CTA */}
      <section className="flex flex-col items-center py-20 px-5 sm:py-24 sm:px-12 bg-[#0F0F0F]">
        <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-[48px] text-white text-center leading-[1.1] max-w-[600px]">
          Veiligheid begint voor
          <br />
          de eerste stap.
        </h2>
        <p className="text-[#A1A1AA] text-base sm:text-lg text-center mt-6 sm:mt-8">
          Sluit je aan bij honderden teams die RISKY gebruiken om hun ploegen te beschermen.
        </p>
        <a
          href="#"
          className="bg-[#DC2626] text-white text-base font-semibold h-[52px] px-9 rounded-full flex items-center justify-center mt-6 sm:mt-8"
        >
          Start nu — het is gratis
        </a>
      </section>

      {/* Divider */}
      <div className="h-px bg-[#222222] w-full" />

      {/* Footer */}
      <footer className="flex items-center justify-between h-[72px] px-5 sm:px-12">
        <div className="flex items-center gap-2">
          <img src="/punch-logo.png" alt="RISKY" className="w-6 h-6 rounded" />
          <span className="font-[family-name:var(--font-anton)] text-base text-white tracking-[0.32px]">
            RISKY
          </span>
        </div>
        <span className="text-[#52525B] text-[13px]">
          © 2026 RISKY. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
