import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const registroAdministrador = async(req,res)=>{
    res.render('registroadministrador.ejs');

   

};

  export const registroAdministradorController = {
    registroAdministrador
  };