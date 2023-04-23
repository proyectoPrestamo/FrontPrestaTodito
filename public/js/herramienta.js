$(document).ready(function () {


    $('#Cancelar-btn').click(function (e) {
        e.preventDefault();

        Swal.fire({
          title: '¿Estas Seguro De Rechazar Este Insumo?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Rechazar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Insumo Rechazado Correctamente',
              '',
              'success',
            )
          }
        }) 
        });
    });

    $('#Reservar-btn').click(function (e) {
        e.preventDefault();

        Swal.fire({
          title: '¿Estas Seguro De Realizar la peticion?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Reservar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Reservado Correctamente',
              '',
              'success',
            )
          }
        }) 
        });


const formulario = document.getElementById("formulario");
const botonEnviar = document.getElementById("Reservar-btn");





// Agregar un evento de escucha al botón de envío
botonEnviar.addEventListener("click", function(event) {
  // Detener el envío del formulario
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const documento = document.getElementById("documento").value;
  const herramienta = document.getElementById("herramienta").value;
  const cantidad = document.getElementById("cantidad").value;
  const jornada = document.getElementById("jornada").value;
  const fecha = document.getElementById("fecha").value;
  const formacion = document.getElementById("formacion").value;
  const ficha = document.getElementById("ficha").value;
  

  // Verificar si los campos están vacíos
  if (documento === ""|| herramienta === "" ||  jornada === "" ||cantidad === "" || fecha === "" ||  ficha === "" || formacion === "" ) {
    // Mostrar un mensaje de alerta
    Swal.fire({
      title: 'Error',
      text: 'Debes llenar todos los campos antes de continuar',
      icon: 'error',
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'OK',
      focusConfirm: false // Evita que el foco se mueva al botón "OK"
    });
  } 
});

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


