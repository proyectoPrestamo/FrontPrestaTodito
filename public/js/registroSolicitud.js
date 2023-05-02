// Selecciona todos los elementos con la clase "delete-icon"
const deleteIcons = document.querySelectorAll('.delete-icon');

// Itera sobre cada elemento seleccionado y agrega un "listener" al evento "click"
deleteIcons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    // Evita que el evento de clic se propague (para evitar que se haga clic en el elemento padre)
    event.stopPropagation();

    // Obtiene el elemento "tr" padre del ícono de eliminación (que contiene los datos que deseamos eliminar)
    const parentTr = event.target.closest('tr');

    // Obtiene el código del producto (el valor del atributo "data-id" del "tr")
    const regiCode = parentTr.getAttribute('data-id');

    // Utiliza SweetAlert para mostrar un mensaje de confirmación y tomar la acción del usuario
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar el registro?',
      text: `Código de registro: ${regiCode}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28A745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella

    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario hace clic en "Sí, eliminar", elimina el elemento "tr" del DOM
        parentTr.remove();
        // Muestra una alerta de éxito utilizando SweetAlert
        Swal.fire({
          title: 'Registro eliminado',
          text: `El registro con código ${regiCode} ha sido eliminado correctamente`,
          icon: 'success',
          confirmButtonColor: '#28A745',
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
        });
      }
    })
  });
  
 
});

// Seleccionar los elementos HTML necesarios
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const tableRows = document.querySelectorAll('.table tbody tr');

// Función para buscar en la tabla
function searchTable() {
  // Obtener el valor de búsqueda
  const searchValue = searchInput.value.toLowerCase();

  // Verificar si el campo de búsqueda está vacío
  if (searchValue === '') {
    // Mostrar alerta si el campo está vacío
    Swal.fire({
      icon: 'warning',
      title: 'Por favor ingresa el nombre del registro a buscar',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#28A745',
      allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
    });
    return;
  }

  // Recorrer todas las filas de la tabla
  let found = false;
  tableRows.forEach(row => {
    // Obtener el texto de la fila y convertirlo a minúsculas
    const rowText = row.innerText.toLowerCase();

    // Mostrar o ocultar la fila según si coincide con el término de búsqueda
    if (rowText.includes(searchValue)) {
      row.style.display = '';
      found = true;
    } else {
      row.style.display = 'none';
    }
  });

  // Mostrar alerta si el insumo no ha sido encontrado
  if (!found) {
    Swal.fire({
      icon: 'warning',
      title: 'El registro no ha sido encontrado',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#28A745',
      allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
    });
  }
}

// Agregar el evento "keyup" al campo de entrada
searchInput.addEventListener('keyup', function(event) {
  // Verificar si se presionó la tecla Enter
  if (event.keyCode === 13) {
    searchTable();
  }
  
  // Mostrar todas las filas cuando se borra el campo de búsqueda
  if (searchInput.value === '') {
    tableRows.forEach(row => {
      row.style.display = '';
    });
  }
});

// Agregar el evento "click" al botón de búsqueda
searchButton.addEventListener('click', function() {
  searchTable();
  
});

$(document).ready(function() {
  let idEditar;

  // Función para guardar los cambios del registro editado
  function guardarCambios() {
    let fila = $(`tr[data-id="${idEditar}"]`);
    fila.find("td:eq(1)").text($("#edit-rol").val());
    fila.find("td:eq(2)").text($("#edit-insumo").val());
    fila.find("td:eq(3)").text($("#edit-fechas").val());
    fila.find("td:eq(4)").text($("#edit-fechad").val());
    fila.find("td:eq(5)").text($("#edit-cantidad").val());
    fila.find("td:eq(6)").text($("#edit-estado").val() + " ");

    $("#edit-modal").modal("hide");
    fila.find(".edit-icon, .delete-icon").css("visibility", "visible");
  }

  

  // Función para mostrar el modal y cargar los datos del registro a editar
  $(".edit-icon").click(function() {
    idEditar = $(this).closest("tr").data("id");
    let fila = $(`tr[data-id="${idEditar}"]`);

    // Cargamos los valores del producto a editar en el modal
    $("#edit-rol").val(fila.find("td:eq(1)").text());
    $("#edit-insumo").val(fila.find("td:eq(2)").text());
    $("#edit-fechas").val(fila.find("td:eq(3)").text());
    $("#edit-fechad").val(fila.find("td:eq(4)").text());
    $("#edit-cantidad").val(fila.find("td:eq(5)").text());
    $("#edit-estado").val(fila.find("td:eq(6)").text().trim());

    // Ocultamos los iconos de editar y eliminar
    fila.find(".edit-icon, .delete-icon").css("visibility", "hidden");

    // Mostramos el modal
    $("#edit-modal").modal("show");
  });

  // Función para cancelar la edición del producto
  $(".cancelar-edicion").click(function() {
    let fila = $(`tr[data-id="${idEditar}"]`);
    fila.find(".edit-icon, .delete-icon").css("visibility", "visible");

    $("#edit-modal").modal("hide"); 
  });

 // Función para guardar los cambios del producto editado al presionar el botón "Guardar"
$("#guardar-cambios").click(function() {
  guardarCambios();
  
  // Mostramos los iconos de editar y eliminar después de guardar los cambios
  let fila = $(`tr[data-id="${idEditar}"]`);
  fila.find(".edit-icon, .delete-icon").css("visibility", "visible");
});



// Función para mostrar los iconos de editar y eliminar después de cerrar el modal
$('#edit-modal').on('hidden.bs.modal', function () {
  let fila = $(`tr[data-id="${idEditar}"]`);
  fila.find(".edit-icon, .delete-icon").css("visibility", "visible");
});
})

$(document).ready(function() {
    // Función que se ejecuta al hacer clic en el botón "Aceptar registro"
    $("#accept-button").click(function() {
      // Obtener la lista de filas seleccionadas
      var selectedRows = [];
      $(".select-checkbox:checked").each(function() {
        selectedRows.push($(this).data("id"));
      });
  
      // Si hay filas seleccionadas
      if (selectedRows.length > 0) {
        // Mostrar SweetAlert de confirmación
        var title = '';
        var aceptados = '';
        if (selectedRows.length === 1) {
          title = '¿Estás seguro de aceptar el registro?';
          aceptados = 'Se ha aceptado 1 registro.';
          
        } else {
          title = '¿Estás seguro de aceptar los registros?';
          aceptados = 'Se han aceptado ' + selectedRows.length + ' registros.';
        }
        Swal.fire({
          title: title,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#28A745',
          cancelButtonText: 'Cancelar',
          cancelButtonColor: '#d33',
          allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
        }).then((result) => {
          // Si se confirma la aceptación de los registros
          if (result.isConfirmed) {
            // Mostrar SweetAlert con el número de registros aceptados
            Swal.fire({
              title: aceptados,
              icon: 'success',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#28A745',
              allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
            });
          }
        });
      } else {
        // Si no hay filas seleccionadas, mostrar SweetAlert de error
        Swal.fire({
          title: 'No hay registros que aceptar.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#28A745',
          allowOutsideClick: false // No permitir que el usuario cierre la alerta haciendo clic fuera de ella
        });
      } 
    });
    });

// Inicializa una variable booleana con valor false
var selectAllChecked = false;

// Agrega un evento de clic al elemento con ID "select-button"
$('#select-button').click(function() {

  // Verifica si la variable selectAllChecked es verdadera
  if (selectAllChecked) {

    // Si la variable es verdadera, establece la propiedad "checked" de los elementos con clase "select-checkbox" en false
    $('.select-checkbox').prop('checked', false);

    // Establece la variable selectAllChecked en false
    selectAllChecked = false;

  } else {

    // Si la variable es falsa, establece la propiedad "checked" de los elementos con clase "select-checkbox" en true
    $('.select-checkbox').prop('checked', true);

    // Establece la variable selectAllChecked en true
    selectAllChecked = true;

  }
});

//V3