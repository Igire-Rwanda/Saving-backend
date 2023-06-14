import express from "express";
import bodyParser from "body-parser";
import {SignUpController,Login, readUser} from "../controllers/userRegisterController.js"


const router=express.Router();
router.use(bodyParser.json())


router.post("/signup",SignUpController)
router.post("/Login",Login)
router.get("/readUser", readUser)


export default router