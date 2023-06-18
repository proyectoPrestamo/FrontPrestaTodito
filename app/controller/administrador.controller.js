import fetch from "node-fetch";

const rolAdmin = (req, res) => {
    res.render('rol.ejs');
};





const devolucionInsumos = (req, res) => {
    res.render('devolucionInsumos.ejs');
};



export const administradorController = {
    rolAdmin, devolucionInsumos, herraAdmin, 
    materialAdmin, pcAdmin, 
    regiMaterial,
    ambienteAdmin
};

