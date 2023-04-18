//CONSUMO API
const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btnfrase");

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `- ${data.author}`;
    });
}


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
function submitForm(event) {
  event.preventDefault(); // Evitar que se envíe el formulario automáticamente
  
  // Configuración de las reglas de validación
  const constraints = {
  nombre: {
      presence: true
  },
  email: {
      presence: true,
      email: true
  },
  mensaje: {
      presence: true
  }
  };

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;
  const formData = { nombre, email, mensaje };

  // Realizar la validación
  const errors = validate(formData, constraints);

  if (errors) {
    // Mostrar errores si los hay
    Toastify({

      text: "Email Invalido",

      style: {
        background: "red",
      },
      duration: 3000
      
      }).showToast();
  } else {
    // Enviar el formulario si no hay errores
    Toastify({

      text: "Mensaje Enviado",

      style: {
        background: "green",
      },
      duration: 3000
      
      }).showToast();
    document.getElementById('contactForm').reset(); // Limpiar el formulario
  }
}











