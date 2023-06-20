import { Router } from "express";
import { loginController } from "../controller/login.controller.js";
const login = Router();

login.get('/', (req, res) => {
    res.render('index.ejs');
  });

  login.post('/login', loginController.validacionLogin)



//   login.post("/guardar", (req,res)=>{
//     if(req.body.name){

//         let data = {
//             name: req.body.name
//         }

//         let metodo ="post";
//         if(req.body.id){
//             data= {
//                 id: req.body.id,
//                 name: req.body.name
//             }
//             metodo = "put";
//         }

//         let ruta = "http://localhost:3000/api/user"

//         let option = {
//             method : metodo,
//             headers:{
//                 "Content-Type": "application/json"
//             },
//             body : JSON.stringify(data)
//         }
//         try {
//             const result = fetch(ruta, option)
//             .then(res=>res.json())
//             .then(data=>{
//                 console.log("Datos guardados");
//             })
//             .catch(err=>console.log("error al consumir api" + err))
//             res.redirect("/v1/usuario");
//         } catch (error) {
            
//         }
       
//     }
// })


  login.get('/salir', (req, res) => {
    res.send('ruta de salida');
  });

  export default login;