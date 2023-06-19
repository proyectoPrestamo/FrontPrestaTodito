import fetch from "node-fetch";


// function formularioAmbiente(req, res) {
//   res.render('ambientes.ejs');
// }

const formularioControlAula =  (req, res) => {
    res.render('controlAula.ejs');
  };  

const formularioHerramientas = (req, res) => {
    res.render('herramientas.ejs');
  };

const formularioMateriales = (req, res) => {
    res.render('material.ejs');
  }  

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
  
  
  
  export const instructorController = {
    formularioAmbiente,
    formularioControlAula,
    formularioHerramientas,
    formularioMateriales,
    menuInstructor
  };