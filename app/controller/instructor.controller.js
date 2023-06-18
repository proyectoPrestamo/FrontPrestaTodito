import fetch from "node-fetch";

const formularioAmbiente = (req, res) => {
    res.render('ambientes.ejs');
  };

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


  const insertarAmbiente = async (req, res) => {
    try {
      let ruta = "http://localhost:3000/api/ambientes";
      let option = {
        method: "GET",
      };
  
      let datos = {};
  
      const res = await fetch(ruta, option)
        .then((response) => response.json())
        .then((data) => {
          datos = data[0];
          console.log(data[0]);
        })
        .catch((err) => console.error("error en peticion" + err));
  
        res.render('ambientes', {
          datos: datos && datos.length > 0 ? datos : {}
        });
    } catch (error) {
      res.redirect("/");
    }
  };
  

  export const instructorController = {
formularioAmbiente, formularioControlAula, 
formularioHerramientas, formularioMateriales, 
menuInstructor, insertarAmbiente 
  };