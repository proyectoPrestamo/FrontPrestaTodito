import express, { Router, urlencoded, json } from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv'
import * as url from "url";

//import rutas
import administrador from './routes/administrador.routes.js';
import aprendiz from './routes/aprendiz.routes.js';
import instructor from './routes/instructor.routes.js';
import pc from './routes/prestamopc.routes.js';
import login from './routes/login.routes.js';
import coordi from './routes/coordinador.routes.js';
import registros from './routes/registros.routes.js';
import registrosUsers from './routes/registroUsers.routes.js';
import administrador from './routes/administrador.routes.js';


// const router = Router();
dotenv.config();
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

//configuracion
app.set("port", process.env.PORT || 9999);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/resources', express.static('public'));


// Middleware para procesar datos de formulario
app.use(urlencoded({ extended: false }));
app.use(json());

// Usar las rutas definidas en routes
app.use('/', aprendiz);
app.use('/', administrador);
app.use('/', instructor);
app.use('/', pc);
app.use('/', login);
app.use('/', coordi);
app.use('/', registros);
app.use('/', registrosUsers);
app.use('/', administrador);










// router.get('/rol', (req, res) => {
//   const title = "Selección de Rol";
//   res.render('Rol', { title });
// });

// app.get('/', function(req, res) {
//   res.render('rol');
// });



// app.get('/devolucionInsumos', function(req, res) {
//   res.render('devolucionInsumos');
// });

// app.get('/inventario', function(req, res) {
//   res.render('inventario');
// });





export default app;