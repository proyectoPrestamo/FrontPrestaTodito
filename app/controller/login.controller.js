import fetch from "node-fetch";



const validarUser = (req, res) => {
    res.render('index.ejs');
};


const validacionLogin = async (req,res) =>{
    let id_usuario = req.body.id_usuario
    let contrasena = req.body.contrasena
 
}


// const login = async (req, res) => {
//     try {
        
        
//         // Obtener los datos del formulario HTML
//         const id_usuario = req.body.id_usuario;
//         const contrasena = req.body.contrasena;
//         const rol = req.body.id_rol;
        
//         const rutaUser = "http://localhost:3000/api/usuarios/"+ id_usuario;
//         const datosUser = {
//             id_usuario: id_usuario,
//             contrasena: contrasena,
//             id_rol: id_rol,

//         };

//         const opciones = {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             // body: JSON.stringify(datosUser)
//         };

//         const response = await fetch(rutaUser, opciones);
//         const result = await response.json();

//         res.render('login', {
//             datosUser: result,
//             // datosHorario: datosHorario[0]
//         });
//     } catch (error) {
//         console.error(error);
//         res.redirect("/");
//     }
// };


export const loginController = {
    validacionLogin
};
