// Selecciona todos los elementos con la clase "delete-icon"
const deleteIcons = document.querySelectorAll('.delete-icon');

// Itera sobre cada elemento seleccionado y agrega un "listener" al evento "click"
deleteIcons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    // Evita que el evento de clic se propague (para evitar que se haga clic en el elemento padre)
    event.stopPropagation();

    // Obtiene el elemento "tr" padre del ícono de eliminación (que contiene los datos que deseamos eliminar)
    let parentTr = event.target.closest('tr');

    // Obtiene el código del computador (el valor del atributo "data-id" del "tr")
    let pcCode = parentTr.getAttribute('data-id');

    // Utiliza SweetAlert para mostrar un mensaje de confirmación y tomar la acción del usuario
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar el computador?',
      text: `Código de computador: ${pcCode}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28A745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario hace clic en "Sí, eliminar", realiza la llamada a la API para eliminar el registro
        eliminarPC(pcCode, parentTr);
      }
    })
  });
});

// Función para eliminar el computador tanto de la vista como de la base de datos
function eliminarPC(pcCode, parentTr) {
  // Realiza la llamada a la API para eliminar el registro
  fetch(`http://localhost:3000/api/computador/${pcCode}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      // Si la eliminación en la base de datos fue exitosa, elimina el elemento "tr" del DOM
      parentTr.remove();
      // Muestra una alerta de éxito utilizando SweetAlert
      Swal.fire({
        title: 'computador eliminado',
        text: `El computador con código ${pcCode} ha sido eliminado correctamente`,
        icon: 'success',
        confirmButtonColor: '#28A745'
      });
    } else {
      // Si la eliminación en la base de datos falló, muestra una alerta de error
      Swal.fire({
        title: 'Error',
        text: 'No se pudo eliminar el computador. Por favor, inténtalo nuevamente',
        icon: 'error',
        confirmButtonColor: '#28A745'
      });
    }
  })
  .catch(error => {
    // Si ocurre un error en la llamada a la API, muestra una alerta de error
    Swal.fire({
      title: 'Error',
      text: 'Ocurrió un error al intentar eliminar el computador. Por favor, inténtalo nuevamente',
      icon: 'error',
      confirmButtonColor: '#28A745'
    });
  });
}

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
      title: 'Por favor ingresa el nombre del equipo a buscar',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#28A745',
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

  // Mostrar alerta si el equipo no ha sido encontrado
  if (!found) {
    Swal.fire({
      icon: 'warning',
      title: 'El equipo no ha sido encontrado',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#28A745',
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

// Función para manejar el evento "click" del botón de búsqueda
function handleSearchButtonClick() {
  searchTable();
}

// Agregar el evento "click" al botón de búsqueda
searchButton.addEventListener('click', handleSearchButtonClick);

$(document).ready(function() {
  let idEditar;

  // Función para guardar los cambios del equipo editado
  function guardarCambios() {
    const fila = $(`tr[data-id="${idEditar}"]`);
    fila.find("td:eq(1)").text($("#edit-estado").val() + " ");
    fila.find("td:eq(2)").text($("#edit-marca").val());


    $("#edit-modal").modal("hide");
    fila.find(".edit-icon, .delete-icon").css("visibility", "visible");
  }

  

  // Función para mostrar el modal y cargar los datos del equipo a editar
  $(".edit-icon").click(function() {
    idEditar = $(this).closest("tr").data("id");
    const fila = $(`tr[data-id="${idEditar}"]`);

    // Cargamos los valores del equpo a editar en el modal
    $("#edit-estado").val(fila.find("td:eq(1)").text().trim());
    $("#edit-marca").val(fila.find("td:eq(2)").text());


    // Ocultamos los iconos de editar y eliminar
    fila.find(".edit-icon, .delete-icon").css("visibility", "hidden");

    // Mostramos el modal
    $("#edit-modal").modal("show");
  });

  // Función para cancelar la edición del equipo
  $(".cancelar-edicion").click(function() {
    const fila = $(`tr[data-id="${idEditar}"]`);
    fila.find(".edit-icon, .delete-icon").css("visibility", "visible");

    $("#edit-modal").modal("hide"); 
  });

 // Función para guardar los cambios de la herramienta editada al presionar el botón "Guardar"
$("#guardar-cambios").click(function() {
  guardarCambios();
  

});



// Función para mostrar los iconos de editar y eliminar después de cerrar el modal
$('#edit-modal').on('hidden.bs.modal', function () {
  const fila = $(`tr[data-id="${idEditar}"]`);
  fila.find(".edit-icon, .delete-icon").css("visibility", "visible");
});
})

//V3