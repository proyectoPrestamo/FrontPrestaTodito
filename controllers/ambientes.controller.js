// función para validar el formulario
async function validarDatos() {
    var fecha = document.getElementById('fecha').value;
   
  
    var camposFaltantes = [];
  
  
    if (fecha === '') {
      camposFaltantes.push('fecha');
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
  
        fecha_res: fecha
      };
  
      // Realizar la petición POST utilizando fetch
      await fetch('http://localhost:3000/api/reserva', {
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
          title: 'Insumo registrado',
          text: 'El insumo se ha registrado satisfactoriamente.',
          confirmButtonColor: '#28A745',
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false
        });
  
        // Limpiar los campos del formulario
        document.getElementById('fecha').value = '';
  
      })
      .catch(error => {
        // Mostrar mensaje de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al registrar el insumo.',
          confirmButtonColor: '#28A745',
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false
        });
      });
  
      return true;
    }
  }


  export {validarDatos};