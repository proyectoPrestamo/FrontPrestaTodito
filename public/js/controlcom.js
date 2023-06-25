function validarFormulario(e) {
    e.preventDefault();
   const formulario = document.querySelector("#formulario")
   formulario.submit();
   formulario.reset();
  };