  $(document).ready(function() { // Cuando el documento HTML termina de cargarse
    $('.preview-container').on('click', function() { // Al hacer clic en un elemento HTML con la clase "preview-container"
      if (!$(this).find('img').attr('src')) { // Si el elemento HTML dentro del contenedor "preview-container" no tiene un atributo "src" establecido
        Swal.fire({ // Muestra una ventana emergente de SweetAlert con un mensaje de error
          icon: 'error',
          title: 'Error',
          text: 'Inserte una imagen para poder visualizarla',
          confirmButtonColor: '#28A745',
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
        });
      } else { // Si el elemento HTML dentro del contenedor "preview-container" tiene un atributo "src" establecido
        var src = $(this).find('img').attr('src'); // Obtiene la URL de la imagen del elemento HTML dentro del contenedor "preview-container"
        $('#modalPreviewImage').attr('src', src); // Establece el atributo "src" del elemento HTML con ID "previewImage" como la URL de la imagen
        $('#modalPreview').modal('show'); // Muestra un modal con la imagen en un tamaño más grande
      }
    });
  });
//v4
  // esta función se encarga de eliminar la imagen previamente seleccionada
  function eliminarImagen() {
    // Obtiene el elemento de previsualización y la imagen previa
    const preview = document.querySelector('#preview');
    const imagenPrev = preview.getAttribute('src');
    
    // Si hay una imagen previa, se muestra un mensaje de confirmación usando la librería Swal
    if (imagenPrev) {
      Swal.fire({
        icon: 'warning',
        title: 'Eliminar imagen',
        text: '¿Seguro que desea eliminar esta imagen?',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        confirmButtonColor: '#28a745',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#dc3545',
        allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
      }).then((result) => {
        // Si el usuario confirma que desea eliminar la imagen
        if (result.isConfirmed) {
          // Borra el valor del input de imagen
          document.querySelector('#imagen').value = '';
          // Elimina la imagen previa del preview
          preview.removeAttribute('src');
          
          // Si se ha insertado una imagen nueva y no ha habido ningún error de extensión, inserta la imagen previa en el preview de nuevo
          const imagenNueva = document.querySelector('#imagen').files[0];
          if (imagenNueva && /\.(jpe?g|png)$/i.test(imagenNueva.name)) {
            const reader = new FileReader();
            reader.onload = () => {
              preview.setAttribute('src', reader.result);
            };
            reader.readAsDataURL(imagenNueva);
          }
          
          // Muestra un mensaje indicando que la imagen ha sido eliminada correctamente
          Swal.fire({
            icon: 'success',
            title: 'Imagen eliminada',
            text: 'La imagen ha sido eliminada correctamente',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
          });
        }
      });
    } else {
      // Si no hay imagen previa, se muestra un mensaje de error usando la librería Swal
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No hay imagen para eliminar',
        confirmButtonColor: '#28a745',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
      });
    }
  }
  

  function previewImage() {
    // Obtiene el elemento de previsualización y el archivo seleccionado en el input de imagen
    const preview = document.querySelector('#preview');
    const file = document.querySelector('#imagen').files[0];
  
    // Variable para verificar si se ha producido un error al cargar la imagen nueva
    let error = false;
  
    // Verifica si hay un archivo seleccionado
    if (!file) {
      // Si ya hay una imagen en el preview, no se hace nada
      if (preview.getAttribute('src')) {
        return;
      }
    }
  
    // Verifica si el archivo seleccionado es una imagen con extensión jpg o png
    if (!/\.(jpe?g|png)$/i.test(file.name)) {
      // Si el archivo no es una imagen con extensión jpg o png, se muestra una alerta con SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Solo se permiten imágenes con formato: JPG o PNG',
        confirmButtonColor: '#28A745',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
      });
      // Limpiamos el input de la imagen
      document.querySelector('#imagen').value = '';
      // Se establece la variable "error" en "true" para que no se cargue la imagen
      error = true;
      return;
    }
  
    // Verifica si el tamaño del archivo seleccionado es mayor a 1MB
    if (file.size > 1048576) { // 1MB = 1048576 bytes
      // Si el tamaño del archivo es mayor a 1MB, se muestra una alerta con SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La imagen no puede superar 1MB de tamaño',
        confirmButtonColor: '#28A745',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
      });
      // Limpiamos el input de la imagen
      document.querySelector('#imagen').value = '';
      // Se establece la variable "error" en "true" para que no se cargue la imagen
      error = true;
      return;
    }
  
    // Si no ha ocurrido ningún error, se carga la imagen en el preview
    if (!error) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  
  


 // función para validar el formulario
 function validarDatos() {
  // se obtienen los valores de los campos del formulario
  var nombre = document.getElementById('nombre').value;
  var descripcion = document.getElementById('descripcion').value;
  var existencias = document.getElementById('existencias').value;
  var fecha = document.getElementById('fecha').value;
  var codigo = document.getElementById('codigo').value;
  var imagen = document.getElementById('imagen').value;

  // se crea un array para almacenar los campos faltantes
  var camposFaltantes = [];

  // se verifica si los campos tienen un valor
  if (nombre === '') {
    camposFaltantes.push('Nombre');
  }
  if (descripcion === '') {
    camposFaltantes.push('Descripción');
  }
  if (existencias === '') {
    camposFaltantes.push('Existencias');
  }
  if (fecha === '') {
    camposFaltantes.push('Fecha');
  }
  if (codigo === '') {
    camposFaltantes.push('Código');
  }
  if (imagen === '') {
    camposFaltantes.push('imagen');
  }

  // si hay campos faltantes, se muestra un mensaje de error con SweetAlert
  if (camposFaltantes.length > 0) {
    var mensaje = 'Los siguientes campos son obligatorios: ' + camposFaltantes.join(', ');
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: mensaje,
      confirmButtonColor: '#28A745',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
    });
    return false;
  } else {
    // si todos los campos tienen valor, se muestra un mensaje de éxito con SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Insumo registrado',
      text: 'El insumo se ha registrado satisfactoriamente.',
      confirmButtonColor: '#28A745',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
    });

    // se limpian los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('existencias').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('codigo').value = '';
    document.getElementById('imagen').value = '';
    document.getElementById('preview').src = '';

    return true;
  }
}


  
  
  // Define la función limpiarCampos
