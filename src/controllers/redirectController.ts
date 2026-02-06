// src/controllers/redirectController.ts
import { Request, Response } from "express";
import { getOriginalUrl } from "../services/redirectService";

export function handleRedirect(req: Request<{ code: string }>, res: Response) {
  const { code } = req.params;
  const originalUrl = getOriginalUrl(code);

  if (!originalUrl) return res.status(404).json({ error: "URL not found" });

  res.redirect(originalUrl);
}
