import { Router } from "express";
import middle from "../middleware/middleware.js";
import { comprobanteController } from "../controller/comprobante.controller.js";
const comprobante = Router();

comprobante.get('/generarPdf',middle,comprobanteController.generarPdf)

comprobante.get('/generarexcel',middle,comprobanteController.generarexcel)


export default comprobante;