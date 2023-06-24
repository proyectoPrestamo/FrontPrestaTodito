import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const registroMaterial = async(req,res)=>{
    res.render('registroMaterial.ejs');

   

};

  export const registroMaterialController = {
    registroMaterial
  };