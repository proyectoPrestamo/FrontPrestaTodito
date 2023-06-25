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

  const registrarUsuarios = async (req, res) => {
    const Obj_Usuario = {
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
  
    try {
      const url = 'http://localhost:3000/api/usuario';
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Obj_Usuario)
      };
  
      const response = await fetch(url, option);
      const data = await response.json();
  
      if (data[0].affectedRows === 1) {
        res.redirect('/rol');
      } else {
        res.redirect('/?alerta=0');
      }
    } catch (error) {
      console.error(error);
      res.redirect('/?alerta=2');
    }
  };
  
  
  

  const registrarRol = async (req, res) => {
    const nombre_rol = req.body.nombre_rol;
    const estado = "activo";
  
    try {
      const url = "http://localhost:3000/api/rol";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre_rol, estado })
      };
  
      await fetch(url, options);
      res.redirect("/rol?alerta=1");
    } catch (error) {
      console.error(error);
      res.redirect("/?alerta=2");
    }
  };
  

  

export const registroUsersController = {
    coordinador, administrador, aprendiz, instructor, usuariosRegistrados, registrarUsuarios, registrarRol
};

