import { Router } from "express";
import { handleShorten } from "../controllers/shortenUrlController";
import { handleRedirect } from "../controllers/redirectController";

const router = Router();

router.post("/shortenurl", handleShorten); // shorten a URL
router.get("/:code", handleRedirect);      // redirect by code

export default router;
