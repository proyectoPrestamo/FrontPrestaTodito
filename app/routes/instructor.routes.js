import { Router } from "express";
import { instructorController } from "../controller/instructor.controller.js";
const instructor = Router();


instructor.get('/ambientes', instructorController.formularioAmbiente)
  
  instructor.get('/controlAula', instructorController.formularioControlAula)
  
  instructor.get('/herramientas', instructorController.formularioHerramientas);
  
  instructor.get('/material', instructorController.formularioMateriales);
  
  instructor.get('/menu-instructor', instructorController.menuInstructor);

  //instructor.get('/insertarAmbientes', instructorController.insertarAmbiente);

  export default instructor;
  
