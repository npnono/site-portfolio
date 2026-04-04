/* ════════════════════════════════════════
   NOLAN PESTRE — PORTFOLIO STYLE
   Game Dev Aesthetic · Dark · Pixel
════════════════════════════════════════ */

:root {
  --cyan:    #00f5d4;
  --magenta: #f72585;
  --yellow:  #f9c74f;
  --dark:    #03050f;
  --darker:  #010308;
  --card:    rgba(0,245,212,0.04);
  --border:  rgba(0,245,212,0.15);
  --text:    #c8d8e8;
  --muted:   #556070;
  --pixel:   'Press Start 2P', monospace;
  --mono:    'Share Tech Mono', monospace;
  --display: 'Orbitron', sans-serif;
}

/* ── RESET ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

/* ── BASE ── */
body {
  background: var(--darker);
  color: var(--text);
  font-family: var(--mono);
  font-size: 15px;
  line-height: 1.7;
  overflow-x: hidden;
  cursor: crosshair;
}

/* ── SCANLINES ── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.15) 2px,
    rgba(0,0,0,0.15) 4px
  );
  pointer-events: none;
  z-index: 9999;
}

/* ── CANVAS BG ── */
#game-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  opacity: 0.65;
}

/* ── PAGE WRAPPER ── */
.page { position: relative; z-index: 1; }

/* ════════════════════
   NAV
════════════════════ */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 48px;
  background: rgba(1,3,8,0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.nav-logo {
  font-family: var(--pixel);
  font-size: 10px;
  color: var(--cyan);
  letter-spacing: 2px;
  text-shadow: 0 0 10px var(--cyan);
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  font-family: var(--pixel);
  font-size: 8px;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.2s, text-shadow 0.2s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 2px;
  background: var(--cyan);
  box-shadow: 0 0 6px var(--cyan);
  transition: width 0.3s;
}

.nav-links a:hover {
  color: var(--cyan);
  text-shadow: 0 0 8px var(--cyan);
}

.nav-links a:hover::after { width: 100%; }

/* ════════════════════
   HERO
════════════════════ */
#hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10vw;
  position: relative;
}

.hero-tag {
  font-family: var(--pixel);
  font-size: 9px;
  color: var(--magenta);
  letter-spacing: 3px;
  text-shadow: 0 0 8px var(--magenta);
  margin-bottom: 20px;
  animation: blink 1.2s step-end infinite;
}

@keyframes blink { 50% { opacity: 0; } }

.hero-name {
  font-family: var(--display);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  line-height: 1;
  color: #fff;
  letter-spacing: -2px;
  margin-bottom: 12px;
}

.hero-name span {
  display: block;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--magenta) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 24px rgba(0,245,212,0.4));
}

.hero-sub {
  font-family: var(--mono);
  font-size: 18px;
  color: var(--muted);
  margin-bottom: 40px;
  letter-spacing: 4px;
}

.hero-sub em {
  color: var(--cyan);
  font-style: normal;
}

.hero-badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.badge {
  font-family: var(--pixel);
  font-size: 7px;
  padding: 8px 16px;
  border: 1px solid var(--border);
  color: var(--cyan);
  letter-spacing: 1px;
  background: rgba(0,245,212,0.06);
  transition: all 0.2s;
}

.badge:hover {
  background: rgba(0,245,212,0.15);
  box-shadow: 0 0 12px rgba(0,245,212,0.3);
}

.badge.alt {
  border-color: rgba(247,37,133,0.3);
  color: var(--magenta);
  background: rgba(247,37,133,0.06);
}

.badge.alt:hover {
  background: rgba(247,37,133,0.15);
  box-shadow: 0 0 12px rgba(247,37,133,0.3);
}

.cta-btn {
  font-family: var(--pixel);
  font-size: 9px;
  padding: 16px 32px;
  background: transparent;
  border: 2px solid var(--cyan);
  color: var(--cyan);
  cursor: pointer;
  letter-spacing: 2px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: all 0.2s;
  text-shadow: 0 0 8px var(--cyan);
  box-shadow: 0 0 12px rgba(0,245,212,0.2), inset 0 0 12px rgba(0,245,212,0.05);
}

.cta-btn::before {
  content: '';
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(0,245,212,0.2);
  pointer-events: none;
}

