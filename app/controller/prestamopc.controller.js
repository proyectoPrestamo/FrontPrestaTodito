import fetch from "node-fetch";

const formularioPC = async (req, res) => {
  try {
    const rutaComputador = process.env.ENDPOINT + process.env.ENDPOINT + "/api/computador";

    // Realizar solicitud GET para obtener los datos existentes
    const getOptions = {
      method: "GET",
    };
    const getResponse = await fetch(rutaComputador, getOptions);
    const datosComputador = await getResponse.json();

    res.render('prestamoPC2', {
      datosComputador: datosComputador[0], // Datos existentes
      // datosMaterialPost: datosMaterialPost // Datos insertados
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

  const InsertarComputadores = async (req, res) => {
  
    try {
      let data = {
        nombre_insumo: req.body.ID_COMPUTADOR,
        id_usuario : req.body.DOCUMENTO,
        caracteristicas : req.body.MARCA,
        jornada: req.body.JORNADA,
        fecha_res:req.body.FECHA,
        hora_res: req.body.HORA,
        tiempo_requerido: req.body.TIEMPO
      };
  
      const url = process.env.ENDPOINT + process.env.ENDPOINT + "/api/reserva";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        
        body: JSON.stringify(data)
        
      };
      console.log(data);
      const response = await fetch(url, options)
      .then(response => response.json())
      .then(data =>{
        console.log(data);
      })
      .catch(error => console.log(error))
  
      // Inspeccionar la respuesta del servidor
     
  
      if (data && data > 0) {
      } else {
        // Manejar la respuesta del servidor cuando si es valida
        return res.redirect("/prestamoPC2?alerta=1");
      }
    } catch (error) {
      console.error(error);
       // Manejar la respuesta del servidor cuando no es válida
      return res.redirect("/?alerta=2");
    }
  };

export const prestamoPcController = {
    formularioPC, InsertarComputadores
}

