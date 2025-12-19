import { Resend } from "resend";
import { NextResponse } from "next/server";
import {EMAIL_URL} from "@/lib/costants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { fullName, email, message } = await req.json();

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: [EMAIL_URL],
    subject: `New message from ${fullName}`,
    replyTo: email,
    html: `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
