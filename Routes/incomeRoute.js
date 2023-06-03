import express from "express"
import bodyParser from "body-parser";
import incomeRoute from "../controllers/incomeController.js"
const router = express.Router();
router.use(bodyParser.json());
router.post ("/createincome", incomeRoute);

export default router;
