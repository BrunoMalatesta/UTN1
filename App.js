//CARROUSEL
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

//FORMULARIO CONTACTO

const formulario = document.getElementById("formulario-contacto");
formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del envío del formulario
  
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  
  if (nombre !== "" && email !== "" && mensaje !== "") {
    Toastify({

      text: "Mensaje Enviado",
      style: {
        background: "#3c7fd8",
      },
      duration: 3000
      
      }).showToast();
    formulario.reset(); // Reiniciar el formulario
  } else {
    document.getElementById("error-mensaje").textContent = "Por favor, complete todos los campos"; // Mostrar mensaje de error si los campos requeridos no están completos
  }
});



//FORMULARIO RECLAMO
const formulario2 = document.getElementById("formulario-reclamo");
formulario2.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del envío del formulario
  
  const nombre = document.getElementById("nombre-reclamo").value;
  const email = document.getElementById("email-reclamo").value;
  const mensaje = document.getElementById("mensaje-reclamo").value;
  
  if (nombre !== "" && email !== "" && mensaje !== "") {
    Toastify({

      text: "Mensaje Enviado",
      style: {
        background: "#3c7fd8",
      },
      duration: 3000
      
      }).showToast();
    formulario.reset(); // Reiniciar el formulario
  } else {
    document.getElementById("error-mensaje2").textContent = "Por favor, complete todos los campos"; // Mostrar mensaje de error si los campos requeridos no están completos
  }
});






