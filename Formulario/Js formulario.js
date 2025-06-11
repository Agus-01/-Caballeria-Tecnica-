document.getElementById('buton').addEventListener('click', function() {
 window.location.href = "index.html";
});
window.addEventListener('pageshow', function (event) {
  if (event.persisted || window.performance.navigation.type === 2) {
    // El usuario volvió con el botón "Atrás"
    const form = document.querySelector('form');
    if (form) {
      form.reset(); // Limpia todos los campos
    }
  }
});