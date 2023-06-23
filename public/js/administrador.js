$(document).ready(function () {
  // Validar que los campos no estén vacíos, excepto el botón de cancelar
  $('#registro-administrador input:not(.btn-regresar)').each(function() {
    if ($(this).val().trim() === '') {
      $(this).removeClass('is-valid').addClass('is-invalid');
      $(this).siblings('.invalid-feedback').show();
    } else {
      $(this).removeClass('is-invalid').addClass('is-valid');
      $(this).siblings('.invalid-feedback').hide();
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

  // Evento submit para el formulario de registro
  $('#registro-administrador').submit(function (e) {
    e.preventDefault();
    // Esta función se ejecuta cuando se envía el formulario

    // Validar que todos los campos estén completos
    var camposVacios = [];
    $('#registro-administrador input:not(.btn-regresar)').each(function() {
      if ($(this).val().trim() === '') {
        camposVacios.push($(this).siblings('label').text().trim());
        $(this).removeClass('is-valid').addClass('is-invalid');
        $(this).siblings('.invalid-feedback').show();
      } else {
        $(this).removeClass('is-invalid').addClass('is-valid');
        $(this).siblings('.invalid-feedback').hide();
      }
    });

    if (camposVacios.length > 0) {
      // Mostrar ventana emergente de SweetAlert con los campos vacíos
      Swal.fire({
        title: 'Campos incompletos',
        html: 'Los siguientes campos son obligatorios:<br><strong>' + camposVacios.join(', ') + '</strong>',
        icon: 'error',
        confirmButtonColor: '#28a745',
        confirmButtonText: 'Aceptar'
      });
    } else {
      // Mostrar ventana emergente de SweetAlert para confirmar el registro
      Swal.fire({
        title: 'Confirmar registro',
        text: '¿Desea realizar este registro?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Enviar el formulario
          $(this).unbind('submit').submit();

          // Mostrar ventana emergente de SweetAlert de registro exitoso
          Swal.fire({
            title: 'Registro exitoso',
            text: 'Se ha registrado exitosamente el usuario',
            icon: 'success',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            // Redirigir a la vista "rol"
            if (result.isConfirmed) {
              window.location.href = "/rol";
              // Redirige a la ruta /rol
            }
          });
        }
      });
    }
  });
});
