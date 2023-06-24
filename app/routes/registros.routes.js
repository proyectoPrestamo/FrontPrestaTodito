import { Router } from "express";
import middle from "../middleware/middleware.js";
import { registrosController } from "../controller/registros.controller.js";
const registros = Router();

registros.get('/registroInventario',middle,registrosController.inventario)
registros.get('/registroSolicitud',middle,registrosController.solicitud)

export default registros;