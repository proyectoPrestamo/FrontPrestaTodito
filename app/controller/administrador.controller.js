import fetch from "node-fetch";

const rolAdmin = (req, res) => {
    res.render('rol.ejs');
};

const devolucionInsumos = (req, res) => {
    res.render('devolucionInsumos.ejs');
};

const herraAdmin = (req, res) => {
    res.render('herraAdmin.ejs');
};

const materialAdmin = (req, res) => {
    res.render('materialAdmin.ejs');
};

const pcAdmin = (req, res) => {
    res.render('pcAdmin.ejs');
};

const regiAdmin = (req, res) => {
    res.render('registroadministrador.ejs');
};

const regiAprendiz = (req, res) => {
    res.render('registroaprendiz.ejs');
};

const regiCoordinador = (req, res) => {
    res.render('registrocoordinador.ejs');
};

const regiInstructor = (req, res) => {
    res.render('registroinstructor.ejs');
};

const regiMaterial = (req, res) => {
    res.render('registroMaterial.ejs');
};

const usuariosRegistrados = (req, res) => {
    res.render('usuariosRegistrados.ejs');
};

const regiSolicitud = (req, res) => {
    res.render('registroSolicitud.ejs');
};

export const administradorController = {
    rolAdmin, devolucionInsumos, herraAdmin, 
    materialAdmin, pcAdmin, regiAdmin, 
    regiAprendiz, regiCoordinador, regiInstructor, 
    regiMaterial, usuariosRegistrados, regiSolicitud
};

