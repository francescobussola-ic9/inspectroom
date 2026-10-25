function closeScene() {clearSim(); overlay.classList.remove('open'); state.current = null; document.body.style.overflow = ''}
function openScene(id) {clearSim(); state.current = id; overlay.classList.add('open'); document.body.style.overflow = 'hidden'; renderScene(); document.getElementById('closeBtn').focus()}
function base(visual, side) {return `<div class="dialog-body"><div class="visual">${visual}</div><aside class="side">${side}</aside></div>`}
function renderScene() {  
document.getElementById('dialogTitle').textContent = titles[state.current] || 'Esplora';
  if (state.current === 'chamber') return renderChamber();
  if (state.current === 'detector') return renderDetector();
  if (state.current === 'kcl') return renderKCL();
  if (state.current === 'model') return renderModel();
  if (state.current === 'help') return renderHelp();
  if (state.current === 'book') return renderBook();
  return renderIntro();
}
