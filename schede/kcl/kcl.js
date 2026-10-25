
// Inspectroom 0.2c.4.3 — KCl: emissioni radiali, trasformazione nello stesso punto e lessico più didattico.
function renderKCL() {
  const k = state.kcl; k.channel = k.channel === 'ec' ? 'ec' : 'beta'; k.running = k.running !== false;
  const isBeta = k.channel === 'beta';
  dialogContent.innerHTML = `<div class="kp-experience" id="kpExperience">
   <div class="kp-heading"><span class="kp-kicker">INSPECTROOM · POTASSIO-40</span><h3>Un sale comune, una radioattività naturale</h3><p>Il cloruro di potassio contiene potassio naturale. Una piccola parte è <strong>potassio-40</strong>, un isotopo radioattivo: per questo dal campione possono uscire particelle e radiazioni.</p></div>
   <div class="kp-layout">
    <main class="kp-main">
     <section class="kp-upper"><div class="kp-subhead"><span>SOPRA · SCALA MACROSCOPICA</span><strong>Il barattolo nell'aula</strong></div>
       <div class="kp-photoframe">
         <div class="kp-jar-scene" aria-label="Barattolo di cloruro di potassio con emissioni illustrate in tutte le direzioni">
           <div class="kp-jar-glow"></div>
           <div class="kp-particle-stream kp-stream-beta">
             <span style="--ox:50%;--oy:50%;--tx:170px;--ty:-18px;--rot:-6deg;--dur:4.0s;--delay:0s"></span>
             <span style="--ox:48%;--oy:54%;--tx:142px;--ty:92px;--rot:33deg;--dur:4.3s;--delay:.8s"></span>
             <span style="--ox:51%;--oy:56%;--tx:-156px;--ty:88px;--rot:149deg;--dur:4.1s;--delay:1.6s"></span>
             <span style="--ox:52%;--oy:47%;--tx:-166px;--ty:-34px;--rot:191deg;--dur:3.8s;--delay:2.1s"></span>
             <span style="--ox:45%;--oy:50%;--tx:36px;--ty:-136px;--rot:-77deg;--dur:4.4s;--delay:2.9s"></span>
             <span style="--ox:55%;--oy:58%;--tx:-28px;--ty:142px;--rot:101deg;--dur:4.2s;--delay:3.4s"></span>
             <span style="--ox:54%;--oy:52%;--tx:124px;--ty:-98px;--rot:-39deg;--dur:4.5s;--delay:1.1s"></span>
             <span style="--ox:47%;--oy:48%;--tx:-118px;--ty:-110px;--rot:224deg;--dur:4.0s;--delay:2.6s"></span>
           </div>
           <div class="kp-particle-stream kp-stream-gamma">
             <span style="--ox:50%;--oy:50%;--tx:108px;--ty:118px;--dur:4.8s;--delay:.4s"></span>
             <span style="--ox:49%;--oy:55%;--tx:-126px;--ty:14px;--dur:5.0s;--delay:1.8s"></span>
             <span style="--ox:53%;--oy:49%;--tx:22px;--ty:-154px;--dur:5.2s;--delay:2.9s"></span>
             <span style="--ox:47%;--oy:52%;--tx:-82px;--ty:-126px;--dur:4.7s;--delay:3.7s"></span>
             <span style="--ox:54%;--oy:57%;--tx:146px;--ty:-28px;--dur:5.1s;--delay:4.3s"></span>
           </div>
           <div class="kp-jar">
             <div class="kp-lid"></div>
             <div class="kp-rim"></div>
             <div class="kp-glass"></div>
             <div class="kp-grains"></div>
             <div class="kp-grains kp-grains-back"></div>
             <div class="kp-kcl-label">KCl</div>
           </div>
         </div>
         <div class="kp-photo-caption">Rappresentazione illustrativa: dal campione le emissioni vengono mostrate in tutte le direzioni, molto più visibili di quanto accada nella realtà.</div>
       </div>
     </section>
     <section class="kp-lower"><div class="kp-subhead"><span>SOTTO · SCALA NUCLEARE</span><strong>Che cosa accade in un nucleo di ⁴⁰K?</strong></div>
       <div class="kp-controls"><button id="kpBeta" class="kp-control ${isBeta ? 'active' : ''}">Un elettrone esce (β⁻)</button><button id="kpEC" class="kp-control ${!isBeta ? 'active' : ''}">Il nucleo cattura un elettrone</button><button id="kpPause" class="kp-control kp-pause">${k.running ? 'Pausa' : 'Riprendi'}</button></div>
       <div class="kp-anim"><canvas id="kpCanvas" aria-label="Animazione del decadimento selezionato"></canvas><div id="kpFormula" class="kp-formula">${formula(k.channel)}</div><span class="kp-animnote">Schema concettuale · non in scala</span></div>
       <div class="kp-explain" id="kpExplain">${explanation(k.channel)}</div>
     </section>
    </main>
    <aside class="kp-side"><div class="kp-side-label">DUE MODI PER TRASFORMARSI</div><h3>Che cosa può fare il potassio-40?</h3>
      <p>Il nucleo di potassio-40 può cambiare in due modi. In un caso <b>emette un elettrone</b> e diventa calcio-40. Nell'altro <b>cattura un elettrone</b> e diventa argon-40.</p>
      <div class="kp-process"><div><span>01</span><strong>Nucleo iniziale</strong><small>All'inizio c'è un solo nucleo: potassio-40.</small></div><div><span>02</span><strong>Trasformazione</strong><small>Può emettere un elettrone, oppure catturarne uno da un orbitale atomico.</small></div><div><span>03</span><strong>Nucleo finale</strong><small>Alla fine, nello stesso punto, compare il nuovo nucleo: calcio-40 oppure argon-40.</small></div></div>
      <div class="kp-side-label">PARTICELLE COINVOLTE</div><div class="kp-particles" id="kpParticles">${particles(k.channel)}</div><div class="kp-particle-modal" id="kpParticleModal" hidden><section class="kp-particle-dialog" role="dialog" aria-modal="true" aria-label="Scheda particella"><button type="button" class="kp-particle-close" aria-label="Chiudi scheda">×</button><span class="kp-particle-title-symbol" id="kpParticleSymbol"></span><h3 id="kpParticleName"></h3><div id="kpParticleDetails"></div></section></div>
      <p class="kp-note">Nella descrizione completa, il neutrino del primo caso è più precisamente un <strong>antineutrino elettronico</strong>; qui però lo indichiamo semplicemente come <strong>neutrino</strong> per rendere la lettura più immediata.</p>
      <p class="kp-note">Nel caso della cattura elettronica compare spesso anche un <strong>fotone γ</strong> quando il nucleo figlio si rilassa dopo la trasformazione.</p>
    </aside>
   </div>
 </div>`;
  const root = document.getElementById('kpExperience');
  root.querySelector('#kpParticles').addEventListener('click', event => {
    const button = event.target.closest('[data-kp-particle]');
    if (!button) return;
    const name = button.dataset.kpParticle;
    const modal = root.querySelector('#kpParticleModal');
    modal.querySelector('#kpParticleSymbol').textContent = smTileSymbols[name];
    modal.querySelector('#kpParticleName').textContent = name;
    smFillCard(modal, '#kpParticleDetails', name);
    modal.hidden = false;
    modal.querySelector('button').focus();
  });
  const kpModal = root.querySelector('#kpParticleModal');
  kpModal.querySelector('button').addEventListener('click', () => {kpModal.hidden = true});
  kpModal.addEventListener('click', event => {if (event.target === kpModal) kpModal.hidden = true});
  root.addEventListener('keydown', event => {if (event.key === 'Escape' && !kpModal.hidden) {kpModal.hidden = true; event.stopPropagation()}});
  const canvas = root.querySelector('#kpCanvas'); const ctx = canvas.getContext('2d'); let running = k.running; let start = 0; let phase = 0; let frame = 0;
  function size() {let r = canvas.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1); canvas.width = Math.max(1, Math.round(r.width * d)); canvas.height = Math.max(1, Math.round(r.height * d)); ctx.setTransform(d, 0, 0, d, 0, 0); draw()}
  function lerp(a, b, t) {return a + (b - a) * t}
  function ease(t) {return t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t)}
  function nucleus(x, y, r, label, color, opacity = 1, scale = 1) {ctx.save(); ctx.translate(x, y); ctx.scale(scale, scale); ctx.globalAlpha = opacity; ctx.fillStyle = color; ctx.shadowBlur = 22; ctx.shadowColor = color + '88'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0; ctx.strokeStyle = '#ffffff6d'; ctx.lineWidth = 1.3; ctx.stroke(); ctx.fillStyle = '#07111c'; ctx.font = '600 ' + Math.round(r * .50) + 'px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 0); ctx.restore()}
  function particle(x, y, r, label, color, opacity = 1) {ctx.save(); ctx.globalAlpha = opacity; ctx.beginPath(); ctx.fillStyle = color; ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = 'rgba(234,245,255,' + opacity + ')'; ctx.font = '600 13px system-ui'; ctx.textAlign = 'center'; ctx.fillText(label, x, y - 14); ctx.restore()}
  function text(x, y, s, align = 'center', alpha = 1) {ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = '#b8cddd'; ctx.font = '12px system-ui'; ctx.textAlign = align; ctx.fillText(s, x, y); ctx.restore()}
  function draw() {    
let w = canvas.getBoundingClientRect().width, h = canvas.getBoundingClientRect().height; if (w < 4 || h < 4) return; ctx.clearRect(0, 0, w, h); ctx.fillStyle = '#060e18'; ctx.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 32) {ctx.beginPath(); ctx.strokeStyle = '#183248'; ctx.lineWidth = 1; ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()}
    for (let y = 0; y < h; y += 32) {ctx.beginPath(); ctx.strokeStyle = '#183248'; ctx.lineWidth = 1; ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()}
    const compact = w < 510; const cx = w * (compact ? .48 : .44), cy = h * (compact ? .50 : .52), r = compact ? 33 : 44;
    const t1 = ease((phase - 0.18) / 0.18); // start morph
    const t2 = ease((phase - 0.38) / 0.16); // final settle
    const oldA = 1 - Math.min(1, t1 * 1.15); const newA = Math.max(0, Math.min(1, (phase - 0.34) / 0.16));
    const pulse = Math.max(0, 1 - Math.abs(phase - 0.32) / 0.16);
    if (oldA > 0.02) {nucleus(cx, cy, r, '⁴⁰K', '#8fc8e9', oldA, 1 - 0.06 * t1); text(cx, cy + r + 19, '19 p · 21 n', 'center', oldA)}
    if (pulse > 0) {ctx.save(); ctx.globalAlpha = .24 * pulse; ctx.strokeStyle = '#e7f3fb'; ctx.lineWidth = 2.1; ctx.beginPath(); ctx.arc(cx, cy, r + 8 + 16 * pulse, 0, Math.PI * 2); ctx.stroke(); ctx.restore()}
    if (newA > 0.02) {nucleus(cx, cy, r, k.channel === 'beta' ? '⁴⁰Ca' : '⁴⁰Ar', '#7edcb0', newA, 0.92 + 0.08 * t2); text(cx, cy + r + 19, k.channel === 'beta' ? '20 p · 20 n' : '18 p · 22 n', 'center', newA)}
    // emitted or captured particles
    if (k.channel === 'beta') {
      const et = Math.max(0, Math.min(1, (phase - 0.26) / 0.58));
      const nt = Math.max(0, Math.min(1, (phase - 0.30) / 0.60));
      if (et > 0) particle(lerp(cx + 10, cx + 150, et), lerp(cy - 6, cy - 84, et), 6, 'e⁻', '#94d5ff', Math.min(1, 1.1 - et * 0.15));
      if (nt > 0) particle(lerp(cx + 4, cx + 122, nt), lerp(cy + 8, cy + 104, nt), 4, 'ν', '#e5be7d', Math.min(1, 1.08 - nt * 0.1));
    } else {
      const et = Math.max(0, Math.min(1, phase / 0.28));
      if (phase < 0.30) particle(lerp(cx - 124, cx - r - 8, et), cy, 5, 'e⁻', '#94d5ff', 1 - et * 0.12);
      const nt = Math.max(0, Math.min(1, (phase - 0.28) / 0.56));
      const gt = Math.max(0, Math.min(1, (phase - 0.52) / 0.30));
      if (nt > 0) particle(lerp(cx + 6, cx + 134, nt), lerp(cy + 4, cy + 102, nt), 4, 'ν', '#e5be7d', Math.min(1, 1.08 - nt * 0.1));
      if (gt > 0) particle(lerp(cx + 8, cx + 172, gt), lerp(cy - 4, cy - 88, gt), 5, 'γ', '#ffd67d', Math.min(1, 1.05 - gt * 0.1));
    }
    // explanatory captions
    text(cx, 28, 'TRASFORMAZIONE NUCLEARE', 'center', .8);
    text(12, h - 12, 'Il nucleo finale sostituisce quello iniziale', 'left', .72);
    text(w - 12, h - 12, 'Ciclo illustrativo', 'right', .72);
  }
  function animate(now) {if (!root.isConnected) return; if (!start) start = now; const dt = Math.min(45, now - start); start = now; if (running) phase = (phase + dt / 4800) % 1; draw(); frame = requestAnimationFrame(animate)}
  function change(c) {k.channel = c; phase = 0; root.querySelector('#kpBeta').classList.toggle('active', c === 'beta'); root.querySelector('#kpEC').classList.toggle('active', c === 'ec'); root.querySelector('#kpFormula').innerHTML = formula(c); root.querySelector('#kpExplain').innerHTML = explanation(c); root.querySelector('#kpParticles').innerHTML = particles(c)}
  root.querySelector('#kpBeta').onclick = () => change('beta'); root.querySelector('#kpEC').onclick = () => change('ec'); root.querySelector('#kpPause').onclick = () => {running = !running; k.running = running; root.querySelector('#kpPause').textContent = running ? 'Pausa' : 'Riprendi'};
  const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(size) : null; observer?.observe(canvas); window.addEventListener('resize', size); addCleanup(() => {cancelAnimationFrame(frame); observer?.disconnect(); window.removeEventListener('resize', size)}); size(); frame = requestAnimationFrame(animate);
}
function formula(c) {return c === 'beta' ? '⁴⁰K → ⁴⁰Ca + e⁻ + ν̄ₑ' : '⁴⁰K + e⁻ → ⁴⁰Ar + νₑ';}
function explanation(c) {return c === 'beta' ? '<strong>Quando un elettrone esce dal nucleo (β⁻):</strong> il <strong>potassio-40 si trasforma in calcio-40</strong>. In pratica, nel nucleo un neutrone diventa un protone: per questo escono un elettrone e un neutrino (più precisamente un antineutrino elettronico).' : '<strong>Quando il nucleo cattura un elettrone:</strong> il <strong>potassio-40 si trasforma in argon-40</strong>. Un protone diventa un neutrone, esce un neutrino e spesso compare anche un fotone γ quando il nuovo nucleo si rilassa.';}
function particles(c) {
  const names = c === 'beta' ?
    [['Elettrone', 'Leptoni · particella elementare'], ['Antineutrino elettronico', 'Leptoni · particella elementare']] :
    [['Elettrone', 'Leptoni · catturato dal nucleo'], ['Neutrino elettronico', 'Leptoni · particella elementare'], ['Fotone gamma', 'Bosoni · particella elementare']];
  return names.map(([label, caption]) => {
    const name = {'Elettrone':'Elettrone', 'Antineutrino elettronico':'Neutrini', 'Neutrino elettronico':'Neutrini', 'Fotone gamma':'Fotone'}[label];
    return `<button type="button" class="kp-particle" data-kp-particle="${name}" aria-label="Apri la scheda ${label}"><span class="kp-symbol ${name === 'Fotone' ? 'boson' : ''}">${smTileSymbols[name]}</span><span><strong>${label}</strong><small>${caption}</small></span></button>`;
  }).join('');
}
