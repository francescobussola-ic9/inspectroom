
const irParticleCards = {
  electron: {model: 'Elettrone', type: 'lepton'},
  muon: {model: 'Muone', type: 'lepton'},
  photon: {model: 'Fotone', type: 'boson'},
  alpha: {symbol: 'α', name: 'Particella alfa', family: 'Particelle composte', type: 'composite', text: 'È un nucleo di elio formato da due protoni e due neutroni: non è una particella elementare del Modello Standard. È carica positivamente e deposita molta energia in poco spazio: nella camera a nebbia lascia una traccia corta e spessa; nel sensore può attivare un gruppo compatto di pixel.'}
};
function irParticleTiles(ids) {
  return `<div class="ir-particle-section"><div class="ir-particle-heading">PARTICELLE COINVOLTE</div><div class="ir-particle-grid">${ids.map(id => {const p = smCardData(irParticleCards[id]); return `<button type="button" class="ir-particle-tile ir-${p.type}" data-ir-particle="${id}" aria-label="Apri la scheda ${p.name}"><span class="ir-particle-symbol">${p.symbol}</span><span class="ir-particle-info"><strong>${p.name}</strong><small>${p.family}</small></span><span class="ir-particle-arrow">↗</span></button>`}).join('')}</div></div><div class="ir-particle-modal" id="irParticleModal" hidden role="dialog" aria-modal="true" aria-label="Scheda particella"><div class="ir-particle-dialog"><button class="ir-particle-close" type="button" aria-label="Chiudi scheda">×</button><span class="ir-particle-large-symbol" id="irParticleSymbol"></span><h3 id="irParticleName"></h3><div id="irParticleText"></div><span class="ir-particle-family" id="irParticleFamily"></span></div></div>`;
}
function irBindParticleTiles(root) {
  const modal = root.querySelector('#irParticleModal');
  if (!modal) return;
  let previous = null;
  root.querySelectorAll('[data-ir-particle]').forEach(button => button.addEventListener('click', () => {
    const p = smCardData(irParticleCards[button.dataset.irParticle]);
    previous = button;
    modal.querySelector('#irParticleSymbol').textContent = p.symbol; modal.querySelector('#irParticleSymbol').dataset.type = p.type;
    modal.querySelector('#irParticleName').textContent = p.name;
    modal.querySelector('#irParticleText')[p.model ? 'innerHTML' : 'textContent'] = p.text;
    modal.querySelector('#irParticleFamily').textContent = p.family;
    modal.hidden = false; modal.querySelector('.ir-particle-close').focus();
  }));
  function close() {modal.hidden = true; previous?.focus()}
  modal.querySelector('.ir-particle-close').addEventListener('click', close);
  modal.addEventListener('click', e => {if (e.target === modal) close()});
  root.addEventListener('keydown', e => {if (e.key === 'Escape' && !modal.hidden) {e.stopPropagation(); close()} });
}

