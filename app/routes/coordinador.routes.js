import { Router } from "express";
import middle from "../middleware/middleware.js";
import { coordinadorController } from "../controller/coordinador.controller.js";
const coordi = Router();

  coordi.get('/reportes',middle,coordinadorController.reportes)
  coordi.get('/seguimiento',middle,coordinadorController.segumiento)
  coordi.get('/aprobar',middle,coordinadorController.aprobar)

export default coordi;