import fetch from "node-fetch";

const coordinador = (req, res) => {
    res.render('registrocoordinador.ejs');
};

const administrador = (req, res) => {
    res.render('registroadministrador.ejs');
};


const aprendiz = (req, res) => {
    res.render('registroaprendiz.ejs');
};

const instructor = (req, res) => {
    res.render('registroinstructor.ejs');
};

export const registroUsersController = {
    coordinador, administrador, aprendiz, instructor
};

