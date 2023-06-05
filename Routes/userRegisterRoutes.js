import express from "express"
import bodyParser from "body-parser"
import {SignUpController,Login} from "../Controllers/userRegisterController.js"

const router=express.Router();
router.use(bodyParser.json())



router.post("/signup",SignUpController)
router.post("/Login",Login)

export default router