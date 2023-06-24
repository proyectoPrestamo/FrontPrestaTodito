import { Router } from "express";
import middle from "../middleware/middleware.js";
import { registroUsersController } from "../controller/registroUsers.controller.js";
const registrosUsers = Router();

registrosUsers.get('/registrocoordinador',middle,registroUsersController.coordinador)
registrosUsers.get('/registroadministrador',middle,registroUsersController.administrador)
registrosUsers.get('/registroaprendiz',middle,registroUsersController.aprendiz)
registrosUsers.get('/registroinstructor',middle,registroUsersController.instructor)


//POST
registrosUsers.post('/registrarUsuarios',middle,registroUsersController.registrarUsuarios);
registrosUsers.post('/registrarRol',middle,registroUsersController.registrarRol);



export default registrosUsers;

