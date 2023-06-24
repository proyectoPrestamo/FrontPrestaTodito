import { Router } from "express";
import middle from "../middleware/middleware.js";
import { pcAdminController } from "../controller/pcAdmin.controller.js";
const pcAdmin = Router();

pcAdmin.get('/pcAdmin',middle,pcAdminController.pcAdmin);

export default pcAdmin;