.cta-btn:hover {
  background: rgba(0,245,212,0.12);
  box-shadow: 0 0 30px rgba(0,245,212,0.4), inset 0 0 20px rgba(0,245,212,0.1);
  transform: translateY(-2px);
}

.hero-scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--pixel);
  font-size: 7px;
  color: var(--muted);
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: floatY 2s ease-in-out infinite;
}

.hero-scroll::after {
  content: '';
  display: block;
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--muted), transparent);
}

@keyframes floatY {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(8px); }
}

/* ════════════════════
   SECTIONS COMMUNES
════════════════════ */
section {
  padding: 100px 10vw;
  position: relative;
}

section::before {
  content: attr(data-num);
  position: absolute;
  top: 60px;
  right: 10vw;
  font-family: var(--display);
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 900;
  color: rgba(0,245,212,0.03);
  pointer-events: none;
  letter-spacing: -4px;
}

.section-label {
  font-family: var(--pixel);
  font-size: 8px;
  color: var(--magenta);
  letter-spacing: 4px;
  text-shadow: 0 0 6px var(--magenta);
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -1px;
  margin-bottom: 56px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 2px;
  background: linear-gradient(to right, var(--cyan), transparent);
  margin-top: 16px;
  box-shadow: 0 0 8px var(--cyan);
}

/* ════════════════════
   ABOUT
════════════════════ */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.about-text p {
  color: var(--text);
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 1.8;
}

.about-text p strong { color: var(--cyan); }

.stage-box {
  border: 1px solid var(--magenta);
  padding: 24px;
  background: rgba(247,37,133,0.05);
  position: relative;
  margin-top: 12px;
}

.stage-box::before {
  content: '[ OPEN TO WORK ]';
  font-family: var(--pixel);
  font-size: 7px;
  color: var(--magenta);
  position: absolute;
  top: -10px; left: 16px;
  background: var(--darker);
  padding: 0 8px;
  text-shadow: 0 0 8px var(--magenta);
  animation: blink 2s step-end infinite;
}

.stage-box p {
  font-family: var(--pixel);
  font-size: 9px;
  color: var(--magenta);
  line-height: 2;
  text-shadow: 0 0 6px rgba(247,37,133,0.5);
}

.stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.stat-card {
  border: 1px solid var(--border);
  padding: 24px 20px;
  background: var(--card);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px; height: 100%;
  background: var(--cyan);
  box-shadow: 0 0 8px var(--cyan);
}

.stat-card:hover {
  background: rgba(0,245,212,0.08);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,245,212,0.1);
}

.stat-num {
  font-family: var(--display);
  font-size: 2rem;
  font-weight: 900;
  color: var(--cyan);
  text-shadow: 0 0 12px var(--cyan);
  margin-bottom: 4px;
}

.stat-label {
  font-family: var(--pixel);
  font-size: 7px;
  color: var(--muted);
  letter-spacing: 1px;
}

/* ════════════════════
   TIMELINE
════════════════════ */
.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, var(--cyan), var(--magenta), transparent);
  box-shadow: 0 0 6px var(--cyan);
}

