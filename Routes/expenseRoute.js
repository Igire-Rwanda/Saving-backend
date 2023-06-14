import express from "express"
import bodyParser from "body-parser";
import addExpense from "../controllers/ExpenseController.js"
const router = express.Router();
router.use(bodyParser.json());
router.post ("/addExpense", addExpense)
import {createExpense,readExpense} from "../controllers/ExpenseController.js"

router.use(bodyParser.json());
router.post("/create" ,createExpense );
router.get("/read", readExpense);
export default router;