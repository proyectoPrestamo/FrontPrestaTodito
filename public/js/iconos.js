// MENU DE USUARIO
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("visible");
  }
  
  var iconoContenedor = document.querySelector('.icono-contenedor');
var modal = document.getElementById('mi-modal');
var modalCerrar = document.querySelector('.modal-cerrar');

iconoContenedor.addEventListener('click', function() {
  modal.style.display = 'block';
});

modalCerrar.addEventListener('click', function() {
  modal.style.display = 'none';
});

