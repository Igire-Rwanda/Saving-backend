import express from "express";
import bodyParser from "body-parser";
import {SignUpController,Login, readUser} from "../Controllers/userRegisterController.js"
import Home from "../controllers/Home.js"

const router=express.Router();
router.use(bodyParser.json())


router.post("/signup",SignUpController)
router.post("/Login",Login)
router.get("/readUser", readUser)
router.post("/", Home)

export default router