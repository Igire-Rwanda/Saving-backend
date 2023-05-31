import  express  from "express";
import bodyParser from "body-parser";
import createBank from "../controllers/bankcontroller.js";

const router =express.Router();
router.use(bodyParser.json());
router.post("/bank",createBank)
router.get("/bank",createBank)

export default router;