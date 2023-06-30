// Selecciona todos los elementos de la clase btnRechazar
const Aceptarbtn = document.querySelectorAll('.btnAceptar');

// Itera sobre cada elemento seleccionado y agrega un "listener" al evento "click"
Aceptarbtn.forEach(icon => {
  icon.addEventListener('click', (event) => {
    // Evita que el evento de clic se propague (para evitar que se haga clic en el elemento padre)
    event.stopPropagation();

    // Obtiene el elemento "tr" que será la informacion que Aceptareos
    let parentTr = event.target.closest('tr');

let code = parentTr.getAttribute('data-id');
    // Utiliza SweetAlert para mostrar un mensaje de confirmación y tomar la acción del usuario
        Swal.fire({
          title: '¿Estas Seguro De Aceptar Este Insumo?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#39a900',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar'
         }).then((result) => {
          if (result.isConfirmed) {
            // Si el usuario hace clic en "Sí, Aceptar", elimina el elemento "tr" del DOM
            parentTr.remove();
            // Muestra una alerta de éxito utilizando SweetAlert
            Swal.fire({
              title: 'Prestamo Aceptado',
              text: `El Prestamo de ha sido Aceptado correctamente `,
              icon: 'success',
              confirmButtonColor: '#28A745'
            });
          }
        })
      });
      
     
    });
// Selecciona todos los elementos de la clase btnRechazar
const Rechazarbtn = document.querySelectorAll('.btnRechazar');

// Itera sobre cada elemento seleccionado y agrega un "listener" al evento "click"
Rechazarbtn.forEach(icon => {
  icon.addEventListener('click', (event) => {
    // Evita que el evento de clic se propague (para evitar que se haga clic en el elemento padre)
    event.stopPropagation();

    // Obtiene el elemento "tr" que será la informacion que rechazareos
    let parentTr = event.target.closest('tr');

let code = parentTr.getAttribute('data-id');
    // Utiliza SweetAlert para mostrar un mensaje de confirmación y tomar la acción del usuario
        Swal.fire({
          title: '¿Estas Seguro De Rechazar Este Insumo?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#39a900',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Rechazar'
         }).then((result) => {
          if (result.isConfirmed) {
            // Si el usuario hace clic en "Sí, RECHAZAR", elimina el elemento "tr" del DOM
            parentTr.remove();
            // Muestra una alerta de éxito utilizando SweetAlert
            Swal.fire({
              title: 'Prestamo Rechazado',
              text: `El Prestamo de ha sido rechazado correctamente `,
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
  const searchValue = searchInput.value.toLowerCase().trim()

  // Verificar si el campo de búsqueda está vacío
  if (searchValue === '') {
    // Mostrar alerta si el campo está vacío
    Swal.fire({
      icon: 'warning',
      title: 'Por favor ingresa el nombre o código del prestamo que desea buscar',
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

 
  

  // Función para mostrar el modal y cargar los datos del producto a editar
  $(".edit-icon").click(function() {
    idEditar = $(this).closest("tr").data("id");
    const fila = $(`tr[data-id="${idEditar}"]`);

    // Cargamos los valores del producto a editar en el modal
    $("#edit-producto").val(fila.find("td:eq(0)").text());
  

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