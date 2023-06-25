import { response } from "express";
import fetch from "node-fetch";

// Rutas get

const menuInstructor = (req, res) => {
  res.render('menu-instructor.ejs');
}

const formularioComputador = async (req, res) => {
  try {
    const rutaComputador = "http://localhost:3000/api/computador";

    // Realizar solicitud GET para obtener los datos existentes
    const getOptions = {
      method: "GET",
    };
    const getResponse = await fetch(rutaComputador, getOptions);
    const datosComputador = await getResponse.json();

    res.render('prestamoPcInstructor', {
      datosComputador: datosComputador[0], // Datos existentes
      // datosMaterialPost: datosMaterialPost // Datos insertados
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

const respuestaPrestamo = ( (req, res) => {
  res.render('respuestaPrestamo.ejs');
});

const formularioControlAula = async (req, res) => {
  try {
    const rutaAmbientes = "http://localhost:3000/api/ambientes";

    const opciones = {
      method: "GET",
    };

    const [datosAmbientes] = await Promise.all([
      fetch(rutaAmbientes, opciones).then(response => response.json())
    ]);

    res.render('controlAula', {
      datosAmbientes: datosAmbientes[0]
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

const formularioMateriales = async (req, res) => {
  try {
    const rutaMaterial = "http://localhost:3000/api/material";

    // Realizar solicitud GET para obtener los datos existentes
    const getOptions = {
      method: "GET",
    };
    const getResponse = await fetch(rutaMaterial, getOptions);
    const datosMaterial = await getResponse.json();

    res.render('material', {
      datosMaterial: datosMaterial[0], // Datos existentes
      // datosMaterialPost: datosMaterialPost // Datos insertados
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

const formularioAmbiente = async (req, res) => {
  try {
    const rutaAmbientes = "http://localhost:3000/api/ambientes";

    const opciones = {
      method: "GET",
    };

    const [datosAmbientes] = await Promise.all([
      fetch(rutaAmbientes, opciones).then(response => response.json())
    ]);

    res.render('ambientes', {
      datosAmbientes: datosAmbientes[0]
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

const formularioHerramientas = async (req, res) => {
  try {
    const rutaHerramienta = "http://localhost:3000/api/herramientas";

    const opciones = {
      method: "GET",
    };

    const [datosHerramienta] = await Promise.all([
      fetch(rutaHerramienta, opciones).then(response => response.json())
    ]);

    res.render('herramientas', {
      datosHerramienta: datosHerramienta[0]
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

// Rutas post

const InsertarMateriales = async (req, res) => {
  
  try {
    let data = {
      nombre_insumo: req.body.NOMBRE_MATERIAL,
      id_usuario : req.body.DOCUMENTO,
      cantidad : req.body.CANTIDAD,
      tipo_insumo: req.body.TIPO,
      caracteristicas: req.body.UNIDAD,
      jornada: req.body.JORNADA,
      fecha_res:req.body.FECHA,
      hora_res: req.body.HORA
    };

    const url = "http://localhost:3000/api/reserva";
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
      return res.redirect("/material?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};

const InsertarHerramientas = async (req, res) => {
  
  try {
    let data = {
      nombre_insumo: req.body.NOMBRE_HERRA,
      id_usuario : req.body.DOCUMENTO,
      cantidad : req.body.CANTIDAD,
      tipo_insumo: req.body.TIPO,
      jornada: req.body.JORNADA,
      fecha_res:req.body.FECHA,
      hora_res: req.body.HORA
    };

    const url = "http://localhost:3000/api/reserva";
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
      return res.redirect("/herramientas?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};

const InsertarAmbientes = async (req, res) => {
  
  try {
    let data = {
      nombre_insumo: req.body.ID_AMBIENTES,
      id_usuario : req.body.DOCUMENTO,
      jornada: req.body.JORNADA,
      fecha_res:req.body.FECHA,
      hora_res: req.body.HORA,
      cantidad: req.body.NUMERO_APRENDICES
    };

    const url = "http://localhost:3000/api/reserva";
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
      return res.redirect("/ambientes?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
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

    const url = "http://localhost:3000/api/reserva";
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
      return res.redirect("/prestamoPcInstructor?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};






export const instructorController = {
  formularioAmbiente,
  formularioControlAula,
  formularioHerramientas,
  formularioMateriales,
  formularioComputador,
  menuInstructor, 
  InsertarMateriales, 
  respuestaPrestamo,
  InsertarHerramientas,
  InsertarAmbientes,
  InsertarComputadores 
};