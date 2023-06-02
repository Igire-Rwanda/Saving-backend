import  express  from "express";
import bodyParser from "body-parser";
import createIncome from "../Controller/income.js";

const router =express.Router();
router.use(bodyParser.json());
router.post("/income",createIncome);


export default router;
