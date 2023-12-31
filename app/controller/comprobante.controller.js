import fetch from "node-fetch";
import Express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import axios from "axios";
import PDFKit from "pdfkit"
import fs from "fs"
import excel from "exceljs"



const generarPdf = async (req, res) => {
  try {
    // Hacer una solicitud GET a la API para obtener la información
    const response = await axios.get(process.env.ENDPOINT + '/api/material');
    const materialData = response.data[0]; // Obtener el primer elemento del arreglo

    // Crear un nuevo documento PDF
    const doc = new PDFKit();

    // Stream el contenido PDF a la respuesta HTTP
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=material.pdf');
    doc.pipe(res);

    // Agregar el logo del proyecto
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const logoHeight = 50;
    const logoWidth = 50;
    const imagePath = 'D:/Users/lenovo/Documents/FRONT Y BACK TODITO/FRONT-TODITO/public/img/logoSena.png';
    //const imagePath = path.join(__dirname, '..', 'public', 'img', 'logoSena.png');

    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;

    const logoX = (pageWidth - logoWidth) / 2;
    const logoY = (pageHeight - logoHeight) / 50;

    doc.image(imagePath, logoX, logoY, { width: logoWidth, height: logoHeight });

    // Agregar el encabezado
    doc.fontSize(24).text('Registro de materiales', { align: 'center' });

    // Agregar contenido al PDF
    doc.moveDown(2); // Espacio adicional entre el encabezado y la información del material
    doc.fontSize(18).text('Información del material', { align: 'center' });
    materialData.forEach((material) => {
      doc.fontSize(12).text(`Id del material: ${material.ID_MATERIAL}`);
      doc.fontSize(12).text(`Nombre del material: ${material.NOMBRE}`);
      doc.fontSize(12).text(`Tipo de material: ${material.TIPO}`);
      doc.fontSize(12).text(`Color del material: ${material.COLOR}`);
      doc.fontSize(12).text(`Medida del material: ${material.MEDIDAS}`);

      doc.moveDown(); // Agrega un espacio entre cada material
    });

    // Agregar el pie de página
    const generador = 'prestaTodito';
    const fechaImpresion = new Date().toLocaleString();
    doc.fontSize(10).text(`Generado por: ${generador}`);
    doc.fontSize(10).text(`Fecha y hora de impresión: ${fechaImpresion}`, { align: 'right' });

    // Finalizar el PDF
    doc.end();
  } catch (error) {
    // Manejar errores de solicitud o cualquier otro error
    console.error(error);
    res.status(500).send('Error al generar el PDF');
  }
};

  
  const generarexcel = async (req, res) => {
    try {
      // Hacer una solicitud GET a la API para obtener la información
      const response = await axios.get(process.env.ENDPOINT + '/api/material');
      const materialData = response.data[0]; // Obtener el primer elemento del arreglo
  
      // Crear un nuevo libro de Excel
      const workbook = new excel.Workbook();
      const worksheet = workbook.addWorksheet('Material');
  
       // Mostrar información por consola
       console.log('Información del material:');
       materialData.forEach((material) => {
         console.log(`ID: ${material.ID_MATERIAL}`);
         console.log(`Nombre del material: ${material.NOMBRE}`);
         console.log(`Tipo de material: ${material.TIPO}`);
         console.log(`Estado del material: ${material.ESTADO}`);
         console.log(`Cantidad del material: ${material.CANTIDAD}`);
         console.log(`Color del material: ${material.COLOR}`);
         console.log(`Medida del material: ${material.MEDIDA}`);
       });
  
      // Agregar encabezados de columna
      worksheet.columns = [
        { header: 'ID', key: 'ID_MATERIAL', width: 10 },
        { header: 'Nombre del material', key: 'NOMBRE', width: 20 },
        { header: 'Tipo de material', key: 'TIPO', width: 15 },
        { header: 'Estado del material', key: 'ESTADO', width: 15 },
        { header: 'Cantidad del material', key: 'CANTIDAD', width: 15 },
        { header: 'Color del material', key: 'COLOR', width: 15 },
        { header: 'Medida del material', key: 'MEDIDA', width: 15 },
      ];
  
      // Agregar filas con datos
      materialData.forEach((material) => {
        worksheet.addRow({
          ID_MATERIAL: material.ID_MATERIAL,
          NOMBRE: material.NOMBRE,
          TIPO: material.TIPO,
          ESTADO: material.ESTADO,
          CANTIDAD: material.CANTIDAD,
          COLOR: material.COLOR,
          MEDIDA: material.MEDIDA,
        });
      });
  
      // Stream el contenido Excel a la respuesta HTTP
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename=material.xlsx');
      await workbook.xlsx.write(res);
  
      // Finalizar la escritura del libro de Excel
      res.end();
    } catch (error) {
      // Manejar errores de solicitud o cualquier otro error
      console.error(error);
      res.status(500).send('Error al generar el archivo Excel');
    }
  };
  
  export const comprobanteController = {
    generarPdf,
    generarexcel
  };
