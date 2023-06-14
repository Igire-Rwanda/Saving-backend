import home from "../controllers/welcome.js"
import express from "express"
const router = express.Router();
router.post("" ,home);
export default router;