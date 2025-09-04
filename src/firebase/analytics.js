// Safe analytics helper for browser environments only.
// Usage: const analytics = await getAnalyticsSafe(app, cfg.measurementId)
export async function getAnalyticsSafe(app, measurementId) {
  if (typeof window === "undefined") return undefined;
  if (!app || !measurementId) return undefined;
  try {
    const mod = await import("firebase/analytics");
    const supported = mod.isSupported ? await mod.isSupported() : true;
    if (!supported) return undefined;
    return mod.getAnalytics(app);
  } catch {
    return undefined;
  }
}
