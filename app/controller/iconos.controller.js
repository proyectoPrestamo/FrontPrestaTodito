import fetch from "node-fetch";

const cambiarContrasena = (req, res) => {
  const usuarioId = req.user.id;
  const contrasenaAntigua = req.body.oldPassword;
  const nuevaContrasena = req.body.newPassword;
  const verificarContrasena = req.body.verifyPassword;

  if (nuevaContrasena !== verificarContrasena) {
    res.json({ success: false, message: 'Las contraseñas no coinciden' });
    return;
  }

  // Aquí deberías utilizar las funciones importadas para validar y actualizar la contraseña en la base de datos

  if (validarContrasena(usuarioId, contrasenaAntigua)) {
    actualizarContrasena(usuarioId, nuevaContrasena);
    res.json({ success: true, message: 'Contraseña actualizada exitosamente' });
  } else {
    res.json({ success: false, message: 'La contraseña antigua no es válida' });
  }
};




export const iconosController = {
    cambiarContrasena
  
  };