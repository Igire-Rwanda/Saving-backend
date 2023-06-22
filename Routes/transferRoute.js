import express from "express"
import bodyParser from "body-parser"
import transfer from "../controllers/transferController.js"


const router = express.Router();
router.use(bodyParser.json());
router.post("/transfer", transfer)

export default router;