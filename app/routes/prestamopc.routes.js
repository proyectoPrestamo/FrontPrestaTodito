import { Router } from "express";
import middle from "../middleware/middleware.js";
import { prestamoPcController } from "../controller/prestamopc.controller.js";
const pc = Router()

pc.get('/prestamoPC2',middle,prestamoPcController.formularioPC);

pc.post('/insertarComputador',middle,prestamoPcController.InsertarComputadores);

  export default pc;