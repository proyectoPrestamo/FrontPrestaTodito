import fetch from "node-fetch";
import jwt from "jsonwebtoken";

export const validacionLogin = async (req, res) => {
  try {
    let data = {
      id_usuario: req.body.id_usuario,
      contrasena: req.body.contrasena
    };

    const url = `http://localhost:3000/api/consulta`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    console.log(data);
    let datos = {};

    const result = await fetch(url, options)
      .then(response => response.json())
      .then(data => {
        datos = data[0];
      })
      .catch(err => console.error("Error en peticion: " + err));

    if (datos && data) {
      if (data.id_usuario === datos.id_usuario && data.contrasena === datos.contrasena) {
        const token = jwt.sign(datos, process.env.SECRET_KEY, {
          expiresIn: process.env.EXPIRE_TOKEN
        });
        res.cookie("PRESTATODITO", token);

        if (datos.ID_ROL === "1") {
          res.render("menu-aprendiz", {
            usuario: datos,
            rol: datos.ID_ROL
          });
        } else if (datos.ID_ROL === "2") {
          res.render("menu-instructor", {
            usuario: datos,
            rol: datos.ID_ROL
          });
        } else if (datos.ID_ROL === "3") {
          res.render("aprobar", {
            usuario: datos,
            rol: datos.ID_ROL
          });
        } else if (datos.ID_ROL === "4") {
          res.render("rol", {
            usuario: datos,
            rol: datos.ID_ROL
          });
        }
      }
    } else {
      console.error("Error? " + error);
    }
  } catch (error) {
    console.error("Error en validación de inicio de sesión: " + error);
  }
};



