import { response } from "express";
import fetch from "node-fetch";

// Rutas get

const menuInstructor = (req, res) => {
  res.render('menu-instructor.ejs');
}

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

    // Realizar solicitud POST para insertar nuevos datos
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

      }),
    };
    const postResponse = await fetch(rutaMaterial, postOptions);
    const datosMaterialPost = await postResponse.json();

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
 

  // const Obj_Material = {
  //   NOMBRE_MATERIAL:req.body.NOMBRE_MATERIAL,
  //   TIPO: req.body.TIPO,
  //   UNIDAD: req.body.UNIDAD,
  //   CANTIDAD:req.body.CANTIDAD,
  //   JORNADA: req.body.JORNADA,
  //   FECHA_RES:req.body.FECHA_RES,
  //   FORMACION:req.body.FORMACION,
  //   FICHA:req.body.FICHA,
  // }

 const Obj_Material ={
    
      "nombre" :req.body.NOMBRE_MATERIAL,
      "tipo" :req.body.TIPO,
      "color": req.body.CANTIDAD,
      "medidas" :req.body.UNIDAD
  }

  try {
  const url = "http://localhost:3000/api/material";
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Obj_Material)
  }
  await fetch(url, option) 
  .then(response => response.json())
  .then(InsertarMateriales =>{
console.log(InsertarMateriales[0])
    // Codigo de api
    switch (InsertarMateriales[0].affectedRows) {
      case 0:
     return res.redirect("/?alerta=0")

      case 1:
         return res.redirect("/material?alerta=1")

      default:
         return res.redirect("/?alerta=2")
  }
  })
} catch (error) {
    console.error(error)
}
};




export const instructorController = {
  formularioAmbiente,
  formularioControlAula,
  formularioHerramientas,
  formularioMateriales,
  menuInstructor, InsertarMateriales
};