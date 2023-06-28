function setAction(formato) {
    const form = document.getElementById('generarForm');
    if (formato === 'pdf') {
      form.action = '/generarpdf';
    } else if (formato === 'excel') {
      form.action = '/generarexcel';
    }
  }