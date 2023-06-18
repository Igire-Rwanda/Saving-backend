import express from "express"
import bodyParser from "body-parser";
import confirmation from "../controllers/confirmation.js";
// import incom

import  {readIncome , createIncome} from "../controllers/incomeController.js";
const router = express.Router();
router.use(bodyParser.json());
router.post ("/createincome", createIncome);
router.get ("/get",confirmation,  readIncome);


export default router;
