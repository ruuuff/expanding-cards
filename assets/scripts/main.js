// Pega todos os elementos com a classe "panel" e armazena em "panels"
const panels = document.querySelectorAll(".panel");

// Para cada elemento dentro de panels ele executa uma função
panels.forEach(panel => {
  // Adiciona um ouvidor de eventos ('click') em cada elemento dentro de panels
  panel.addEventListener('click', () => {
    // Chama a função removeActiveClasses
    removeActiveClasses();
    // Adiciona a classe 'active' no elemento que foi clicado
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  // Para cada elemento dentro de panels
  panels.forEach(panel => {
    // Remove a classe active de cada elemento dentro de panels
    panel.classList.remove('active');
  });
}