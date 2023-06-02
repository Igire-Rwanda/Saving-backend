import  express  from "express";
import bodyParser from "body-parser";
import createExpense from "../Controller/expense.js";

const router =express.Router();
router.use(bodyParser.json());
router.post("/expense",createExpense)
router.get("/expense",createExpense)


export default router;