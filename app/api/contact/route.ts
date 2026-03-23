import { NextResponse } from "next/server";

/**
 * Zoho CRM custom function expects a JSON body like:
 * { "arguments": "<stringified JSON with your Deluge function param names>" }
 *
 * Set ZOHO_CONTACT_EXECUTE_URL in .env.local to the full execute URL
 * (including auth_type=apikey&zapikey=...) — never commit the real key.
 */
export async function POST(request: Request) {
  const executeUrl = "https://www.zohoapis.ca/crm/v7/functions/websitecontactform/actions/execute?auth_type=apikey&zapikey=1003.74c5a11d6de5761042faccf239c7ee41.41b55642165a17caf2b44cf6b98e22e4";
  if (!executeUrl) {
    const devHint =
      process.env.NODE_ENV === "development"
        ? " Set ZOHO_CONTACT_EXECUTE_URL in .env.local (see .env.example), then restart the dev server."
        : "";
    return NextResponse.json(
      {
        error: `Contact form is not configured.${devHint}`,
      },
      { status: 503 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!json || typeof json !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, message } = json as Record<
    string,
    unknown
  >;

  const fn = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const f = fn(firstName);
  const l = fn(lastName);
  const em = fn(email);
  const ph = fn(phone);
  const msg = fn(message);

  if (!f || !l || !em) {
    return NextResponse.json(
      { error: "First name, last name, and email are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const crmPayload = {
    First_Name: f,
    Last_Name: l,
    Email: em,
    Phone: ph,
    Description: msg,
  };

  const zohoBody = JSON.stringify({
    arguments: JSON.stringify(crmPayload),
  });

  let zohoRes: Response;
  try {
    zohoRes = await fetch(executeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: zohoBody,
    });
  } catch {
    return NextResponse.json(
      { error: "Could not reach the contact service." },
      { status: 502 },
    );
  }

  const text = await zohoRes.text();
  let zohoJson: unknown;
  try {
    zohoJson = JSON.parse(text);
  } catch {
    zohoJson = { raw: text };
  }

  if (!zohoRes.ok) {
    return NextResponse.json(
      {
        error: "The contact service returned an error.",
        details: zohoJson,
      },
      { status: 502 },
    );
  }

  const obj = zohoJson as { code?: string; message?: string };
  if (obj?.code && obj.code !== "success") {
    return NextResponse.json(
      { error: obj.message ?? "Submission was not accepted.", details: zohoJson },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, data: zohoJson });
}
