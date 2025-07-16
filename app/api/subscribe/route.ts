import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { email, name, message, interest, phone } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY!;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
    const DATACENTER = API_KEY.split("-")[1]; // Extract 'us22' from 'key-us22'

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          MMERGE7: message,
          PHONE: phone,
          MMERGE8:interest
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.detail || "Mailchimp error" }, { status: 400 });
    }

    return NextResponse.json({ message: "Successfully subscribed", id: data.id }, { status: 201 });
}
