import { Router } from "express";
import middle from "../middleware/middleware.js";
import { aprendizController } from "../controller/aprendiz.controller.js";
const aprendiz = Router();

aprendiz.get('/menu-aprendiz',middle,aprendizController.menuAprendiz)

aprendiz.get('/controlcom',middle,aprendizController.controlCompu)

aprendiz.post('/insertareporte',aprendizController.Insertareportepc);


export default aprendiz;