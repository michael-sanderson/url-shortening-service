import { Request, Response } from "express";
import { getOriginalUrl } from "../services/redirectService";

// Handle redirect from short code to original URL
export function handleRedirect(req: Request<{ code: string }>, res: Response) {
  const { code } = req.params;
  const originalUrl = getOriginalUrl(code); // look up original URL

  if (!originalUrl) return res.status(404).json({ error: "URL not found" }); // code not found

  res.redirect(originalUrl); // redirect to original URL
}