function renderDetector() {
  const det = state.detector;
  det.view = det.view || 'photo';

  det.running = det.running !== false;
  det.focus = det.focus || 'all';
  det.lastType = det.lastType || 'Gamma o rumore di fondo';
  dialogContent.innerHTML = `<div class="mp-experience" id="mpExperience">
    <div class="mp-main">
      <div class="mp-topbar">
        <div><span class="mp-eyebrow">INSPECTROOM · RILEVATORE DI PARTICELLE</span><h3>Rivelatore a pixel</h3><p style="margin:6px 0 0;max-width:660px;color:#b7cddd;font-size:.93rem;line-height:1.4">Il <strong>rivelatore a pixel</strong> è uno strumento elettronico che permette di osservare il passaggio delle particelle, registrando i segnali prodotti quando attraversano il suo sensore.</p></div>
        <span class="mp-live" id="mpLive">${det.view === 'photo' ? 'FOTOGRAFIA DEL SISTEMA' : '● ACQUISIZIONE SIMULATA'}</span>
      </div>

      <div class="mp-viewport ${det.view === 'sim' ? 'mp-sim' : ''}" id="mpViewport">
        ${det.view === 'photo' ? `<img class="mp-bg" src="assets/detector-perspective.png" alt="Rilevatore di particelle compatto collegato via USB a un computer con visualizzazione a istogramma blu"/>` : ''}
        <canvas id="detectorCanvas" aria-label="Simulazione della visualizzazione a pixel di un rivelatore di particelle"></canvas>
        ${det.view === 'sim' ? `<div class="mp-status"><span id="mpLastTypeTop">${det.lastType}</span></div><span class="mp-visual-note">Pattern simulati · scala illustrativa</span>` : `<span class="mp-photo-note">Fotografia del rilevatore compatto collegato al computer</span>`}
      </div>

      <div class="mp-bottom">
        <div class="mp-tabs" role="group" aria-label="Vista del rivelatore">
          <button class="mp-control ${det.view === 'photo' ? 'active' : ''}" id="mpViewPhoto">Vista strumento</button>
          <button class="mp-control ${det.view === 'sim' ? 'active' : ''}" id="mpViewSim">Simulazione pixel</button>
        </div>
        <div class="mp-actions">
          <button class="mp-control" id="mpPause" ${det.view === 'photo' ? 'hidden' : ''}>${det.running ? 'Pausa' : 'Riprendi'}</button>
        </div>
      </div>

      <section class="mp-catalog" aria-label="Pattern da esplorare">
        <div class="mp-catalog-title">CONFRONTA I PATTERN <span>Seleziona un esempio da osservare</span></div>
        <div class="mp-types">
          <button class="mp-type ${det.focus === 'gamma' ? 'active' : ''}" data-mp-type="gamma">
            <svg viewBox="0 0 90 36" aria-hidden="true">
              <rect x="11" y="7" width="9" height="9" rx="2" fill="#1f98ef"/>
              <rect x="36" y="14" width="8" height="8" rx="2" fill="#4fb6ff"/>
              <rect x="61" y="10" width="7" height="7" rx="2" fill="#7ad6ff"/>
            </svg>
            <strong>Punti sparsi</strong><small>Compatibili con gamma o fondo ambientale</small>
          </button>
          <button class="mp-type ${det.focus === 'alpha' ? 'active' : ''}" data-mp-type="alpha">
            <svg viewBox="0 0 90 36" aria-hidden="true"><circle cx="45" cy="18" r="10" fill="#ffd16e"/><circle cx="45" cy="18" r="5" fill="#ff6d44"/></svg>
            <strong>Blob compatto</strong><small>Compatibile con una particella alfa</small>
          </button>
          <button class="mp-type ${det.focus === 'beta' ? 'active' : ''}" data-mp-type="beta">
            <svg viewBox="0 0 90 36" aria-hidden="true"><path d="M10 24Q18 8 29 17T42 14T56 24T78 9" stroke="#8fd1ff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <strong>Traccia irregolare</strong><small>Compatibile con beta / elettrone</small>
          </button>
          <button class="mp-type ${det.focus === 'muon' ? 'active' : ''}" data-mp-type="muon">
            <svg viewBox="0 0 90 36" aria-hidden="true"><path d="M10 26L80 8" stroke="#dff6ff" stroke-width="3" fill="none" stroke-linecap="round"/></svg>
            <strong>Traccia lunga</strong><small>Compatibile con un muone cosmico</small>
          </button>
        </div>
        <div class="mp-catalog-end"><button class="mp-control ${det.focus === 'all' ? 'active' : ''}" id="mpAll">Osservazione libera · tutti gli esempi</button></div>
      </section>
    </div>

    <aside class="mp-side">
      <div class="mp-side-label">ESPLORA</div>
      <h3>Come funziona?</h3>
      <p>Nel sensore c'è un sottile strato di <b>silicio</b>. Quando una particella o una radiazione deposita energia, nel materiale si producono cariche elettriche che vengono raccolte dai <b>pixel</b>.</p>

      <div class="mp-process">
        <div><span>01</span><strong>Passaggio</strong><small>Una particella attraversa il sensore oppure vi lascia energia.</small></div>
        <div><span>02</span><strong>Segnale</strong><small>I pixel colpiti registrano dove e quanto è avvenuto il deposito di energia.</small></div>
        <div><span>03</span><strong>Immagine</strong><small>Il software trasforma il segnale in un pattern: punti, blob o tracce.</small></div>
      </div>

      ${irParticleTiles(["electron", "muon", "photon", "alpha"])}
      <p class="mp-caution">Nel dispositivo reale i pattern aiutano a <strong>distinguere</strong> tipi diversi di eventi, ma l'identificazione non è mai affidata a un solo segno visivo in modo assoluto. Qui usiamo una versione semplificata e didattica.</p>
    </aside>
  </div>`;

  const root = document.getElementById('mpExperience');
  irBindParticleTiles(root);
  const viewport = root.querySelector('#mpViewport');
  const canvas = root.querySelector('#detectorCanvas');
  const ctx = canvas.getContext('2d');
  let running = det.running;
  const grid = 36;
  let heat = [];
  let timer = 0;

  function resize() {
    const box = viewport.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(box.width * dpr));
    canvas.height = Math.max(1, Math.round(box.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (det.view === 'sim') draw();
  }
  function resetHeat() {heat = Array.from({length: grid}, () => Array(grid).fill(0))}
  function deposit(x, y, v) {if (x >= 0 && y >= 0 && x < grid && y < grid) heat[y][x] = Math.min(1, heat[y][x] + v)}
  function addPattern(type) {
    resetHeat();
    if (type === 'gamma') {
      // Un evento gamma: un hit puntiforme o pochi pixel contigui,
      // non più segnali isolati arbitrari attribuiti alla stessa particella.
      const x = 2 + Math.floor(Math.random() * (grid - 4));
      const y = 2 + Math.floor(Math.random() * (grid - 4));
      deposit(x, y, 0.55 + Math.random() * 0.4);
      if (Math.random() < 0.32) deposit(x + (Math.random() < 0.5 ? -1 : 1), y, 0.35 + Math.random() * 0.3);
    }
    if (type === 'alpha') {
      let x = 10 + Math.floor(Math.random() * (grid - 20)), y = 10 + Math.floor(Math.random() * (grid - 20));
      for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) deposit(x + dx, y + dy, 1 - Math.hypot(dx, dy) * 0.14);
    }
    if (type === 'beta') {
      let x = 4 + Math.floor(Math.random() * (grid - 8)), y = 4 + Math.floor(Math.random() * (grid - 8)), ang = Math.random() * Math.PI * 2;
      for (let i = 0; i < 30; i++) {
        deposit(Math.round(x), Math.round(y), 0.56);
        ang += (-0.8 + Math.random() * 1.6);
        x += Math.cos(ang) * 0.9; y += Math.sin(ang) * 0.9;
      }
    }
    if (type === 'muon') {
      let x = Math.random() * grid * 0.25, y = Math.random() * grid; let ang = -0.16 + Math.random() * 0.32;
      for (let i = 0; i < grid * 1.3; i++) deposit(Math.round(x + i * Math.cos(ang)), Math.round(y + i * Math.sin(ang)), 0.72);
    }
    det.lastType = typeLabel(type);
    const top = root.querySelector('#mpLastTypeTop'); if (top) top.textContent = det.lastType;
  }
  function chooseType() {
    if (det.focus !== 'all') return det.focus;
    const candidates = ['gamma', 'alpha', 'beta', 'muon'];
    return candidates[Math.floor(Math.random() * candidates.length)];
  }
  function draw() {
    const w = canvas.getBoundingClientRect().width, h = canvas.getBoundingClientRect().height;
    ctx.clearRect(0, 0, w, h);
    if (det.view !== 'sim') return;
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#07111e'); bg.addColorStop(1, '#081827');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    const cell = Math.min(w, h) / grid;
    const offX = (w - cell * grid) / 2, offY = (h - cell * grid) / 2;
    for (let y = 0; y < grid; y++) {
      for (let x = 0; x < grid; x++) {
        ctx.fillStyle = '#10253c';
        ctx.fillRect(offX + x * cell, offY + y * cell, cell - 1, cell - 1);
        const v = heat[y][x];
        if (v > 0) {
          const c = v > 0.78 ? '#ff6d44' : v > 0.46 ? '#ffd16e' : '#1f98ef';
          ctx.fillStyle = c;
          ctx.fillRect(offX + x * cell + 0.5, offY + y * cell + 0.5, Math.max(1, cell - 2), Math.max(1, cell - 2));
        }
      }
    }
  }
  function newEvt(force) {addPattern(force || chooseType()); draw();}
  function renderButtons() {
    root.querySelector('#mpAll').classList.toggle('active', det.focus === 'all');
    root.querySelectorAll('[data-mp-type]').forEach(btn => btn.classList.toggle('active', det.focus === btn.dataset.mpType));
    root.querySelector('#mpPause').textContent = running ? 'Pausa' : 'Riprendi';
    root.querySelector('#mpLive').textContent = det.view === 'photo' ? 'FOTOGRAFIA DEL SISTEMA' : (running ? '● ACQUISIZIONE SIMULATA' : 'Ⅱ SIMULAZIONE IN PAUSA');
  }
  function tick() {
    if (!root.isConnected) return;
    clearInterval(timer);
    timer = setInterval(() => {if (running && det.view === 'sim') newEvt();}, 1200);
  }

  root.querySelector('#mpViewPhoto').onclick = () => {det.view = 'photo'; renderScene()};
  root.querySelector('#mpViewSim').onclick = () => {det.view = 'sim'; renderScene()};
  root.querySelector('#mpPause').onclick = () => {running = !running; det.running = running; renderButtons(); tick();};
  root.querySelector('#mpAll').onclick = () => {det.focus = 'all'; if (det.view !== 'sim') {det.view = 'sim'; renderScene(); return;} renderButtons(); newEvt();};
  root.querySelectorAll('[data-mp-type]').forEach(btn => btn.onclick = () => {det.focus = btn.dataset.mpType; if (det.view !== 'sim') {det.view = 'sim'; renderScene(); return;} renderButtons(); newEvt(det.focus)});

  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  ro?.observe(viewport);
  window.addEventListener('resize', resize);
  addCleanup(() => {window.removeEventListener('resize', resize); ro?.disconnect(); clearInterval(timer)});
  resetHeat(); resize(); renderButtons(); if (det.view === 'sim') newEvt(); else draw(); tick();
}

function typeLabel(type) {
  return {gamma: 'Piccoli punti (gamma / fondo)', alpha: 'Blob compatto (alfa candidato)', beta: 'Traccia irregolare (beta / elettrone candidato)', muon: 'Traccia lunga (muone candidato)'}[type];
}
