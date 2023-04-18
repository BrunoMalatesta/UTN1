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



//FORMULARIO RECLAMO

// Definir reglas de validación
const constraints = {
  firstName: {
    presence: true,
    length: {
      minimum: 1,
      maximum: 50
    }
  },
  lastName: {
    presence: true,
    length: {
      minimum: 1,
      maximum: 50
    }
  },
  phoneNumber: {
    presence: true,
    format: {
      pattern: '[0-9]{10,12}',
      message: 'Debe contener entre 10 y 12 dígitos numéricos'
    }
  },
  message: {
    presence: true,
    length: {
      minimum: 1,
      maximum: 100
    }
  }
};


// Obtener el formulario por su ID
const form = document.getElementById('myForm');

// Manejador de envío del formulario
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Validar el formulario
  const validationResult = validate(form, constraints);

  // Verificar si el formulario es válido
  if (validationResult === undefined) {
    // Obtener los valores del formulario
    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const phoneNumber = form.elements.phoneNumber.value;
    const message = form.elements.message.value;

    // Crear un objeto con los valores del formulario
    const reclamo = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      message: message
    };

    // Mostrar alerta con resultado del envío y valores del formulario
    Toastify({
      text: "Mensaje Enviado",
      style: {
        background: "green",
      },
      duration: 3000
    }).showToast();
    console.log(reclamo)
    // Reiniciar el formulario
    form.reset();
  }
});






