import fetch from "node-fetch";

const inventario = (req, res) => {
    res.render('registroInventario.ejs');
};

const solicitud = (req, res) => {
    res.render('registroSolicitud.ejs');
};
export const registrosController = {
inventario,solicitud
};
 