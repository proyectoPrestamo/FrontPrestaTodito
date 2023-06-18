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
    
  };

export const registroUsersController = {
    coordinador, administrador, aprendiz, instructor,usuariosRegistrados
};