function limpiarCampos() {
    // Obtiene todos los elementos input del documento y los guarda en la variable inputs
    const inputs = document.getElementsByTagName('input');
    // Inicializa filledFields como falso
    let filledFields = false;
    
    // Recorre todos los inputs y verifica si al menos uno tiene un valor distinto de vacío
    for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value !== '') {
    // Si al menos un campo tiene valor diferente de vacío, cambia filledFields a verdadero y sale del bucle
    filledFields = true;
    break;
    }
    }
    
    // Si al menos un campo tiene valor diferente de vacío
    if (filledFields) {
    // Abre un mensaje de confirmación usando la librería Swal
    Swal.fire({
    icon: 'question',
    title: '¿Desea vaciar el o los campos que ha llenado?',
    showCancelButton: true,
    confirmButtonColor: '#28a745',
    cancelButtonColor: '#dc3545',
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
    }).then((result) => {
    // Si el usuario confirma la acción
    if (result.isConfirmed) {
    // Recorre todos los inputs y les asigna un valor vacío
    for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
    }
    // Asigna una imagen vacía al elemento con id 'preview'
    document.getElementById('preview').src = '';
    }
    });
    } else {
    // Si no hay ningún campo con valor diferente de vacío, muestra un mensaje de información usando la librería Swal
    Swal.fire({
    icon: 'info',
    title: 'Campos vacíos',
    text: 'No hay campos para limpiar',
    confirmButtonColor: '#28a745',
    confirmButtonText: 'Aceptar',
    allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
    });
    }
    }

    //V3