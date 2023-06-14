import express from "express"
import bodyParser from "body-parser";
// import incom

import  {readIncome , createIncome} from "../Controllers/incomeController.js";
const router = express.Router();
router.use(bodyParser.json());
router.post ("/createincome", createIncome);
router.get ("/getincome", readIncome);


export default router;
