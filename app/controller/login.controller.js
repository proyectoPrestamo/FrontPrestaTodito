import fetch from "node-fetch";
import jwt from "jsonwebtoken";
// import { red } from "colors";

// const validarUser = (req, res) => {
//     res.render('index.ejs');
// };


const validacionLogin = async (req,res) =>{
    let id_usuario = req.body.id_usuario;
    let contrasena = req.body.contrasena;
    // let id_rol = req.body.id_rol;

    if(id_usuario && contrasena){
        try {

            const url = `http://localhost:3000/api/usuario/${id_usuario}`;
            const options = { method: "GET"};
            let payload = {};

            await fetch(url, options)
            .then((response)=> response.json())
            .then((datosUsuario)=> {
                // res.send(datosUsuario)
                if (datosUsuario[0] ==! undefined) {
                    payload = datosUsuario[0];
        
                    if (contrasena === payload.contrasena) {
                      // Validación de inicio de sesión exitosa

                      const jwt = jwt.sign(payload,process.env.SECRET_KEY, {
                          expiresIn: process.env.EXPIRE_TOKEN,
                      });

                      res.cookie("cokkieinsumos", token);
                      return res.redirect("/aprobar");
                      
                    } else {
                        // contraseña incorrecta
                      return res.redirect("")
                    }
                  } else {
                    // Usuario no encontrado
                    return res.redirect("")
                  
                  }
                });
        
              // Envía la respuesta con los datos del usuario o payload
            //   res.send(payload);
        
            } catch (error) {
              console.error(error);
              // Manejo de errores
            //   res.status(500).send("Error en el servidor");
            }
          } else {
            res.redirect('/')
          }
        };
       
        
        
        
        
        


// const login = async (req, res) => {
//     try {
        
        
//         // Obtener los datos del formulario HTML
//         const id_usuario = req.body.id_usuario;
//         const contrasena = req.body.contrasena;
//         const rol = req.body.id_rol;
        
//         const rutaUser = "http://localhost:3000/api/usuarios/"+ id_usuario;
//         const datosUser = {
//             id_usuario: id_usuario,
//             contrasena: contrasena,
//             id_rol: id_rol,

//         };

//         const opciones = {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             // body: JSON.stringify(datosUser)
//         };

//         const response = await fetch(rutaUser, opciones);
//         const result = await response.json();

//         res.render('login', {
//             datosUser: result,
//             // datosHorario: datosHorario[0]
//         });
//     } catch (error) {
//         console.error(error);
//         res.redirect("/");
//     }
// };


export const loginController = {
    validacionLogin
};
