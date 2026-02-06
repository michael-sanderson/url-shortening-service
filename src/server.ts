import express, { Request, Response } from "express";
import { shortenUrl, urlStore } from "./controllers/shortenController";

const app = express();
const PORT = 3000;
const BASE_URL = "http://localhost:3000";

//JSON Middleware
app.use(express.json());

// Simple endpoint to check server is running and responding
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express + TypeScript!" });
});

app.get("/:code", (req: Request<{ code: string }>, res: Response) => { 
  const { code } = req.params; 
  const originalUrl = urlStore.get(code); 
  
  if (!originalUrl) { 
    return res.status(404).json({ error: "URL not found" }); 
  } 
  
  res.redirect(originalUrl); 
});

// POST /shorten -- Endpoint to invoke shorten URL service
app.post("/shorten", (req: Request, res: Response) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortUrl = shortenUrl(url);
  res.json({ shortUrl });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});