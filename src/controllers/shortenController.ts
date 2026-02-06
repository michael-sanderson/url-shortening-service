import crypto from "crypto";

// In-memory store (could later be replaced with a DB)
const urlStore = new Map<string, string>();

const BASE_URL = "http://localhost:3000";

// Helper function to generate a short code
function generateCode(length = 6): string {
  return crypto.randomBytes(length).toString("base64url").slice(0, length);
}

// Function to shorten URL using code generated
export function shortenUrl(url: string): string {
  const code = generateCode();
  urlStore.set(code, url);
  return `${BASE_URL}/${code}`;
}

// Export store as needed elsewhere (GET redirect)
export { urlStore };