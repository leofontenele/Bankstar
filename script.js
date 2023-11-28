// Adicione no seu arquivo script.js

document.addEventListener('DOMContentLoaded', function () {
    const loginInputs = document.querySelectorAll('.login-input');
    const icons = document.querySelectorAll('.icone');
  
    // Animação de fade-in para campos de entrada
    loginInputs.forEach(input => {
      input.style.opacity = '0';
      input.style.transition = 'opacity 2s ease-in-out';
      setTimeout(() => {
        input.style.opacity = '1';
      }, 200);
    });

  });
