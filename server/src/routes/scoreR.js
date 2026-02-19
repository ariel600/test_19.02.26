import express from "express";
import { scoreM } from "../middlewares/scoreM.js";
import { scoreC } from "../controllers/scoreC.js";

const router = express.Router()

router.post("/", scoreM, scoreC)

export default router