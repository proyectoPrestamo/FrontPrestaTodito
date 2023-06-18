import { Router } from "express";
import { registroUsersController } from "../controller/registroUsers.controller.js";
const registrosUsers = Router();

registrosUsers.get('/registrocoordinador', registroUsersController.coordinador)
registrosUsers.get('/registroadministrador', registroUsersController.administrador)
registrosUsers.get('/registroaprendiz', registroUsersController.aprendiz)
registrosUsers.get('/registroinstructor', registroUsersController.instructor)

export default registrosUsers;

