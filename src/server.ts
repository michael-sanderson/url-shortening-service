// src/server.ts
import express from "express";
import routes from "./routes/routes";

const app = express();

// Middleware
app.use(express.json());
app.use(routes);

// START SERVER
app.listen(3000, () => console.log("URL shortener running on http://localhost:3000"));
