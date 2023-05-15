$(document).ready(function () {
  $('#registro-aprendiz').submit(function (e) {
    e.preventDefault(); // Evitar que se envíe el formulario de manera convencional

    var nombre = $('#nombre').val().trim();
    var apellido = $('#apellido').val().trim();
    var tipo_documento = $('#tipo_documento').val().trim();
    var numero_documento = $('#numero_documento').val().trim();
    var correo_electronico = $('#correo_electronico').val().trim();
    var telefono = $('#telefono').val().trim();
    var direccion = $('#direccion').val().trim();
    var jornada = $('#jornada').val().trim();
    var programaformacion = $('#programaformacion').val().trim();
    var numeroficha = $('#numeroficha').val().trim();
    var genero = $('#genero').val().trim();
    var contraseña = $('#contraseña').val().trim();

 // Validar que los campos no estén vacíos, excepto el botón de cancelar
 var isValid = true;
 $('#registro-aprendiz input:not(.btn-regresar)').each(function() {
   if ($(this).val().trim() === '') {
     isValid = false;
     $(this).addClass('is-invalid');
     $(this).siblings('.invalid-feedback').show();
   } else {
     $(this).removeClass('is-invalid');
     $(this).siblings('.invalid-feedback').hide();
   }
 });

 if (!isValid) {
   return;
 }

    if (nombre === '' || apellido === '' || tipo_documento === '' || numero_documento === '' || correo_electronico === '' || telefono === '' || direccion === '' || jornada === '' || programaformacion === '' || numeroficha === '' || genero === '' || contraseña === '') {
      return;
    }

    $.ajax({
      type: "POST",
      url: "/registroaprendiz",
      data: { nombre: nombre, apellido: apellido, tipo_documento: tipo_documento, numero_documento: numero_documento, correo_electronico: correo_electronico, telefono: telefono, direccion: direccion, jornada: jornada, programaformacion: programaformacion, numeroficha: numeroficha, genero: genero, contraseña: contraseña },
      success: function (response) {
        console.log(response);//verificar si hay error en la ventana emergente
        // Mostrar alerta de éxito si la respuesta del servidor es exitosa
        Swal.fire({
          title: 'Registro exitoso',
          text: 'Los datos se han registrado correctamente',
          icon: 'success',
          confirmButtonColor: '#28A745',
          confirmButtonText: 'Aceptar',
          background: '#FFFFFF',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        });

        // Vaciar campos del formulario después de enviar los datos
        $('#registro-aprendiz')[0].reset();
      }
    });
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

  // Evento click para el botón de nuevo registro
  $('#btn-registro').click(function () {
    // Verificar si todos los campos están llenos
    if ($('#nombre').val() == '' || $('#apellido').val() == '' || $('#tipo_documento').val() == '' || $('#numero_documento').val() == '' || $('#correo_electronico').val() == '' || $('#telefono').val() == '' || $('#direccion').val() == '' || $('#jornada').val() == '' || $('#programaformacion').val() == '' || $('#numeroficha').val() == '' || $('#genero').val() == '' || $('#contraseña').val() == '') {
      // Mostrar ventana emergente de SweetAlert
      Swal.fire({
        title: 'Error',
        text: 'Debes llenar todos los campos antes de continuar',
        icon: 'error',
        confirmButtonColor: '#dc3545',
        confirmButtonText: 'OK'
      });
      // Detener la ejecución del formulario
      return false;
    }
    // Si todos los campos están llenos, seguir con la ejecución del formulario
    return true;
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
});