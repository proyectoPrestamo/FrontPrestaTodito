import { Router } from "express";
import middle from "../middleware/middleware.js";
import { comprobanteController } from "../controller/comprobante.controller.js";

const comprobante = Router();

comprobante.post('/generarpdf', middle, comprobanteController.generarPdf);
comprobante.post('/generarexcel', middle, comprobanteController.generarexcel);

export default comprobante;
