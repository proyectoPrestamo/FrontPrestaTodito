// $(document).ready(function () {


//     $('#Enviar-bnt').click(function (e) {
//         e.preventDefault();

//         Swal.fire({
//           title: '¿Estas Seguro De Agregar la observacion?',
//           icon: 'warning',
//           showCancelButton: true,
//           confirmButtonColor: '#3085d6',
//           cancelButtonColor: '#d33',
//           confirmButtonText: 'Agregar'
//         }).then((result) => {
//           if (result.isConfirmed) {
//             Swal.fire(
//               'Observacion enviada Correctamente',
//               '',
//               'success',
//             )
//           }
//         }) 
//         });
//     });

//     // Obtiene los campos del formulario con los ID
// var campos = document.querySelectorAll("#ambiente");

// // Agrega un evento de escucha a los campos del formulario
// campos.forEach(function(campo) {
// campo.addEventListener("input", function() {
// // Verifica si el campo de los que solo utilizan numeros
// if (this.id === "ambiente") {
// // Reemplaza cualquier caracter que no sea un número con una cadena vacía
// this.value = this.value.replace(/[^0-9]/g, "");
// }
// });
// });
