import fetch from "node-fetch";
import jwt from "jsonwebtoken";

export const validacionLogin = async (req, res) => {
  try {
    //datos ingresa el user
    const credenciales = {
      id_usuario: req.body.id_usuario,
      contrasena: req.body.contrasena
    };
   
    

    const url = process.env.ENDPOINT + "/api/consulta";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      //las credenciales a una cadena JSON
      body: JSON.stringify(credenciales)
    };

    //los datos obtenidos de la respuesta del servidor
    let datos = {};


    const result = await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // console.log(data[0][0][0]);
        datos = data[0][0][0];
      }).catch(err => console.error("Error en petición: " + err));
      console.log(datos);
      console.log(credenciales);
    if (datos && credenciales) {
      if (datos.ID_USUARIO.toString() === credenciales.id_usuario && datos.CONTRASENA === credenciales.contrasena) {
        const token = jwt.sign(datos, process.env.SECRET_KEY, {
          expiresIn: process.env.EXPIRE_TOKEN
        });
        console.log("se validaron credenciales")
        res.cookie("PRESTATODITO", token);


        const verificarCredenciales = () => {
          if (credenciales.id_usuario !== datos.ID_USUARIO.toString()) {
            res.send("Usuario incorrecto");
            return false;
          }  console.log("se validaron credenciales1")
          if (credenciales.contrasena !== datos.CONTRASENA) {
            res.send("Contraseña incorrecta");
            return false;
          }  console.log("se validaron credenciales2")
         
        };

        const roles = {
          "aprendiz": 1,
          "instructor": 2,
          "coordinador": 3,
          "administrador": 4
        };
        
        if (datos.ID_ROL === roles["aprendiz"]) {
          if (!verificarCredenciales()) {
            res.redirect("/menu-aprendiz");
          }
        }
         
     else if (datos.ID_ROL === roles["instructor"]) {
          if (!verificarCredenciales()) {
            res.redirect("/menu-instructor")
           
          }
          
        } else if (datos.ID_ROL === roles["coordinador"]) {
          if (!verificarCredenciales()) {
            res.redirect("/aprobar")
            
          }
          
        } else if (datos.ID_ROL === roles["administrador"]) {
          if (!verificarCredenciales()) {
            res.redirect("/rol")
           
          }
        
        }
      } else {
         res.redirect("/login")
      }
    } else {
      console.error("No se encontraron datos");
    }
  } catch (error) {
    console.error("Error en validación de inicio de sesión: " + error);
  }
};

const cerrarsesion = (req, res) => {
  res.render('cerrarsesion.ejs');
}

const index = (req, res) => {
  res.render('index.ejs');
}

export const loginController = {
  validacionLogin, cerrarsesion, index
  };