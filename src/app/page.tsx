"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────────────────
 * DATA
 * ───────────────────────────────────────────────────── */

const PROJECTS = [
  {
    title: "RISKY",
    tagline: "Veiligheidschecks die wél worden ingevuld.",
    description:
      "LMRA mobile app voor de bouw. Scan QR, beantwoord per stem, automatisch gelogd.",
    href: "/risky",
    logo: "/risky-logo.png",
    status: "Live",
  },
  {
    title: "PUNCH",
    tagline: "Track your trainings, beat your records.",
    description:
      "Boxing & fitness logging app. Simple, fast, with progress over time.",
    href: "https://punch.mvpmaker.so",
    logo: "/punch-logo.png",
    status: "Beta",
  },
  {
    title: "Aidy",
    tagline: "AI agents per vertical, niet algemeen.",
    description:
      "Sector-specifieke AI assistants die de jargon en context al kennen.",
    href: "/aidyalternatives",
    logo: "/aidy/aidy-logo.webp",
    status: "Concept",
  },
];

/* ─────────────────────────────────────────────────────
 * PAGE
 * ───────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-[family-name:var(--font-inter)] text-[#111111]">
      <main className="max-w-[1100px] mx-auto px-5 sm:px-10 pt-10 sm:pt-16 pb-24">
        {/* ───── HERO ───── */}
        <section>
          {/* Profile + greeting row */}
          <div className="flex items-center gap-4 sm:gap-6">
            <LogoBox
              src="/michiel.jpg"
              alt="Michiel Van Praet"
              size={88}
              radius={20}
              fallback="MV"
            />
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-[44px] sm:text-[64px] font-medium tracking-[-1.6px] leading-[1]">
              Hey <span className="inline-block">👋</span> I&apos;m Michiel
            </h1>
          </div>

          {/* Body — bio (left) + Wanna chat (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 mt-14 sm:mt-20">
            {/* LEFT: bio with inline logo boxes */}
            <div className="space-y-7 sm:space-y-9 text-[#6B6B63] text-[20px] sm:text-[22px] leading-[1.5]">
              <BioLine>
                <span>Currently PM at</span>
                <LogoBox
                  src="/o2o-logo.png"
                  alt="o2o bicycle leasing"
                  href="https://o2o.be"
                  fallback="o2o"
                />
                <span>previously at</span>
                <LogoBox
                  src="/bundl-logo.png"
                  alt="bundl"
                  href="https://bundl.com"
                  fallback="bundl"
                />
              </BioLine>

              <BioLine>
                <span>I build apps</span>
                <LogoGroup>
                  <LogoBox
                    src="/risky-logo.png"
                    alt="RISKY"
                    href="/risky"
                    fallback="RISKY"
                  />
                  <LogoBox
                    src="/punch-logo.png"
                    alt="PUNCH"
                    href="https://punch.mvpmaker.so"
                    fallback="PUNCH"
                  />
                  <LogoBox
                    src="/aidy/aidy-logo.webp"
                    alt="Aidy"
                    href="/aidyalternatives"
                    fallback="Aidy"
                  />
                </LogoGroup>
              </BioLine>

              <BioLine>
                <span>and share my journey on</span>
                <LogoGroup>
                  <LogoBox
                    href="https://x.com/michielvanpraet"
                    alt="X"
                    icon={<XIcon />}
                  />
                  <LogoBox
                    href="https://www.linkedin.com/in/michielvanpraet/"
                    alt="LinkedIn"
                    icon={<LinkedInIcon />}
                  />
                </LogoGroup>
              </BioLine>

              <BioLine>
                <span>View my portfolio</span>
                <LogoBox
                  href="/portfolio.pdf"
                  alt="Portfolio PDF"
                  icon={<PdfIcon />}
                />
              </BioLine>
            </div>

            {/* RIGHT: Wanna chat? */}
            <aside className="lg:sticky lg:top-10 lg:self-start">
              <div className="hidden lg:block h-px bg-[#EAE7DE] mb-7" />
              <div className="flex items-center gap-4">
                <span className="text-[#6B6B63] text-[20px]">Wanna chat?</span>
                <LogoBox
                  href="mailto:michiel.van.praet@o2o.be"
                  alt="Gmail"
                  icon={<GmailIcon />}
                />
                <LogoBox
                  href="https://cal.com/michielvanpraet"
                  alt="Cal.com"
                  icon={<CalIcon />}
                />
              </div>
            </aside>
          </div>
        </section>

        {/* ───── PROJECTS ───── */}
        <section id="projects" className="mt-32 sm:mt-40 scroll-mt-8">
          <div className="h-px bg-[#EAE7DE] mb-16" />
          <SectionHeader
            eyebrow="Things I build"
            title="Apps I've shipped"
            description="Side projects and full products. Each one was a real bet — some worked, some taught me something."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>
      </main>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-[#EAE7DE]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10 h-[64px] flex items-center justify-start">
          <span className="text-[13px] text-[#6B6B63]">
            © 2026 Michiel Van Praet
          </span>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
 * LOGO BOX — the core zevi pattern
 * ───────────────────────────────────────────────────── */

function LogoBox({
  src,
  alt,
  href,
  icon,
  size = 56,
  radius = 14,
  fallback,
}: {
  src?: string;
  alt: string;
  href?: string;
  icon?: React.ReactNode;
  size?: number;
  radius?: number;
  fallback?: string;
}) {
  const [imgError, setImgError] = useState(false);

  const content = (
    <div
      className="bg-white border border-[#EAE7DE] flex items-center justify-center overflow-hidden shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
      }}
    >
      {icon ? (
        <div className="flex items-center justify-center w-full h-full p-3">
          {icon}
        </div>
      ) : src && !imgError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-[13px] font-semibold text-[#111111] px-2 text-center leading-tight">
          {fallback || alt}
        </span>
      )}
    </div>
  );

  if (!href) {
    return <span className="inline-block align-middle">{content}</span>;
  }

  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  return (
    <a
      href={href}
      target={isExternal && !href.startsWith("mailto") ? "_blank" : undefined}
      rel={isExternal && !href.startsWith("mailto") ? "noopener noreferrer" : undefined}
      aria-label={alt}
      title={alt}
      className="inline-block align-middle hover:-translate-y-0.5 transition-transform duration-150"
    >
      {content}
    </a>
  );
}

