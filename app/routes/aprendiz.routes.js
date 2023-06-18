import { Router } from "express";
import { aprendizController } from "../controller/aprendiz.controller.js";
const aprendiz = Router();

aprendiz.get('/menu-aprendiz', aprendizController.menuAprendiz)

aprendiz.get('/controlcom', aprendizController.controlCompu)


export default aprendiz;