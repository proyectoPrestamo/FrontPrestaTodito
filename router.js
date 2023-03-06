const express = require('express');
const router = express.Router();

// vista principal de la pagina
router.get('/', (req,res)=>{
    res.render('index.ejs');
})


router.get('/menu', (req,res)=>{
    res.render('menu.ejs');
})

router.get('/herramientas', (req,res)=>{
    res.render('herramientas.ejs');
})

module.exports = router;