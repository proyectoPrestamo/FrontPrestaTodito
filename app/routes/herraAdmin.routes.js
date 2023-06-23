import { Router } from "express";
import {herraAdminController } from "../controller/herraAdmin.controller.js";
const router = Router();


router.get('/herraAdmin',herraAdminController.herraAdmin);

export default router;
