// src/controllers/shortenUrlController.ts
import { Request, Response } from "express";
import { shortenUrl } from "../services/shortenUrlService";

export function handleShorten(req: Request, res: Response) {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  const shortUrl = shortenUrl(url);
  res.json({ shortUrl });
}
