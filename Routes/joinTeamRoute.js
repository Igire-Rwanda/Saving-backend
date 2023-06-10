import express from "express"
import bodyParser from "body-parser"
import joinTeam  from "../controllers/joinTeamController.js"

const router=express.Router();
router.use(bodyParser.json());
router.post("/join",joinTeam)

export default router;