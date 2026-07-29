"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────
 * PROPOSAL — Shaping Borro's Product Direction (Borro1_26)
 * Cream portfolio styling · Bundl-proposal structure.
 * Accent: navy #0B2B63
 *
 * STRUCTURE
 *   Hero
 *   Overview (the 4 parts)
 *   01 The challenge (Challenge · Objective · Why)
 *   02 Project deliverables (per Track 1/2/3, Bundl cards)
 *   03 Project approach & pricing (approach · timing · pricing)
 *   04 Questions & comments
 * ───────────────────────────────────────────────────── */

// TODO: paste your Cusdis App ID here (cusdis.com → dashboard → your website).
const CUSDIS_APP_ID: string = "46734225-62bc-4b71-b5f8-8be9e9c18d39";

// Edit the proposal date here.
const PROPOSAL_DATE = "July 2026";

// Comments section (Cusdis) temporarily hidden — ad-blockers block the cusdis.com iframe.
// Set to true to bring section 04 back (also un-comment its entry in PARTS below).
const SHOW_COMMENTS = false;

// Blue family used for the three tracks.
const NAVY = "#0B2B63";
const ROYAL = "#1E4FA3";
const SKY = "#3B7DD8";

// Dark gradient for the timing blocks.
const GRADIENT = "linear-gradient(135deg, #0B0D0F 0%, #08224E 100%)";

/* ── Track content (edit freely) ─────────────────────── */

type Output = { img?: string; caption: string; maxW?: number };
type Activity = { text: string; highlight?: boolean };

const TRACKS = [
  {
    n: "01",
    accent: NAVY,
    title: "Discovery & user research",
    subtitle: "Map users, needs and pain points across the full customer journey.",
    duration: "",
    activities: [
      { text: "Service blueprint: with 2 lanes for users, and Borro's service mapped out" },
      { text: "List of Jobs-To-Be-Done (JTBD) per user" },
      { text: "+5 open-ended user interviews with cup owners (B2B)" },
      { text: "+3 open-ended user interviews with operational teams (B2C)" },
      { text: "Opportunity tree with assumptions" },
      { text: "Opportunities mapped on a now → next → later roadmap" },
    ] as Activity[],
    questions: [
      "Who are our users and what are they trying to do?",
      "What's working and what's not, for users and Borro's operations?",
      "Where do the biggest opportunities sit across the journey?",
      "What are the biggest assumptions for each opportunity?",
    ],
    outputs: [
      { img: "/proposals/borro1/t1-blueprint.png", caption: "Example output: service blueprint" },
      { img: "/proposals/borro1/t1-interview-cards.png", caption: "Example output: interview cards" },
    ] as Output[],
  },
  {
    n: "02",
    accent: NAVY,
    title: "Vision Type & Roadmap",
    subtitle:
      "A Vision Type is the first mock-up of your product or product page. It's the starting point of your vision and helps you validate your key assumptions with your customers.",
    tagline: "Build a vision type around the customer portal.",
    duration: "",
    activities: [
      { text: "Map all Jobs-To-Be-Done (JTBD) for the portal" },
      { text: "Build a vision type of the portal" },
      { text: "Validate the prototype with real users" },
      { text: "Validate the key assumptions (things that need to be true, but maybe aren't)" },
    ] as Activity[],
    questions: [
      "What does the user want to achieve?",
      "Which key assumptions are true? Which aren't?",
      "What's the smallest thing we have to build? (Could be an automatic mailflow, or an MCP)",
    ],
    outputs: [
      { img: "/proposals/borro1/t2-prototype.png", caption: "Example output: first Vision Type" },
    ] as Output[],
  },
  {
    n: "03",
    accent: NAVY,
    title: "Continuous feedback (extra)",
    subtitle: "Keep a running feedback loop so your team gets input and the product keeps improving.",
    duration: "",
    activities: [
      { text: "In-tool feedback capturing" },
      { text: "Install PostHog for usage insights" },
      { text: "Create #product-feedback Slack channel + form" },
      { text: "Recurring interviews & automated surveys" },
    ] as Activity[],
    questions: [
      "How do we keep learning from users after the workshop, and create new opportunities?",
      "Which channels give us the fastest, most useful signal?",
    ],
    outputs: [
      { img: "/proposals/borro1/t3-feedback-capture.png", caption: "Example output: In-tool feedback capturing", maxW: 460 },
    ] as Output[],
  },
];

