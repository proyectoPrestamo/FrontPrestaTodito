const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// vista principal de la pagina
router.get('/', (req, res) => {
  res.render('index.ejs');
})
//Esto es una prueba

// VISTAS INSTRUCTOR

router.get('/ambientes', (req, res) => {
  res.render('ambientes.ejs');
})

router.get('/controlAula', (req, res) => {
  res.render('controlAula.ejs');
})

router.get('/herramientas', (req, res) => {
  res.render('herramientas.ejs');
});

router.get('/material', (req, res) => {
  res.render('material.ejs');
});

router.get('/menu-instructor', (req, res) => {
  res.render('menu-instructor.ejs');
});

router.get('/registroinstructor', (req, res) => {
  res.render('registroinstructor.ejs');
});

router.get('/registrocoordinador', (req, res) => {
  res.render('registrocoordinador.ejs');
});

router.get('/prestamoPcInstructor', (req, res) => {
  res.render('prestamoPcInstructor.ejs');
})

// VISTAS COORDINADOR
router.get('/aprobar', (req, res) => {
  res.render('aprobar.ejs');
});
router.get('/reportes', (req, res) => {
  res.render('reportes.ejs');
});

router.get('/seguimiento', (req, res) => {
  res.render('seguimiento.ejs');
});

// VISTAS APRENDIZ

router.get('/prestamoPC1', (req, res) => {
  res.render('prestamoPC1.ejs');
});
router.get('/prestamoPC2', (req, res) => {
  res.render('prestamoPC2.ejs');
});
router.get('/prestamoPC3', (req, res) => {
  res.render('prestamoPC3.ejs');
});
router.get('/menu-aprendiz', (req, res) => {
  res.render('menu-aprendiz.ejs');
});
router.get('/controlcom', (req, res) => {
  res.render('controlcom.ejs');
});

// VISTAS ADMINISTRADOR

router.get('/rol', (req, res) => {
  res.render('rol');
});

router.get('/registroaprendiz', (req, res) => {
  res.render('registroaprendiz');
});

router.get('/registroinstructor', (req, res) => {
  res.render('registroinstructor');
});

router.get('/registrocoordinador', (req, res) => {
  res.render('registrocoordinador');
});

router.get('/registroadministrador', (req, res) => {
  res.render('registroadministrador');
});

router.get('/devolucionInsumos', (req, res) => {
  res.render('devolucionInsumos');
});

// router.get('/inventario', async (req, res) => {

//      try {
//        const ruta = 'http://localhost:3000/api/material';
//        const response = await fetch(ruta);
//        const data = await response.json();
//        console.log(data[0])

//        res.render('inventario', { "datos": data });
//      } catch (error) {
//        console.error('Error al obtener los datos:', error);
//        res.render('error');
//      }

//     });

router.get("/inventario", async (req, res) => {
 
      try {
          

          let ruta = "http://localhost:3000/api/material";
          let option = {
              method: "GET",
          }
          let datos = {};
          const result = await fetch(ruta, option)
              .then(response => response.json())
              .then(data => {
                  datos = data[0]
                  console.log(data[0]);
              })
              .catch(err => console.error("error en peticion" + err))

          res.render('inventario', {
              "datos": datos
          });

      } catch (error) {
          res.redirect("/");
      }
  
  
});

  router.get('/registroInventario', (req, res) => {
    res.render('registroInventario');
  });

  router.get('/registroSolicitud', (req, res) => {
    res.render('registroSolicitud');
  });



  router.post('/registroinstructor', function (req, res) {
    // Código para registrar el instructor
    // ...
    // Enviar respuesta al cliente
    res.send('Registro exitoso');
  });

  router.post('/registrocoordinador', function (req, res) {
    // Código para registrar el coordinador
    // ...
    // Enviar respuesta al cliente
    res.send('Registro exitoso');
  });

  router.post('/registroaprendiz', function (req, res) {
    // Código para registrar el coordinador
    // ...
    // Enviar respuesta al cliente
    res.send('Registro exitoso');
  });

  router.post('/registroadministrador', function (req, res) {
    // Código para registrar el coordinador
    // ...
    // Enviar respuesta al cliente
    res.send('Registro exitoso');
  });

  module.exports = router;