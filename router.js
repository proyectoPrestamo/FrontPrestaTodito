const express = require('express');
const router = express.Router();

// vista principal de la pagina
router.get('/', (req,res)=>{
    res.render('index.ejs');
})
//E


router.get('/menu', (req,res)=>{
    res.render('menu.ejs');
})

router.get('/herramientas', (req,res)=>{
    res.render('herramientas.ejs');
})

router.get('/registroaprendiz', (req, res) => {
    res.render('registroaprendiz.ejs');
  });
  
  router.get('/registroinstructor', (req, res) => {
    res.render('/registroinstructor.ejs');
  });
  
  router.get('/registrocoordinador', (req, res) => {
      res.render('/registrocoordinador.ejs');
    });
  

module.exports = router;