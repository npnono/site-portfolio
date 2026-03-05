// =======================
// FOND ÉTOILÉ
// =======================
const canvas = document.getElementById("game-bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for(let i=0; i<150; i++){
  stars.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*2,
    speed: Math.random()*0.5
  });
}

function animateStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#00ffcc";
  stars.forEach(star=>{
    ctx.fillRect(star.x, star.y, star.size, star.size);
    star.y += star.speed;
    if(star.y > canvas.height){
      star.y = 0;
      star.x = Math.random()*canvas.width;
    }
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// =======================
// CANVAS CORDE
// =======================
const ropeCanvas = document.getElementById("rope-canvas");
const rctx = ropeCanvas.getContext("2d");
ropeCanvas.width = window.innerWidth;
ropeCanvas.height = window.innerHeight;

function drawRope(){
  rctx.clearRect(0,0,ropeCanvas.width,ropeCanvas.height);
  rctx.strokeStyle = "#00ffcc";
  rctx.lineWidth = 4;

  const x = ropeCanvas.width/2; // corde au milieu
  rctx.beginPath();
  rctx.moveTo(x,0);
  rctx.lineTo(x,ropeCanvas.height); // corde verticale jusqu'en bas
  rctx.stroke();

  requestAnimationFrame(drawRope);
}
drawRope();

// =======================
// Redimensionnement
// =======================
window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ropeCanvas.width = window.innerWidth;
  ropeCanvas.height = window.innerHeight;
});
