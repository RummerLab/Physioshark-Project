const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const requestTimestamps = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recentRequests = (requestTimestamps.get(key) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (recentRequests.length >= MAX_REQUESTS) {
    return true;
  }

  recentRequests.push(now);
  requestTimestamps.set(key, recentRequests);
  return false;
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}
