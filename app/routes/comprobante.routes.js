import { Router } from "express";
import { comprobanteController } from "../controller/comprobante.controller.js";
const comprobante = Router();

comprobante.get('/generarPdf', comprobanteController.generarPdf)

comprobante.get('/generarexcel', comprobanteController.generarexcel)


export default comprobante;