// Seleccionamos el botón y el body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Al hacer clic, cambiamos el tema
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Cambiar texto del botón según el tema
  if (body.classList.contains('dark')) {
    themeToggle.textContent = 'Modo Claro';
  } else {
    themeToggle.textContent = 'Cambiar Tema';
  }
});