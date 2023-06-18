import { Router } from "express";
import { coordinadorController } from "../controller/coordinador.controller.js";
const coordi = Router();

  coordi.get('/reportes', coordinadorController.reportes)
  coordi.get('/seguimiento', coordinadorController.segumiento)
  coordi.get('/aperobar', coordinadorController.aprobar)

export default coordi;