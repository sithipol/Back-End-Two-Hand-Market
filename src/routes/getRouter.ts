import express from "express";
var router = express.Router();
import { showData, printReq } from "../controllers/getController";

router.get("/show", showData);
router.get("/printReq/:id", printReq);

export default router;
