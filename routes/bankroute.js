import express from "express";
import bodyParser from "body-parser";
import { createBank, getBank } from "../controllers/bankcontroller.js";


const router = express.Router();
router.use(bodyParser.json());
router.post("/new/bank", createBank);
router.get("/bank", getBank);

export default router;