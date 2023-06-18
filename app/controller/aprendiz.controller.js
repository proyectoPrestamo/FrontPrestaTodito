import fetch from "node-fetch";

const menuAprendiz =  (req, res) => {
    res.render('menu-aprendiz.ejs');
};

const controlCompu = (req, res) => {
    res.render('controlcom.ejs');
};

export const aprendizController = {
    menuAprendiz, controlCompu
};