.t-event {
  position: relative;
  margin-bottom: 48px;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.t-event.visible {
  opacity: 1;
  transform: translateX(0);
}

.t-event::before {
  content: '';
  position: absolute;
  left: -46px; top: 6px;
  width: 12px; height: 12px;
  background: var(--cyan);
  box-shadow: 0 0 12px var(--cyan), 0 0 24px rgba(0,245,212,0.4);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.t-event:nth-child(even)::before {
  background: var(--magenta);
  box-shadow: 0 0 12px var(--magenta), 0 0 24px rgba(247,37,133,0.4);
}

.t-year {
  font-family: var(--pixel);
  font-size: 8px;
  color: var(--cyan);
  letter-spacing: 2px;
  margin-bottom: 8px;
  text-shadow: 0 0 6px var(--cyan);
}

.t-event:nth-child(even) .t-year {
  color: var(--magenta);
  text-shadow: 0 0 6px var(--magenta);
}

.t-title {
  font-family: var(--display);
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.t-desc {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  max-width: 560px;
}

.t-tag {
  display: inline-block;
  font-family: var(--pixel);
  font-size: 6px;
  padding: 4px 10px;
  border: 1px solid rgba(0,245,212,0.2);
  color: var(--cyan);
  background: rgba(0,245,212,0.05);
  margin-top: 10px;
  margin-right: 6px;
  letter-spacing: 1px;
}

/* ════════════════════
   SKILLS
════════════════════ */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.skill-card {
  border: 1px solid var(--border);
  padding: 32px 28px;
  background: var(--card);
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  cursor: default;
}

.skill-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(to right, var(--cyan), transparent);
  box-shadow: 0 0 8px var(--cyan);
}

.skill-card:hover {
  background: rgba(0,245,212,0.07);
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0,245,212,0.1);
  border-color: rgba(0,245,212,0.35);
}

.skill-icon {
  font-family: var(--mono);
  font-size: 22px;
  color: var(--cyan);
  text-shadow: 0 0 10px var(--cyan);
  margin-bottom: 16px;
}

.skill-title {
  font-family: var(--display);
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.skill-list {
  list-style: none;
}

.skill-list li {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
  padding: 6px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: color 0.2s;
}

.skill-list li::before {
  content: '> ';
  color: var(--cyan);
  opacity: 0.5;
}

.skill-card:hover .skill-list li { color: var(--text); }

/* ════════════════════
   PROJECTS
════════════════════ */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card {
  border: 1px solid var(--border);
  padding: 36px 28px;
  background: var(--card);
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-card:hover {
  background: rgba(0,245,212,0.06);
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0,245,212,0.12);
  border-color: rgba(0,245,212,0.3);
}

.project-num {
  font-family: var(--display);
  font-size: 3rem;
  font-weight: 900;
  color: rgba(0,245,212,0.08);
  line-height: 1;
  position: absolute;
  top: 16px; right: 20px;
}

.project-title {
  font-family: var(--display);
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
}

.project-desc {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
  line-height: 1.7;
  flex: 1;
}

.project-tags { margin-top: 4px; }

.project-link {
  font-family: var(--pixel);
  font-size: 7px;
  color: var(--cyan);
  text-decoration: none;
  letter-spacing: 2px;
  margin-top: 8px;
  display: inline-block;
  transition: text-shadow 0.2s;
}

.project-link:hover {
  text-shadow: 0 0 10px var(--cyan);
}

/* ════════════════════
   CONTACT
════════════════════ */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.contact-card {
  border: 1px solid var(--border);
  padding: 36px 28px;
  background: var(--card);
  text-align: center;
  transition: all 0.3s;
}

.contact-card:hover {
  background: rgba(0,245,212,0.08);
  transform: translateY(-6px);
  box-shadow: 0 12px 36px rgba(0,245,212,0.1);
  border-color: rgba(0,245,212,0.3);
}

.contact-icon {
  font-family: var(--mono);
  font-size: 28px;
  color: var(--cyan);
  text-shadow: 0 0 12px var(--cyan);
  margin-bottom: 12px;
}

.contact-label {
  font-family: var(--pixel);
  font-size: 7px;
  color: var(--muted);
  letter-spacing: 3px;
  margin-bottom: 10px;
}

.contact-value {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--text);
  text-decoration: none;
  transition: color 0.2s;
}

a.contact-value:hover {
  color: var(--cyan);
  text-shadow: 0 0 6px var(--cyan);
}

/* ════════════════════
   FOOTER
════════════════════ */
footer {
  border-top: 1px solid var(--border);
  padding: 32px 10vw;
  position: relative;
  z-index: 1;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-logo {
  font-family: var(--pixel);
  font-size: 9px;
  color: var(--cyan);
  text-shadow: 0 0 8px var(--cyan);
  letter-spacing: 2px;
}

.footer-copy {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
}

.footer-tag {
  font-family: var(--pixel);
  font-size: 7px;
  color: var(--magenta);
  text-shadow: 0 0 6px var(--magenta);
  letter-spacing: 1px;
  animation: blink 2.5s step-end infinite;
}

/* ════════════════════
   RESPONSIVE
════════════════════ */
@media (max-width: 900px) {
  nav { padding: 16px 24px; }
  .nav-links { gap: 16px; }
  section { padding: 80px 6vw; }
  .about-grid { grid-template-columns: 1fr; }
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
  .projects-grid { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .nav-links { display: none; }
  .skills-grid { grid-template-columns: 1fr; }
  .hero-name { font-size: clamp(2.5rem, 12vw, 5rem); }
}
