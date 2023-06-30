import fetch from "node-fetch";

const menuAprendiz =  (req, res) => {
    res.render('menu-aprendiz.ejs');
};

const controlCompu = (req, res) => {
    res.render('controlcom.ejs');
};



const Insertareportepc = async (req, res) => {
  
    try {
      let data = {
        id_usuario: req.body.id_usuario,
        observaciones : req.body.observaciones,
      };
  
      const url = process.env.ENDPOINT + "/api/prestamos";
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
        return res.redirect("/controlcom?alerta=1");
      }
    } catch (error) {
      console.error(error);
       // Manejar la respuesta del servidor cuando no es válida
      return res.redirect("/?alerta=2");
    }
  };

  const seguimientoA =  async (req, res) => {
     let datosReserva = {};
    try {
      const rutaReserva = process.env.ENDPOINT + "/api/reserva";
     
      // Realizar solicitud GET para obtener los datos existentes
      const getOptions = {
        method: "GET",
      };
      const getResponse = await fetch(rutaReserva, getOptions)
      const datosReserva = await getResponse.json()
     .then(response => response.json())
      .then(data => {
        datosReserva = data[0]
        console.log(data[0]);
      })
      .catch(err => console.error("error en peticion" + err))
  
      res.render('seguimientoA', {
        datosReserva: datosReserva
      });
     
    } catch (error) {
      console.error(error);
      res.redirect("/seguimientoA");
    }
  };
  

  export const aprendizController = {
    menuAprendiz, controlCompu, Insertareportepc, seguimientoA
};
  

