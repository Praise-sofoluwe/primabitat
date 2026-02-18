// import { auth } from "@/lib/auth";
// import { toNextJsHandler } from "better-auth/next-js";
// import { NextRequest, NextResponse } from "next/server";
// import aj, { protectSignup } from "@/lib/arcjet";

// const handler = toNextJsHandler(auth);

// export const POST = async (req: NextRequest) => {
//   // 1. CLONE THE REQUEST
//   // We do this so we can read the email for Arcjet,
//   // and Better Auth can still read it afterward.
//   const clonedReq = req.clone();
//   let email: string = "";

//   try {
//     const body = await clonedReq.json();
//     email = body.email || "";
//   } catch (error) {
//     console.debug("Non-JSON signup body", error);
//   }

//   // 2. APPLY THE ALGORITHM & SECURITY
//   const decision = await aj
//     .withRule(
//       protectSignup({
//         // EMAIL LOGIC: Denies fakes, disposables, and bad domains
//         email: {
//           mode: "LIVE",
//           deny: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
//         },
//         // BOT LOGIC: Block automated scripts
//         bots: {
//           mode: "LIVE",
//           deny: ["CATEGORY:TOOL", "CATEGORY:AI"],
//         },
//         // THE ALGORITHM: Sliding Window
//         // This moves with time, providing much smoother protection than fixed blocks.
//         rateLimit: {
//           mode: "LIVE",
//           interval: "1m",
//           max: 5, // 5 attempts per minute
//         },
//       }),
//     )
//     // FIXING THE RED LINE: Explicitly passing email and fingerprint
//     // satisfies the TypeScript requirements you were seeing.
//     .protect(req, { email });

//   // 3. DECISION HANDLING
//   if (decision.isDenied()) {
//     if (decision.reason.isEmail()) {
//       return NextResponse.json(
//         { message: "Please use a valid, non-disposable email." },
//         { status: 400 },
//       );
//     }
//     if (decision.reason.isRateLimit()) {
//       return NextResponse.json(
//         { message: "Too many attempts. Try again in a minute." },
//         { status: 429 },
//       );
//     }
//     return NextResponse.json({ message: "Forbidden" }, { status: 403 });
//   }

//   // 4. HANDOFF: If security passes, Better Auth takes over
//   return handler.POST(req);
// };

// export const GET = handler.GET;

import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";
import aj, { protectSignup } from "@/lib/arcjet";

const handler = toNextJsHandler(auth);
export const POST = async (req: NextRequest) => {
  const clonedReq = req.clone();
  let email = "";

  try {
    const body = await clonedReq.json();
    email = body.email || "";
  } catch {
    // OAuth requests won't have JSON — that's OK
  }

  // If NO email → it's OAuth → skip Arcjet signup protection
  if (!email) {
    return handler.POST(req);
  }

  const devIp =
    process.env.NODE_ENV === "development" ? "8.8.8.8" : undefined;

  const decision = await aj
    .withRule(
      protectSignup({
        email: {
          mode: "LIVE",
          deny: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
        },
        bots: {
          mode: "LIVE",
          deny: ["CATEGORY:TOOL", "CATEGORY:AI", "CATEGORY:MONITOR"],
        },
        rateLimit: {
          mode: "LIVE",
          interval: "1m",
          max: 5,
        },
      }),
    )
   .protect(Object.assign(req, { ip: devIp }), { email });

  if (decision.isDenied()) {
    if (decision.reason.isEmail()) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  return handler.POST(req);
};


export const GET = handler.GET;


// export const POST = async (req: NextRequest) => {
//   const url = new URL(req.url);
//   const pathname = url.pathname;

//   // 🔥 Bypass Arcjet for OAuth flows
//   if (
//     pathname.includes("/callback") ||
//     pathname.includes("/oauth") ||
//     pathname.includes("/google") ||
//     pathname.includes("/linkedin")
//   ) {
//     return handler.POST(req);
//   }

//   // ---- EMAIL FLOW ONLY ----
//   const clonedReq = req.clone();
//   let email = "";

//   try {
//     const body = await clonedReq.json();
//     email = body.email || "";
//   } catch {}

//   const devIp = process.env.NODE_ENV === "development" ? "8.8.8.8" : undefined;

//   const decision = await aj
//     .withRule(
//       protectSignup({
//         email: {
//           mode: "LIVE",
//           deny: email ? ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"] : [],
//         },
//         bots: {
//           mode: "LIVE",
//           deny: ["CATEGORY:TOOL", "CATEGORY:AI", "CATEGORY:MONITOR"],
//         },
//         rateLimit: {
//           mode: "LIVE",
//           interval: "1m",
//           max: 5,
//         },
//       }),
//     )
//     .protect(req, { email, ip: devIp });

//   if (decision.isDenied()) {
//     if (decision.reason.isEmail()) {
//       return NextResponse.json({ message: "Invalid email" }, { status: 400 });
//     }
//     if (decision.reason.isRateLimit()) {
//       return NextResponse.json({ message: "Too many attempts" }, { status: 429 });
//     }
//     return NextResponse.json({ message: "Forbidden" }, { status: 403 });
//   }

//   return handler.POST(req);
// };
