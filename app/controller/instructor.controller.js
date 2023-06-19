import fetch from "node-fetch";

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
      body: JSON.stringify({}),
    };
    const postResponse = await fetch(rutaMaterial, postOptions);
    const datosMaterialPost = await postResponse.json();

    res.render('material', {
      datosMaterial: datosMaterial[0], // Datos existentes
      datosMaterialPost: datosMaterialPost // Datos insertados
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};


const menuInstructor =  (req, res) => {
    res.render('menu-instructor.ejs');
  }



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
      const rutaHerramienta= "http://localhost:3000/api/herramientas";
  
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
  
  
  
  
  export const instructorController = {
    formularioAmbiente,
    formularioControlAula,
    formularioHerramientas,
    formularioMateriales,
    menuInstructor
  };