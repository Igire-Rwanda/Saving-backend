import express from "express"
import bodyParser from "body-parser";
import  {incomeRoute , readIncome} from "../controllers/incomeController.js"
const router = express.Router();
router.use(bodyParser.json());
router.post ("/createincome", incomeRoute);
router.get ("/get", readIncome);

export default router;
