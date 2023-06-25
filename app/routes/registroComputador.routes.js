import { Router } from "express";
import axios from "axios";
import { registroComputadorController } from "../controller/registroComputador.controller.js";
const router = Router();


router.get('/registroComputador', registroComputadorController.registroComputador);

router.post('/guardarEquipo', (req, res)=>{
    const registro = {
        marca: req.body.MARCA,
        cargador: req.body.CARGADOR,
        mouse: req.body.MOUSE

       
      };
    
      axios.post('http://localhost:3000/api/Computador', registro)
        .then(response => {
          console.log(response.data);
          // Aquí puedes realizar alguna acción adicional o mostrar un mensaje de éxito.
          res.redirect("/pcAdmin");      
        })
        .catch(error => {
          console.error(error);
          // Aquí puedes manejar el error de alguna manera o mostrar un mensaje de error.
          
        });

});




export default router;