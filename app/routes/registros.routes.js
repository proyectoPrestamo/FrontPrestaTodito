import { Router } from "express";
import { registrosController } from "../controller/registros.controller.js";
const registros = Router();

registros.get('/registroInventario', registrosController.inventario)
registros.get('/registroSolicitud', registrosController.solicitud)

export default registros;