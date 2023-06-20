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


// notificarBtn.addEventListener('click', () => {
//   Notification.requestPermission().then(resultado => {
//     console.log('Respuesta: ', resultado);
//   });
// });

// const badge = document.getElementById('badge');

// function mostrarNotificacion() {
//   if (Notification.permission === 'granted') {
//     const notificacion = new Notification('¡Nueva Notificación!', {
//       icon: '/img/sena.jpg',
//       body: 'Solicitud de prestmo de insumos'
//     });

//     notificacion.onclick = function() {
//       window.open('http://google.com');
//     };
//   }
// }

// badge.addEventListener('click', () => {
//   Notification.requestPermission().then(resultado => {
//     console.log('Respuesta: ', resultado);
//     mostrarNotificacion();
//   });
// });

export const iconosController = {
    cambiarContrasena
  
  };