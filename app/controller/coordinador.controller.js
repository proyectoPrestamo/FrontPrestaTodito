import fetch from "node-fetch";

const reportes =  (req, res) => {
    res.render('reportes.ejs');
};

const segumiento = async (req, res) => {
    try {
      const rutaMaterial = "http://localhost:3000/api/material";
      // const rutaHorario = "http://localhost:3000/api/horario";
  
      const opciones = {
        method: "GET",
      };
  
      const [datosMaterial] = await Promise.all([
        fetch(rutaMaterial, opciones).then(response => response.json()),
        // fetch(rutaHorario, opciones).then(response => response.json())
      ]);
  
      res.render('seguimiento', {
        datosMaterial: datosMaterial[0],
        // datosHorario: datosHorario[0]
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
    
  };

  const aprobar = async (req, res) => {
 
    try {
      let ruta = "http://localhost:3000/api/material";
      let option = {
          method: "GET",
      }
      let datos = {};
      const result = await fetch(ruta, option)
          .then(response => response.json())
          .then(data => {
              datos = data[0]
              console.log(data[0]);
          })
          .catch(err => console.error("error en peticion" + err))
  
      res.render('aprobar', {
          "datos": datos
      });
  
  } catch (error) {
      res.redirect("/");
  }
  };

  export const coordinadorController = {
    segumiento, reportes,aprobar
};



  