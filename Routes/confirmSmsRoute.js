import express from "express";
import bodyParser from "body-parser";
import confirmSms from "../controllers/confirmSmsController";


const router = express.Router();
router.use(bodyParser.json());
router.post("/confirm", confirmSms);


export default router;