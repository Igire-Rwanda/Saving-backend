import  express  from "express";
import bodyParser from "body-parser";
import createExpense from "../controller/expense.js";

const router =express.Router();
router.use(bodyParser.json());
router.post("/expense",createExpense)


export default router;