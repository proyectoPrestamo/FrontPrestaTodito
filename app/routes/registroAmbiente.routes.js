import { Router } from "express";
import axios from "axios";
import { registroAmbienteController } from "../controller/registroAmbiente.controller.js";
const router = Router();


router.get('/registroAmbiente', registroAmbienteController.registroAmbiente);

router.post('/guardarAmbiente', (req, res)=>{
    const registro = {
        id_ambiente: req.body.numeroAmbiente,
        cantidad_sillas: req.body.cantidadSillas,
        cantidad_mesas: req.body.CantidadMesas,
        num_aprendices: req.body.numeroAprendices,
        num_equipos: req.body.numeroEquipos


       
      };
    
      axios.post('http://localhost:3000/api/Ambientes', registro)
        .then(response => {
          console.log(response.data);
          // Aquí puedes realizar alguna acción adicional o mostrar un mensaje de éxito.
          res.redirect("/ambienteAdmin");      
        })
        .catch(error => {
          console.error(error);
          // Aquí puedes manejar el error de alguna manera o mostrar un mensaje de error.
          
        });

});




export default router;