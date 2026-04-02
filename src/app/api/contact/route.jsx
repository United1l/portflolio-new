import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey) {
      console.error("CONTACT API ERROR: missing RESEND_API_KEY",resendApiKey);
      return Response.json({ success: false, error: "Missing RESEND_API_KEY" }, { status: 500 });
    }

    if (!contactEmail) {
      console.error("CONTACT API ERROR: missing CONTACT_EMAIL");
      return Response.json({ success: false, error: "Missing CONTACT_EMAIL" }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: contactEmail,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
