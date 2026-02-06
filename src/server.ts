import express from "express";
import routes from "./routes/routes";

const app = express();

app.use(express.json()); // parse JSON requests
app.use(routes);         // attach app routes

app.listen(3000, () => console.log("URL shortener running on http://localhost:3000"));
