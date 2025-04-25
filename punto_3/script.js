// Manejo del botón de WhatsApp y el chat flotante
const whatsappButton = document.getElementById('whatsappButton');
const chatContainer = document.getElementById('chatContainer');
const closeChat = document.getElementById('closeChat');

// Mostrar el chat al hacer clic en el botón de WhatsApp
whatsappButton.addEventListener('click', function (e) {
  e.preventDefault();
  chatContainer.style.display = 'block';
});

// Cerrar el chat al hacer clic en el botón de cerrar
closeChat.addEventListener('click', function () {
  chatContainer.style.display = 'none';
});

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Obtiene el id del destino
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start'
      });
    }
  });
});