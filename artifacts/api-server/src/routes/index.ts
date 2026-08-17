import { Router, type IRouter } from "express";
import healthRouter from "./health";
import thaligaiRouter from "./thaligai";

const router: IRouter = Router();

router.use(healthRouter);
router.use(thaligaiRouter);

export default router;
