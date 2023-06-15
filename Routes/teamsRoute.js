import express from "express";
import bodyParser from "body-parser";
import { createTeams, getAllTeams } from "../controllers/teamsController.js";

const router = express.Router();
router.use(bodyParser.json());
router.post("/new/teams", createTeams)
router.get("/teams", getAllTeams);

export default router;