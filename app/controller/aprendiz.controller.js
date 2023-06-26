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

  export const aprendizController = {
    menuAprendiz, controlCompu, Insertareportepc
};
  

