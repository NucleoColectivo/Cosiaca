// script.js

function cosiacaResponder() {
  const input = document.getElementById("userInput").value.trim();
  const output = document.getElementById("chatOutput");
  const respuestas = [
    "¡Eso es lo que yo digo todos los días!",
    "¿Trabajar? Eso es pa' los que no saben vivir.",
    "La trova que te voy a soltar es muy brava, prepárate.",
    "Eso me lo enseñó mi abuela entre fríjoles y arepa.",
    "¡Muchacho! Más vago que yo no hay."
  ];

  if (input) {
    const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
    output.innerHTML += `<p><strong>Tú:</strong> ${input}</p><p><strong>Cosiaca:</strong> ${respuesta}</p>`;
    document.getElementById("userInput").value = "";
  }
}

// Modo Oscuro
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
