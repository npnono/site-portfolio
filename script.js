function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}
