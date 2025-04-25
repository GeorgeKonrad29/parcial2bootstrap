

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