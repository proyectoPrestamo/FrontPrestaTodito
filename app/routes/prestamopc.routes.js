import { Router } from "express";
import { prestamoPcController } from "../controller/prestamopc.controller.js";
const pc = Router()

pc.get('/prestamoPC2', prestamoPcController.formularioPC);

  export default pc;