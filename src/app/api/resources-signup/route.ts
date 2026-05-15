import { Resend } from "resend";
import { NextResponse } from "next/server";

const getResend = () => new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, resource } = await request.json();

  if (!email) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    await getResend().emails.send({
      from: "mvpmaker.so <noreply@mvpmaker.so>",
      to: "vanpraetmichiel@gmail.com",
      subject: `Resource signup [${resource}]: ${email}`,
      html: `
        <h2>New resource signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Resource:</strong> ${resource}</p>
        <p><strong>From:</strong> mvpmaker.so portfolio</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
