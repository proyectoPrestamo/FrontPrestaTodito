import fetch from "node-fetch";

const rolAdmin = (req, res) => {
    res.render('rol.ejs');
};


const ambienteAdmin = async (req, res) => {
    try {
      const rutaAmbientes = "http://localhost:3000/api/ambientes";
  
      const opciones = {
        method: "GET",
      };
  
      const [datosAmbientes] = await Promise.all([
        fetch(rutaAmbientes, opciones).then(response => response.json())
      ]);
  
      res.render('ambienteAdmin', {
        datosAmbientes: datosAmbientes[0],
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
    
  };


const devolucionInsumos = (req, res) => {
    res.render('devolucionInsumos.ejs');
};

const herraAdmin = (req, res) => {
    res.render('herraAdmin.ejs');
};

const materialAdmin = (req, res) => {
    res.render('materialAdmin.ejs');
};

const pcAdmin = (req, res) => {
    res.render('pcAdmin.ejs');
};

const regiAdmin = (req, res) => {
    res.render('registroadministrador.ejs');
};

const regiAprendiz = (req, res) => {
    res.render('registroaprendiz.ejs');
};

const regiCoordinador = (req, res) => {
    res.render('registrocoordinador.ejs');
};

const regiInstructor = (req, res) => {
    res.render('registroinstructor.ejs');
};

const regiMaterial = (req, res) => {
    res.render('registroMaterial.ejs');
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

const regiSolicitud = (req, res) => {
    res.render('registroSolicitud.ejs');
};

export const administradorController = {
    rolAdmin, devolucionInsumos, herraAdmin, 
    materialAdmin, pcAdmin, regiAdmin, 
    regiAprendiz, regiCoordinador, regiInstructor, 
    regiMaterial, usuariosRegistrados, regiSolicitud,
    ambienteAdmin
};

