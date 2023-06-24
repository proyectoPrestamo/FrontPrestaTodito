import { Router } from "express";
// import {respuestaPrestamo} from "../controller/respuestaPrestamo.controller.js"
const resP = Router();

resP.get('/respuestaPrestamo', (req, res) => {
    res.render('respuestaPrestamo.ejs');
  });


  export default resP;

