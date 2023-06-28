import fetch from "node-fetch";

//FUNCIONES VISTA REPORTES
const reportes =  (req, res) => {
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

  const obtenerIdReservaDesdeBD = () => {
    return new Promise((resolve, reject) => {
      const query = 'CALL ObtenerIdReserva(?)';
  
      connection.query(query, [criterio_de_seleccion], (err, results) => {
        if (err) {
          console.error('Error al obtener el ID de reserva desde la base de datos:', err);
          reject(err);
        } else {
          if (results.length > 0) {
            const idReserva = results[0][0].id_reserva;
            resolve(idReserva);
          } else {
            console.error('No se encontró el ID de reserva en la base de datos');
            reject(new Error('No se encontró el ID de reserva'));
          }
        }
      });
    });
  };
  

// Ruta para actualizar el estado de aprobación
// const actualizarEstadoAprobacion  = async (req, res) => {
//   const idReserva = await obtenerIdReservaDesdeBD();
//   const estadoAprobacion = 'aprobado'; // el estado de aprobacion se define como aprobado

//   try {
//     const url = process.env.ENDPOINT + `/api/estado/${id}`;  //url de la api
//     const opciones = {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ ESTADO_APROBACION: estadoAprobacion })
//     };

//     // Realiza la solicitud a la API para actualizar el estado de aprobación
//     const response = await fetch(url, opciones);
//     const data = await response.json();

//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Ocurrió un error al actualizar el estado de aprobación.' });
//   }
// };
  

  export const coordinadorController = {
     segumiento, reportes,aprobar//actualizarEstadoAprobacion
};



  