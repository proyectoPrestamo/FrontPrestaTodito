import { Router } from "express";
import axios from "axios";
import { registroMaterialController } from "../controller/registroMaterial.controller.js";
const router = Router();

//ya me dio sueño, mañana  sigo con la imagen tirate el push

router.get('/registroMaterial', registroMaterialController.registroMaterial);

router.post('/guardar', (req, res)=>{
    const registro = {
        nombre: req.body.NOMBRE,
        tipo: req.body.TIPO,
        color: req.body.COLOR,
        medidas: req.body.MEDIDAS,
        imagen: req.body.IMAGEN,
       
      };
    
      axios.post('http://localhost:3000/api/material', registro)
        .then(response => {
          console.log(response.data);
          // Aquí puedes realizar alguna acción adicional o mostrar un mensaje de éxito.
          res.redirect("/registroMaterial");      })
        .catch(error => {
          console.error(error);
          // Aquí puedes manejar el error de alguna manera o mostrar un mensaje de error.
          
        });

});




export default router;