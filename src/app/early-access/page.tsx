"use client";

import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
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
      <div className="min-h-screen bg-[#0A0A0A] font-[family-name:var(--font-inter)] flex items-center justify-center px-5">
        <div className="flex flex-col items-center w-full max-w-[400px]">
          <img src="/risky-logo.png" alt="Risky" className="h-12" />
          <span className="font-[family-name:var(--font-anton)] text-[28px] text-white tracking-[0.56px] mt-3">
            RISKY
          </span>
          <h1 className="text-white text-xl font-bold mt-8 text-center">
            Je bent binnen!
          </h1>
          <p className="text-[#71717A] text-[15px] mt-2 text-center">
            We nemen snel contact met je op via {email}.
          </p>
          <a
            href="/"
            className="text-[#52525B] text-sm mt-8"
          >
            Terug naar home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-[family-name:var(--font-inter)] flex items-center justify-center px-5">
      <div className="flex flex-col items-center w-full max-w-[400px]">
        {/* Logo */}
        <img src="/risky-logo.png" alt="Risky" className="h-12" />
        <span className="font-[family-name:var(--font-anton)] text-[28px] text-white tracking-[0.56px] mt-3">
          RISKY
        </span>

        {/* Heading */}
        <h1 className="text-white text-xl font-bold mt-8 text-center">
          Welkom bij de early crew.
        </h1>
        <p className="text-[#71717A] text-[15px] mt-2 text-center">
          Wil je early access?
        </p>
        <a
          href="mailto:info@risky.app"
          className="text-white text-[15px] underline underline-offset-4 mt-1"
        >
          Vraag nu toegang aan
        </a>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full mt-8">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#A1A1AA] text-sm">E-mailadres</label>
            <div className="flex items-center gap-3 bg-[#18181B] border border-[#333333] rounded-xl h-12 px-4">
              <Mail className="w-[18px] h-[18px] text-[#52525B]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Je e-mailadres"
                className="bg-transparent text-white text-sm placeholder:text-[#52525B] outline-none flex-1"
              />
            </div>
          </div>

          {/* Access Code */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#A1A1AA] text-sm">Early access code</label>
            <div className="flex items-center gap-3 bg-[#18181B] border border-[#333333] rounded-xl h-12 px-4">
              <KeyRound className="w-[18px] h-[18px] text-[#52525B]" />
              <input
                type="text"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Je toegangscode"
                className="bg-transparent text-white text-sm placeholder:text-[#52525B] outline-none flex-1"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-[#DC2626] text-sm text-center">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-[#0A0A0A] text-base font-semibold h-12 rounded-full mt-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Even geduld..." : "Unlock RISKY"}
          </button>
        </form>

        {/* Back */}
        <a
          href="/"
          className="text-[#52525B] text-sm mt-6"
        >
          Terug naar home
        </a>
      </div>
    </div>
  );
}
