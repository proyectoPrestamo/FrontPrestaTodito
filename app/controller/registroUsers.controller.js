import fetch from "node-fetch";

const coordinador = (req, res) => {
    res.render('registrocoordinador.ejs');
};

const administrador = (req, res) => {
    res.render('registroadministrador.ejs');
};


const aprendiz = (req, res) => {
    res.render('registroaprendiz.ejs');
};

const instructor = (req, res) => {
    res.render('registroinstructor.ejs');
};

const usuariosRegistrados = async (req, res) => {
    try {
      const rutaUsuarios = "http://localhost:3000/api/usuario";
  
      const opciones = {
        method: "GET",
      };
  
      const [datosUsuarios] = await Promise.all([
        fetch(rutaUsuarios, opciones).then(response => response.json())
      ]);
  
      res.render('usuariosRegistrados', {
        datosUsuarios: datosUsuarios[0],
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }

    const registrarUsuarios = async (req, res) => {
      const Obj_Material = {
        nombre: req.body.nombre,
        tipo: req.body.tipo_documento,
        color: req.body.numero_documento,
        medidas: req.body.direccion
      };
    
      try {
        const url = "http://localhost:3000/api/material";
        const option = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(Obj_Material)
        };
    
        await fetch(url, option)
          .then(response => response.json())
          .then(registrarUsuarios => {
            switch (registrarUsuarios[0].affectedRows) {
              case 0:
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "No se pudo insertar el material."
                }).then(() => {
                  res.redirect("/?alerta=0");
                });
                break;
              case 1:
                Swal.fire({
                  icon: "success",
                  title: "Éxito",
                  text: "Material insertado correctamente."
                }).then(() => {
                  res.redirect("/material?alerta=1");
                });
                break;
              default:
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "Ocurrió un error al insertar el material."
                }).then(() => {
                  res.redirect("/?alerta=2");
                });
                break;
            }
          });
      } catch (error) {
        console.error(error);
        res.redirect("/?alerta=2");
      }
    };
    
    
  };

  
  
  const registrarUsuarios = async (event) => {
 
};

  

  

export const registroUsersController = {
    coordinador, administrador, aprendiz, instructor, usuariosRegistrados, registrarUsuarios
};

