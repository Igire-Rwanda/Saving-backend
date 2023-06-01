import  express  from "express";
import bodyParser from "body-parser";
import createSaving from "../controllers/savingcontroller.js";

const router =express.Router();
router.use(bodyParser.json());
router.post("/save",createSaving)


export default router;