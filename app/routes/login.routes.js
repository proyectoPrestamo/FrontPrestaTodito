import { Router } from "express";
import {loginController} from "../controller/login.controller.js"
const login = Router();

login.get('/', (req, res) => {
    res.render('index.ejs');
  });

login.post("/autentificacion",loginController.validacionLogin)

login.get('/cerrarsesion',loginController.cerrarsesion);

login.get('/index',loginController.index);

login.get('/denegado',loginController.denegado);


  export default login;

