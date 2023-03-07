const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const app = express();

//prueba
// Establecer la carpeta pública
app.use('/resources', express.static('public'));

// Establecer el motor de plantillas
app.set('view engine', 'ejs');

// Middleware para procesar datos de formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Agregar las rutas definidas en el módulo router
app.use('/', router);

router.get('/rol', (req, res) => {
  const title = "Selección de Rol";
  res.render('Rol', { title });
});

app.get('/', function(req, res) {
  res.render('rol');
});

app.get('/registroaprendiz', function(req, res) {
  res.render('registroaprendiz');
});

app.get('/registroinstructor', function(req, res) {
  res.render('registroinstructor');
});

app.get('/registrocoordinador', function(req, res) {
  res.render('registrocoordinador');
});
// Redirigir si la url no está definida





