import express, { Router } from "express"
import bodyParser from "body-parser"
import {SignUp,Login} from "../Controllers/userRegisterController.js"

const router=express.Router();
router.use(bodyParser.json())

router.post("/Signup",SignUp)
router.post("/Login",Login)

export default router