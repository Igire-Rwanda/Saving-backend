import home from "../controllers/welcome.js"
import express from "express"
const router = express.Router();
router.get("" ,home);
export default router;