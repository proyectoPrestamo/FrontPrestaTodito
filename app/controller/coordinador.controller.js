import jwt from 'jsonwebtoken';
import fetch from "node-fetch";


//FUNCIONES VISTA REPORTES
const reportes = (req, res) => {
  res.render('reportes.ejs');
};

//FUNCIONES VISTA SEGUIMIENTO
const segumiento = async (req, res) => {
  try {
    const rutaReserva = process.env.ENDPOINT + "/api/reserva";
    const rutaPrestamos = process.env.ENDPOINT + "/api/prestamos";

    const opciones = {
      method: "GET",
    };

    const [datosReserva, datosPrestamos] = await Promise.all([
      fetch(rutaReserva, opciones).then(response => response.json()),
      fetch(rutaPrestamos, opciones).then(response => response.json())
    ]);

    res.render('seguimiento', {
      datosReserva: datosReserva[0],
      datosPrestamos: datosPrestamos[0]
    });
    let token = jwt.verify(token, process.env.SECRET_KEY);
    console.log(token);
  } catch (error) {
    console.error(error);
    res.redirect("/aprobar");
  }

};

//FUNCIONES VISTA APROBAR
const aprobar = async (req, res) => {
  let datosReserva = {};
  try {

    let ruta = process.env.ENDPOINT + "/api/reserva";
    let option = {
      method: "GET",
    }

    const result = await fetch(ruta, option)
      .then(response => response.json())
      .then(data => {
        datosReserva = data[0]
        console.log(data[0]);
      })
      .catch(err => console.error("error en peticion" + err))

    res.render('aprobar', {
      "datosReserva": datosReserva
    });

  } catch (error) {
    console.error("Error al ejecutar la función 'aprobar':", error);
    res.redirect("/");
  }



}

const aceptar = async (req, res) => {


  const idReserva = req.query.id; // obtengo el ID desde la api
  const idUsuario = req.query.iduser;

  const rutaObtenerReserva = process.env.ENDPOINT + "/api/reserva/" + idReserva;
  console.log(idReserva);

  try {
    // let token =  jwt.verify(req.cookies.PRESTATODITO, process.env.SECRET_KEY);
    // let tokenUser= token.ID_USUARIO
    // console.log(tokenUser)
    // console.log(token)
    const response = await fetch(rutaObtenerReserva);
    const reserva = await response.json();

    const data = {
      "id_reserva": parseInt(idReserva),
      "estado_aprobacion": "aprobado",
      "id_usuario": parseInt(idUsuario)
    };

    const rutaAceptar = "https://hook.us1.make.com/uh0soib931ey7ajp8omq5cqll3wuxdxe";
 
        let option = { method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)}

    try {
      const responseAceptar = await fetch(rutaAceptar,option)

      const responseData = await responseAceptar.json();
      // console.log(responseData);
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  } catch (error) {
    console.error("Error al obtener la reserva:", error);
  }
};


export const coordinadorController = {
  segumiento, reportes, aprobar, aceptar
};



