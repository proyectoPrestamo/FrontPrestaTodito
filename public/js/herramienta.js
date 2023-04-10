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
  const cantidad = document.getElementById("cantidad").value;
  const fecha = document.getElementById("fecha").value;
  const ficha = document.getElementById("ficha").value;
  const formacion = document.getElementById("formacion").value;

  // Verificar si los campos están vacíos
  if (documento === ""|| cantidad === "" || fecha === "" ||  ficha === "" || formacion === "" ) {
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
