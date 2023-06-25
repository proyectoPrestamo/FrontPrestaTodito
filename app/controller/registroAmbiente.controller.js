import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const registroAmbiente = async(req,res)=>{
    res.render('registroAmbiente.ejs');

   

};

  export const registroAmbienteController = {
    registroAmbiente
  };