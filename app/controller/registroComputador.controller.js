import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const registroComputador = async(req,res)=>{
    res.render('registroPc.ejs');

   

};

  export const registroComputadorController = {
    registroComputador
  };