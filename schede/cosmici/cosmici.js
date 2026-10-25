const crParticleCards = {
  proton: {symbol: 'p', name: 'Protone', family: 'Particelle composte', tile: 'composite', text: 'Molti raggi cosmici primari sono protoni. Il protone non è una particella elementare: è composto da tre quark (due up e uno down), legati dai gluoni. Può urtare un nucleo dell’aria e avviare una cascata.'},
  pion: {symbol: 'π', name: 'Pioni', family: 'Particelle composte', tile: 'composite', text: 'Nelle collisioni atmosferiche possono nascere pioni. Non sono particelle elementari: sono composti da un quark e un antiquark. I pioni neutri decadono soprattutto in due fotoni; quelli carichi possono decadere in muoni e neutrini.'},
  muon: {model: 'Muone', tile: 'lepton'},
  photon: {model: 'Fotone', tile: 'boson'},
  electron: {model: 'Elettrone', tile: 'lepton'},
  tau: {model: 'Tau', tile: 'lepton'},
  neutrino: {model: 'Neutrini', tile: 'lepton'}
};
const crSteps = [
  {
    title: 'Arrivo dallo spazio',
    short: 'Un raggio cosmico primario entra nell’atmosfera.',
    heading: '1 · Un protone arriva dallo spazio',
    text: 'Qui rappresentiamo un caso tipico: un <strong>protone</strong> entra dall’alto e si dirige verso l’atmosfera terrestre. I raggi cosmici primari possono avere energie altissime e provengono da fenomeni astrofisici lontani.'
  },
  {
    title: 'Prima collisione',
    short: 'L’urto con un nucleo di azoto genera nuove particelle.',
    heading: '2 · La collisione con l’atmosfera',
    text: 'Quando il protone urta un <strong>nucleo di azoto</strong>, l’energia della collisione produce nuove particelle. Tra le più importanti, in questa versione semplificata, ci sono i <strong>pioni</strong>, che sono il punto di partenza della cascata.'
  },
  {
    title: 'Cascata atmosferica',
    short: 'La doccia di particelle si ramifica mentre scende.',
    heading: '3 · La cascata si ramifica',
    text: 'La collisione iniziale dà avvio a una <strong>cascata atmosferica</strong>. I <strong>pioni neutri</strong> danno fotoni; i <strong>pioni carichi</strong> possono portare a muoni e neutrini. Compaiono anche elettroni e positroni nella parte elettromagnetica della cascata. <strong>Solo negli eventi più energetici</strong> possono verificarsi anche processi molto rari che producono un tau.'
  },
  {
    title: 'Muoni al suolo',
    short: 'Alcune particelle arrivano fino all’aula.',
    heading: '4 · Muoni che raggiungono il suolo',
    text: 'Tra tutte le particelle secondarie, i <strong>muoni</strong> sono tra quelle che più facilmente arrivano fino al suolo. Sono proprio questi segnali che possiamo collegare alle tracce nella <strong>camera a nebbia</strong> o a eventi nel <strong>rilevatore di particelle</strong> dell’aula.'
  }
];
function crParticleTiles(ids) {
  return `<div class="cr-particles"><div class="cr-side-label">PARTICELLE COINVOLTE</div><h4>Apri una scheda rapida</h4><div class="cr-particle-grid">${ids.map(id => {const p = smCardData(crParticleCards[id]); return `<button type="button" class="cr-particle-tile" data-cr-particle="${id}" aria-label="Apri la scheda ${p.name}"><span class="cr-particle-symbol cr-${p.tile}">${p.symbol}</span><span class="cr-particle-info"><strong>${p.name}</strong><small>${p.family}</small></span><span class="cr-particle-arrow">↗</span></button>`}).join('')}</div></div><div class="cr-particle-modal" id="crParticleModal" hidden role="dialog" aria-modal="true" aria-label="Scheda particella"><div class="cr-particle-dialog"><button class="cr-particle-close" type="button" aria-label="Chiudi scheda">×</button><span class="cr-particle-large-symbol" id="crParticleSymbol"></span><h3 id="crParticleName"></h3><div id="crParticleText"></div><span class="cr-particle-family" id="crParticleFamily"></span></div></div>`;
}
function crBindParticleTiles(root) {
  const modal = root.querySelector('#crParticleModal'); if (!modal) return;
  let previous = null;
  root.querySelectorAll('[data-cr-particle]').forEach(button => button.addEventListener('click', () => {
    const p = smCardData(crParticleCards[button.dataset.crParticle]); previous = button;
    modal.querySelector('#crParticleSymbol').textContent = p.symbol;
    modal.querySelector('#crParticleName').textContent = p.name;
    modal.querySelector('#crParticleText')[p.model ? 'innerHTML' : 'textContent'] = p.text;
    modal.querySelector('#crParticleFamily').textContent = p.family;
    modal.querySelector('#crParticleSymbol').className = 'cr-particle-large-symbol cr-' + p.tile;
    modal.hidden = false; modal.querySelector('.cr-particle-close').focus();
  }));
  function close() {modal.hidden = true; previous?.focus();}
  modal.querySelector('.cr-particle-close').addEventListener('click', close);
  modal.addEventListener('click', e => {if (e.target === modal) close()});
  root.addEventListener('keydown', e => {if (e.key === 'Escape' && !modal.hidden) {e.stopPropagation(); close()} });
}
function renderCosmici() {
  dialogContent.innerHTML = `<div class="cr-experience" id="crExperience">
    <div class="cr-main">
      <div class="cr-topbar">
        <div><span class="cr-eyebrow">INSPECTROOM · RAGGI COSMICI</span><h3>Dallo spazio all’aula</h3><p>Una singola cascata atmosferica illustrata con il linguaggio visivo di Inspectroom.</p></div>
        <span class="cr-live">EVENTO ILLUSTRATO</span>
      </div>
      <div class="cr-stage-wrap">
        <div class="cr-stage"><canvas id="crCanvas" aria-label="Animazione di una cascata di raggi cosmici nell’atmosfera"></canvas></div>
        <div class="cr-legend"><span><i style="color:#ffffff"></i> traiettorie principali</span><span><i style="color:#ffcf87"></i> fotoni</span><span><i style="color:#95d9ff"></i> elettroni / positroni</span><span><i style="color:#78ffbe"></i> muoni</span><span><i style="color:#d9b4ff"></i> neutrini</span><span><i style="color:#ffa5d8"></i> tau · raro</span></div>
      </div>
      <p class="cr-caption">Rappresentazione illustrativa: osserviamo un <strong>singolo evento</strong> semplificato. Nella realtà le cascate non sono tutte uguali e le particelle secondarie possono essere molto numerose.</p>
    </div>
    <aside class="cr-side">
      <div class="cr-side-label">ESPLORA · APRI UNA TAPPA</div>
      <div class="cr-menu" id="crMenu">${crSteps.map((step, i) => `<button class="cr-step" type="button" data-cr-step="${i}" aria-expanded="false"><span class="cr-step-num">${i + 1}</span><span class="cr-step-body"><strong>${step.title}</strong><small>${step.short}</small><span class="cr-expand" aria-hidden="true">+</span></span></button><div class="cr-step-detail" data-cr-detail="${i}" hidden><p>${step.text}</p></div>`).join('')}</div>
      <div class="cr-mini-note"><strong>Ramo raro:</strong> nelle collisioni primarie estremamente energetiche può formarsi un mesone Dₛ che decade in un <strong>tau</strong> e un neutrino. Il tau decade quasi immediatamente: nel disegno è un esempio eccezionale, non il percorso consueto della cascata.</div>
      <div class="cr-mini-note"><strong>Collegamento con l’aula:</strong> i <strong>muoni</strong> prodotti nella cascata sono i candidati più naturali per spiegare molte tracce che si vedono nella camera a nebbia e alcuni eventi osservabili nel rivelatore.</div>
      ${crParticleTiles(['proton', 'pion', 'muon', 'photon', 'electron', 'neutrino', 'tau'])}
    </aside>
  </div>`;
  const root = document.getElementById('crExperience');
  crBindParticleTiles(root);
  const buttons = [...root.querySelectorAll('[data-cr-step]')];
  let focus = null;
  buttons.forEach(btn => btn.addEventListener('click', () => setFocus(Number(btn.dataset.crStep))));
  function setFocus(i) {focus = focus === i ? null : i; buttons.forEach((b, idx) => {const expanded = idx === focus; b.classList.toggle('active', expanded); b.setAttribute('aria-expanded', String(expanded)); b.querySelector('.cr-expand').textContent = expanded ? '−' : '+'; root.querySelector('[data-cr-detail="' + idx + '"]').hidden = !expanded;});}

  const canvas = root.querySelector('#crCanvas');
  const ctx = canvas.getContext('2d');
  let raf = 0; let start = 0;
  const tracks = [
    {id: 'primary', type: 'primary', label: 'protone', color: '#ffffff', width: 3.8, glow: 16, phase: [0.02, 0.18], points: [[0.56, 0.02], [0.53, 0.10], [0.51, 0.18]], focus: [0]},
    {id: 'air', type: 'label', label: 'nucleo di azoto', color: '#fefefe', width: 0, phase: [0.16, 1], pos: [0.515, 0.195], focus: [1]},
    {id: 'pion-main', type: 'pion', label: 'π', color: '#f7f7ff', width: 4.2, glow: 16, phase: [0.18, 0.38], points: [[0.51, 0.18], [0.46, 0.31], [0.41, 0.43]], focus: [1, 2]},
    {id: 'pion-branch', type: 'pion', label: 'π', color: '#f7f7ff', width: 3.1, glow: 11, phase: [0.22, 0.34], points: [[0.51, 0.18], [0.57, 0.28], [0.64, 0.38]], focus: [1, 2]},
    {id: 'muon-left', type: 'muon', label: 'μ', color: '#78ffbe', width: 4.0, glow: 18, phase: [0.36, 0.66], points: [[0.41, 0.43], [0.36, 0.61], [0.31, 0.79], [0.27, 1.03]], focus: [2, 3]},
    {id: 'muon-center', type: 'muon', label: 'μ', color: '#78ffbe', width: 4.4, glow: 18, phase: [0.33, 0.64], points: [[0.41, 0.43], [0.42, 0.65], [0.43, 1.03]], focus: [2, 3]},
    {id: 'muon-right', type: 'muon', label: 'μ', color: '#78ffbe', width: 3.8, glow: 18, phase: [0.34, 0.63], points: [[0.46, 0.31], [0.49, 0.52], [0.52, 0.79], [0.54, 1.02]], focus: [2, 3]},
    {id: 'gamma-top', type: 'gamma', label: 'γ', color: '#ffcf87', width: 2.5, glow: 12, phase: [0.23, 0.40], points: [[0.57, 0.28], [0.62, 0.31], [0.66, 0.36]], focus: [2]},
    {id: 'gamma-mid', type: 'gamma', label: 'γ', color: '#ffcf87', width: 2.5, glow: 12, phase: [0.26, 0.43], points: [[0.64, 0.38], [0.68, 0.48], [0.73, 0.56]], focus: [2]},
    {id: 'eplus', type: 'electron', label: 'e⁺', color: '#95d9ff', width: 2.3, glow: 10, phase: [0.32, 0.52], points: [[0.66, 0.36], [0.70, 0.44], [0.74, 0.52]], focus: [2]},
    {id: 'eminus', type: 'electron', label: 'e⁻', color: '#95d9ff', width: 2.3, glow: 10, phase: [0.37, 0.54], points: [[0.72, 0.53], [0.77, 0.61], [0.83, 0.67]], focus: [2]},
    {id: 'neutrino-left', type: 'neutrino', label: 'ν', color: '#d9b4ff', width: 1.8, glow: 8, dash: [6, 8], phase: [0.35, 0.55], points: [[0.41, 0.43], [0.28, 0.70], [0.14, 0.98]], focus: [2]},
    {id: 'neutrino-right', type: 'neutrino', label: 'ν', color: '#d9b4ff', width: 1.8, glow: 8, dash: [6, 8], phase: [0.36, 0.56], points: [[0.46, 0.31], [0.62, 0.58], [0.82, 0.94]], focus: [2]},
    // Ramo eccezionale: produzione di charm in collisione molto energetica,
    // D_s -> tau + neutrino; tau -> muone + neutrini. Non è il caso tipico.
    {id: 'rare-ds', type: 'rare', label: 'Dₛ', color: '#ffa5d8', width: 2.0, glow: 9, dash: [4, 5], phase: [0.23, 0.31], points: [[0.51, 0.18], [0.39, 0.23], [0.31, 0.28]], focus: [1, 2]},
    {id: 'rare-tau', type: 'tau', label: 'τ (raro)', color: '#ffa5d8', width: 2.9, glow: 15, dash: [4, 4], phase: [0.32, 0.41], points: [[0.31, 0.28], [0.265, 0.37], [0.23, 0.45]], focus: [2]},
    {id: 'rare-muon', type: 'muon', label: 'μ', color: '#78ffbe', width: 2.1, glow: 10, dash: [5, 6], phase: [0.42, 0.65], points: [[0.23, 0.45], [0.19, 0.62], [0.17, 0.78]], focus: [2, 3]},
    {id: 'rare-neutrino', type: 'neutrino', label: 'ν', color: '#d9b4ff', width: 1.8, glow: 8, dash: [4, 7], phase: [0.42, 0.59], points: [[0.23, 0.45], [0.10, 0.62], [0.06, 0.80]], focus: [2]},

  ];
  function resize() {
    const rect = canvas.getBoundingClientRect(); const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * dpr)); canvas.height = Math.max(1, Math.round(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw((performance.now() - start) % 10000 / 10000);
  }
  function mix(a, b, t) {return a + (b - a) * t}
  function ease(t) {return t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t)}
  function drawBackground(w, h) {
    const sky = ctx.createLinearGradient(0, 0, 0, h); sky.addColorStop(0, '#03111f'); sky.addColorStop(.52, '#0b2b48'); sky.addColorStop(.78, '#24567e'); sky.addColorStop(1, '#1b3958');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
    const bands = [['#153450', 0, .18], ['#2a5a7d', .18, .36], ['#4e7fa1', .36, .56], ['#82a7be', .56, .76], ['#a7bbc8', .76, .86]];
    bands.forEach(([c, y0, y1]) => {ctx.fillStyle = c; ctx.globalAlpha = .32; ctx.fillRect(0, h * y0, w, h * (y1 - y0));}); ctx.globalAlpha = 1;
    // stars
    for (let i = 0; i < 18; i++) {const x = (i * 83) % w + (i % 3) * 13; const y = 18 + (i * 47) % Math.max(80, h * .18); ctx.fillStyle = 'rgba(255,255,255,.75)'; ctx.fillRect(x, y, 2, 2);}
    // mountains
    function mountain(points, fill) {ctx.beginPath(); ctx.moveTo(0, h); points.forEach(([px, py]) => ctx.lineTo(w * px, h * py)); ctx.lineTo(w, h); ctx.closePath(); ctx.fillStyle = fill; ctx.fill();}
    mountain([[0, .82], [.08, .76], [.16, .83], [.25, .74], [.31, .69], [.35, .74], [.41, .72], [.47, .77], [.54, .78], [.61, .74], [.69, .75], [.76, .71], [.84, .66], [.90, .72], [1, .77]], 'rgba(106,112,101,.85)');
    mountain([[0, .84], [.12, .80], [.24, .88], [.37, .86], [.51, .91], [.68, .84], [.82, .90], [.95, .87], [1, .88]], 'rgba(82,88,79,.78)');
    ctx.fillStyle = '#625f50'; ctx.fillRect(0, h * .84, w, h * .16);
    ctx.fillStyle = '#839bb4'; ctx.font = '700 12px "IBM Plex Sans", system-ui'; ctx.fillText('atmosfera', 14, h * .09);
    ctx.fillText('suolo', 14, h * .92);
  }
  function drawTrack(points, progress, color, width, glow, dash) {
    if (progress <= 0) return;
    const [p0, ...rest] = points;
    const segments = [];
    let total = 0;
    for (let i = 0; i < points.length - 1; i++) {const a = points[i], b = points[i + 1]; const len = Math.hypot(b[0] - a[0], b[1] - a[1]); segments.push({a, b, len}); total += len;}
    let remaining = total * Math.min(1, progress);
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.shadowBlur = glow; ctx.shadowColor = color; if (dash) ctx.setLineDash(dash);
    ctx.beginPath(); ctx.moveTo(p0[0], p0[1]);
    for (const seg of segments) {if (remaining <= 0) break; if (remaining >= seg.len) {ctx.lineTo(seg.b[0], seg.b[1]); remaining -= seg.len;} else {const t = remaining / seg.len; ctx.lineTo(mix(seg.a[0], seg.b[0], t), mix(seg.a[1], seg.b[1], t)); remaining = 0; break;} }
    ctx.stroke(); ctx.restore();
  }
  function draw(progress) {
    const w = canvas.getBoundingClientRect().width, h = canvas.getBoundingClientRect().height; if (w < 3 || h < 3) return; ctx.clearRect(0, 0, w, h); drawBackground(w, h);
    const activeFocus = focus;
    const collision = [w * 0.51, h * 0.18];
    // subtle collision glow when reached
    const collT = ease((progress - 0.16) / 0.08);
    if (collT > 0) {const g = ctx.createRadialGradient(collision[0], collision[1], 0, collision[0], collision[1], 60); g.addColorStop(0, 'rgba(255,240,210,' + (0.65 * collT) + ')'); g.addColorStop(.55, 'rgba(255,210,160,' + (0.16 * collT) + ')'); g.addColorStop(1, 'rgba(255,210,160,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(collision[0], collision[1], 60, 0, Math.PI * 2); ctx.fill();}
    tracks.forEach(track => {
      if (track.type === 'label') return;
      const [s, e] = track.phase; let local;
      if (progress < s) local = 0; else if (progress <= e) local = ease((progress - s) / (e - s)); else local = Math.max(.45, 1 - (progress - e) * 0.25);
      if (progress > e) local = 1;
      const isFocus = track.focus?.includes(activeFocus);
      const dim = activeFocus === null || isFocus ? 1 : 0.17;
      const pts = track.points.map(([x, y]) => [x * w, y * h]);
      ctx.globalAlpha = dim * (progress < s ? 0 : (progress <= e ? 1 : 0.8));
      drawTrack(pts, Math.min(1, local), track.color, track.width, track.glow, track.dash);
      ctx.globalAlpha = 1;
      if (local > 0.82 && track.label && track.type !== 'primary') {
        const [lx, ly] = pts[Math.min(pts.length - 1, Math.max(1, pts.length - 1))];
        ctx.save(); ctx.globalAlpha = dim; ctx.fillStyle = track.color; const fs = w < 500 ? 12 : 14; ctx.font = '600 ' + fs + 'px "IBM Plex Sans", system-ui'; ctx.textBaseline = 'middle'; const tw = ctx.measureText(track.label).width; const x = Math.min(w - tw - 9, Math.max(9, lx + 8)); const y = Math.min(h - 14, Math.max(16, ly - 9)); ctx.fillText(track.label, x, y); ctx.restore();
      }
      if (track.type === 'primary' && local > 0.85) {const [lx, ly] = pts[0]; ctx.save(); ctx.globalAlpha = dim; ctx.fillStyle = '#ffffff'; ctx.font = '600 15px "IBM Plex Sans", system-ui'; ctx.fillText('protone', Math.min(w - 72, lx + 8), Math.max(16, ly + 18)); ctx.restore();}
    });
    // nucleus label and simple marker
    if (progress > 0.16) {const dim = focus === null || focus === 1 ? 1 : 0.25; ctx.save(); ctx.globalAlpha = dim; ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(collision[0], collision[1], 7, 0, Math.PI * 2); ctx.stroke(); ctx.fillStyle = '#ffffff'; ctx.font = '600 14px "IBM Plex Sans", system-ui'; const tag = 'nucleo di azoto'; ctx.fillText(tag, Math.min(w - ctx.measureText(tag).width - 8, collision[0] + 14), collision[1] + 4); ctx.restore();}
  }
  function animate(now) {if (!root.isConnected) return; if (!start) start = now; draw(((now - start) % 10000) / 10000); raf = requestAnimationFrame(animate);}
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null; ro?.observe(canvas); window.addEventListener('resize', resize);
  addCleanup(() => {cancelAnimationFrame(raf); ro?.disconnect(); window.removeEventListener('resize', resize);});
  resize(); raf = requestAnimationFrame(animate);
}
