// Cuando el documento está listo, se ejecuta la función de devolución de llamada.
$(document).ready(function () {
  // Se selecciona el formulario y se guarda en una constante llamada 'form'.
  const form = $('form');
  // Se selecciona el elemento de lista desplegable con id 'select-rol' y se guarda en una constante llamada 'selectRol'.
  const selectRol = $('#select-rol');
  // Se selecciona el botón con id 'btn-aceptar' y se guarda en una constante llamada 'btnAceptar'.
  const btnAceptar = $('#btn-aceptar');

  // Se registra la función de devolución de llamada 'handleSubmit' para el evento de envío del formulario.
  form.submit(handleSubmit);
  // Se registra la función de devolución de llamada 'handleSubmit' para el evento de clic del botón 'Aceptar'.
  btnAceptar.click(handleSubmit);

  // Definición de la función de devolución de llamada 'handleSubmit'.
  function handleSubmit(event) {
    // Se evita el comportamiento predeterminado del evento (en este caso, el envío del formulario).
    event.preventDefault();

    // Se obtiene el valor seleccionado de la lista desplegable 'selectRol'.
    const selectedValue = selectRol.val();

    // Si no se ha seleccionado ningún valor, se muestra un mensaje de error mediante la biblioteca 'SweetAlert2'.
    if (!selectedValue) {
      Swal.fire({
        icon: 'error',
        confirmButtonColor: '#28A745',
        confirmButtonText: 'Aceptar',
        title: 'Error',
        text: 'Por favor, selecciona un rol antes de continuar',
        allowOutsideClick: false
      });
    } else {
      // Si se ha seleccionado un valor, se redirige al usuario a la página correspondiente.
      window.location.replace(selectedValue);
    }
  }
});
