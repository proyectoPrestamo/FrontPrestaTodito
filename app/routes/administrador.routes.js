import { Router } from "express";
import middle from "../middleware/middleware.js";
import { administradorController } from "../controller/administrador.controller.js";
const administrador = Router();

administrador.get('/rol',middle,administradorController.rolAdmin);






// administrador.get('/ambienteAdmin', administradorController.ambienteAdmin)
administrador.get('/devolucionInsumos',middle,administradorController.devolucionInsumos);
// administrador.get('/herraAdmin', administradorController.herraAdmin)
// administrador.get('/materialAdmin', administradorController.materialAdmin)
// administrador.get('/pcAdmin', administradorController.pcAdmin)
// administrador.get('/registroAdministrador', administradorController.regiAdmin)
// administrador.get('/registroaprendiz', administradorController.regiAprendiz)
// administrador.get('/registrocoordinador', administradorController.regiCoordinador)
// administrador.get('/registroinstructor', administradorController.regiInstructor)
// administrador.get('/registroMaterial', administradorController.regiMaterial)
// administrador.get('/usuariosRegistrados', administradorController.usuariosRegistrados)
// administrador.get('/registroSolicitud', administradorController.regiSolicitud)






export default administrador;