import { Router } from "express";
import { instructorController } from "../controller/instructor.controller.js";
const instructor = Router();

// RUTAS GET

instructor.get('/menu-instructor', instructorController.menuInstructor);

instructor.get('/ambientes', instructorController.formularioAmbiente)

instructor.get('/herramientas', instructorController.formularioHerramientas);

instructor.get('/material', instructorController.formularioMateriales);
  
instructor.get('/controlAula', instructorController.formularioControlAula)

// RUTAS POST

instructor.post('/insertarMaterial', instructorController.InsertarMateriales);
  

  

  


  export default instructor;
  
