import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const pcAdmin = async (req, res) => {
 
    try {
        
  
        let ruta = "http://localhost:3000/api/computador";
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
  
        res.render('pcAdmin', {
            "datos": datos
        });
  
    } catch (error) {
        res.redirect("/");
    }
  
  
  };

  export const pcAdminController = {
    pcAdmin
  };