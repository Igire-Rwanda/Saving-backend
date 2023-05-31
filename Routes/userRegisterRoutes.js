import express, { Router } from "express"
import bodyparser from "body-parser"
import signUp from "../controllers/userRegisterController"

const  router=Router.bodyparser()
router.use(bodyparser.json())

router.post("/signup",signUp)