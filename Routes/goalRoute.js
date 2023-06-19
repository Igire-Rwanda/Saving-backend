import express from "express"
import createGoal from "../controllers/goalController.js"
const router = express.Router();
router.post("/setGoal" ,createGoal );
export default router;