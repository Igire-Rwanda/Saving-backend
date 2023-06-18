import express from "express";
import bodyParser from "body-parser";
import createSaving from "../controllers/savingcontroller.js";

const router = express.Router();
router.use(bodyParser.json());
router.post("/saving/account", createSaving)


export default router;
