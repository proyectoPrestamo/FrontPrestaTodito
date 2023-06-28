import { Router } from "express";
import axios from "axios";
import { registroAdministradorController } from "../controller/registroAdministrador.controller.js";
const router = Router();


router.get('/registroAdministrador', registroAdministradorController.registroAdministrador);

router.post('/registrarAdmin', (req, res)=>{
    const registro = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tipo_documento: req.body.tipo_documento,
        id: req.body.numero_documento,
        correo: req.body.correo_electronico,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        jornada: req.body.jornada,
        genero: req.body.genero,
        contrasena: req.body.contrasena



       
      };
    
      axios.post(process.env.ENDPOINT + '/api/usuario', registro)
        .then(response => {
          console.log(response.data);
          // Aquí puedes realizar alguna acción adicional o mostrar un mensaje de éxito.
          res.redirect("/rol");      
        })
        .catch(error => {
          console.error(error);
          // Aquí puedes manejar el error de alguna manera o mostrar un mensaje de error.
          
        });

});




export default router;