/* ── Overview parts ──────────────────────────────────── */

const PARTS = [
  { n: "01", title: "The challenge" },
  { n: "02", title: "Project deliverables" },
  { n: "03", title: "Project approach & pricing" },
  // { n: "04", title: "Questions & comments" }, // temporarily hidden — Cusdis blocked by ad-blockers
];

export default function BorroProposal() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] font-[family-name:var(--font-inter)] text-[#111111]">
      {/* ───── HERO BANNER (16:9, powerpoint-slide proportions) ───── */}
      <header className="relative w-full overflow-hidden bg-[#0a0a0a] aspect-[16/9] max-h-[76vh] min-h-[460px]">
        <img
          src="/proposals/borro1/cover.jpg"
          alt="Borro reusable cups with card payment"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(11,43,99,0.35) 55%, rgba(10,10,10,0.85) 100%)",
          }}
        />
        <div className="relative h-full max-w-[1100px] mx-auto px-5 sm:px-10 py-8 sm:py-10 flex flex-col">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Back to mvpmaker.so">
              <span className="w-11 h-11 rounded-xl overflow-hidden border border-white/20 shrink-0 group-hover:-translate-y-0.5 transition-transform">
                <img src="/michiel.jpg" alt="Michiel Van Praet" className="w-full h-full object-cover" />
              </span>
              <span className="text-[15px] text-white/80">Michiel Van Praet</span>
            </Link>
            <img
              src="/proposals/borro1/borro-logo-white.png"
              alt="Borro"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </div>

          <div className="mt-auto">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-white text-[40px] sm:text-[72px] font-medium tracking-[-1.8px] leading-[1.02] max-w-[900px]">
              Shaping Borro&apos;s Product Direction
            </h1>
            <div className="mt-5 text-white/70 text-[13px] sm:text-[14px] uppercase tracking-[2px]">
              {PROPOSAL_DATE}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1100px] mx-auto px-5 sm:px-10 pt-20 sm:pt-28 pb-24">
        {/* ───── OVERVIEW (the 4 parts) ───── */}
        <section className="pt-16 sm:pt-24">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[32px] sm:text-[48px] font-medium tracking-[-1px] leading-[1.05] mb-10 sm:mb-14">
            What we&apos;ll cover
          </h2>
          <div>
            {PARTS.map((p) => (
              <div
                key={p.n}
                className="flex items-baseline gap-5 sm:gap-8 py-6 sm:py-7 border-b border-[#EAE7DE]"
              >
                <span
                  className="font-[family-name:var(--font-space-grotesk)] text-[20px] sm:text-[24px] font-semibold shrink-0 w-[42px]"
                  style={{ color: NAVY }}
                >
                  {p.n}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-[22px] sm:text-[28px] font-medium tracking-[-0.5px] leading-[1.15]">
                  {p.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* ───── 01 · THE CHALLENGE ───── */}
        <Section index="01" title="The challenge">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="space-y-10">
              <div>
                <SubLabel accent={NAVY}>The challenge</SubLabel>
                <p className="text-[17px] sm:text-[19px] leading-[1.6]">
                  Borro is looking for a structural way to bring their product experience to the next
                  level. As the product matures, the need for a shared, evidence-based vision becomes
                  clearer.
                </p>
              </div>
              <div>
                <SubLabel accent={NAVY}>The objective</SubLabel>
                <ul className="space-y-4 text-[17px] sm:text-[19px] leading-[1.6]">
                  <ObjectiveItem>
                    Give the team the foundation and ownership they need to make strong, independent
                    product decisions.
                  </ObjectiveItem>
                  <ObjectiveItem>
                    Build a shared product vision, grounded in real user insights, and translate it
                    into a <span className="whitespace-nowrap">now → next → later</span> roadmap.
                  </ObjectiveItem>
                </ul>
              </div>
            </div>

            <div>
              <SubLabel accent={NAVY}>Why it matters</SubLabel>
              <div className="space-y-3">
                <StatCard label="Higher deal values" emoji="💰" accent={NAVY}>
                  Understand where value sits and sell more to the B2B customer.
                </StatCard>
                <StatCard label="Structural way of working" emoji="🧱" accent={ROYAL}>
                  A structural, repeatable way of working that replaces ad-hoc decisions.
                </StatCard>
                <StatCard label="Stronger team vision" emoji="🧭" accent={SKY}>
                  A dev team that makes confident, independent decisions.
                </StatCard>
              </div>
            </div>
          </div>
        </Section>

        {/* ───── 02 · PROJECT DELIVERABLES (per track) ───── */}
        <Section index="02" title="Project deliverables">
          <p className="max-w-[680px] mb-14 text-[17px] sm:text-[19px] leading-[1.6]">
            The work runs across three tracks. For each track, here&apos;s what we do, the questions
            it answers, and example outputs.
          </p>
          <div className="space-y-20 sm:space-y-28">
            {TRACKS.map((t) => (
              <TrackDeliverable key={t.n} track={t} />
            ))}
          </div>
        </Section>

        {/* ───── 03 · APPROACH & PRICING (with timing) ───── */}
        <Section index="03" title="Project approach & pricing">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="space-y-5 text-[17px] sm:text-[19px] leading-[1.6]">
              <p>
                Let&apos;s work out <strong className="text-[#111111]">Track 1</strong> with the team.
                At minimum, we do the customer interviews and map the service blueprint afterwards.
              </p>
              <p>
                Next, we can see how much I can support with Track 2 and 3.
              </p>
            </div>

            <div className="rounded-2xl border border-[#EAE7DE] bg-white p-6 sm:p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-[20px] font-medium mb-4 flex items-center gap-2">
                <span aria-hidden>💬</span> A few things to decide together
              </h3>
              <p className="text-[15px] text-[#6B6B63] leading-[1.6] mb-4">
                The input here shapes the final scope and price:
              </p>
              <ol className="space-y-3 text-[15px] leading-[1.6]">
                <NumberedItem n={1} accent={NAVY}>
                  <strong>How much of the tracks should I facilitate?</strong> I lead Track 1 first,
                  then see how much guidance is needed.
                </NumberedItem>
                <NumberedItem n={2} accent={NAVY}>
                  <strong>How do you see the timeline?</strong> Does the pace below fit, or should we
                  compress or stretch phases?
                </NumberedItem>
                <NumberedItem n={3} accent={NAVY}>
                  <strong>Pricing.</strong> Once the above is clear, I put a concrete price forward.
                </NumberedItem>
              </ol>
            </div>
          </div>

          {/* Timing */}
          <div className="mt-16 sm:mt-20">
            <SubLabel accent={NAVY}>Timing</SubLabel>
            <p className="max-w-[680px] mb-8 text-[16px] sm:text-[17px] leading-[1.6]">
              The three tracks in sequence, with their key deliverables.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {TRACKS.map((t) => (
                <TimingBlock key={t.n} track={t} />
              ))}
            </div>
          </div>
        </Section>

        {/* ───── 04 · QUESTIONS & COMMENTS — temporarily hidden via SHOW_COMMENTS (top of file). ───── */}
        {SHOW_COMMENTS && (
          <Section index="04" title="Questions & comments">
            <p className="mb-6 max-w-[680px] text-[17px] leading-[1.6]">
              Leave your thoughts, questions, or feedback directly below. No account needed.
            </p>
            <Comments />
          </Section>
        )}

        {/* ───── DOWNLOAD ───── */}
        <DownloadButton />
      </main>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-[#EAE7DE]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10 h-[64px] flex items-center justify-between">
          <span className="text-[13px] text-[#6B6B63]">© 2026 Michiel Van Praet</span>
          <Link href="/" className="text-[13px] text-[#6B6B63] hover:text-[#111111] transition-colors">
            mvpmaker.so
          </Link>
        </div>
      </footer>

      <PrintStyles />
    </div>
  );
}

/* ─────────────────────────────────────────────────────
 * DOWNLOAD PDF — triggers the browser print dialog (Save as PDF)
 * ───────────────────────────────────────────────────── */

function DownloadButton() {
  return (
    <div className="no-print pt-12 sm:pt-16 flex justify-start">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-full bg-[#0B2B63] text-white text-[14px] font-medium px-6 py-3"
        aria-label="Download as PDF"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Download PDF
      </button>
    </div>
  );
}

function PrintStyles() {
  return (
    <style>{`
      @media print {
        @page { margin: 12mm; }
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        .no-print { display: none !important; }
        header { max-height: none !important; min-height: 0 !important; aspect-ratio: 16 / 8 !important; }
        main { padding-top: 24px !important; }
        section { padding-top: 32px !important; }
        .break-avoid { break-inside: avoid; }
      }
    `}</style>
  );
}

/* ─────────────────────────────────────────────────────
 * SECTION — 0X + title, left-aligned, generous spacing
 * ───────────────────────────────────────────────────── */

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-28 sm:pt-40">
      <div className="mb-10 sm:mb-14">
        <div
          className="font-[family-name:var(--font-space-grotesk)] text-[15px] font-semibold tracking-[1.5px] mb-3"
          style={{ color: NAVY }}
        >
          {index}
        </div>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-[32px] sm:text-[48px] font-medium tracking-[-1px] leading-[1.05]">
          {title}
        </h2>
      </div>
      <div className="text-[#6B6B63]">{children}</div>
    </section>
  );
}

function ObjectiveItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        className="mt-[11px] h-[6px] w-[6px] rounded-full shrink-0"
        style={{ backgroundColor: NAVY }}
        aria-hidden
      />
      <span>{children}</span>
    </li>
  );
}

