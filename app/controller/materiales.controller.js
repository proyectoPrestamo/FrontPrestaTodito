import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const materiales = async (req, res) => {



  try {


    let ruta = "http://localhost:3000/api/material";
    let option = {
      method: "GET",
    }
    let datos = {};
    const result = await fetch(ruta, option)
      .then(response => response.json())
      .then(data => {
        datos = data[0]
        console.log(data[0]);
      })
      .catch(err => console.error("error en peticion" + err))

    res.render('materialAdmin', {
      "datos": datos
    });

  } catch (error) {
    res.redirect("/");
  }



  // Selecciona todos los elementos con la clase "delete-icon"


  //V3



};

export const materialesController = {
  materiales
};