/* ─────────────────────────────────────────────────────
 * BIO LINE — text + inline logo boxes
 * ───────────────────────────────────────────────────── */

function BioLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
 * LOGO GROUP — clustered logo boxes (slight overlap)
 * ───────────────────────────────────────────────────── */

function LogoGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center -space-x-2">{children}</div>;
}

/* ─────────────────────────────────────────────────────
 * BRAND ICONS
 * ───────────────────────────────────────────────────── */

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#111111]" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#0A66C2]" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden>
      <path fill="#4285F4" d="M3 6.5v11A1.5 1.5 0 004.5 19H7V9.345l5 3.75 5-3.75V19h2.5a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0019.5 5H19l-7 5.25L5 5h-.5A1.5 1.5 0 003 6.5z" />
      <path fill="#34A853" d="M3 6.5L12 13l9-6.5V17.5A1.5 1.5 0 0119.5 19H17V9.345l-5 3.75-5-3.75V19H4.5A1.5 1.5 0 013 17.5v-11z" />
      <path fill="#FBBC04" d="M17 9.345V19h2.5a1.5 1.5 0 001.5-1.5v-11L17 9.345z" />
      <path fill="#EA4335" d="M3 6.5v11A1.5 1.5 0 004.5 19H7V9.345L3 6.5z" />
      <path fill="#C5221F" d="M3 6.5l9 6.75 9-6.75A1.5 1.5 0 0019.5 5H4.5A1.5 1.5 0 003 6.5z" />
    </svg>
  );
}

function CalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="3" stroke="#111111" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="#111111" strokeWidth="1.6" />
      <path d="M8 3v4M16 3v4" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" aria-hidden>
      <path
        d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 3v5h5" stroke="#111111" strokeWidth="1.6" strokeLinejoin="round" />
      <text x="12" y="17" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#DC2626">
        PDF
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
 * SECTION HEADER
 * ───────────────────────────────────────────────────── */

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="max-w-[680px]">
      <div className="text-xs font-semibold tracking-[1.8px] text-[#6B6B63] uppercase mb-3">
        {eyebrow}
      </div>
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-medium tracking-[-0.8px] leading-[1.1]">
        {title}
      </h2>
      <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[#6B6B63] mt-3">
        {description}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
 * PROJECT CARD
 * ───────────────────────────────────────────────────── */

function ProjectCard({
  title,
  tagline,
  description,
  href,
  logo,
  status,
}: {
  title: string;
  tagline: string;
  description: string;
  href: string;
  logo: string;
  status: string;
}) {
  const isExternal = href.startsWith("http");
  const [imgError, setImgError] = useState(false);
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex flex-col gap-4 bg-white border border-[#EAE7DE] rounded-2xl p-6 hover:-translate-y-0.5 transition-all"
      style={{
        boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="w-11 h-11 rounded-xl bg-[#F4F1E8] flex items-center justify-center overflow-hidden">
          {imgError ? (
            <span className="text-[11px] font-bold text-[#111111]">{title}</span>
          ) : (
            <img
              src={logo}
              alt={title}
              className="w-8 h-8 object-contain"
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <span className="text-[11px] font-medium tracking-wider uppercase text-[#6B6B63] bg-[#F4F1E8] px-2 py-0.5 rounded-md">
          {status}
        </span>
      </div>
      <div>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-[20px] font-medium tracking-[-0.3px]">
          {title}
        </h3>
        <p className="text-[15px] font-medium text-[#3A3A35] mt-1">{tagline}</p>
      </div>
      <p className="text-[14px] leading-[1.55] text-[#6B6B63]">{description}</p>
      <div className="flex items-center gap-1.5 text-sm font-medium text-[#111111] mt-1 group-hover:gap-2.5 transition-all">
        Open
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </a>
  );
}
