// document.querySelector('.forma-formulario').addEventListener('submit', function(event) {
  
  
//   const documento = document.querySelector('#documento').value.trim();
//   const material = document.querySelector('#material').value;
//   const unidad = document.querySelector('#unidad').value.trim();
//   const cantidad = document.querySelector('#cantidad').value.trim();
//   const jornada = document.querySelector('#jornada').value;
//   const fecha = document.querySelector('#fecha').value.trim();
//   const formacion = document.querySelector('#formacion').value.trim();
//   const ficha = document.querySelector('#ficha').value.trim();

  
//   if ( documento === '' || material === '0' || unidad === '0' ||  cantidad === '' || jornada === '0' || fecha === '' || formacion === ''|| ficha === '') {
//     Swal.fire({
//       icon: 'error',
//       title: 'Campos incompletos',
//       text: 'Por favor, complete todos los campos para poder reservar una herramienta.',
//       confirmButtonColor: '#28a745',
//       confirmButtonText: 'Aceptar',
//       allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
//     });      
//   } else {
//     Swal.fire({
//       icon: 'warning',
//       title: '¿Está seguro?',
//       text: '¿Desea enviar la solicitud de préstamo de la herramienta?',
//       showCancelButton: true,
//       confirmButtonText: 'Sí, enviar',
//       cancelButtonText: 'No, cancelar',
//       confirmButtonColor: '#28a745',
//       cancelButtonColor: '#dc3545',
//       allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // limpiar campos
//         document.querySelector('#documento').value = '';
//         document.querySelector('#material').value = '0';
//         document.querySelector('#unidad').value = '0';
//         document.querySelector('#cantidad').value = '';
//         document.querySelector('#jornada').value = '0';
//         document.querySelector('#fecha').value = '';
//         document.querySelector('#formacion').value = '';
//         document.querySelector('#ficha').value = '';
    
//         Swal.fire({
//           icon: 'success',
//           title: 'Solicitud enviada',
//           text: 'Su solicitud de préstamo de la herramienta ha sido enviada satisfactoriamente.',
//           confirmButtonColor: '#28a745',
//           confirmButtonText: 'Aceptar',
//           allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
//         });
//       }
//     });
    
//   }
// });


// const cancelarBtn = document.querySelector('.cancelar-btn');

// cancelarBtn.addEventListener('click', function(event) {
// event.preventDefault(); // evita el envío del formulario por defecto

// // Obtener los valores de los campos
// const documento = document.querySelector('#documento').value.trim();
// const material = document.querySelector('#material').value;
// const unidad = document.querySelector('#unidad').value.trim();
// const cantidad = document.querySelector('#cantidad').value.trim();
// const jornada = document.querySelector('#jornada').value;
// const fecha = document.querySelector('#fecha').value.trim();
// const formacion = document.querySelector('#formacion').value.trim();
// const ficha = document.querySelector('#ficha').value.trim();

// // Verificar si todos los campos están vacíos
// if (documento === '' && material === '0' && unidad === '0' && cantidad === '' &&  jornada === '0' && fecha === '' && formacion === ''&& ficha === '') {
//   swal.fire({
//     title: 'No hay campos que limpiar.',
//     icon: 'info',
//     confirmButtonColor: '#28a745',
//     confirmButtonText: 'Aceptar',
//     allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
//   })
//   return;
// }

// // Preguntar si se quiere limpiar los campos
// swal.fire({
//   title: '¿Está seguro de que desea limpiar el o los campos que ha llenado?.',
//   icon: 'warning',
//   confirmButtonColor: '#28a745',
//   confirmButtonText: 'Aceptar',
//   cancelButtonText: 'Cancelar',
//   cancelButtonColor: 'dc3545',
//   allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
// }).then(function(value) {
//   if (value) {
//     // Si se acepta, vaciar los campos y mostrar mensaje
//     document.querySelector('#documento').value = '';
//     document.querySelector('#material').value = '0';
//     document.querySelector('#unidad').value = '0';
//     document.querySelector('#cantidad').value = '';
//     document.querySelector('#jornada').value = '0';
//     document.querySelector('#fecha').value = '';
//     document.querySelector('#formacion').value = '';
//     document.querySelector('#ficha').value = '';       

//     swal.fire({
//       title: 'Campos vaciados satisfactoriamente.',
//       icon: 'success',
//       confirmButtonColor: '#28a745',
//       confirmButtonText: 'Aceptar',
//       allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
//     })
//   } else {
//     // Si se cancela, no hacer nada
//     return;
//   }
// });
// });

// $('#Devolver-btn').click(function (e) {
//             e.preventDefault();
    
//             Swal.fire({
//               title: '¿Estas Seguro De Realizar la peticion?',
//               icon: 'warning',
//               showCancelButton: true,
//               confirmButtonColor: '#28a745',
//               cancelButtonColor: '#d33',
//               confirmButtonText: 'Devolver',
//               allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
//             }).then((result) => {
//               if (result.isConfirmed) {
//                 Swal.fire(
//                   'Producto devuelto Correctamente',
//                   '',
//                   'success',
//                 )
//               }
//             }) 
//             });




// Obtiene los campos del formulario con los ID
var campos = document.querySelectorAll("#documento, #ficha,#cantidad");

// Agrega un evento de escucha a los campos del formulario
campos.forEach(function(campo) {
campo.addEventListener("input", function() {
// Verifica si el campo de los que solo utilizan numeros
if (this.id === "documento","ficha, cantidad") {
// Reemplaza cualquier caracter que no sea un número con una cadena vacía
this.value = this.value.replace(/[^0-9]/g, "");
}
});
});


var campos = document.querySelectorAll("#formacion");
campos.forEach(function(campo) {
campo.addEventListener("input", function() {
if (this.id === "formacion") {
this.value = this.value.replace(/[^a-zA-Z]/g, "");
}
});
});

function validarFormulario(e) {
  e.preventDefault();
 const formulario = document.querySelector("#formulario")
 formulario.submit();
 formulario.reset();
};