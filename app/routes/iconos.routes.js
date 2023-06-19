import { Router } from "express";
import { iconosController } from "../controller/iconos.controller.js";
const iconos = Router();

  iconos.get('/iconos', iconosController.cambiarContrasena)
 

export default iconos;