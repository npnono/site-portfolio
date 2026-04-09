// Attendre que la page soit chargée
document.addEventListener("DOMContentLoaded", function () {

  // Scroll vers une section
  window.scrollToSection = function (id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle menu
  window.toggleMenu = function () {
    const nav = document.getElementById("navLinks");
    if (nav) {
      nav.classList.toggle("active");
    }
  };

  // Fermer menu quand on clique sur un lien
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("navLinks");
      if (nav) nav.classList.remove("active");
    });
  });

  // Fermer menu si clic extérieur
  document.addEventListener("click", function (e) {
    const nav = document.getElementById("navLinks");
    const toggle = document.querySelector(".menu-toggle");

    if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("active");
    }
  });

});
