// Scroll vers une section par son id
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Ouvre/ferme le menu hamburger sur mobile
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Ferme le menu si on clique sur un lien (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

// Ferme le menu si on clique en dehors (mobile)
document.addEventListener("click", function (e) {
  const nav = document.getElementById("navLinks");
  const toggle = document.querySelector(".menu-toggle");
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});
