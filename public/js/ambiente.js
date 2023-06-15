document.querySelector('.forma-formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // evita el envío del formulario por defecto
  
  const ambiente = document.querySelector('#ambiente').value;
  const documento = document.querySelector('#documento').value.trim();
  const ficha = document.querySelector('#ficha').value.trim();
  const jornada = document.querySelector('#jornada').value;
  const fecha = document.querySelector('#fecha').value.trim();
  const formacion = document.querySelector('#formacion').value.trim();
  const aprendices = document.querySelector('#aprendices').value;
  
  if (ambiente === '0' || formacion === '' || documento === '' || ficha === '' || jornada === '0' || fecha === '' || aprendices === '0') {
    Swal.fire({
      icon: 'error',
      title: 'Campos incompletos',
      text: 'Por favor, complete todos los campos para poder reservar un ambiente.',
      confirmButtonColor: '#28a745',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
    });      
  } else {
    Swal.fire({
      icon: 'warning',
      title: '¿Está seguro?',
      text: '¿Desea enviar la solicitud de préstamo del ambiente?',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
    }).then((result) => {
      if (result.isConfirmed) {
        // limpiar campos
        document.querySelector('#ambiente').value = '0';
        document.querySelector('#formacion').value = '';
        document.querySelector('#documento').value = '';
        document.querySelector('#ficha').value = '';
        document.querySelector('#jornada').value = '0';
        document.querySelector('#fecha').value = '';
        document.querySelector('#aprendices').value = '0';
    
        Swal.fire({
          icon: 'success',
          title: 'Solicitud enviada',
          text: 'Su solicitud de préstamo del ambiente ha sido enviada satisfactoriamente.',
          confirmButtonColor: '#28a745',
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
        });
      }
    });
    
  }
});


const cancelarBtn = document.querySelector('.cancelar-btn');

cancelarBtn.addEventListener('click', function(event) {
event.preventDefault(); // evita el envío del formulario por defecto

// Obtener los valores de los campos
const ambiente = document.querySelector('#ambiente').value.trim();
const formacion = document.querySelector('#formacion').value.trim();
const documento = document.querySelector('#documento').value.trim();
const ficha = document.querySelector('#ficha').value.trim();
const jornada = document.querySelector('#jornada').value.trim();
const fecha = document.querySelector('#fecha').value.trim();
const aprendices = document.querySelector('#aprendices').value.trim();

// Verificar si todos los campos están vacíos
if (ambiente === '0' && formacion === '' && documento === '' && ficha === ''  && jornada === '0' && fecha === '' && aprendices === '0') {
  swal.fire({
    title: 'No hay campos que limpiar.',
    icon: 'info',
    confirmButtonColor: '#28a745',
    confirmButtonText: 'Aceptar',
    allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
  })
  return;
}

// Preguntar si se quiere limpiar los campos
swal.fire({
  title: '¿Está seguro de que desea limpiar el o los campos que ha llenado?.',
  icon: 'warning',
  confirmButtonColor: '#28a745',
  confirmButtonText: 'Aceptar',
  cancelButtonText: 'Cancelar',
  cancelButtonColor: 'dc3545',
  allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
}).then(function(value) {
  if (value) {
    // Si se acepta, vaciar los campos y mostrar mensaje
    document.querySelector('#ambiente').value = '0';
    document.querySelector('#formacion').value = '';
    document.querySelector('#documento').value = '';
    document.querySelector('#ficha').value = '';
    document.querySelector('#jornada').value = '0';
    document.querySelector('#fecha').value = '';
    document.querySelector('#aprendices').value = '0';

    swal.fire({
      title: 'Campos vaciados satisfactoriamente.',
      icon: 'success',
      confirmButtonColor: '#28a745',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
    })
  } else {
    // Si se cancela, no hacer nada
    return;
  }
});
});




// VALIDACION DE CARACTERES
// Obtiene los campos del formulario con los ID
var campos = document.querySelectorAll("#documento, #ficha");

// Agrega un evento de escucha a los campos del formulario
campos.forEach(function(campo) {
campo.addEventListener("input", function() {
// Verifica si el campo de los que solo utilizan numeros
if (this.id === "documento","ficha") {
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

import { validarDatos } from "../../controllers/ambientes.controller";

