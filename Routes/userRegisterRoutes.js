import express, { Router } from "express"
import bodyParser from "body-parser"
import {signUp,Login} from "../controllers/userRegisterController.js"

const router=express.Router();
router.use(bodyParser.json())

router.post("/signup",signUp)
router.post("/Login",Login)

export default router