// src/routes.ts
import { Router } from "express";
import { handleShorten } from "../controllers/shortenUrlController";
import { handleRedirect } from "../controllers/redirectController";

const router = Router();

router.post("/shortenurl", handleShorten);
router.get("/:code", handleRedirect);

export default router;
