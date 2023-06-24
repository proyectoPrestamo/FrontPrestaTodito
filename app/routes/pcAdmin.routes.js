import { Router } from "express";
import { pcAdminController } from "../controller/pcAdmin.controller.js";
const router = Router();

router.get('/pcAdmin',pcAdminController.pcAdmin);

export default router;
