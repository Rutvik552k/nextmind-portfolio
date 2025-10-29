// /app/api/checkout/route.ts
// Example server route for Stripe Checkout (not wired by default).
// 1) `npm i stripe`
// 2) set STRIPE_SECRET_KEY in .env.local
// 3) POST to /api/checkout to create a Checkout Session and return the session URL.

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });
    // const session = await stripe.checkout.sessions.create({
    //   mode: "subscription",
    //   line_items: [{ price: "price_123", quantity: 1 }],
    //   success_url: "https://your-domain.com/success",
    //   cancel_url: "https://your-domain.com/cancel"
    // });
    // return NextResponse.json({ url: session.url });

    return NextResponse.json({ message: "Stripe not configured. See comments in this file." }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}
