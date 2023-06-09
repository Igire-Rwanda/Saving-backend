import express from "express"
import bodyParser from "body-parser";
import addExpense from "../Controllers/ExpenseController.js"
const router = express.Router();
router.use(bodyParser.json());
router.post ("/addExpense", addExpense)

export default router;