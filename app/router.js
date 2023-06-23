const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const axios = require('axios');
const PDFKit = require('pdfkit');
const excel = require('exceljs');
const path = require('path');

// vista principal de la pagina

// VISTAS ADMINISTRADOR
router.get('/rol', (req, res) => {
  res.render('rol');
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


  

  router.get('/registroSolicitud', (req, res) => {
    res.render('registroSolicitud');
  });

  


  module.exports = router;