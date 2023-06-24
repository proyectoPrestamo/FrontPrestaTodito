import { Router } from "express";
import middle from "../middleware/middleware.js";
import {herraAdminController } from "../controller/herraAdmin.controller.js";
const herraAdmin = Router();

herraAdmin.get('/herraAdmin',middle,herraAdminController.herraAdmin);

export default herraAdmin;
