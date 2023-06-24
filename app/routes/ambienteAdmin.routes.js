import { Router } from "express";
import middle from "../middleware/middleware.js";
import { ambienteAdminController } from "../controller/ambienteAdmin.controller.js";
const ambienteAdmin = Router();


ambienteAdmin.get('/ambienteAdmin',middle,ambienteAdminController.ambienteAdmin);





export default ambienteAdmin;