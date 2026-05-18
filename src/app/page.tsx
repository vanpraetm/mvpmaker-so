"use client";

import { Children, useState } from "react";
import { Link as LinkIcon } from "lucide-react";

/* ─────────────────────────────────────────────────────
 * PAGE
 * ───────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] font-[family-name:var(--font-inter)] text-[#111111]">
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-5 sm:px-10 pt-10 sm:pt-16 pb-24">
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

          {/* Body — bio with inline logo boxes */}
          <div className="mt-14 sm:mt-20 max-w-[680px] space-y-7 sm:space-y-9 text-[#6B6B63] text-[20px] sm:text-[22px] leading-[1.5]">
            <BioLine>
              <span>Currently Product Manager at</span>
              <LogoBox
                href="https://www.o2o.be/nl"
                alt="o2o bicycle leasing"
                icon={
                  <img
                    src="/o2ologo.png"
                    alt="o2o bicycle leasing"
                    className="w-full h-full object-contain"
                  />
                }
              />
              <span>previously at</span>
              <LogoBox
                href="https://www.bundl.com/"
                alt="bundl"
                icon={
                  <img
                    src="/Bundllogo.svg"
                    alt="bundl"
                    className="w-full h-full object-contain"
                  />
                }
              />
            </BioLine>

            <BioLine>
              <span>I build apps</span>
              <LogoGroup>
                <LogoBox
                  src="/risky-logored.png"
                  alt="RISKY"
                  href="https://risky.mvpmaker.so"
                  fallback="RISKY"
                  padded
                  description="Safetychecks via QR-code and voice"
                />
                <LogoBox
                  src="/punch-logoblack.png"
                  alt="PUNCH"
                  href="https://punch.mvpmaker.so"
                  fallback="PUNCH"
                  padded
                  description="Track field work across all your sites"
                />
              </LogoGroup>
            </BioLine>

            <BioLine>
              <span>and share my journey on</span>
              <LogoBox
                href="https://www.linkedin.com/in/vanpraetmichiel/"
                alt="LinkedIn"
                icon={<LinkedInIcon />}
              />
            </BioLine>

            <BioLine>
              <span>View my portfolio</span>
              <LogoBox
                href="/michiel-van-praet-portfolio.pdf"
                alt="Portfolio"
                icon={
                  <LinkIcon
                    className="w-full h-full text-[#111111]"
                    strokeWidth={2}
                  />
                }
              />
            </BioLine>

            {/* Wanna chat? — sits as the last bio line */}
            <div className="pt-2">
              <BioLine>
                <span>Wanna chat?</span>
                <LogoGroup>
                  <LogoBox
                    href="mailto:vanpraetmichiel@gmail.com"
                    alt="Mail"
                    icon={
                      <img
                        src="/notionmaillogo.webp"
                        alt="Mail"
                        className="w-full h-full object-contain"
                      />
                    }
                  />
                  <LogoBox
                    href="https://cal.com/michielvanpraet"
                    alt="Cal.com"
                    src="/callogo.svg"
                  />
                </LogoGroup>
              </BioLine>
            </div>
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
  padded = false,
  description,
}: {
  src?: string;
  alt: string;
  href?: string;
  icon?: React.ReactNode;
  size?: number;
  radius?: number;
  fallback?: string;
  padded?: boolean;
  description?: string;
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
          className={
            padded
              ? "w-full h-full object-contain p-2"
              : "w-full h-full object-cover"
          }
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-[13px] font-semibold text-[#111111] px-2 text-center leading-tight">
          {fallback || alt}
        </span>
      )}
    </div>
  );

  const tooltip = description ? (
    <span
      role="tooltip"
      className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3.5 py-2 rounded-xl bg-white text-[#111111] text-[13px] font-medium leading-snug whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10 border border-[#EAE7DE] shadow-[0_2px_6px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
    >
      {description}
    </span>
  ) : null;

  if (!href) {
    return (
      <span className="relative inline-block align-middle group">
        {content}
        {tooltip}
      </span>
    );
  }

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.endsWith(".pdf");

  return (
    <span className="relative inline-block align-middle group">
      <a
      href={href}
      target={isExternal && !href.startsWith("mailto") ? "_blank" : undefined}
      rel={isExternal && !href.startsWith("mailto") ? "noopener noreferrer" : undefined}
      aria-label={alt}
      title={description || alt}
      className="inline-block align-middle hover:-translate-y-0.5 transition-transform duration-150"
    >
      {content}
    </a>
      {tooltip}
    </span>
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
  const items = Children.toArray(children);
  return (
    <div className="flex items-center group/cluster">
      {items.map((child, i) => (
        <div
          key={i}
          className={
            i === 0
              ? "transition-all duration-300 ease-out"
              : "-ml-3 group-hover/cluster:ml-1 transition-all duration-300 ease-out"
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
 * BRAND ICONS
 * ───────────────────────────────────────────────────── */

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#0A66C2]" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