function SubLabel({
  accent,
  bar = false,
  children,
}: {
  accent: string;
  bar?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex items-center mb-4 ${bar ? "gap-3" : ""}`}>
      {bar ? (
        <span className="inline-block w-5 h-[2px]" style={{ backgroundColor: accent }} aria-hidden />
      ) : null}
      <span className="text-[13px] font-semibold uppercase tracking-[1.6px] text-[#111111]">
        {children}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
 * CHALLENGE — stat cards
 * ───────────────────────────────────────────────────── */

function StatCard({
  label,
  emoji,
  accent,
  children,
}: {
  label: string;
  emoji: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-[#EAE7DE] rounded-2xl p-5 flex gap-4 items-start shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]">
      <span
        className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[18px]"
        style={{ backgroundColor: `${accent}14` }}
        aria-hidden
      >
        {emoji}
      </span>
      <div>
        <div className="font-[family-name:var(--font-space-grotesk)] text-[16px] font-medium text-[#111111]">
          {label}
        </div>
        <div className="text-[14px] leading-[1.5] mt-0.5">{children}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
 * TRACK DELIVERABLE — Bundl "Our deliverables for this track"
 * ───────────────────────────────────────────────────── */

function TrackDeliverable({
  track,
}: {
  track: {
    n: string;
    accent: string;
    title: string;
    subtitle: string;
    duration: string;
    activities: Activity[];
    questions: string[];
    outputs: Output[];
  };
}) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span
          className="font-[family-name:var(--font-space-grotesk)] text-[13px] font-semibold text-white px-2.5 py-1 rounded-full"
          style={{ backgroundColor: track.accent }}
        >
          Track {track.n}
        </span>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-[24px] sm:text-[30px] font-medium text-[#111111] tracking-[-0.6px] leading-[1.1]">
          {track.title}
        </h3>
        {track.duration ? (
          <span className="text-[13px] text-[#6B6B63] ml-auto whitespace-nowrap">{track.duration}</span>
        ) : null}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        <div>
          <p className="text-[16px] sm:text-[17px] leading-[1.6] mb-5">{track.subtitle}</p>

          <ul className="space-y-2.5 mb-6">
            {track.activities.map((a, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-[1.5]">
                <span
                  className="mt-[7px] h-[7px] w-[7px] rounded-full shrink-0"
                  style={{
                    backgroundColor: a.highlight ? track.accent : "transparent",
                    border: a.highlight ? "none" : "1.5px solid #C9C4B6",
                  }}
                  aria-hidden
                />
                <span className={a.highlight ? "text-[#111111] font-medium" : ""}>{a.text}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl bg-white border border-[#EAE7DE] p-5 sm:p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]">
            <div className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#111111] mb-4">
              Answering the following questions
            </div>
            <ul className="space-y-3">
              {track.questions.map((q, i) => (
                <li key={i} className="flex gap-3 text-[14px] sm:text-[15px] leading-[1.5] text-[#6B6B63]">
                  <CheckIcon color={track.accent} />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          {track.outputs.map((o, i) => (
            <OutputCard key={i} output={o} accent={track.accent} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <span
      className="mt-[2px] shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center"
      style={{ backgroundColor: color }}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="w-[11px] h-[11px]" fill="none" stroke="#fff" strokeWidth={3}>
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function OutputCard({ output, accent }: { output: Output; accent: string }) {
  const [error, setError] = useState(false);
  const showImg = output.img && !error;
  return (
    <figure className="m-0" style={output.maxW ? { maxWidth: output.maxW } : undefined}>
      <figcaption className="text-[12px] italic text-[#6B6B63] mb-2">{output.caption}</figcaption>
      {showImg ? (
        <div className="rounded-2xl overflow-hidden border border-[#EAE7DE] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_28px_rgba(0,0,0,0.06)]">
          <img
            src={output.img}
            alt={output.caption}
            className="w-full h-auto block"
            onError={() => setError(true)}
          />
        </div>
      ) : (
        <div
          className="rounded-2xl border border-dashed flex items-center justify-center min-h-[160px] bg-white"
          style={{ borderColor: `${accent}55` }}
        >
          <span className="text-[13px] text-[#B8B3A5] px-6 text-center leading-relaxed">
            🖼️ Add example output
          </span>
        </div>
      )}
    </figure>
  );
}

/* ─────────────────────────────────────────────────────
 * TIMING BLOCK — colored recap card + deliverables under it
 * ───────────────────────────────────────────────────── */

function TimingBlock({
  track,
}: {
  track: {
    n: string;
    accent: string;
    title: string;
    subtitle: string;
    tagline?: string;
    duration: string;
    activities: Activity[];
  };
}) {
  return (
    <div className="flex flex-col">
      <div className="rounded-2xl p-6 text-white flex flex-col min-h-[200px]" style={{ background: GRADIENT }}>
        <span className="font-[family-name:var(--font-space-grotesk)] text-[15px] font-semibold opacity-70">
          {track.n}
        </span>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-[22px] font-medium leading-[1.15] mt-3">
          {track.title}
        </h3>
        <p className="text-[14px] leading-[1.5] text-white/80 mt-3">{track.tagline ?? track.subtitle}</p>
        {track.duration ? (
          <span className="mt-auto pt-6 text-[13px] font-medium text-white/80">{track.duration}</span>
        ) : null}
      </div>
      <div className="pt-4 px-1">
        <div className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#111111] mb-3">
          Deliverables
        </div>
        <ul className="space-y-2.5">
          {track.activities.map((d, i) => (
            <li key={i} className="flex gap-2.5 text-[14px] leading-[1.5] text-[#6B6B63]">
              <span
                className="mt-[6px] h-[6px] w-[6px] rounded-full shrink-0"
                style={{ backgroundColor: "#08224E" }}
                aria-hidden
              />
              <span>{d.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
 * APPROACH — numbered decision items
 * ───────────────────────────────────────────────────── */

function NumberedItem({
  n,
  accent,
  children,
}: {
  n: number;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <span
        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold text-white"
        style={{ backgroundColor: accent }}
      >
        {n}
      </span>
      <span className="text-[#6B6B63]">{children}</span>
    </li>
  );
}

/* ─────────────────────────────────────────────────────
 * COMMENTS — Cusdis embed (no login / no password)
 * ───────────────────────────────────────────────────── */

function Comments() {
  const [loaded, setLoaded] = useState(false);
  const configured = CUSDIS_APP_ID !== "YOUR_CUSDIS_APP_ID";

  useEffect(() => {
    if (!configured) return;
    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [configured]);

  if (!configured) {
    return (
      <div className="rounded-2xl border border-dashed border-[#EAE7DE] bg-white p-6 text-[14px] text-[#6B6B63] leading-[1.6] max-w-[680px]">
        <strong className="text-[#111111]">Comments not configured yet.</strong> Create a free
        account at <span className="text-[#111111]">cusdis.com</span>, add this site, then paste
        your App ID into <code className="text-[#111111]">CUSDIS_APP_ID</code> at the top of this
        page. The comment box will appear here automatically.
      </div>
    );
  }

  return (
    <div className="w-full max-w-[680px]">
      <style>{`
        #cusdis_thread { width: 100%; }
        #cusdis_thread iframe { width: 100% !important; min-height: 300px; }
      `}</style>
      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id={CUSDIS_APP_ID}
        data-page-id="borro1_26"
        data-page-url="https://www.mvpmaker.so/proposals/Borro1_26"
        data-page-title="Shaping Borro's Product Direction"
      />
      {!loaded ? <p className="text-[13px] text-[#6B6B63] mt-2">Loading comments…</p> : null}
    </div>
  );
}
