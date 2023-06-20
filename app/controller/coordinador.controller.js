import fetch from "node-fetch";

const reportes =  (req, res) => {
    res.render('reportes.ejs');
};

const segumiento = async (req, res) => {
    try {
      const rutaMaterial = "http://localhost:3000/api/material";
       const rutaPrestamos = "http://localhost:3000/api/prestamos";
  
      const opciones = {
        method: "GET",
      };
  
      const [datosMaterial, datosPrestamos] = await Promise.all([
        fetch(rutaMaterial, opciones).then(response => response.json()),
        fetch(rutaPrestamos, opciones).then(response => response.json())
      ]);
  
      res.render('seguimiento', {
        datosMaterial: datosMaterial[0],
        datosPrestamos: datosPrestamos[0]
      });
    } catch (error) {
      console.error(error);
      res.redirect("/aprobar");
    }
    
  };

  const aprobar = async (req, res) => {
    try {
      const rutaMaterial = "http://localhost:3000/api/material";
      const rutaInventario = "http://localhost:3000/api/inventario";
  
      const opciones = {
        method: "GET",
      };
  
      const [datosMaterial, datosInventario] = await Promise.all([
        fetch(rutaMaterial, opciones).then(response => response.json()),
        fetch(rutaInventario, opciones).then(response => response.json())
      ]);
  
      res.render('aprobar', {
        datosMaterial: datosMaterial[0],
        datosInventario: datosInventario[0]
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
    
  };

 

  

  export const coordinadorController = {
    segumiento, reportes,aprobar
};



  