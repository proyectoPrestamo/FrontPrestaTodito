import fetch from "node-fetch";
import  Express  from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const rolAdmin = (req, res) => {
    res.render('rol.ejs');
};




const devolucionInsumos = (req, res) => {
    res.render('devolucionInsumos.ejs');
};







export const administradorController = {
    rolAdmin, devolucionInsumos
};


