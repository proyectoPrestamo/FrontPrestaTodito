import fetch from "node-fetch";
import jwt from "jsonwebtoken";



export const validacionLogin = async (req, res) => {
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
    body: JSON.stringify(credenciales)
  };

  let datos = {};

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    datos = data[0][0][0];
  } catch (err) {
    console.error("Error en la petición:", err);
  }

  console.log("Datos:", datos);
  console.log("Credenciales:", credenciales);

  if (datos && credenciales) {
    if (datos.ID_USUARIO.toString() === credenciales.id_usuario && datos.CONTRASENA === credenciales.contrasena) {
      console.log("Se validaron las credenciales");

      const verificarCredenciales = () => {
        if (credenciales.id_usuario !== datos.ID_USUARIO.toString()) {
          console.log("Usuario incorrecto");
          res.send("Usuario incorrecto");
          return false;
        }
        console.log("Se validó el usuario");

        if (credenciales.contrasena !== datos.CONTRASENA) {
          console.log("Contraseña incorrecta");
          res.send("Contraseña incorrecta");
          return false;
        }
        console.log("Se validó la contraseña");

        if (!req.body.rol) {
          console.log("Debe seleccionar un rol");
          res.send("Debe seleccionar un rol");
          return false;
        }

        const rolesPermitidos = [1, 2, 3, 4];
        const rolSeleccionado = parseInt(req.body.rol);

        if (!rolesPermitidos.includes(rolSeleccionado)) {
          console.log("Rol no permitido");
          res.send("Rol no permitido");
          return false;
        }
        console.log("Se validó el rol");

        // Verificar si el rol seleccionado coincide con el rol del usuario
        if (datos.ID_ROL === undefined || parseInt(datos.ID_ROL) !== rolSeleccionado) {
          console.log("Rol incorrecto");
          res.send("Rol incorrecto");
          return false;
        }

        // Generar el token una vez antes del switch statement
        const token = jwt.sign(datos, process.env.SECRET_KEY, {
          expiresIn: process.env.EXPIRE_TOKEN
        });

        switch (datos.ID_ROL.toString()) {
          case "1":
            console.log("Redireccionando a /menu-aprendiz");
            res.cookie("PRESTATODITO", token);
            res.redirect("/menu-aprendiz");
            break;
          case "2":
            console.log("Redireccionando a /menu-instructor");
            res.cookie("PRESTATODITO", token);
            res.redirect("/menu-instructor");
            break;
          case "3":
            console.log("Redireccionando a /aprobar");
            res.cookie("PRESTATODITO", token);
            res.redirect("/aprobar");
            break;
          case "4":
            console.log("Redireccionando a /rol");
            res.cookie("PRESTATODITO", token);
            res.redirect("/rol");
            break;
          default:
            console.log("Redireccionando a /");
            res.redirect("/");
            break;
        }

        return true;
      };

      if (!verificarCredenciales()) {
        return;
      }

    } else {
      res.redirect("/login");
    }
  } else {
    console.error("No se encontraron datos");
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
