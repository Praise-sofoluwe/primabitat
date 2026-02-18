import arcjet, {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
} from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  // // Algorithm Setup: This identifies the "User" by their device (fingerprint)
  // // and network (IP). This is the "User ID" logic for anonymous traffic.
  // characteristics: ["fingerprint"],
  rules: [
    // WAF Shield: Protects against common web attacks automatically
    shield({ mode: "LIVE" }),
  ],
});

export {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
};

export default aj;
