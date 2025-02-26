document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.ver-mas');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const info = document.getElementById(`info-${id}`);
            
            // Cerrar todas las secciones abiertas
            document.querySelectorAll('.additional-info.show').forEach(el => {
                if (el !== info) {
                    el.classList.remove('show');
                    el.previousElementSibling.textContent = 'Ver más';
                }
            });

            // Alternar la sección seleccionada
            if (info.classList.contains('show')) {
                info.classList.remove('show');
                this.textContent = 'Ver más';
            } else {
                info.classList.add('show');
                this.textContent = 'Ver menos';
            }
        });
    });
});

// Animacion para las secciones
document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Menu hamburguesa
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

  hamburger.addEventListener('click', function() {
    navList.classList.toggle('open');
  });

  // Cierra el menú cuando se hace clic en un enlace
  navList.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      navList.classList.remove('open');
    }
});

  // Cierra el menú cuando se hace clic fuera de él
  document.addEventListener('click', function(event) {
    if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
      navList.classList.remove('open');
    }
  });
});