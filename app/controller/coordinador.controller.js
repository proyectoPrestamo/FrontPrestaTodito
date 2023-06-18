import fetch from "node-fetch";

const reportes =  (req, res) => {
    res.render('reportes.ejs');
};

const segumiento = async (req, res) => {
    try {
      const rutaMaterial = "http://localhost:3000/api/material";
      const rutaHorario = "http://localhost:3000/api/horario";
  
      const opciones = {
        method: "GET",
      };
  
      const [datosMaterial, datosHorario] = await Promise.all([
        fetch(rutaMaterial, opciones).then(response => response.json()),
        fetch(rutaHorario, opciones).then(response => response.json())
      ]);
  
      res.render('seguimiento', {
        datosMaterial: datosMaterial[0],
        datosHorario: datosHorario[0]
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
    
  };

  export const coordinadorController = {
    segumiento, reportes
};



  