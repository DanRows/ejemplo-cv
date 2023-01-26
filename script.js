// Ocultar y mostrar una sección al hacer clic en un enlace
const aboutLink = document.querySelector("a[href='#about']");
const aboutSection = document.querySelector("#about");
aboutLink.addEventListener("click", function() {
  aboutSection.classList.toggle("hidden");
});

// Cambiar el contenido de una sección al hacer clic en un botón
const skillsSection = document.querySelector("#skills");
const changeSkillsButton = document.querySelector("#change-skills");
changeSkillsButton.addEventListener("click", function() {
  skillsSection.innerHTML = "<ul><li>Java</li><li>PHP</li></ul>";
});