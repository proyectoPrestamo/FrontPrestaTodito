import { Router } from "express";
import { coordinadorController } from "../controller/coordinador.controller.js";
const coordi = Router();

  coordi.get('/reportes', coordinadorController.reportes)
  coordi.get('/seguimiento', coordinadorController.segumiento)
  coordi.get('/aprobar', coordinadorController.aprobar)

export default coordi;