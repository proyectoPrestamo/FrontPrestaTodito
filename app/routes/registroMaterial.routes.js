import { Router } from "express";
import axios from "axios";
import { registroMaterialController } from "../controller/registroMaterial.controller.js";
const router = Router();


router.get('/registroMaterial', registroMaterialController.registroMaterial);

router.post('/guardarMaterial', (req, res)=>{
    const registro = {
        nombre: req.body.NOMBRE,
        tipo: req.body.TIPO,
        color: req.body.COLOR,
        medidas: req.body.MEDIDAS,
        imagen: req.body.IMAGEN,
       
      };
    
      axios.post(process.env.ENDPOINT + '/api/material', registro)
        .then(response => {
          console.log(response.data);
          // Aquí puedes realizar alguna acción adicional o mostrar un mensaje de éxito.
          res.redirect("/materialAdmin");      })
        .catch(error => {
          console.error(error);
          // Aquí puedes manejar el error de alguna manera o mostrar un mensaje de error.
          
        });

});




export default router;