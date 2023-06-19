import withdraw from "../controllers/withdrawController.js"
import express from "express"

import bodyParser from "body-parser";



const router = express.Router();
router.use(bodyParser.json());
router.post("/withdraw", withdraw);


export default router;