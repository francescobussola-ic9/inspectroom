// Effetti illustrativi: non rappresentano tassi di dose o flussi misurati.
const ambientCanvas = document.getElementById('ambientCanvas');
const ambient = ambientCanvas.getContext('2d');
const W = 1536, H = 640;
const rand = (a, b) => a + Math.random() * (b - a);
const sparks = []; const solarLines = [];
const neutrinoDust = []; const lampPhotons = []; const electronSignals = [];
let lampPhotonClock = 0, electronClock = 0;

let cosmicClock = 0, sourceClock = 0, solarClock = 0, lastAmbientTime = 0;
let nextCosmic = .18, nextSource = .11, nextSolar = .40;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function newCosmic() {
  const x1 = rand(90, W - 120), y1 = rand(-40, 35), angle = rand(-.16, .18), len = rand(260, 390);
  const x2 = x1 + Math.sin(angle) * len, y2 = y1 + Math.cos(angle) * len;
  sparks.push({kind: 'cosmic', x1, y1, x2, y2, age: 0, travel: rand(.08, .13), life: rand(.48, .82), thin: rand(.8, 1.35)});
}
function newSource() {
  // Emissioni illustrative dall'intero volume del barattolo di KCl.
  const jar = {x1: 909, x2: 969, y1: 492, y2: 593};
  const a = rand(-Math.PI, Math.PI), beta = Math.random() < .78;
  const x = rand(jar.x1, jar.x2), y = rand(jar.y1, jar.y2);
  const speed = beta ? rand(120, 230) : rand(180, 320);
  sparks.push({kind: beta ? 'beta' : 'gamma', x, y, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed, age: 0, life: beta ? rand(.18, .34) : rand(.11, .22), len: beta ? rand(14, 28) : rand(22, 40)});
}
// Direzione proiettata comune: luce solare e neutrini arrivano dal Sole.
// Il vettore definisce l'inclinazione, non la velocità delle particelle reali.
const solarDirection = {x: 0.87, y: 0.49};
const solarWindows = [
  {x1: 62, x2: 132, y1: 62, y2: 191},   // finestra sinistra, interno del vetro
  {x1: 382, x2: 486, y1: 66, y2: 189}  // finestra centrale, interno del vetro
];
let nextSolarWindow = 0;
const solarLanes = [0, 0];
function newSolarLine(boost = 1) {
  // Due finestre: origine nel vetro, non sull'infisso. I raggi di ciascun
  // fascio si aprono appena verso l'aula, senza incrociarsi come raggi casuali.
  const windowIndex = nextSolarWindow;
  const glass = solarWindows[windowIndex];
  nextSolarWindow = (nextSolarWindow + 1) % solarWindows.length;
  const lane = solarLanes[windowIndex]++ % 3;
  const sx = (glass.x1 + glass.x2) / 2 + rand(-6, 6);
  const sy = glass.y1 + (glass.y2 - glass.y1) * (.28 + lane * .22) + rand(-3, 3);

  // Divergenza massima di circa 2 gradi tra i raggi estremi del fascio.
  // L'ordine delle direzioni segue quello dei punti d'origine: niente incroci.
  const baseAngle = Math.atan2(solarDirection.y, solarDirection.x);
  const angle = baseAngle + (lane - 1) * .017;
  const dx = Math.cos(angle), dy = Math.sin(angle);
  // Proseguire idealmente fuori dall'immagine anziché troncare a metà aula.
  const length = Math.min((W - sx) / dx, (H - sy) / dy) + 70;
  solarLines.push({
    sx, sy, ex: sx + dx * length, ey: sy + dy * length,
    age: 0, life: rand(4.8, 7.8), alpha: rand(.14, .25) * boost,
    width: rand(1.3, 2.6), pulse: rand(.18, .36),
    phase: rand(0, Math.PI * 2)
  });
}
function targetSolarCount(cloudLevel) {
  return Math.max(2, Math.min(5, Math.round(2 + cloudLevel * 3)));
}
function drawSolarLine(ctx, b, cloudLevel) {
  const fadeIn = Math.min(1, b.age / .7), fadeOut = Math.min(1, (b.life - b.age) / 1.0);
  let env = Math.max(0, Math.min(fadeIn, fadeOut));
  env *= (.72 + .28 * Math.sin(b.phase + b.age * b.pulse * 2));
  const a = Math.max(0, env * (.35 + .65 * cloudLevel) * b.alpha);
  // La luce non finisce a metà stanza: è la visibilità del fascio a svanire.
  // Il gradiente è applicato lungo il raggio, non soltanto al suo ultimo tratto.
  const light = ctx.createLinearGradient(b.sx, b.sy, b.ex, b.ey);
  light.addColorStop(0, `rgba(255,226,140,${a * .72})`);
  light.addColorStop(.09, `rgba(255,226,110,${a})`);
  light.addColorStop(.42, `rgba(255,226,110,${a * .65})`);
  light.addColorStop(.72, `rgba(255,226,110,${a * .22})`);
  light.addColorStop(1, 'rgba(255,226,110,0)');
  ctx.save();
  ctx.lineWidth = b.width;
  ctx.strokeStyle = light;
  ctx.shadowColor = 'rgba(255,220,110,.75)';
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.moveTo(b.sx, b.sy);
  ctx.lineTo(b.ex, b.ey);
  ctx.stroke();
  ctx.restore();
}
function newNeutrino() {
  // Solar neutrinos cross the classroom in the same projected direction as sunlight,
  // regardless of window frames, clouds and furniture: educational symbolic overlay.
  const sx = rand(-260, 700), sy = rand(-210, 570);
  const speed = rand(365, 530);
  const vx = solarDirection.x * speed, vy = solarDirection.y * speed;
  neutrinoDust.push({x: sx, y: sy, vx, vy, life: rand(2.5, 4.0), age: 0, r: rand(1.3, 2.2), a: rand(.58, .87)});
}
function newLampPhoton() {
  // Real bulb is the warm white ellipse beneath the shade near (1099,305).
  // The cone hits only the surface of the second desk on the right (y~373).
  const x1 = rand(1093, 1112), y1 = rand(310, 322);
  const x2 = rand(1037, 1175), y2 = rand(390, 410);
  lampPhotons.push({x1, y1, x2, y2, age: 0, life: rand(4.0, 7.0), width: rand(1.1, 2.2)});
}
function newElectronSignal() {
  electronSignals.push({age: 0, life: rand(.75, 1.5), offset: rand(0, 1)});
}
function drawAmbient(time) {
  requestAnimationFrame(drawAmbient);
  if (!wrap.classList.contains('revealing')) {lastAmbientTime = time; return;}
  const dt = Math.min(.05, Math.max(0, (time - (lastAmbientTime || time)) / 1000));
  lastAmbientTime = time;
  const t = time / 1000;
  ambient.clearRect(0, 0, W, H);
  const cloudLevel = Math.max(0, Math.min(1, .52 + .30 * Math.sin(t * .27 + .6) + .18 * Math.sin(t * .11 + 1.7)));
  // Neutrinos are directional white noise, not separate laser beams.
  if (!reducedMotion.matches) {
    for (let n = 0; n < 12; n++) newNeutrino();
  }
  ambient.save();
  for (let i = neutrinoDust.length - 1; i >= 0; i--) {
    const n = neutrinoDust[i]; n.age += dt;
    n.x += n.vx * dt; n.y += n.vy * dt;
    if (n.age > n.life || n.x > W + 12 || n.y > H + 12) {neutrinoDust.splice(i, 1); continue;}
    const fade = Math.min(1, n.age / .3, (n.life - n.age) / .25);
    ambient.fillStyle = `rgba(238,244,241,${n.a * Math.max(0, fade)})`;
    ambient.fillRect(n.x, n.y, n.r, n.r);
  }
  ambient.restore();
  ambient.save();
  ambient.globalCompositeOperation = 'screen';
  // illuminazione diffusa vicino alle finestre che varia con la "nuvolosità"
  const glow = ambient.createRadialGradient(415, 142, 20, 428, 192, 245);
  glow.addColorStop(0, `rgba(255,235,150,${.08 + .14 * cloudLevel})`);
  glow.addColorStop(.45, `rgba(255,230,140,${.03 + .06 * cloudLevel})`);
  glow.addColorStop(1, 'rgba(255,230,140,0)');
  ambient.fillStyle = glow;
  ambient.fillRect(335, 0, 800, 445);
  for (let i = solarLines.length - 1; i >= 0; i--) {
    const b = solarLines[i]; b.age += dt;
    if (b.age >= b.life) {solarLines.splice(i, 1); continue;}
    drawSolarLine(ambient, b, cloudLevel);
  }
  ambient.restore();
  lampPhotonClock += dt; electronClock += dt;
  if (!reducedMotion.matches) {
    while (lampPhotonClock > .64) {lampPhotonClock -= .64; newLampPhoton();}
    while (electronClock > .27) {electronClock -= .27; newElectronSignal();}
  }
  for (let i = lampPhotons.length - 1; i >= 0; i--) {
    const p = lampPhotons[i]; p.age += dt;
    if (p.age > p.life) {lampPhotons.splice(i, 1); continue;}
    const a = Math.max(0, Math.min(1, p.age / .8, (p.life - p.age) / 1.0)) * .62;
    ambient.save(); ambient.strokeStyle = `rgba(255,215,103,${a})`;
    ambient.lineWidth = p.width; ambient.shadowColor = '#fbd169'; ambient.shadowBlur = 8;
    ambient.beginPath(); ambient.moveTo(p.x1, p.y1); ambient.lineTo(p.x2, p.y2); ambient.stroke(); ambient.restore();
  }
  // Violet signals confined to the lamp's conductive arms, not free electrons in air.
  for (let i = electronSignals.length - 1; i >= 0; i--) {
    const p = electronSignals[i]; p.age += dt;
    if (p.age > p.life) {electronSignals.splice(i, 1); continue;}
    const z = (p.age / p.life + p.offset) % 1;
    // Tracciato del fusto: base -> asta verticale -> collo curvo -> paralume.
    // Segue il contorno reale del fusto nell'immagine (1536 x 640):
    // base, asta verticale, curvatura e innesto nel paralume.
    const stem = [[1063, 387], [1063, 352], [1063, 321], [1063, 304],
    [1065, 294], [1069, 288], [1074, 283], [1078, 280]];
    const distances = [0];
    for (let q = 1; q < stem.length; q++) {
      distances[q] = distances[q - 1] + Math.hypot(
        stem[q][0] - stem[q - 1][0], stem[q][1] - stem[q - 1][1]);
    }
    const d = z * distances[distances.length - 1];
    let k = 0;
    while (k < stem.length - 2 && distances[k + 1] < d) k++;
    const f = (d - distances[k]) / (distances[k + 1] - distances[k] || 1);
    const x = stem[k][0] + (stem[k + 1][0] - stem[k][0]) * f;
    const y = stem[k][1] + (stem[k + 1][1] - stem[k][1]) * f;
    const a = Math.min(1, p.age / .12, (p.life - p.age) / .15) * .8;
    ambient.save(); ambient.fillStyle = `rgba(190,124,238,${a})`; ambient.shadowColor = '#b58ae6'; ambient.shadowBlur = 9;
    ambient.beginPath(); ambient.arc(x, y, 2.2, 0, Math.PI * 2); ambient.fill(); ambient.restore();
  }
  if (!reducedMotion.matches) {
    cosmicClock += dt; sourceClock += dt; solarClock += dt;
    while (cosmicClock > nextCosmic) {cosmicClock -= nextCosmic; nextCosmic = rand(.12, .22); newCosmic();}
    while (sourceClock > nextSource) {sourceClock -= nextSource; nextSource = rand(.08, .16); newSource();}
    const desired = targetSolarCount(cloudLevel);
    while (solarLines.length < desired && solarClock > nextSolar) {solarClock -= nextSolar; nextSolar = rand(.25, .65); newSolarLine(.85 + .45 * cloudLevel);}
  }
  for (let i = sparks.length - 1; i >= 0; i--) {
    const p = sparks[i];
    ambient.save();
    if (p.kind === 'cosmic') {
      p.age += dt;
      const progress = Math.min(1, p.age / p.travel);
      const cx = p.x1 + (p.x2 - p.x1) * progress, cy = p.y1 + (p.y2 - p.y1) * progress;
      let fade;
      if (progress < 1) {fade = Math.min(1, p.age / .02);}
      else {fade = Math.max(0, 1 - (p.age - p.travel) / (p.life - p.travel));}
      if (p.age >= p.life) {sparks.splice(i, 1); ambient.restore(); continue;}
      ambient.globalAlpha = fade;
      ambient.lineWidth = p.thin;
      ambient.strokeStyle = '#8fe7ff';
      ambient.shadowColor = '#69dbff';
      ambient.shadowBlur = 8;
      ambient.beginPath();
      ambient.moveTo(p.x1, p.y1);
      ambient.lineTo(progress < 1 ? cx : p.x2, progress < 1 ? cy : p.y2);
      ambient.stroke();
      if (progress < 1) {
        ambient.fillStyle = 'rgba(170,240,255,.95)';
        ambient.beginPath(); ambient.arc(cx, cy, 1.9, 0, Math.PI * 2); ambient.fill();
      }
      ambient.restore();
      continue;
    }
    p.age += dt; p.x += p.vx * dt; p.y += p.vy * dt;
    const fadeIn = Math.min(1, p.age / .02), fadeOut = Math.min(1, (p.life - p.age) / .08), fade = Math.max(0, Math.min(fadeIn, fadeOut));
    if (p.age >= p.life || p.x < -260 || p.x > W + 260 || p.y < -140 || p.y > H + 260) {sparks.splice(i, 1); ambient.restore(); continue;}
    ambient.globalAlpha = fade;
    if (p.kind === 'beta') {
      ambient.lineWidth = 1.2;
      ambient.strokeStyle = '#ffc86d';
      ambient.shadowColor = '#ffc86d';
      ambient.shadowBlur = 5;
      ambient.beginPath();
      ambient.moveTo(p.x - p.vx * .06, p.y - p.vy * .06);
      ambient.lineTo(p.x, p.y);
      ambient.stroke();
    } else {
      ambient.lineWidth = .9;
      ambient.strokeStyle = '#dcb7ff';
      ambient.shadowColor = '#dcb7ff';
      ambient.shadowBlur = 4;
      ambient.setLineDash([3, 6]);
      ambient.beginPath();
      ambient.moveTo(p.x - p.vx * .09, p.y - p.vy * .09);
      ambient.lineTo(p.x, p.y);
      ambient.stroke();
      ambient.setLineDash([]);
    }
    ambient.restore();
  }
}
requestAnimationFrame(drawAmbient);
