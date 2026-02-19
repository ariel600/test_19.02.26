import express from "express";
import fs from 'fs'
import { getCsvC } from "../controllers/getCsvC.js";

const router = express.Router();

router.get("/", getCsvC)

export default router