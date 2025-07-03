// Función para abrir el modal con la descripción del servicio
function openModal(serviceId) {
    var modal = document.getElementById("serviceModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDescription = document.getElementById("modalDescription");

    // Cambiar título y descripción según el servicio
    if (serviceId === "service1") {
        modalTitle.innerText = "Reparación de PCs";
        modalDescription.innerText = "Realizo reparaciones de hardware, como cambio de componentes o diagnóstico de fallos. También reparo software, eliminando virus o solucionando errores en tu sistema.";
      document.getElementById("modalImage").style.display = "none";
    } else if (serviceId === "service2") {
        modalTitle.innerText = "Optimización de PC";
        modalDescription.innerText = "Acelera tu PC limpiando archivos innecesarios, gestionando el inicio de programas y optimizando el sistema para un mejor rendimiento general.";
      document.getElementById("modalImage").style.display = "none";
    } else if (serviceId === "service3") {
        modalTitle.innerText = "Instalación de Software";
        modalDescription.innerText = "Instalo y configuro programas según tus necesidades. Desde sistemas operativos hasta aplicaciones especializadas, asegurando que funcionen correctamente.";
     document.getElementById("modalImage").style.display = "none";
    }
    else if (serviceId === "service4") {
        modalTitle.innerText = "";
        modalDescription.innerText =  "";
      document.getElementById("modalImage").style.display = "block";
}
   
    // Mostrar el modal
    modal.style.display = "block";
}

document.querySelector(".modal-content").addEventListener("click", function () {
    document.getElementById("serviceModal").style.display = "none";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("serviceModal").style.display = "none";
    }
});

// Al hacer clic en el botón de "Contactar"
document.getElementById('contact-btn').addEventListener('click', function() {
 window.location.href = "index.Formulario.html";
});

document.getElementById('contact-btn2').addEventListener('click', function() {
 window.location.href = "index.Formulario.html";
});

