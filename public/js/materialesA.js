// Selecciona todos los elementos con la clase "delete-icon"
const deleteIcons = document.querySelectorAll('.delete-icon');

// Itera sobre cada elemento seleccionado y agrega un "listener" al evento "click"
deleteIcons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    // Evita que el evento de clic se propague (para evitar que se haga clic en el elemento padre)
    event.stopPropagation();

    // Obtiene el elemento "tr" padre del ícono de eliminación (que contiene los datos que deseamos eliminar)
    let parentTr = event.target.closest('tr');

    // Obtiene el código del material (el valor del atributo "data-id" del "tr")
    let mateCode = parentTr.getAttribute('data-id');

    // Utiliza SweetAlert para mostrar un mensaje de confirmación y tomar la acción del usuario
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar el material?',
      text: `Código de material: ${mateCode}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28A745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario hace clic en "Sí, eliminar", realiza la llamada a la API para eliminar el registro
        eliminarMaterial(mateCode, parentTr);
      }
    })
  });
});

// Función para eliminar el material tanto de la vista como de la base de datos
function eliminarMaterial(mateCode, parentTr) {
  // Realiza la llamada a la API para eliminar el registro
  fetch(process.env.ENDPOINT + `/api/material/${mateCode}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      // Si la eliminación en la base de datos fue exitosa, elimina el elemento "tr" del DOM
      parentTr.remove();
      // Muestra una alerta de éxito utilizando SweetAlert
      Swal.fire({
        title: 'Material eliminado',
        text: `El material con código ${mateCode} ha sido eliminado correctamente`,
        icon: 'success',
        confirmButtonColor: '#28A745'
      });
    } else {
      // Si la eliminación en la base de datos falló, muestra una alerta de error
      Swal.fire({
        title: 'Error',
        text: 'No se pudo eliminar el material. Por favor, inténtalo nuevamente',
        icon: 'error',
        confirmButtonColor: '#28A745'
      });
    }
  })
  .catch(error => {
    // Si ocurre un error en la llamada a la API, muestra una alerta de error
    Swal.fire({
      title: 'Error',
      text: 'Ocurrió un error al intentar eliminar el material. Por favor, inténtalo nuevamente',
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
          title: 'Por favor ingresa el nombre del material a buscar',
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
          title: 'El material no ha sido encontrado',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#28A745',
        });
      }
    }
  
    // Agregar el evento "keyup" al campo de entrada
    searchInput.addEventListener('keyup', function (event) {
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
  
    $(document).ready(function () {
      let idEditar;
  
      // Función para guardar los cambios del producto editado
      // Función para guardar los cambios del material editado
      function guardarCambios() {
        const id = $(this).data('id'); // Obtener el ID del material desde el botón
  
        // Obtener los valores actualizados del formulario
        const nombre = $("#edit-nombre").val();
        const tipo = $("#edit-tipo").val();
        const color = $("#edit-color").val();
        const medidas = $("#edit-medida").val();
  
        // Crear el objeto con los datos a enviar
        const data = {
          nombre: req.body.nombre,
          tipo: req.body.tipo,
          color: req.body.color,
          medidas: req.body.UNIDAD
        };

  
        // Realizar la llamada a la API para actualizar el material
        fetch(process.env.ENDPOINT + `/api/material/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            if (response.ok) {
              // Actualizar los valores en la tabla
              const fila = $(`tr[data-id="${id}"]`);
              fila.find("td:eq(1)").text(nombre);
              fila.find("td:eq(2)").text(tipo);
              fila.find("td:eq(3)").text(color);
              fila.find("td:eq(4)").text(medidas);
  
              // Mostrar una alerta de éxito
              Swal.fire({
                title: 'Cambios guardados',
                text: 'La información del material ha sido actualizada correctamente',
                icon: 'success',
                confirmButtonColor: '#28A745'
              });
  
              // Cerrar el modal
              $("#edit-modal").modal("hide");
            } else {
              // Mostrar una alerta de error si la actualización falla
              Swal.fire({
                title: 'Error',
                text: 'No se pudieron guardar los cambios. Por favor, inténtalo nuevamente',
                icon: 'error',
                confirmButtonColor: '#28A745'
              });
            }
          })
          .catch(error => {
            // Mostrar una alerta de error si ocurre un error en la llamada a la API
            Swal.fire({
              title: 'Error',
              text: 'Ocurrió un error al intentar guardar los cambios. Por favor, inténtalo nuevamente',
              icon: 'error',
              confirmButtonColor: '#28A745'
            });
          });
      }
  
      // Asignar el evento click al botón "Guardar cambios"
      $("#edit-modal").on("click", ".edit-button", guardarCambios);
  
  
  
      // Función para mostrar el modal y cargar los datos del producto a editar
      $(".edit-icon").click(function () {
        idEditar = $(this).closest("tr").data("id");
        const fila = $(`tr[data-id="${idEditar}"]`);
  
        // Cargamos los valores del producto a editar en el modal
        $("#edit-nombre").val(fila.find("td:eq(1)").text());
        $("#edit-tipo").val(fila.find("td:eq(2)").text());
        $("#edit-color").val(fila.find("td:eq(3)").text());
        $("#edit-medida").val(fila.find("td:eq(4)").text());
  
        // Ocultamos los iconos de editar y eliminar
        fila.find(".edit-icon, .delete-icon").css("visibility", "hidden");
  
        // Mostramos el modal
        $("#edit-modal").modal("show");
      });
  
      // Función para cancelar la edición del producto
      $(".cancelar-edicion").click(function () {
        const fila = $(`tr[data-id="${idEditar}"]`);
        fila.find(".edit-icon, .delete-icon").css("visibility", "visible");
  
        $("#edit-modal").modal("hide");
      });
  
      // Función para guardar los cambios del producto editado al presionar el botón "Guardar"
      $("#guardar-cambios").click(function () {
        guardarCambios();
  
  
      });
  
  
  
      // Función para mostrar los iconos de editar y eliminar después de cerrar el modal
      $('#edit-modal').on('hidden.bs.modal', function () {
        const fila = $(`tr[data-id="${idEditar}"]`);
        fila.find(".edit-icon, .delete-icon").css("visibility", "visible");
      });
    })
  
    //FUNCION PARA PDF O EXCEL
    function setAction(formato) {
      const form = document.getElementById('generarForm');
      if (formato === 'pdf') {
        form.action = '/generarpdf';
      } else if (formato === 'excel') {
        form.action = '/generarexcel';
      }
    }
  
    //V3
  