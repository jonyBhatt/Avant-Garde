import { Resend } from "resend";

import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { email, message, subject } = body;
  try {
    const data = await resend.emails.send({
      from: "Avant Garde <onboarding@resend.dev>",
      to: ['jonybhattacharjee886@gmail.com'],
      subject,
      react: EmailTemplate({ message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
