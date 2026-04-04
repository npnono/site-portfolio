/* ════════════════════════════════════════
   NOLAN PESTRE — PORTFOLIO SCRIPT
   Animations · Canvas · Scroll FX
════════════════════════════════════════ */

/* ──────────────────────────────────────
   1. CANVAS — FOND ÉTOILÉ + PARTICULES
────────────────────────────────────── */
const canvas = document.getElementById("game-bg");
const ctx    = canvas.getContext("2d");

function resize() {
  canvas.width  = document.body.scrollWidth;
  canvas.height = document.body.scrollHeight;
  // Redistribuer les étoiles sur la nouvelle hauteur totale
  stars.forEach(s => {
    s.maxY = canvas.height;
  });
}

// Étoiles — initialisées sur toute la hauteur de page
const STAR_COUNT = 350;
const stars = Array.from({ length: STAR_COUNT }, () => ({
  x:     Math.random() * window.innerWidth,
  y:     Math.random() * 9999, // sera recalibré après resize
  size:  Math.random() * 1.8 + 0.3,
  speed: Math.random() * 0.5 + 0.15,
  alpha: Math.random() * 0.7 + 0.3,
  maxY:  9999
}));

// Particules
const PARTICLE_COUNT = 40;
const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
  x:     Math.random() * window.innerWidth,
  y:     Math.random() * 9999,
  vx:    (Math.random() - 0.5) * 0.3,
  vy:    (Math.random() - 0.5) * 0.3,
  size:  Math.random() * 1.5 + 0.5,
  alpha: Math.random() * 0.25 + 0.05
}));

// Init taille après déclaration des tableaux
resize();
window.addEventListener("resize", () => {
  canvas.width  = document.body.scrollWidth;
  canvas.height = document.body.scrollHeight;
});

function drawStars() {
  stars.forEach(s => {
    ctx.globalAlpha = s.alpha;
    ctx.fillStyle   = "#00f5d4";
    ctx.fillRect(s.x, s.y, s.size, s.size);

    s.y += s.speed;
    if (s.y > canvas.height) {
      s.y    = 0;
      s.x    = Math.random() * canvas.width;
      s.alpha = Math.random() * 0.7 + 0.3;
    }
  });
}

function drawParticles() {
  particles.forEach(p => {
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle   = "#f72585";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width)  p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
  });
}

// Grille légère sur toute la page
function drawGrid() {
  ctx.globalAlpha = 0.03;
  ctx.strokeStyle = "#00f5d4";
  ctx.lineWidth   = 0.5;

  const cols = 24;
  const gap  = canvas.width / cols;

  for (let i = 0; i <= cols; i++) {
    ctx.beginPath();
    ctx.moveTo(i * gap, 0);
    ctx.lineTo(i * gap, canvas.height);
    ctx.stroke();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawStars();
  drawParticles();
  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}

animate();

// Re-sync après chargement complet (images, polices...)
window.addEventListener("load", () => {
  canvas.width  = document.body.scrollWidth;
  canvas.height = document.body.scrollHeight;
});

/* ──────────────────────────────────────
   2. SCROLL — APPARITION TIMELINE
────────────────────────────────────── */
const timelineEvents = document.querySelectorAll(".t-event");

function revealOnScroll() {
  const windowBottom = window.scrollY + window.innerHeight;

  timelineEvents.forEach(el => {
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    if (windowBottom > elTop + 60) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Au chargement

/* ──────────────────────────────────────
   3. NAV — HIGHLIGHT SECTION ACTIVE
────────────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
  const scrollY = window.scrollY + 120;

  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(a => {
        a.style.color = "";
        a.style.textShadow = "";
      });
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) {
        active.style.color      = "var(--cyan)";
        active.style.textShadow = "0 0 8px var(--cyan)";
      }
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

/* ──────────────────────────────────────
   4. EFFET GLITCH SUR LE TITRE HERO
────────────────────────────────────── */
const heroName = document.querySelector(".hero-name");

function glitchEffect() {
  if (!heroName) return;

  heroName.style.transform = `translate(${(Math.random() - 0.5) * 4}px, ${(Math.random() - 0.5) * 2}px)`;
  heroName.style.filter    = `hue-rotate(${Math.random() * 30}deg)`;

  setTimeout(() => {
    heroName.style.transform = "";
    heroName.style.filter    = "";
  }, 80);
}

// Glitch aléatoire toutes les 4 à 8 secondes
function scheduleGlitch() {
  const delay = 4000 + Math.random() * 4000;
  setTimeout(() => {
    glitchEffect();
    scheduleGlitch();
  }, delay);
}

scheduleGlitch();

/* ──────────────────────────────────────
   5. HERO TAG — EFFET TYPEWRITER
────────────────────────────────────── */
const heroTag    = document.querySelector(".hero-tag");
const heroText   = "> INITIALISATION DU PROFIL...";
let   charIndex  = 0;

if (heroTag) {
  heroTag.textContent = "";

  function typeWriter() {
    if (charIndex < heroText.length) {
      heroTag.textContent += heroText[charIndex];
      charIndex++;
      setTimeout(typeWriter, 60);
    }
  }

  setTimeout(typeWriter, 400);
}

/* ──────────────────────────────────────
   6. CURSOR PIXEL PERSONNALISÉ
────────────────────────────────────── */
const dot = document.createElement("div");
dot.style.cssText = `
  position: fixed;
  width: 6px;
  height: 6px;
  background: #00f5d4;
  box-shadow: 0 0 8px #00f5d4;
  pointer-events: none;
  z-index: 99999;
  transition: opacity 0.3s;
  image-rendering: pixelated;
`;
document.body.appendChild(dot);

document.addEventListener("mousemove", e => {
  dot.style.left = (e.clientX - 3) + "px";
  dot.style.top  = (e.clientY - 3) + "px";
});

document.addEventListener("mousedown", () => {
  dot.style.transform  = "scale(2)";
  dot.style.background = "#f72585";
  dot.style.boxShadow  = "0 0 12px #f72585";
});

document.addEventListener("mouseup", () => {
  dot.style.transform  = "";
  dot.style.background = "#00f5d4";
  dot.style.boxShadow  = "0 0 8px #00f5d4";
});
