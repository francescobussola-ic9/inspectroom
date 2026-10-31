const wrap = document.getElementById('sceneWrap');
const scene = document.getElementById('scene');
const overlay = document.getElementById('overlay');
const dialogContent = document.getElementById('dialogContent');
let simCleanups = [];
function clearSim() {simCleanups.forEach(fn => {try {fn()} catch (e) {} }); simCleanups = []}
function addCleanup(fn) {simCleanups.push(fn)}
objects.forEach(o => {let b = document.createElement('button'); b.className = 'hotspot'; b.style.left = o.x + '%'; b.style.top = o.y + '%'; b.setAttribute('aria-label', o.name); b.innerHTML = `<span class="halo"></span><span class="tooltip">${o.name}</span>`; b.onclick = () => openScene(o.id); sceneStage.appendChild(b)});
function setMode(m) {state.mode = m; scene.classList.toggle('reveal', m === 'reveal'); wrap.classList.toggle('revealing', m === 'reveal'); document.getElementById('modeTag').hidden = m !== 'reveal'; document.getElementById('realBtn').classList.toggle('selected', m === 'real'); document.getElementById('revealBtn').classList.toggle('selected', m === 'reveal')}
document.getElementById('realBtn').onclick = () => setMode('real');
document.getElementById('revealBtn').onclick = () => setMode(state.mode === 'reveal' ? 'real' : 'reveal');
document.getElementById('pinsBtn').onclick = () => {state.pins = !state.pins; wrap.classList.toggle('show-pins', state.pins); document.getElementById('pinsBtn').classList.toggle('selected', state.pins)};
document.querySelectorAll('[data-open]').forEach(b => b.onclick = () => openScene(b.dataset.open));
document.getElementById('modelBtn').onclick = () => openScene('model');
document.getElementById('helpBtn').onclick = () => openScene('help');
document.getElementById('closeBtn').onclick = closeScene; overlay.addEventListener('click', e => {if (e.target === overlay) closeScene()}); document.addEventListener('keydown', e => {if (e.key === 'Escape') closeScene()});

// Un invito discreto, senza apertura automatica della guida.
(function initHelpHint() {
  window.addEventListener('inspectroom:intro-finished', () => {
  const shade = document.createElement('div'); shade.className = 'help-intro-shade'; shade.setAttribute('aria-hidden', 'true');
  document.body.appendChild(shade);
  document.body.classList.add('help-intro-active');
  let timeout;
  function dismiss() {document.body.classList.remove('help-intro-active'); clearTimeout(timeout); document.removeEventListener('pointerdown', dismiss, true); document.removeEventListener('keydown', dismiss, true);}
  timeout = setTimeout(dismiss, 4500);
  document.addEventListener('pointerdown', dismiss, true);
  document.addEventListener('keydown', dismiss, true);
  }, {once:true});
})();
