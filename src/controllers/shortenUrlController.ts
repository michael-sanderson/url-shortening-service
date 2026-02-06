import { Request, Response } from "express";
import { shortenUrl } from "../services/shortenUrlService";

// Validate URL format (must include http:// or https://)
function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

// Handle URL shortening requests
export function handleShorten(req: Request, res: Response) {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: "URL is required" }); // missing input
  if (!isValidUrl(url)) return res.status(400).json({ error: "Invalid URL format" }); // malformed

  const shortUrl = shortenUrl(url); // generate short URL
  return res.json({ shortUrl });
}
