import { Router } from "express";
import {loginController} from "../controller/login.controller.js"
const login = Router();

login.get('/', (req, res) => {
    res.render('index.ejs');
  });

login.post("/autentificacion",loginController.validacionLogin)

login.get('/cerrarsesion',loginController.cerrarsesion);

login.get('/index',loginController.index);

  // login.get('/salir', (req, res) => {
  //   res.send('cerrarsesion.ejs');
  // });

  login.get('/denegado', (req, res) => {
    res.send('ruta denegado');
  });

  export default login;

