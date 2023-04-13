// Obtiene el elemento del formulario con el ID "login-user"
var formulario = document.getElementById("login-user");

// Obtiene el botón con el ID "login"
var botonEnviar = document.getElementById("login");

// Obtiene el botón con el ID "contraseña-olvidada"
var botonOlvidoContraseña = document.getElementById("contraseña-olvidada");

// Agrega un evento de escucha al botón de envío
botonEnviar.addEventListener("click", function(event) {
// Detiene el envío del formulario
event.preventDefault();

// Obtiene los valores de los campos del formulario
var usuario = document.getElementById("usuario").value;
var contraseña = document.getElementById("contraseña").value;
var rol = document.getElementById("rol").value;

// Verifica si los campos están vacíos
if (usuario === "" || contraseña === "" || rol === "") {
// Muestra un mensaje de alerta utilizando la librería SweetAlert2
Swal.fire({
title: 'Error',
text: 'Debes llenar todos los campos antes de continuar',
icon: 'error',
confirmButtonColor: '#dc3545',
confirmButtonText: 'OK',
focusConfirm: false // Evita que el foco se mueva al botón "OK"
});
} else {
// Redirige al usuario según el rol seleccionado
if (rol === "1") {
location.href = "/menu-aprendiz";
} else if (rol === "2") {
location.href = "/menu-instructor";
}
// Si los campos no están vacíos, envía el formulario
// formulario.submit();
}
});

// Agrega un evento de escucha al botón "contraseña-olvidada"
botonOlvidoContraseña.addEventListener("click", async function(event) {
// Detiene el envío del formulario
event.preventDefault();

// Muestra la alerta de ingreso de contraseña utilizando SweetAlert2
var { value: password } = await Swal.fire({
title: 'Ingresa tu correo ',
input: 'email',
// inputLabel: 'Asegurate de que sea el mismo correo con el cual te encuentras registrado',
inputPlaceholder: 'Ingresa tu correo electronico',
inputAttributes: {
maxlength: 50,
autocapitalize: 'off',
autocorrect: 'off',
},
showCancelButton: true,
confirmButtonColor: '#28a745',
confirmButtonText: 'Aceptar',
cancelButtonText: 'Cancelar',
cancelButtonColor: '#dc3545',

customClass: {
  input: 'swal-input-field',
  validationMessage: 'swal-validation-message'

},
inputValidator: (value) => {
  if (!value) {
    return 'Este campo es requerido';
  }
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
    return 'Ingresa un correo electrónico válido';
  }
},
});

if (password) {
  Swal.fire({
    title: `Te hemos enviado un correo de recuperación a: ${password}`,
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#28a745',
  });
}
});

// Obtiene los campos del formulario con los ID "usuario" y "contraseña"
var campos = document.querySelectorAll("#usuario, #contraseña");

// Agrega un evento de escucha a los campos del formulario
campos.forEach(function(campo) {
campo.addEventListener("input", function() {
// Verifica si el campo es el de "usuario"
if (this.id === "usuario") {
// Reemplaza cualquier caracter que no sea un número con una cadena vacía
this.value = this.value.replace(/[^0-9]/g, "");
} else if (this.id === "contraseña") {
// Reemplaza cualquier caracter que no sea una letra mayúscula, una letra minúscula, un número o un punto con una cadena vacía
this.value = this.value.replace(/[^a-zA-Z0-9.]/g, "");
}
});
});