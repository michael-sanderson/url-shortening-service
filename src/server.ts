import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

//JSON Middleware
app.use(express.json());

//Simple endpoint to check server is running and responding
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express + TypeScript!" });
});

// app.post("/shorten", (req: Request, res: Response) => {
//   res.json({ message: "Hello from Express + TypeScript!" });
// });


// START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});