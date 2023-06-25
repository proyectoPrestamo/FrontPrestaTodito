import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const registroHerramienta = async(req,res)=>{
    res.render('registroHerramienta.ejs');

   

};

  export const registroHerramientaController = {
    registroHerramienta
  };