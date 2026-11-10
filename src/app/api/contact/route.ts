const recipient = "mhb34000@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Please submit a valid contact form." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Please submit a valid contact form." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  const website = typeof fields.website === "string" ? fields.website.trim() : "";

  if (website) {
    return Response.json({ success: true });
  }

  if (
    !name ||
    name.length > 100 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    !message ||
    message.length > 5000
  ) {
    return Response.json(
      { error: "Enter a valid name, email address, and message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return Response.json(
      { error: "Email delivery is not configured yet. Please contact me by email directly." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: "New portfolio contact form submission",
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return Response.json(
        { error: "Email delivery failed. Please try again or email me directly." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Email delivery failed. Please try again or email me directly." },
      { status: 502 },
    );
  }
}