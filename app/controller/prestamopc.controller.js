import fetch from "node-fetch";

const formularioPC = (req, res) => {
    res.render('prestamoPC2.ejs');
  }

export const prestamoPcController = {
    formularioPC
}