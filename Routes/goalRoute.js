import express from "express"
import {readGoal,createGoal} from "../controllers/goalController.js"
const router = express.Router();
router.post("/setGoal" ,createGoal );
router.get("/readgoal" ,readGoal )
export default router;