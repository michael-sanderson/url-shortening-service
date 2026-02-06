// src/services/shortenUrlService.ts
import crypto from "crypto";
import urlStore from "../data/store";

const BASE_URL = "http://localhost:3000";

function generateCode(length = 6): string {
  return crypto.randomBytes(length).toString("base64url").slice(0, length);
}

export function shortenUrl(url: string): string {
  const code = generateCode();
  urlStore.set(code, url);
  return `${BASE_URL}/${code}`;
}
