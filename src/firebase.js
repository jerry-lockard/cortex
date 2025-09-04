// Firebase client SDK initialization without hardcoding secrets.
// Reads config from environment variables. Prefer NEXT_PUBLIC_* for web apps (e.g., Next.js),
// and plain FIREBASE_* for non-Next setups. No values are hardcoded.

import { initializeApp, getApps, getApp } from "firebase/app";

const cfg = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || process.env.FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || process.env.FIREBASE_MEASUREMENT_ID,
};

// Optionally validate required fields (apiKey, authDomain, projectId, appId)
// without throwing in production so local env can be filled later.
function hasAnyConfigValue(obj) {
  return Object.values(obj).some((v) => v && String(v).length > 0);
}

let app;
if (getApps().length) {
  app = getApp();
} else if (hasAnyConfigValue(cfg)) {
  app = initializeApp(cfg);
} else {
  // No config present yet. Export undefined until env is populated.
  app = undefined;
}

export { app };

// Optional: export helpers only when app exists and in browser environments.
// Example for analytics (guard against SSR):
// let analytics;
// if (typeof window !== "undefined" && app && cfg.measurementId) {
//   const { getAnalytics, isSupported } = await import("firebase/analytics");
//   if (await isSupported()) analytics = getAnalytics(app);
// }
// export { analytics };
