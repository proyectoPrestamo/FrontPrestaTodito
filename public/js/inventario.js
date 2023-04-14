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
    const productCode = parentTr.getAttribute('data-id');

    // Utiliza SweetAlert para mostrar un mensaje de confirmación y tomar la acción del usuario
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar el producto?',
      text: `Código de producto: ${productCode}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28A745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario hace clic en "Sí, eliminar", elimina el elemento "tr" del DOM
        parentTr.remove();
        // Muestra una alerta de éxito utilizando SweetAlert
        Swal.fire({
          title: 'Producto eliminado',
          text: `El producto con código ${productCode} ha sido eliminado correctamente`,
          icon: 'success',
          confirmButtonColor: '#28A745'
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
      title: 'Por favor ingresa el nombre o código del insumo a buscar',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#28A745',
    });
    return;
  }

  // Recorrer todas las filas de la tabla
  const found = false;
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
      title: 'El insumo no ha sido encontrado',
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

  // Función para guardar los cambios del producto editado
  function guardarCambios() {
    const fila = $(`tr[data-id="${idEditar}"]`);
    fila.find("td:eq(0)").text($("#edit-producto").val());
    fila.find("td:eq(1)").text($("#edit-cantidad").val());
    fila.find("td:eq(2)").text($("#edit-fecha").val());
    fila.find("td:eq(3)").text($("#edit-codigo").val());
    fila.find("td:eq(4)").text($("#edit-estado").val() + " ");

    $("#edit-modal").modal("hide");
    fila.find(".edit-icon, .delete-icon").css("visibility", "visible");
  }

  

  // Función para mostrar el modal y cargar los datos del producto a editar
  $(".edit-icon").click(function() {
    idEditar = $(this).closest("tr").data("id");
    const fila = $(`tr[data-id="${idEditar}"]`);

    // Cargamos los valores del producto a editar en el modal
    $("#edit-producto").val(fila.find("td:eq(0)").text());
    $("#edit-cantidad").val(fila.find("td:eq(1)").text());
    $("#edit-fecha").val(fila.find("td:eq(2)").text());
    $("#edit-codigo").val(fila.find("td:eq(3)").text());
    $("#edit-estado").val(fila.find("td:eq(4)").text().trim());

    // Ocultamos los iconos de editar y eliminar
    fila.find(".edit-icon, .delete-icon").css("visibility", "hidden");

    // Mostramos el modal
    $("#edit-modal").modal("show");
  });

  // Función para cancelar la edición del producto
  $(".cancelar-edicion").click(function() {
    const fila = $(`tr[data-id="${idEditar}"]`);
    fila.find(".edit-icon, .delete-icon").css("visibility", "visible");

    $("#edit-modal").modal("hide"); 
  });

 // Función para guardar los cambios del producto editado al presionar el botón "Guardar"
$("#guardar-cambios").click(function() {
  guardarCambios();
  
  // Mostramos los iconos de editar y eliminar después de guardar los cambios
  const fila = $(`tr[data-id="${idEditar}"]`);
  fila.find(".edit-icon, .delete-icon").css("visibility", "visible");
});



// Función para mostrar los iconos de editar y eliminar después de cerrar el modal
$('#edit-modal').on('hidden.bs.modal', function () {
  const fila = $(`tr[data-id="${idEditar}"]`);
  fila.find(".edit-icon, .delete-icon").css("visibility", "visible");
});
})

//V3