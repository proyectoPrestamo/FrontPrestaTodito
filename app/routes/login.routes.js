import { Router } from "express";
import {loginController} from "../controller/login.controller.js"
const login = Router();

login.get('/', (req, res) => {
    res.render('index.ejs');
  });

login.post("/autentificacion",loginController.validacionLogin)

  login.get('/salir', (req, res) => {
    res.send('ruta de salida');
  });

  login.get('/denegado', (req, res) => {
    res.send('ruta denegado');
  });

  export default login;

