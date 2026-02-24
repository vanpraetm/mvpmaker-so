import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const VALID_CODES = ["RISKY2026", "EARLYBIRD", "LMRA-BETA"];

export async function POST(request: Request) {
  const { email, code } = await request.json();

  if (!email || !code) {
    return NextResponse.json(
      { error: "E-mailadres en toegangscode zijn verplicht." },
      { status: 400 }
    );
  }

  if (!VALID_CODES.includes(code.toUpperCase())) {
    return NextResponse.json(
      { error: "Ongeldige toegangscode." },
      { status: 403 }
    );
  }

  try {
    await resend.emails.send({
      from: "RISKY <onboarding@resend.dev>",
      to: "vanpreatmichiel@hotmail.com",
      subject: `Nieuwe early access aanmelding: ${email}`,
      html: `
        <h2>Nieuwe early access aanmelding</h2>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Code gebruikt:</strong> ${code}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
