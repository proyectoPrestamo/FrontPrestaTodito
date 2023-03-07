const express = require('express');
const router = express.Router();

// vista principal de la pagina
router.get('/', (req,res)=>{
    res.render('index.ejs');
})
//E

// VISTAS INSTRUCTOR

router.get('/ambientes', (req,res)=>{
    res.render('ambientes.ejs');
})

router.get('/controlAula', (req,res)=>{
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
    res.render('/registroinstructor.ejs');
  });
  
  router.get('/registrocoordinador', (req, res) => {
      res.render('/registrocoordinador.ejs');
    });
  

module.exports = router;