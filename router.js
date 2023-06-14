const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const axios = require('axios');
const PDFKit = require('pdfkit');
const excel = require('exceljs');
const path = require('path');

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

router.get('/reportes', (req, res) => {
  res.render('reportes.ejs');
});



router.get("/seguimiento", async (req, res) => {
  try {
    const rutaMaterial = "http://localhost:3000/api/material";
    const rutaHorario = "http://localhost:3000/api/horario";

    const opciones = {
      method: "GET",
    };

    const [datosMaterial, datosHorario] = await Promise.all([
      fetch(rutaMaterial, opciones).then(response => response.json()),
      fetch(rutaHorario, opciones).then(response => response.json())
    ]);

    res.render('seguimiento', {
      datosMaterial: datosMaterial[0],
      datosHorario: datosHorario[0]
    });
  } catch (error) {
    res.redirect("/");
  }
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

router.get("/pcAdmin", async (req, res) => {
 
  try {
      

      let ruta = "http://localhost:3000/api/computador";
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

      res.render('pcAdmin', {
          "datos": datos
      });

  } catch (error) {
      res.redirect("/");
  }


});

router.post("/generarpdf", async (req, res) => {
  try {
    // Hacer una solicitud GET a la API para obtener la información
    const response = await axios.get('http://localhost:3000/api/material');
    const materialData = response.data[0]; // Obtener el primer elemento del arreglo

    // Crear un nuevo documento PDF
    const doc = new PDFKit();

    // Stream el contenido PDF a la respuesta HTTP
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=material.pdf');
    doc.pipe(res);

    // Agregar el logo del proyecto
    const imagePath = path.join(__dirname, 'public', 'img', 'logoSena.png');
    const logoWidth = 200;
    const logoHeight = 100;

    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;

    const logoX = (pageWidth - logoWidth) / 2;
    const logoY = (pageHeight - logoHeight) / 2;

    doc.image(imagePath, logoX, logoY, { width: logoWidth, height: logoHeight });

    // Agregar el encabezado
    doc.fontSize(24).text('Registro de materiales', { align: 'center' });

    // Agregar contenido al PDF
    doc.moveDown(2); // Espacio adicional entre el encabezado y la información del material
    doc.fontSize(18).text('Información del material', { align: 'center' });
    materialData.forEach((material) => {
      doc.fontSize(12).text(`ID: ${material.ID_MATERIAL}`);
      doc.fontSize(12).text(`Nombre del material: ${material.NOMBRE}`);
      doc.fontSize(12).text(`Tipo de material: ${material.TIPO}`);
      doc.fontSize(12).text(`Estado del material: ${material.ESTADO}`);
      doc.fontSize(12).text(`Cantidad del material: ${material.CANTIDAD}`);
      doc.fontSize(12).text(`Color del material: ${material.COLOR}`);
      doc.fontSize(12).text(`Medida del material: ${material.MEDIDA}`);

      doc.moveDown(); // Agrega un espacio entre cada material
    });

    // Agregar el pie de página
    const generador = 'prestaTodito';
    const fechaImpresion = new Date().toLocaleString();
    doc.fontSize(10).text(`Generado por: ${generador}`);
    doc.fontSize(10).text(`Fecha y hora de impresión: ${fechaImpresion}`, { align: 'right' });

    // Finalizar el PDF
    doc.end();
  } catch (error) {
    // Manejar errores de solicitud o cualquier otro error
    console.error(error);
    res.status(500).send('Error al generar el PDF');
  }
});

router.post('/generarexcel', async (req, res) => {
  try {
    // Hacer una solicitud GET a la API para obtener la información
    const response = await axios.get('http://localhost:3000/api/material');
    const materialData = response.data[0]; // Obtener el primer elemento del arreglo

    // Crear un nuevo libro de Excel
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Material');

     // Mostrar información por consola
     console.log('Información del material:');
     materialData.forEach((material) => {
       console.log(`ID: ${material.ID_MATERIAL}`);
       console.log(`Nombre del material: ${material.NOMBRE}`);
       console.log(`Tipo de material: ${material.TIPO}`);
       console.log(`Estado del material: ${material.ESTADO}`);
       console.log(`Cantidad del material: ${material.CANTIDAD}`);
       console.log(`Color del material: ${material.COLOR}`);
       console.log(`Medida del material: ${material.MEDIDA}`);
     });

    // Agregar encabezados de columna
    worksheet.columns = [
      { header: 'ID', key: 'ID_MATERIAL', width: 10 },
      { header: 'Nombre del material', key: 'NOMBRE', width: 20 },
      { header: 'Tipo de material', key: 'TIPO', width: 15 },
      { header: 'Estado del material', key: 'ESTADO', width: 15 },
      { header: 'Cantidad del material', key: 'CANTIDAD', width: 15 },
      { header: 'Color del material', key: 'COLOR', width: 15 },
      { header: 'Medida del material', key: 'MEDIDA', width: 15 },
    ];

    // Agregar filas con datos
    materialData.forEach((material) => {
      worksheet.addRow({
        ID_MATERIAL: material.ID_MATERIAL,
        NOMBRE: material.NOMBRE,
        TIPO: material.TIPO,
        ESTADO: material.ESTADO,
        CANTIDAD: material.CANTIDAD,
        COLOR: material.COLOR,
        MEDIDA: material.MEDIDA,
      });
    });

    // Stream el contenido Excel a la respuesta HTTP
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=material.xlsx');
    await workbook.xlsx.write(res);

    // Finalizar la escritura del libro de Excel
    res.end();
  } catch (error) {
    // Manejar errores de solicitud o cualquier otro error
    console.error(error);
    res.status(500).send('Error al generar el archivo Excel');
  }
});



router.get("/ambienteAdmin", async (req, res) => {
 
  try {
      

      let ruta = "http://localhost:3000/api/ambientes";
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

      res.render('ambienteAdmin', {
          "datos": datos
      });

  } catch (error) {
      res.redirect("/");
  }


});
router.get("/materialAdmin", async (req, res) => {
 
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

          res.render('materialAdmin', {
              "datos": datos
          });

      } catch (error) {
          res.redirect("/");
      }
  
  
});

router.get("/herraAdmin", async (req, res) => {
 
  try {
      

      let ruta = "http://localhost:3000/api/herramientas";
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

      res.render('herraAdmin', {
          "datos": datos
      });

  } catch (error) {
      res.redirect("/");
  }


});

router.get("/usuariosRegistrados", async (req, res) => {
 
  try {
      

      let ruta = "http://localhost:3000/api/usuario";
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

      res.render('usuariosRegistrados', {
          "datos": datos
      });

  } catch (error) {
      res.redirect("/");
  }


});

router.get("/aprobar", async (req, res) => {
 
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

    res.render('aprobar', {
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