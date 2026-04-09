// Scroll vers une section
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Menu burger
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Fermer menu quand on clique sur un lien
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

// Fermer menu si clic extérieur
document.addEventListener("click", function (e) {
  const nav = document.getElementById("navLinks");
  const toggle = document.querySelector(".menu-toggle");

  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});
