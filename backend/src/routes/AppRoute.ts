import { Router } from "express";
import { getRoute, postRoute } from "../controller/AppController.js";

const router = Router();

router.get("/get", getRoute);
router.post("/post", postRoute);

export default router;
