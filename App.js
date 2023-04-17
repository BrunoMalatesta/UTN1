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

const formulario = document.getElementById('formulario-contacto');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');

formulario.addEventListener('submit', (event) => {
  // Verificar si los campos están completos
  if (!nombreInput.value || !emailInput.value || !mensajeInput.value) {
    // Evitar que se envíe el formulario
    event.preventDefault();

    // Mostrar mensaje de error al usuario
    const errorMensaje = document.getElementById('error-mensaje');
    errorMensaje.innerHTML = 'Por favor, completa todos los campos';
  }
});


//FORMULARIO RECLAMO
const formulario2 = document.getElementById('formulario-reclamo');
const nombreInput2 = document.getElementById('nombre-reclamo');
const emailInput2 = document.getElementById('email-reclamo');
const mensajeInput2 = document.getElementById('mensaje-reclamo');


formulario2.addEventListener('submit', (event) => {
  // Verificar si los campos están completos
  if (!nombreInput2.value || !emailInput2.value || !mensajeInput2.value) {
    // Evitar que se envíe el formulario
    event.preventDefault();

    // Mostrar mensaje de error al usuario
    const errorMensaje2 = document.getElementById('error-mensaje2');
    errorMensaje2.innerHTML = 'Por favor, completa todos los campos';
  }
});





