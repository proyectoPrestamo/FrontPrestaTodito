import { Router } from "express";
import { ambienteAdminController } from "../controller/ambienteAdmin.controller.js";
const router = Router();


router.get('/ambienteAdmin',ambienteAdminController.ambienteAdmin);





export default router;