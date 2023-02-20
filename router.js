const express = require('express');
const router = express.Router();

// vista principal de la pagina
router.get('/', (req,res)=>{
    res.render('index.ejs');
})


router.get('/holiwis', (req,res)=>{
    res.render('holiwis.ejs');
})

module.exports = router;