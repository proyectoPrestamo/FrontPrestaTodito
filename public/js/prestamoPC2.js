document.querySelector('.forma-formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // evita el envío del formulario por defecto
    
    const nombres = document.querySelector('#nombres').value.trim();
    const apellidos = document.querySelector('#apellidos').value.trim();
    const documento = document.querySelector('#documento').value.trim();
    const ficha = document.querySelector('#ficha').value.trim();
    const programa = document.querySelector('#programa').value.trim();
    const jornada = document.querySelector('#jornada').value.trim();
    const fecha = document.querySelector('#fecha').value.trim();
    const tiempo = document.querySelector('#tiempo').value;
    
    if (nombres === '' || apellidos === '' || documento === '' || ficha === '' || programa === '' || jornada === '' || fecha === '' || tiempo === '0') {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, complete todos los campos para poder reservar una PC.',
        confirmButtonColor: '#28a745',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: '¿Está seguro?',
        text: '¿Desea enviar la solicitud de préstamo de PC?',
        showCancelButton: true,
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'No, cancelar',
        confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545'
      }).then((result) => {
        if (result.isConfirmed) {
          // limpiar campos
          document.querySelector('#nombres').value = '';
          document.querySelector('#apellidos').value = '';
          document.querySelector('#documento').value = '';
          document.querySelector('#ficha').value = '';
          document.querySelector('#programa').value = '';
          document.querySelector('#jornada').value = '';
          document.querySelector('#fecha').value = '';
          document.querySelector('#tiempo').value = '0';
          
          Swal.fire({
            icon: 'success',
            title: 'Solicitud enviada',
            text: 'Su solicitud de préstamo de PC ha sido enviada satisfactoriamente.',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'Aceptar'
          });
        }
      });
    }
  });
  

  const cancelarBtn = document.querySelector('.cancelar-btn');

cancelarBtn.addEventListener('click', function(event) {
  event.preventDefault(); // evita el envío del formulario por defecto
  
  // Preguntar si se quiere limpiar los campos
  swal.fire({
    title: '¿Está seguro que desea limpiar los campos que se han llenado?',
    icon: 'warning',
    buttons: ['Cancelar', 'Aceptar'],
  }).then(function(value) {
    if (value) {
      // Si se acepta, vaciar los campos y mostrar mensaje
      const nombres = document.querySelector('#nombres');
      const apellidos = document.querySelector('#apellidos');
      const documento = document.querySelector('#documento');
      const ficha = document.querySelector('#ficha');
      const programa = document.querySelector('#programa');
      const jornada = document.querySelector('#jornada');
      const fecha = document.querySelector('#fecha');
      const tiempo = document.querySelector('#tiempo');

      nombres.value = '';
      apellidos.value = '';
      documento.value = '';
      ficha.value = '';
      programa.value = '';
      jornada.value = '';
      fecha.value = '';
      tiempo.value = '0';

      swal.fire('Campos vaciados satisfactoriamente.');
    } else {
      // Si se cancela, no hacer nada
      return;
    }
  });
});

