document.getElementById('registro-aprendiz').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var tipo_documento = document.getElementById('tipo_documento').value;
  var numero_documento = document.getElementById('numero_documento').value;
  var correo_electronico = document.getElementById('correo_electronico').value;
  var telefono = document.getElementById('telefono').value;
  var direccion = document.getElementById('direccion').value;
  var jornada = document.getElementById('jornada').value;
  var programaformacion = document.getElementById('programaformacion').value;
  var numeroficha = document.getElementById('numeroficha').value;
  var genero = document.getElementById('genero').value;
  var contraseña = document.getElementById('contraseña').value;

  // Validar campos faltantes
  var camposFaltantes = [];

  if (nombre === '') {
    camposFaltantes.push('nombre');
  }
  if (apellido === '') {
    camposFaltantes.push('apellido');
  }

  if (tipo_documento === '') {
    camposFaltantes.push('tipo_documento');
  }
  
  if (numero_documento === '') {
    camposFaltantes.push('numero_documento');
  }

  if (correo_electronico === '') {
    camposFaltantes.push('correo_electronico');
  }

  if (telefono === '') {
    camposFaltantes.push('telefono');
  }

  if (direccion === '') {
    camposFaltantes.push('direccion');
  }

  if (jornada === '') {
    camposFaltantes.push('jornada');
  }

  if (programaformacion === '') {
    camposFaltantes.push('programaformacion');
  }

  if (numeroficha === '') {
    camposFaltantes.push('numeroficha');
  }

  if (genero === '') {
    camposFaltantes.push('genero');
  }

  if (contraseña === '') {
    camposFaltantes.push('contraseña');
  }

  if (camposFaltantes.length > 0) {
    var mensaje = 'Los siguientes campos son obligatorios: ' + camposFaltantes.join(', ');
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: mensaje,
      confirmButtonColor: '#28A745',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    });
    return false;
  } else {
    var data = {
      id: numero_documento,
      nombre: nombre,
      apellido: apellido,
      tipo_documento: tipo_documento,
      correo: correo_electronico,
      telefono: telefono,
      direccion: direccion,
      jornada: jornada,
      programa_formacion: programaformacion,
      numero_ficha: numeroficha,
      genero: genero,
      contrasena: contraseña
    };
// Realizar la petición POST utilizando fetch
fetch('http://localhost:3000/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
  // Mostrar mensaje de éxito
  Swal.fire({
    icon: 'success',
    title: '¡Registro exitoso!',
    text: 'El registro se ha realizado correctamente.',
    confirmButtonColor: '#28A745',
    confirmButtonText: 'Aceptar',
    allowOutsideClick: false
  });

  // Limpiar los campos del formulario
  document.getElementById('nombre').value = '';
  document.getElementById('color').value = '';
  document.getElementById('medidas').value = '';
  document.getElementById('imagen').value = '';
})
.catch(error => {
  // Mostrar mensaje de error
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Hubo un error al realizar el registro.',
    confirmButtonColor: '#28A745',
    confirmButtonText: 'Aceptar',
    allowOutsideClick: false
  });
});
}
});

  // Evento click para el botón de regresar
  $('#btn-regresar').click(function (e) {
    e.preventDefault(); 
    // Esta función se ejecuta cuando se hace clic en el botón de regresar

    // Mostrar ventana emergente de SweetAlert
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Realmente deseas regresar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Sí, regresar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      // Si se hace clic en el botón de confirmación, redirigir a la vista anterior
      if (result.isConfirmed) {
        window.location.href = "/rol";
                // Redirige a la ruta /rol
      } 
    });
  });

  

var campos = document.querySelectorAll("#nombre, #apellido, #programaformacion, #direccion, #correo_electronico, #telefono, #numeroficha, #contraseña, #numero_documento");
  campos.forEach(function(campo) {
    campo.addEventListener("input", function() {
      if (this.id === "nombre" || this.id === "apellido" || this.id === "programaformacion") {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/g, "");
      } else if (this.id === "direccion") {
        this.value = this.value.replace(/[^a-zA-Z0-9.,#\/\-\_\s]/g, "");
      } else if (this.id === "correo_electronico") {
        this.value = this.value.replace(/[^a-zA-Z0-9.\-\_\@]/g, "");
      } else if (this.id === "telefono" || this.id === "numeroficha" || this.id === "numero_documento") {
        this.value = this.value.replace(/[^0-9]/g, "");
      } else if (this.id === "contraseña") {
        this.value = this.value.replace(/[^a-zA-Z0-9.]/g, "");
      }
    });
  });
