import express from "express"
import bodyParser from "body-parser";
import {createExpense,readExpense} from "../controllers/ExpenseController.js"

import addExpense from "../controllers/ExpenseController.js"
const router = express.Router();
router.use(bodyParser.json());
router.post ("/addExpense", addExpense)
router.use(bodyParser.json());
router.post("/create" ,createExpense );
router.get("/read", readExpense);
export default router;