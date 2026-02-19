import express from "express";
import { getCsvC } from "../controllers/getCsvC.js";

const router = express.Router();

router.get("/", getCsvC)

export default router