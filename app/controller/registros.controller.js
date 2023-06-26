import fetch from "node-fetch";

const inventario = (req, res) => {
    res.render('registroInventario.ejs');
};

const solicitud = (req, res) => {
    res.render('registroSolicitud.ejs');
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


const regiMaterial = (req, res) => {
    res.render('registroMaterial.ejs');
};

const ambienteAdmin = async (req, res) => {
    try {
      const rutaAmbientes = process.env.ENDPOINT + "/api/ambientes";
  
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
export const registrosController = {
inventario,solicitud,herraAdmin,materialAdmin,pcAdmin,regiMaterial,ambienteAdmin
};
 