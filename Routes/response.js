
import express from "express"
import bodyParser from "body-parser";
import voteController from "../controllers/response.js"
import confirmation from "../controllers/confirmation.js";
const router = express.Router();
router.use(bodyParser.json());

router.post('/vote/', voteController);
router.get('/voted',confirmation)

export default router;