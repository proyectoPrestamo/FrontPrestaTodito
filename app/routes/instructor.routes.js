import { Router } from "express";
import middle from "../middleware/middleware.js";
import { instructorController } from "../controller/instructor.controller.js";
const instructor = Router();

// RUTAS GET

instructor.get('/menu-instructor',middle,instructorController.menuInstructor);

instructor.get('/ambientes',middle,instructorController.formularioAmbiente)

instructor.get('/herramientas',middle,instructorController.formularioHerramientas);

instructor.get('/material',middle,instructorController.formularioMateriales);
  
instructor.get('/controlAula',middle,instructorController.formularioControlAula)

// RUTAS POST

instructor.post('/insertarMaterial',instructorController.InsertarMateriales);
  

  

  


  export default instructor;
  
