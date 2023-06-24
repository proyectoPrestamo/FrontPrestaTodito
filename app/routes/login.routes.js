import { Router } from "express";
import * as controllers from "../controller/login.controller.js"
const login = Router();

login.get('/', (req, res) => {
    res.render('index.ejs');
  });

login.post("/autentificacion",controllers.validacionLogin)

  login.get('/salir', (req, res) => {
    res.send('ruta de salida');
  });

  export default login;

