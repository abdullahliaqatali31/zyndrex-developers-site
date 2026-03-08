import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
  budget: z.string().min(1),
  timeline: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const toEmail = process.env.RESEND_TO_EMAIL || "hello@zyndrex.com";

    const { error } = await resend.emails.send({
      from: "Zyndrex Contact Form <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: data.email,
      subject: `New project inquiry from ${data.name} at ${data.company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0A0F1E; color: #F0F4FF; padding: 32px; border-radius: 8px;">
          <h2 style="color: #2D7DFA; margin-bottom: 24px;">New Project Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #8B9AB5; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #F0F4FF; font-weight: 600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8B9AB5; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; color: #F0F4FF;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8B9AB5; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #2D7DFA;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8B9AB5; vertical-align: top;">Budget</td>
              <td style="padding: 10px 0; color: #F0F4FF;">${data.budget}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8B9AB5; vertical-align: top;">Timeline</td>
              <td style="padding: 10px 0; color: #F0F4FF;">${data.timeline}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; padding: 20px; background: #0F1A2E; border-left: 3px solid #2D7DFA; border-radius: 4px;">
            <p style="margin: 0 0 8px; color: #8B9AB5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">What they're building</p>
            <p style="margin: 0; color: #F0F4FF; line-height: 1.6;">${data.message}</p>
          </div>
          
          <p style="margin-top: 24px; color: #8B9AB5; font-size: 12px;">
            Sent via zyndrex.com contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data." },
        { status: 400 }
      );
    }
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
