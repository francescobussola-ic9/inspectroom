const laIntro = "L'elettrone ha una massa, ma il fotone... no!";
function renderLampada() {
  dialogContent.innerHTML = `<div class="la-app" id="laApp"><section class="la-primary"><header class="la-header"><div><span class="la-eyebrow">INSPECTROOM · LAMPADA</span><h3>Elettroni, fotoni e bosone di Higgs</h3><p>Due esperienze per osservare la corrente elettrica e scoprire qualcosa in più sulla massa delle particelle.</p></div><span class="la-status">MODELLO INTERATTIVO</span></header>
 <nav class="la-tabs" aria-label="Modalità della lampada"><button class="la-tab active" data-la-mode="circuit" aria-pressed="true">Corrente elettrica</button><button class="la-tab" data-la-mode="higgs" aria-pressed="false">Il bosone di Higgs</button></nav>
 <section class="la-mode active" data-la-panel="circuit"><div class="la-scene la-circuit"><svg viewBox="0 0 800 440" id="laCircuit" role="img" aria-label="Circuito con batteria, lampadina e movimento schematico degli elettroni"><defs><linearGradient id="laBgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e2232"/><stop offset="1" stop-color="#08131c"/></linearGradient><linearGradient id="laPanelGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#153149"/><stop offset="1" stop-color="#0d2234"/></linearGradient><linearGradient id="laWireGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#87a6b7"/><stop offset="0.5" stop-color="#d7e4eb"/><stop offset="1" stop-color="#7393a7"/></linearGradient><radialGradient id="laGlassGrad" cx="50%" cy="35%" r="65%"><stop offset="0" stop-color="#e7f6ff" stop-opacity=".9"/><stop offset="0.45" stop-color="#c6e2f2" stop-opacity=".3"/><stop offset="1" stop-color="#d5efff" stop-opacity=".06"/></radialGradient><radialGradient id="laBulbLight"><stop offset="0" stop-color="#ffe9ab" stop-opacity=".75"/><stop offset="0.55" stop-color="#ffd977" stop-opacity=".28"/><stop offset="1" stop-color="#ffe9a2" stop-opacity="0"/></radialGradient><filter id="laSoftGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="8"/></filter><filter id="laPhotonGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="4.5"/></filter><filter id="laElectronGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="2.8"/></filter></defs><rect x="0" y="0" width="800" height="440" fill="url(#laBgGrad)"/><rect x="42" y="56" width="716" height="320" rx="26" fill="url(#laPanelGrad)" stroke="#28465b" stroke-width="2"/><ellipse cx="575" cy="153" rx="132" ry="105" fill="url(#laBulbLight)" opacity=".9" id="laLight"/>
 <path id="laWireBase" d="M300 302 H160 V118 H339 M401 118 H505 V245 H554 V216 M596 216 V245 H644 V118 H692 V302 H480" fill="none" stroke="#496678" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" opacity=".98"/>
 <path id="laWire" d="M300 302 H160 V118 H339 M401 118 H505 V245 H554 V216 M596 216 V245 H644 V118 H692 V302 H480" fill="none" stroke="url(#laWireGrad)" stroke-width="5.2" stroke-linejoin="round" stroke-linecap="round"/>
 <path d="M300 302 H160 V118 H339 M401 118 H505 V245 H554 V216 M596 216 V245 H644 V118 H692 V302 H480" fill="none" stroke="#e8f4ff" stroke-opacity=".26" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round"/>
 <g id="laSwitchControl" role="button" tabindex="0" aria-label="Apri l’interruttore" aria-pressed="true" style="cursor:pointer;outline:none">
 <rect x="330" y="85" width="82" height="66" rx="12" fill="#101d2a" fill-opacity=".88" stroke="#41647e" stroke-width="1.5"/>
 <circle cx="342" cy="118" r="5.5" fill="#d6e3e9" stroke="#728c9e" stroke-width="2"/><circle cx="400" cy="118" r="5.5" fill="#d6e3e9" stroke="#728c9e" stroke-width="2"/>
 <path id="laSwitchBlade" d="M342 118 L400 118" fill="none" stroke="#e9c280" stroke-width="5" stroke-linecap="round"/>
 <circle cx="342" cy="118" r="2.5" fill="#f4dfb2"/>
 <text x="371" y="101" text-anchor="middle" fill="#cde3ef" font-size="11" font-weight="700">ON</text>
 </g>
 <g id="laElectrons"></g><g id="laPhotons"></g>
 <g id="laBattery" transform="translate(300 270)">
 <rect x="0" y="10" width="180" height="72" rx="15" fill="#182633" stroke="#667b89" stroke-width="2"/>
 <rect x="8" y="18" width="164" height="56" rx="10" fill="#25475d" stroke="#6a91a7" stroke-width="1.6"/>
 <rect x="14" y="22" width="42" height="48" rx="6" fill="#bb6553"/>
 <rect x="59" y="22" width="106" height="48" rx="6" fill="#213949"/>
 <path d="M23 30 L23 61 M31 30 L31 61" stroke="#e5a38c" stroke-width="1.8" opacity=".4"/>
 <text x="35" y="55" text-anchor="middle" fill="#fff3ee" font-weight="800" font-size="24">−</text>
 <text x="147" y="55" text-anchor="middle" fill="#ecf6fa" font-weight="800" font-size="24">+</text>
 <rect x="-10" y="22" width="12" height="18" rx="4" fill="#d2dce0" stroke="#8399a6"/>
 <rect x="178" y="22" width="12" height="18" rx="4" fill="#d2dce0" stroke="#8399a6"/>
 <path d="M14 75 H166" stroke="#8da8b4" stroke-width="1.5" opacity=".45"/>
 <text x="92" y="48" text-anchor="middle" fill="#e6eff5" font-size="17" font-weight="700">BATTERIA</text>
 </g>
 <g id="laLamp">
   <ellipse cx="575" cy="153" rx="32" ry="47" fill="url(#laGlassGrad)" stroke="#c8d9e7" stroke-opacity=".76" stroke-width="2.7"/>
   <path d="M556 191 Q548 168 551 147" fill="none" stroke="#ffffff" stroke-width="2" opacity=".18"/>
   <path d="M554 186 L554 176 L563 145 M588 145 L596 176 L596 186" fill="none" stroke="#dae6ef" stroke-width="3.2" stroke-linejoin="round"/>
   <path id="laFilament" d="M563 145 L567 136 L572 145 L577 136 L582 145 L587 136 L588 145" fill="none" stroke="#ffbd72" stroke-width="3.7" stroke-linecap="round" stroke-linejoin="round"/>
   <path d="M551 190 H599 V212 Q599 216 595 216 H555 Q551 216 551 212 Z" fill="#728695" stroke="#c7d6e0" stroke-width="2"/>
   <path d="M552 196 H598 M552 203 H598 M552 210 H598" stroke="#d3e1e8" stroke-width="2" opacity=".65"/>
   <rect x="550" y="213" width="17" height="9" rx="3" fill="#c1d1db" stroke="#92a8b6"/>
   <rect x="583" y="213" width="17" height="9" rx="3" fill="#c1d1db" stroke="#92a8b6"/>
   <rect x="567" y="213" width="16" height="10" rx="2" fill="#283c4d"/>
 </g>
 <g fill="#cde3ef" font-size="17" font-weight="600"><text x="146" y="106">Filo conduttore</text><text x="354" y="373">Batteria</text><text x="538" y="72">Lampadina</text></g></svg><div class="la-scene-note">Clicca sull’interruttore per accendere o spegnere il circuito. Le velocità rappresentate sono schematiche.</div></div><div class="la-controls"><span id="laCircuitText">Circuito chiuso: gli elettroni scorrono e la lampadina emette fotoni.</span></div></section>
 <section class="la-mode" data-la-panel="higgs" hidden><div class="la-intro"><p>${laIntro.replaceAll('\n', '</p><p>')}</p></div><div class="la-compare"><article class="la-compare-card"><div class="la-card-head"><span class="la-icon-e">e⁻</span><div><h4>Elettrone</h4><p>Ha massa</p></div></div><svg id="laElectronSvg" viewBox="0 0 390 252" aria-label="Elettrone nel campo di Higgs"><defs><filter id="laPanelElectronGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="5"/></filter></defs><g class="la-field-grid"></g><path id="laElectronTrail" d="M0 130 H390" fill="none" stroke="#8cc2ff" stroke-width="2" stroke-dasharray="6 9" opacity=".55"/><g id="laElectron"><circle r="21" fill="#90c2ff"/><circle r="32" fill="#90c2ff" opacity=".18" filter="url(#laPanelElectronGlow)"/><text text-anchor="middle" dy="7" font-size="20" font-weight="700" fill="#0a2336">e⁻</text></g></svg><div class="la-card-foot">L'elettrone ha una massa, anche se piccolissima.</div></article><article class="la-compare-card"><div class="la-card-head"><span class="la-icon-ph">γ</span><div><h4>Fotone</h4><p>Non ha massa</p></div></div><svg id="laPhotonSvg" viewBox="0 0 390 252" aria-label="Fotone rappresentato come un piccolo bolide luminoso"><defs><filter id="laPanelPhotonGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="7"/></filter><radialGradient id="laPhotonCoreGrad" cx="48%" cy="50%" r="60%"><stop offset="0" stop-color="#fff9d8" stop-opacity="1"/><stop offset="0.4" stop-color="#ffeaa0" stop-opacity=".98"/><stop offset="0.78" stop-color="#ffd15f" stop-opacity=".86"/><stop offset="1" stop-color="#ffd15f" stop-opacity="0"/></radialGradient><linearGradient id="laPhotonTailGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffd15f" stop-opacity="0"/><stop offset="0.45" stop-color="#ffd76d" stop-opacity=".14"/><stop offset="0.78" stop-color="#ffe79a" stop-opacity=".34"/><stop offset="1" stop-color="#fff3c3" stop-opacity=".75"/></linearGradient></defs><g class="la-field-grid"></g><g id="laPhotonPack"><ellipse cx="-28" cy="0" rx="34" ry="5.8" fill="url(#laPhotonTailGrad)" opacity=".92" filter="url(#laPanelPhotonGlow)"/><ellipse cx="-16" cy="0" rx="20" ry="4.5" fill="#ffe8a5" opacity=".42" filter="url(#laPanelPhotonGlow)"/><ellipse cx="-2" cy="0" rx="16" ry="10" fill="#ffd467" opacity=".2" filter="url(#laPanelPhotonGlow)"/><ellipse cx="0" cy="0" rx="9.8" ry="6.8" fill="url(#laPhotonCoreGrad)"/><ellipse cx="1.5" cy="0" rx="4.2" ry="3" fill="#fffdf0" opacity=".95"/></g></svg><div class="la-card-foot">Il fotone, a differenza dell'elettrone, non ha massa.</div></article></div><div class="la-higgs-note">Il campo è rappresentato con una trama luminosa. <strong>Non è un fluido che frena le particelle:</strong> il movimento delle animazioni è illustrativo.</div></section>
 <p class="la-caption">Simulazioni illustrative per esplorare concetti di fisica delle particelle, non rappresentazioni in scala.</p></section>
 <aside class="la-side"><div data-la-side="circuit"><span class="la-side-label">ESPLORA · CORRENTE ELETTRICA</span><h4>Dal filo alla luce</h4><p>Nel circuito alimentato dalla batteria, nel filo metallico si stabilisce una corrente: gli <strong>elettroni</strong> hanno una piccola velocità media di deriva.</p><p>La <strong>lampadina</strong> emette luce, cioè <strong>fotoni</strong>. Gli elettroni non si trasformano in fotoni: l’energia elettrica viene trasferita alla lampadina.</p><div class="la-explain"><strong>Osserva</strong><p>Clicca sull’interruttore per interrompere la corrente e spegnere la lampadina; clicca nuovamente per riaccenderla.</p></div><div class="la-side-label">PARTICELLE</div><button class="la-info-tile" data-la-info="electron"><span class="la-symbol la-electron">e</span><span><strong>Elettrone</strong><small>Leptoni · carica negativa</small></span><span>↗</span></button><button class="la-info-tile" data-la-info="photon"><span class="la-symbol la-yellow">γ</span><span><strong>Fotone</strong><small>Bosoni · particella della luce</small></span><span>↗</span></button></div>
 <div data-la-side="higgs" hidden><span class="la-side-label">ESPLORA · MASSA E HIGGS</span><h4>Una particella speciale</h4><p>Nel 2012, al CERN, gli scienziati hanno scoperto una particella molto speciale: il <strong>bosone di Higgs</strong>.</p><p>La scoperta di questa particella ha permesso ai fisici di capire come mai alcune particelle hanno massa e altre... no!</p><p>Ad esempio gli elettroni, pur essendo infinitamente piccoli, hanno una massa, mentre i fotoni, le particelle di luce, non hanno massa.</p><div class="la-side-label">PARTICELLE</div><button class="la-info-tile" data-la-info="higgs"><span class="la-symbol la-higgs-symbol">H</span><span><strong>Bosone di Higgs</strong><small>Bosone di Higgs · particella elementare</small></span><span>↗</span></button><button class="la-info-tile" data-la-info="electron"><span class="la-symbol la-electron">e</span><span><strong>Elettrone</strong><small>Leptoni · ha massa</small></span><span>↗</span></button><button class="la-info-tile" data-la-info="photon"><span class="la-symbol la-yellow">γ</span><span><strong>Fotone</strong><small>Bosoni · non ha massa</small></span><span>↗</span></button></div></aside>
 <div id="laInfoModal" class="la-info-modal" hidden><section class="la-info-dialog" role="dialog" aria-modal="true" aria-labelledby="laInfoTitle"><button class="la-info-close" aria-label="Chiudi scheda" type="button">×</button><span class="la-modal-symbol" id="laInfoSymbol"></span><h3 id="laInfoTitle"></h3><p id="laInfoBody"></p></section></div></div>`;
  const root = document.getElementById('laApp'); const data = {electron: 'Elettrone', photon: 'Fotone', higgs: 'Higgs'};
  let mode = 'circuit', running = true, raf = 0, zero = 0, powered = true, simTime = 0, lastTime = 0;
  const circuit = root.querySelector('#laCircuit'), electrons = root.querySelector('#laElectrons'), photons = root.querySelector('#laPhotons'), light = root.querySelector('#laLight'), filament = root.querySelector('#laFilament');
  const electronG = root.querySelector('#laElectron'), photonPack = root.querySelector('#laPhotonPack');
  const switchControl = root.querySelector('#laSwitchControl'), switchBlade = root.querySelector('#laSwitchBlade');
  function toggleSwitch() {
    powered = !powered;
    switchBlade.setAttribute('d', powered ? 'M342 118 L400 118' : 'M342 118 L394 92');
    switchControl.querySelector('text').textContent = powered ? 'ON' : 'OFF';
    switchControl.setAttribute('aria-label', powered ? 'Apri l’interruttore' : 'Chiudi l’interruttore');
    switchControl.setAttribute('aria-pressed', String(powered));
    root.querySelector('#laCircuitText').textContent = powered ? 'Circuito chiuso: gli elettroni scorrono e la lampadina emette fotoni.' : 'Circuito aperto: gli elettroni si fermano e la lampadina è spenta.';
    light.style.opacity = powered ? '1' : '0'; filament.setAttribute('stroke', powered ? '#ffd27a' : '#776a61');
    if (!powered) pg.forEach(g => g.setAttribute('opacity', '0'));
  }
  switchControl.addEventListener('click', toggleSwitch);
  switchControl.addEventListener('keydown', e => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); toggleSwitch();} });
  function setMode(next) {mode = next; root.querySelectorAll('[data-la-panel]').forEach(p => {let active = p.dataset.laPanel === mode; p.hidden = !active; p.classList.toggle('active', active)}); root.querySelectorAll('[data-la-side]').forEach(p => {p.hidden = p.dataset.laSide !== mode}); root.querySelectorAll('[data-la-mode]').forEach(b => {let active = b.dataset.laMode === mode; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active))});}
  root.querySelectorAll('[data-la-mode]').forEach(b => b.addEventListener('click', () => setMode(b.dataset.laMode)));
  const modal = root.querySelector('#laInfoModal'); let prev = null; root.querySelectorAll('[data-la-info]').forEach(b => b.addEventListener('click', () => {prev = b; const name = data[b.dataset.laInfo], sym = smTileSymbols[name]; root.querySelector('#laInfoSymbol').textContent = sym; root.querySelector('#laInfoSymbol').dataset.particle = b.dataset.laInfo; root.querySelector('#laInfoTitle').textContent = name; smFillCard(root, '#laInfoBody', name); modal.hidden = false; modal.querySelector('.la-info-close').focus()})); function closeInfo() {modal.hidden = true; prev?.focus()} modal.querySelector('.la-info-close').addEventListener('click', closeInfo); modal.addEventListener('click', e => {if (e.target === modal) closeInfo()}); root.addEventListener('keydown', e => {if (e.key === 'Escape' && !modal.hidden) {e.stopPropagation(); closeInfo()} });
  const loop = document.createElementNS('http://www.w3.org/2000/svg', 'path'); loop.setAttribute('d', 'M300 302 H160 V118 H339 M401 118 H505 V245 H554 V216 L554 176 L563 145 L567 136 L572 145 L577 136 L582 145 L587 136 L588 145 L596 176 V216 V245 H644 V118 H692 V302 H480 L300 302');
  const pathLength = loop.getTotalLength();
  const eg = Array.from({length: 28}, () => {let c = document.createElementNS('http://www.w3.org/2000/svg', 'g'); c.innerHTML = '<circle r="7.5" fill="#b481ff" opacity=".18" filter="url(#laElectronGlow)"></circle><circle r="4.2" fill="#b98cff"></circle>'; electrons.appendChild(c); return c});
  // Radial Gaussian wavepackets: soft luminescent pulse rather than a hard-edged circle.
  function randomPhoton(offset = 0) {return {angle: Math.random() * Math.PI * 2, speed: 90 + Math.random() * 80, duration: 1.15 + Math.random() * .95, offset, phase: Math.random() * 6.28};}
  const photonState = Array.from({length: 32}, (_, i) => randomPhoton(Math.random() * 2.1));
  const pg = photonState.map(() => {let g = document.createElementNS('http://www.w3.org/2000/svg', 'g'); g.innerHTML = '<ellipse cx="-3" cy="0" rx="23" ry="11" fill="#ffcf61" opacity=".38" filter="url(#laPhotonGlow)"/><ellipse cx="0" cy="0" rx="15" ry="7" fill="#ffe693" opacity=".47" filter="url(#laPhotonGlow)"/><ellipse cx="2" cy="0" rx="7" ry="3.2" fill="#fff2bb" opacity=".7" filter="url(#laPhotonGlow)"/>'; photons.appendChild(g); return g});
  root.querySelectorAll('.la-field-grid').forEach(g => {let html = ''; for (let y = 35; y < 255; y += 34)for (let x = 23; x < 390; x += 37)html += `<circle cx="${x}" cy="${y}" r="3" fill="#63b9ea" opacity=".42"/>`; g.innerHTML = html});
  function tick(now) {    
if (!running) return; if (!lastTime) lastTime = now; const elapsed = Math.min(.05, (now - lastTime) / 1000); lastTime = now; if (powered) simTime += elapsed; const t = simTime;
    light.style.opacity = powered ? '1' : '0'; filament.setAttribute('stroke', powered ? '#ffd27a' : '#776a61');
    eg.forEach((el, i) => {let p = loop.getPointAtLength(((i / eg.length) + t * .024) % 1 * pathLength); el.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`); el.setAttribute('opacity', powered ? '.94' : '.50')});
    photonState.forEach((st, i) => {
      let elapsed = t + st.offset;
      let age = (elapsed % st.duration) / st.duration;
      if (age < .04 && elapsed > st.duration) {const fresh = randomPhoton(st.offset); photonState[i] = fresh; st = fresh;}
      let r = 24 + age * st.speed * 1.2;
      let x = 575 + Math.cos(st.angle) * r;
      let y = 144 + Math.sin(st.angle) * r;
      // Each packet travels on a straight radial path with a random direction.
      pg[i].setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(st.angle * 180 / Math.PI).toFixed(1)}) scale(${(0.8 + .25 * Math.sin(st.phase + t * 2) ** 2).toFixed(2)})`);
      pg[i].setAttribute('opacity', powered ? (Math.min(1, age * 8) * Math.pow(1 - age, 1.25) * .9).toFixed(3) : '0');
    });
    const ex = 44 + ((t * 42) % 302);
    electronG.setAttribute('transform', `translate(${ex.toFixed(1)} ${130 + Math.sin(t * 1.6) * 4.5})`);
    const px = 44 + ((t * 82) % 302), py = 126 + Math.sin(t * 2.4) * 2;
    const pRot = (-4 + Math.sin(t * 3.2) * 2.2).toFixed(2);
    const pScale = (1 + 0.045 * Math.sin(t * 5)).toFixed(3);
    photonPack.setAttribute('transform', `translate(${px.toFixed(1)} ${py.toFixed(1)}) rotate(${pRot}) scale(${pScale})`);
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick); addCleanup(() => {running = false; cancelAnimationFrame(raf)});
}
