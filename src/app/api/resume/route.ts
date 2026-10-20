import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Cloudflare's always-pass test secret, used only outside production when no key is configured.
const TEST_SECRET = "1x0000000000000000000000000000000AA";
const RESUME_PATH = path.join(process.cwd(), "private", "Waleed-Ahmad-Resume.pdf");

function getSecret() {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (secret) return secret;
  return process.env.NODE_ENV === "production" ? null : TEST_SECRET;
}

export async function POST(request: Request) {
  const secret = getSecret();
  if (!secret) {
    return NextResponse.json({ error: "Captcha is not configured." }, { status: 500 });
  }

  let token: unknown;
  try {
    ({ token } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (typeof token !== "string" || !token) {
    return NextResponse.json({ error: "Captcha token missing." }, { status: 400 });
  }

  const body = new URLSearchParams({ secret, response: token });
  const ip = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0];
  if (ip) body.append("remoteip", ip.trim());

  const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  const result = (await verify.json()) as { success: boolean };
  if (!result.success) {
    return NextResponse.json({ error: "Captcha verification failed." }, { status: 403 });
  }

  const file = await readFile(RESUME_PATH);
  return new NextResponse(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Waleed-Ahmad-Resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
