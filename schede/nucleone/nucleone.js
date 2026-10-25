const nuParticleCards = {
  proton: {symbol: 'p', name: 'Protone', family: 'Particelle composte', tile: 'composite', text: 'Il protone non è una particella elementare: è formato da quark legati dall’interazione forte. Nel deuterio è uno dei due nucleoni del nucleo.'},
  neutron: {symbol: 'n', name: 'Neutrone', family: 'Particelle composte', tile: 'composite', text: 'Anche il neutrone non è elementare. Nel nucleo del deuterio accompagna il protone e contribuisce a formare il nucleo atomico.'},
  quark: {model: 'Quark', tile: 'quark'},
  gluon: {model: 'Gluoni', tile: 'boson'}
};
const nuSteps = [
  {title: 'Atomo di deuterio', short: 'Dal livello atomico al nucleo.', heading: '1 · Il deuterio', text: 'Il <strong>deuterio</strong> è un isotopo dell’idrogeno. Nel suo nucleo troviamo un <strong>protone</strong> e un <strong>neutrone</strong>: è un punto di partenza semplice per scendere dentro la materia.'},
  {title: 'Protone e neutrone', short: 'I nucleoni contengono quark.', heading: '2 · Dentro i nucleoni', text: 'Quando ingrandiamo il nucleo scopriamo che <strong>protone</strong> e <strong>neutrone</strong> non sono elementari. In questa rappresentazione scolastica vediamo i loro <strong>quark di valenza</strong>.'},
  {title: 'Gluoni e confinamento', short: 'Il legame forte impedisce di separare i quark.', heading: '3 · Prova a separare un quark', text: 'I <strong>gluoni</strong> mediano l’interazione forte. Se provi ad allontanare un quark, il legame non si spezza: l’energia del sistema cresce e il quark viene richiamato verso gli altri. Questo comportamento prende il nome di <strong>confinamento</strong>.'}
];
function nuParticleTiles(ids) {
  return `<div class="nu-particles"><div class="nu-side-label">PARTICELLE COINVOLTE</div><h4>Apri una scheda rapida</h4><div class="nu-particle-grid">${ids.map(id => {const p = smCardData(nuParticleCards[id]); return `<button type="button" class="nu-particle-tile" data-nu-particle="${id}" aria-label="Apri la scheda ${p.name}"><span class="nu-particle-symbol nu-${p.tile}">${p.symbol}</span><span class="nu-particle-info"><strong>${p.name}</strong><small>${p.family}</small></span><span class="nu-particle-arrow">↗</span></button>`}).join('')}</div></div><div class="nu-particle-modal" id="nuParticleModal" hidden role="dialog" aria-modal="true" aria-label="Scheda particella"><div class="nu-particle-dialog"><button class="nu-particle-close" type="button" aria-label="Chiudi scheda">×</button><span class="nu-particle-large-symbol" id="nuParticleSymbol"></span><h3 id="nuParticleName"></h3><div id="nuParticleText"></div><span class="nu-particle-family" id="nuParticleFamily"></span></div></div>`;
}
function nuBindParticleTiles(root) {
  const modal = root.querySelector('#nuParticleModal'); if (!modal) return;
  let previous = null;
  root.querySelectorAll('[data-nu-particle]').forEach(button => button.addEventListener('click', () => {
    const p = smCardData(nuParticleCards[button.dataset.nuParticle]); previous = button;
    modal.querySelector('#nuParticleSymbol').textContent = p.symbol;
    modal.querySelector('#nuParticleName').textContent = p.name;
    modal.querySelector('#nuParticleText')[p.model ? 'innerHTML' : 'textContent'] = p.text;
    modal.querySelector('#nuParticleFamily').textContent = p.family;
    modal.querySelector('#nuParticleSymbol').className = 'nu-particle-large-symbol nu-' + p.tile;
    modal.hidden = false; modal.querySelector('.nu-particle-close').focus();
  }));
  function close() {modal.hidden = true; previous?.focus();}
  modal.querySelector('.nu-particle-close').addEventListener('click', close);
  modal.addEventListener('click', e => {if (e.target === modal) close()});
  root.addEventListener('keydown', e => {if (e.key === 'Escape' && !modal.hidden) {e.stopPropagation(); close();} });
}
function renderNucleone() {
  dialogContent.innerHTML = `<div class="nu-experience" id="nuExperience">
    <div class="nu-main">
      <div class="nu-topbar">
        <div><span class="nu-eyebrow">ESPLORA · QUARK E GLUONI</span><h3>Alla scoperta di quark e gluoni</h3><p>Esplora il nucleo di un atomo e scopri che cosa tiene uniti protoni e neutroni.</p></div>
        <span class="nu-live">ESPERIMENTO INTERATTIVO</span>
      </div>
      <div class="nu-stage-wrap">
        <div class="nu-info-panel" aria-live="polite">
          <div class="nu-info-copy" data-nu-info="0"><strong>Questo è un atomo di deuterio.</strong><p>Nel nucleo ci sono un <strong>protone</strong> e un <strong>neutrone</strong>.</p><button type="button" class="nu-cta" data-nu-next="1">Esplora il nucleo →</button></div>
          <div class="nu-info-copy" data-nu-info="1" hidden><strong>Il protone e il neutrone sono formati da quark.</strong><p>Questi quark sono le particelle che usiamo per descrivere la struttura interna dei nucleoni.</p><button type="button" class="nu-cta" data-nu-next="2">Scopri cosa li tiene uniti →</button></div>
          <div class="nu-info-copy" data-nu-info="2" hidden><strong>I quark sono tenuti insieme dai gluoni.</strong><p>Prova a separare i quark: più allontani quello verde, più il legame diventa intenso. Quando lo lasci, il quark torna verso gli altri.</p></div>
        </div>
        <div class="nu-stage" id="nuStage">
          <div class="nu-scene nu-step1 active" data-nu-scene="0">
            <div class="nu-atom-shell"></div>
            <div class="nu-cloud"></div>
            <div class="nu-electron-orbit"><div class="nu-electron"></div></div>
            <div class="nu-nucleus-wrap">
              <div class="nu-nucleon nu-proton">p</div>
              <div class="nu-nucleon nu-neutron">n</div>
            </div>
            <div class="nu-tag" style="left:50%;top:32%;transform:translateX(-50%)">nucleo di deuterio</div>
            <div class="nu-tag" style="left:68%;top:14%">elettrone</div>
          </div>
          <div class="nu-scene nu-step2" data-nu-scene="1">
            <div class="nu-nucleon-card proton-card">
              <h4>Protone</h4><p>2 quark up + 1 quark down</p>
              <div class="nu-quark-chip nu-quark-u nu-q1">u</div><div class="nu-quark-chip nu-quark-u nu-q2">u</div><div class="nu-quark-chip nu-quark-d nu-q3">d</div>
            </div>
            <div class="nu-nucleon-card neutron-card">
              <h4>Neutrone</h4><p>1 quark up + 2 quark down</p>
              <div class="nu-quark-chip nu-quark-u nu-q1">u</div><div class="nu-quark-chip nu-quark-d nu-q2">d</div><div class="nu-quark-chip nu-quark-d nu-q3">d</div>
            </div>
            <div class="nu-tag" style="left:18%;top:12%">protone</div>
            <div class="nu-tag" style="right:18%;top:12%">neutrone</div>
          </div>
          <div class="nu-scene nu-step3" data-nu-scene="2">
            <div class="nu-proton-area">
              <svg id="nuDragSvg" viewBox="0 0 800 450" aria-label="Esperimento interattivo sul confinamento dei quark">
                <defs>
                  <radialGradient id="nuBgGlow" cx="50%" cy="42%" r="46%"><stop offset="0" stop-color="#122d42" stop-opacity=".42"/><stop offset="1" stop-color="#07111c" stop-opacity="0"/></radialGradient>
                  <filter id="nuGlow"><feGaussianBlur stdDeviation="7"/></filter>
                </defs>
                <circle cx="400" cy="222" r="155" fill="url(#nuBgGlow)" opacity=".8"></circle>
                <circle cx="400" cy="222" r="140" fill="none" stroke="rgba(121,196,255,.26)" stroke-width="2" stroke-dasharray="7 9"></circle>
                <g id="nuLinksGlow"></g>
                <g id="nuLinksCore"></g>
                <text x="34" y="38" class="nu-proton-label">UN PROTONE</text>
                <text x="34" y="59" class="nu-proton-note">Trascina il quark verde e osserva il legame forte.</text>
                <g id="nuNodeA"><circle cx="318" cy="168" r="28" fill="url(#nuAU)" opacity="0"></circle><circle cx="318" cy="168" r="28" fill="#8c70e0"></circle><text x="318" y="176" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">u</text></g>
                <g id="nuNodeB"><circle cx="342" cy="294" r="28" fill="#cb8b48"></circle><text x="342" y="302" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">d</text></g>
                <g id="nuDragNode" style="touch-action:none;cursor:grab">
                  <circle id="nuDragHalo" cx="494" cy="222" r="39" fill="rgba(120,219,186,.18)"></circle>
                  <circle id="nuDragBall" cx="494" cy="222" r="28" fill="#4ba97d"></circle>
                  <text id="nuDragText" x="494" y="230" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">u</text>
                </g>
              </svg>
            </div>
            <div class="nu-energy"><strong>Energia del legame</strong><div class="nu-energy-bar"><div class="nu-energy-fill" id="nuEnergyFill"></div></div><small id="nuEnergyText">I quark sono vicini: il sistema rimane stabile.</small></div>
            <div class="nu-hand nu-hand-anim" id="nuHand" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 72c-2-3-3-6-3-10V44c0-3 2-5 5-5s5 2 5 5v-18c0-3 2-5 5-5s5 2 5 5v15c0-3 2-5 5-5s5 2 5 5v4c0-3 2-5 5-5s5 2 5 5v20c0 10-8 18-18 18H49c-5 0-10-2-13-6Z" fill="rgba(244,249,255,.92)"/><path d="M63 26v22M53 31v17M43 28v15" stroke="rgba(9,22,34,.45)" stroke-width="2.6" stroke-linecap="round"/></svg>
            </div>
            <div class="nu-hand-text" id="nuHandText">Trascina un quark</div>
          </div>
        </div>
      </div>
      <p class="nu-caption">Rappresentazione semplificata per la scuola media: il comportamento elastico è un’analogia visiva utile per intuire il <strong>confinamento</strong>, non una simulazione quantitativa della cromodinamica quantistica.</p>
    </div>
    <aside class="nu-side">
      <div class="nu-side-label">ESPLORA · APRI UNA TAPPA</div>
      <div class="nu-menu" id="nuMenu">${nuSteps.map((step, i) => `<button class="nu-step ${i === 0 ? 'active' : ''}" type="button" data-nu-step="${i}" aria-expanded="${i === 0 ? 'true' : 'false'}"><span class="nu-step-num">${i + 1}</span><span class="nu-step-body"><strong>${step.title}</strong><small>${step.short}</small><span class="nu-expand" aria-hidden="true">${i === 0 ? '−' : '+'}</span></span></button><div class="nu-step-detail" data-nu-detail="${i}" ${i === 0 ? '' : 'hidden'}><p>${step.text}</p></div>`).join('')}</div>
      ${nuParticleTiles(['proton', 'neutron', 'quark', 'gluon'])}
    </aside>
  </div>`;
  const root = document.getElementById('nuExperience');
  nuBindParticleTiles(root);
  const steps = [...root.querySelectorAll('[data-nu-step]')];
  const scenes = [...root.querySelectorAll('[data-nu-scene]')];
  const details = [...root.querySelectorAll('[data-nu-detail]')];
  const infoCopies = [...root.querySelectorAll('[data-nu-info]')];
  let currentStep = 0;
  let dragInitDone = false;
  function setStep(i) {
    currentStep = Math.max(0, Math.min(2, i));
    scenes.forEach((scene, idx) => scene.classList.toggle('active', idx === currentStep));
    infoCopies.forEach((info, idx) => {info.hidden = idx !== currentStep;});
    steps.forEach((btn, idx) => {
      const active = idx === currentStep;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-expanded', String(active));
      btn.querySelector('.nu-expand').textContent = active ? '−' : '+';
      details[idx].hidden = !active;
    });
    if (currentStep === 2 && !dragInitDone) {dragInitDone = true; nuInitDrag(root);}
  }
  steps.forEach(btn => btn.addEventListener('click', () => setStep(Number(btn.dataset.nuStep))));
  root.querySelectorAll('[data-nu-next]').forEach(btn => btn.addEventListener('click', () => setStep(Number(btn.dataset.nuNext))));
  setStep(0);
}
function nuInitDrag(root) {
  const svg = root.querySelector('#nuDragSvg');
  if (!svg) return;
  const glowGroup = root.querySelector('#nuLinksGlow');
  const coreGroup = root.querySelector('#nuLinksCore');
  const dragNode = root.querySelector('#nuDragNode');
  const dragBall = root.querySelector('#nuDragBall');
  const dragText = root.querySelector('#nuDragText');
  const halo = root.querySelector('#nuDragHalo');
  const energyFill = root.querySelector('#nuEnergyFill');
  const energyText = root.querySelector('#nuEnergyText');
  const hand = root.querySelector('#nuHand');
  const handText = root.querySelector('#nuHandText');
  const fixedA = {x: 318, y: 168}, fixedB = {x: 342, y: 294}, anchor = {x: 494, y: 222};
  let current = {x: anchor.x, y: anchor.y}, target = {x: anchor.x, y: anchor.y};
  let dragging = false, interacted = false, raf = 0;
  const maxRadius = 170;
  function updateLinks() {
    const hub = {x: (fixedA.x + fixedB.x + current.x) / 3, y: (fixedA.y + fixedB.y + current.y) / 3};
    const dist = Math.hypot(current.x - anchor.x, current.y - anchor.y);
    const level = Math.min(1, dist / maxRadius);
    const core = level > .65 ? '#ffb58a' : level > .32 ? '#d6c682' : '#8dd4ff';
    const glow = level > .65 ? 'rgba(255,181,138,.22)' : level > .32 ? 'rgba(214,198,130,.22)' : 'rgba(141,212,255,.18)';
    const coreWidth = 3.2 + level * 1.8;
    const glowWidth = 10 + level * 6;
    const dash = level > .72 ? ' stroke-dasharray="7 8"' : '';
    glowGroup.innerHTML = `<path class="nu-link" d="M${hub.x} ${hub.y} L${fixedA.x} ${fixedA.y}" stroke="${glow}" stroke-width="${glowWidth}" fill="none"/><path class="nu-link" d="M${hub.x} ${hub.y} L${fixedB.x} ${fixedB.y}" stroke="${glow}" stroke-width="${glowWidth}" fill="none"/><path class="nu-link" d="M${hub.x} ${hub.y} L${current.x} ${current.y}" stroke="${glow}" stroke-width="${glowWidth}" fill="none"/>`;
    coreGroup.innerHTML = `<path class="nu-link-core" d="M${hub.x} ${hub.y} L${fixedA.x} ${fixedA.y}" stroke="${core}" stroke-width="${coreWidth}" fill="none"${dash}/><path class="nu-link-core" d="M${hub.x} ${hub.y} L${fixedB.x} ${fixedB.y}" stroke="${core}" stroke-width="${coreWidth}" fill="none"${dash}/><path class="nu-link-core" d="M${hub.x} ${hub.y} L${current.x} ${current.y}" stroke="${core}" stroke-width="${coreWidth}" fill="none"${dash}/>`;
    dragBall.setAttribute('cx', current.x); dragBall.setAttribute('cy', current.y);
    dragText.setAttribute('x', current.x); dragText.setAttribute('y', current.y + 8);
    halo.setAttribute('cx', current.x); halo.setAttribute('cy', current.y);
    dragNode.style.transform = '';
    energyFill.style.width = (12 + level * 88) + '%';
    if (level < .16) energyText.textContent = 'I quark sono vicini: il sistema rimane stabile.';
    else if (level < .5) energyText.textContent = 'Il legame si tende: la forza che tiene uniti i quark si fa più evidente.';
    else energyText.textContent = 'L’energia del legame aumenta ancora: il quark viene richiamato verso gli altri.';
  }
  function clampTarget(x, y) {
    let dx = x - anchor.x, dy = y - anchor.y; const d = Math.hypot(dx, dy);
    if (d > maxRadius) {const scale = maxRadius / d; dx *= scale; dy *= scale;}
    target.x = anchor.x + dx; target.y = anchor.y + dy;
  }
  function coords(e) {const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse());}
  function onPointerDown(e) {dragging = true; interacted = true; hand.classList.add('hidden'); handText.classList.add('hidden'); dragNode.setPointerCapture?.(e.pointerId); dragNode.style.cursor = 'grabbing'; const p = coords(e); clampTarget(p.x, p.y); e.preventDefault();}
  function onPointerMove(e) {if (!dragging) return; const p = coords(e); clampTarget(p.x, p.y);}
  function stopDragging(e) {dragging = false; target.x = anchor.x; target.y = anchor.y; dragNode.style.cursor = 'grab'; try {dragNode.releasePointerCapture?.(e.pointerId);} catch (err) {} }
  dragNode.addEventListener('pointerdown', onPointerDown);
  dragNode.addEventListener('pointermove', onPointerMove);
  dragNode.addEventListener('pointerup', stopDragging);
  dragNode.addEventListener('pointercancel', stopDragging);
  dragNode.addEventListener('pointerleave', e => {if (!dragging) return;});
  function tick() {
    current.x += (target.x - current.x) * (dragging ? 0.28 : 0.13);
    current.y += (target.y - current.y) * (dragging ? 0.28 : 0.13);
    updateLinks();
    raf = requestAnimationFrame(tick);
  }
  updateLinks();
  raf = requestAnimationFrame(tick);
  addCleanup(() => {cancelAnimationFrame(raf); dragNode.removeEventListener('pointerdown', onPointerDown); dragNode.removeEventListener('pointermove', onPointerMove); dragNode.removeEventListener('pointerup', stopDragging); dragNode.removeEventListener('pointercancel', stopDragging);});
}
