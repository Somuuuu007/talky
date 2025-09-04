import express from "express";
import { getStreamToken } from "../controllers/chat.contoller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();

router.get("/token",protectRoute, getStreamToken);

export default router;