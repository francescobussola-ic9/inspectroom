// Inspectroom 0.2c.2.1 — Camera a nebbia: simulazione illustrativa delle tracce.
function renderChamber() {
  const chamber = state.chamber;
  chamber.focus = chamber.focus || 'all';
  chamber.rate = chamber.rate || 'normal';
  dialogContent.innerHTML = `<div class="ch-experience" id="chExperience">
    <div class="ch-main">
      <div class="ch-topbar"><div><span class="ch-eyebrow">INSPECTROOM · CAMERA A NEBBIA</span><h3>Tracce dell'invisibile</h3></div><span class="ch-live" id="chLive">${chamber.view === 'perspective' ? 'FOTOGRAFIA DELLA CAMERA' : '● SIMULAZIONE ATTIVA'}</span></div>
      <section class="ch-catalog" aria-label="Che cos'è una camera a nebbia?">
        <h3>Che cos'è una camera a nebbia?</h3>
        <p>La <strong>camera a nebbia</strong> è uno strumento che permette di rendere visibile il passaggio di alcune particelle invisibili ai nostri occhi.</p>
        <p>Al suo interno si trova del vapore di alcol. Quando una particella carica attraversa la camera, può far condensare il vapore in minuscole goccioline lungo il suo percorso.</p>
        <p>Si forma così una sottile scia, simile a quella lasciata da un aereo nel cielo. Osservando queste tracce possiamo ottenere informazioni sulle particelle che le hanno prodotte.</p>
      </section>
      <div class="ch-viewport ${chamber.view === 'top' ? 'ch-topview' : ''}" id="chViewport">
        ${chamber.view === 'perspective' ? '<img class="ch-bg" src="assets/chamber-perspective.webp" alt="Fotografia prospettica della camera a nebbia, senza comandi sovrapposti"/>' : ''}
        ${chamber.view === 'top' ? '<div class="ch-mist" aria-hidden="true"></div>' : ''}
        <canvas id="chamberCanvas" aria-label="Simulazione animata delle tracce osservabili in una camera a nebbia"></canvas>
        ${chamber.view === 'top' ? '<div class="ch-timestamp"><span id="chEventCount">0</span> eventi osservati <span class="ch-bullet">·</span> <span id="chObservation">In osservazione</span></div><span class="ch-visual-note">Tracce simulate · tempi e frequenze non in scala</span>' : '<span class="ch-photo-note">Fotografia della camera a nebbia</span>'}
      </div>
      <div class="ch-bottom">
        <div class="ch-tabs" role="group" aria-label="Punto di osservazione"><button class="ch-control ${chamber.view === 'perspective' ? 'active' : ''}" id="chViewPerspective">Vista prospettica</button><button class="ch-control ${chamber.view === 'top' ? 'active' : ''}" id="chViewTop">Simulazione · vista dall'alto</button></div>
        <div class="ch-actions"><button class="ch-control" id="chPause" ${chamber.view === 'perspective' ? 'hidden' : ''}>${chamber.running ? 'Pausa' : 'Riprendi'}</button><button class="ch-control ch-emph" id="chNew" ${chamber.view === 'perspective' ? 'hidden' : ''}>Genera una traccia</button></div>
      </div>
      <section class="ch-catalog" aria-label="Tracce da esplorare"><div class="ch-catalog-title">CONFRONTA LE TRACCE <span>Seleziona un esempio da osservare</span></div>
        <div class="ch-types">
          <button class="ch-type ${chamber.focus === 'muon' ? 'active' : ''}" data-ch-type="muon"><svg viewBox="0 0 90 30" aria-hidden="true"><path d="M8 23L82 6" stroke="#d3f4ff" stroke-width="1.7" stroke-linecap="round"/></svg><strong>Lunga e sottile</strong><small>Compatibile con un muone</small></button>
          <button class="ch-type ${chamber.focus === 'beta' ? 'active' : ''}" data-ch-type="beta"><svg viewBox="0 0 90 30" aria-hidden="true"><path d="M9 19Q25 2 36 17T59 16T82 8" stroke="#d3f4ff" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg><strong>Sottile e tortuosa</strong><small>Compatibile con un elettrone</small></button>
          <button class="ch-type ${chamber.focus === 'alpha' ? 'active' : ''}" data-ch-type="alpha"><svg viewBox="0 0 90 30" aria-hidden="true"><path d="M9 21L77 8" stroke="#f3f5eb" stroke-width="5" stroke-linecap="round"/></svg><strong>Corta e spessa</strong><small>Compatibile con una particella alfa</small></button>
        </div>
        <div class="ch-catalog-end"><button class="ch-control ${chamber.focus === 'all' ? 'active' : ''}" id="chAll">Osservazione libera · tutti gli esempi</button></div>
      </section>
    </div>
    <aside class="ch-side"><div class="ch-side-label">ESPLORA</div><h3>Come nasce una traccia?</h3><p>Una particella <b>carica</b> attraversa il vapore sovrasaturo e ionizza il gas. Minuscole goccioline si formano lungo il percorso: è la <b>traccia</b> che riusciamo a vedere.</p>
      <div class="ch-process"><div><span>1</span><strong>Passaggio</strong><small>Una particella carica attraversa il volume sensibile.</small></div><div><span>2</span><strong>Ionizzazione</strong><small>Si formano ioni lungo il suo percorso.</small></div><div><span>3</span><strong>Condensazione</strong><small>Il vapore forma goccioline visibili lungo la traccia.</small></div></div>
      <div class="ch-side-label">CONDIZIONI SIMULATE</div>
      <div class="ch-scenarios"><button class="ch-control ${chamber.source === 'background' ? 'active' : ''}" id="chBackground">Fondo naturale</button><button class="ch-control ${chamber.source === 'source' ? 'active' : ''}" id="chSource">Scenario con più eventi</button></div>
      <div class="ch-reading"><span>ULTIMO EVENTO</span><strong id="chLastType">${chamber.lastType}</strong><small id="chLastGen">${chamber.source === 'source' ? 'Scenario con più eventi' : 'Fondo naturale'}</small></div>
      ${irParticleTiles(["muon", "electron", "alpha"])}
      <p class="ch-caution">Le forme suggeriscono possibili particelle, ma <strong>da una sola traccia non si identifica con certezza</strong> la particella. Il modello è qualitativo e non simula le condizioni sperimentali in modo quantitativo.</p>
    </aside>
  </div>`;
  const root = document.getElementById('chExperience');
  irBindParticleTiles(root);
  const canvas = root.querySelector('#chamberCanvas'); const ctx = canvas.getContext('2d');
  const viewport = root.querySelector('#chViewport'); let tracks = [], running = chamber.running, lastTime = 0, sequence = 0, elapsed = 0, raf = 0, count = 0;
  function random(a, b) {return a + Math.random() * (b - a)}
  function bounds() {const box = canvas.getBoundingClientRect(); return {w: Math.max(1, box.width), h: Math.max(1, box.height)}}
  function resize() {const {w, h} = bounds(), dpr = Math.min(window.devicePixelRatio || 1, 2); canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0)}
  function pointPath(type, w, h) {
    const points = []; const centerX = random(w * .22, w * .69), centerY = random(h * .23, h * .74);
    if (type === 'muon') {
      const angle = random(-.6, .6); const length = Math.min(w * .8, h * 1.5); const startX = centerX - length * .35 * Math.cos(angle), startY = centerY - length * .35 * Math.sin(angle);
      for (let i = 0; i <= 36; i++) {const t = i / 36; points.push([startX + Math.cos(angle) * length * t, startY + Math.sin(angle) * length * t]);}
    } else if (type === 'beta') {
      let x = centerX, y = centerY, a = random(-Math.PI, Math.PI);
      for (let i = 0; i < 53; i++) {points.push([x, y]); a += random(-.38, .38); x += Math.cos(a) * random(3, 5); y += Math.sin(a) * random(3, 5);}
    } else {
      const angle = random(-Math.PI, Math.PI), length = random(48, 78); for (let i = 0; i <= 25; i++) {const t = i / 25; points.push([centerX + Math.cos(angle) * length * t, centerY + Math.sin(angle) * length * t]);}
    }
    return points;
  }
  function weighted() {if (chamber.focus !== 'all') return chamber.focus; const r = Math.random(); return chamber.source === 'source' ? (r < .35 ? 'alpha' : r < .76 ? 'beta' : 'muon') : (r < .12 ? 'alpha' : r < .55 ? 'beta' : 'muon')}
  function label(type) {return {muon: 'Traccia lunga e sottile · possibile muone', beta: 'Traccia tortuosa · possibile elettrone', alpha: 'Traccia corta e spessa · possibile alfa'}[type]}
  function addTrack(type = weighted()) {
    if (chamber.view !== 'top') return; const {w, h} = bounds(); if (w < 5 || h < 5) return;
    const track = {type, points: pointPath(type, w, h), age: 0, drawTime: type === 'alpha' ? .48 : type === 'beta' ? 1.3 : .8, hold: 1.5, fade: 2.0, width: type === 'alpha' ? 4.1 : type === 'muon' ? 1.5 : 1.3, seed: Math.random() * 100};
    tracks.push(track); if (tracks.length > 18) tracks.shift(); count++; root.querySelector('#chEventCount').textContent = count;
    chamber.lastType = label(type); chamber.lastGenerator = chamber.source === 'source' ? 'Scenario con più eventi' : 'Fondo naturale'; root.querySelector('#chLastType').textContent = chamber.lastType; root.querySelector('#chLastGen').textContent = chamber.lastGenerator;
    root.querySelector('#chObservation').textContent = type === 'alpha' ? 'Traccia spessa' : type === 'beta' ? 'Traccia tortuosa' : 'Traccia lunga';
  }
  function drawTrack(t) {
    const full = t.drawTime + t.hold + t.fade; const reveal = Math.min(1, t.age / t.drawTime);
    const opacity = t.age <= t.drawTime + t.hold ? Math.min(1, t.age / .16) : Math.max(0, 1 - (t.age - t.drawTime - t.hold) / t.fade);
    const n = Math.min(t.points.length, Math.max(2, Math.round(t.points.length * reveal)));
    ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.globalAlpha = opacity;
    ctx.beginPath(); for (let i = 0; i < n; i++) {const [x, y] = t.points[i]; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)}
    ctx.strokeStyle = '#b8eaff'; ctx.lineWidth = t.width * 4.3; ctx.globalAlpha = opacity * .055; ctx.stroke();
    ctx.strokeStyle = t.type === 'alpha' ? '#edf3ef' : '#d4f3ff'; ctx.lineWidth = t.width; ctx.globalAlpha = opacity * .88; ctx.stroke();
    // Nebbia: piccoli nuclei di condensazione lungo il percorso, non raggi luminosi.
    for (let i = 1; i < n; i += 2) {const p = t.points[i], offset = Math.sin(i * 13 + t.seed) * t.width * .65; ctx.beginPath(); ctx.arc(p[0], p[1] + offset, Math.max(.42, t.width * .26), 0, Math.PI * 2); ctx.globalAlpha = opacity * .58; ctx.fillStyle = '#e7f9ff'; ctx.fill()}
    ctx.globalAlpha = 1;
  }
  function tick(now) {    
if (!root.isConnected) return; const dt = Math.min(.06, (now - lastTime) / 1000 || .016); lastTime = now;
    const {w, h} = bounds(); ctx.clearRect(0, 0, w, h); if (chamber.view !== 'top') {raf = requestAnimationFrame(tick); return;}
    if (running) {elapsed += dt; const interval = chamber.source === 'source' ? 1.45 : 3.0; if (elapsed >= interval) {elapsed = 0; addTrack()} }
    tracks = tracks.filter(t => t.age < t.drawTime + t.hold + t.fade);
    for (const t of tracks) {drawTrack(t); if (running) t.age += dt;}
    raf = requestAnimationFrame(tick);
  }
  function updateButtons() {root.querySelectorAll('[data-ch-type]').forEach(b => b.classList.toggle('active', chamber.focus === b.dataset.chType)); root.querySelector('#chAll').classList.toggle('active', chamber.focus === 'all'); root.querySelector('#chPause').textContent = running ? 'Pausa' : 'Riprendi'; root.querySelector('#chLive').textContent = running ? '● SIMULAZIONE ATTIVA' : 'Ⅱ IN PAUSA';}
  root.querySelector('#chViewPerspective').onclick = () => {chamber.view = 'perspective'; renderScene()};
  root.querySelector('#chViewTop').onclick = () => {chamber.view = 'top'; renderScene()};
  root.querySelector('#chBackground').onclick = () => {chamber.source = 'background'; renderScene()};
  root.querySelector('#chSource').onclick = () => {chamber.source = 'source'; renderScene()};
  root.querySelector('#chNew').onclick = () => addTrack();
  root.querySelector('#chPause').onclick = () => {running = !running; chamber.running = running; updateButtons()};
  root.querySelector('#chAll').onclick = () => {chamber.focus = 'all'; updateButtons()};
  root.querySelectorAll('[data-ch-type]').forEach(btn => btn.onclick = () => {chamber.focus = btn.dataset.chType; if (chamber.view !== 'top') {chamber.view = 'top'; renderScene(); return;} updateButtons(); addTrack(chamber.focus)});
  const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null; if (observer) observer.observe(viewport);
  window.addEventListener('resize', resize); addCleanup(() => {window.removeEventListener('resize', resize); observer?.disconnect(); cancelAnimationFrame(raf)});
  resize(); updateButtons(); if (chamber.view === 'top') addTrack(); raf = requestAnimationFrame(tick);
}
