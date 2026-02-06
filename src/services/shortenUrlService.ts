import crypto from "crypto";
import urlStore from "../data/store";

const BASE_URL = "http://localhost:3000"; // base URL for generated short links

// Generate a random short code of given length
function generateCode(length = 6): string {
  return crypto.randomBytes(length).toString("base64url").slice(0, length);
}

// Create a short URL and store the mapping in memory
export function shortenUrl(url: string): string {
  const code = generateCode();    // generate unique code
  urlStore.set(code, url);        // save mapping
  return `${BASE_URL}/${code}`;   // return full short URL
}
