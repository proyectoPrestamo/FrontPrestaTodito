import { Router } from "express";
import axios from "axios";
import { registroHerramientaController } from "../controller/registroHerramienta.controller.js";
const router = Router();


router.get('/registroHerramienta', registroHerramientaController.registroHerramienta);

router.post('/guardarHerramienta', (req, res)=>{
    const registro = {
        tipo: req.body.TIPO,
        color: req.body.COLOR
        
       
      };
    
      axios.post('http://localhost:3000/api/herramientas', registro)
        .then(response => {
          console.log(response.data);
          // Aquí puedes realizar alguna acción adicional o mostrar un mensaje de éxito.
          res.redirect("/herraAdmin");      
        })
        .catch(error => {
          console.error(error);
          // Aquí puedes manejar el error de alguna manera o mostrar un mensaje de error.
          
        });

});




export default router;