import express, { Router, urlencoded, json } from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import * as url from "url";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

//import rutas
import administrador from './routes/administrador.routes.js';
import registroMaterial from './routes/registroMaterial.routes.js';
import ambienteAdmin from './routes/ambienteAdmin.routes.js';
import aprendiz from './routes/aprendiz.routes.js';
import comprobante from './routes/comprobante.routes.js';
import coordi from './routes/coordinador.routes.js';
import herraAdmin from './routes/herraAdmin.routes.js';
import iconos from './routes/iconos.routes.js';
import instructor from './routes/instructor.routes.js';
import login from './routes/login.routes.js';
import materiales from './routes/materiales.routes.js';
import pcAdmin from './routes/pcAdmin.routes.js';
import pc from './routes/prestamopc.routes.js';
import registros from './routes/registros.routes.js';
import registrosUsers from './routes/registroUsers.routes.js';
import respuestaPrestamo from './routes/respuestaPrestamo.routes.js';



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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// middleware para procesar datos de formulario
app.use(urlencoded({ extended: false }));
app.use(json());

// Usar las rutas definidas en routes
app.use('/', administrador);
app.use('/', ambienteAdmin);
app.use('/', aprendiz);
app.use('/', herraAdmin);
app.use('/', registroMaterial);
app.use('/', comprobante);
app.use('/', coordi);
app.use('/', herraAdmin);
app.use('/', pcAdmin);
app.use('/', aprendiz);
app.use('/', instructor);
app.use('/', iconos);
app.use('/', instructor);
app.use('/', login);
app.use('/', materiales);
app.use('/', pcAdmin);
app.use('/', pc);
app.use('/', registros);
app.use('/', registrosUsers);
app.use('/', respuestaPrestamo);



export default app;