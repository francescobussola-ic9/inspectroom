function renderIntro() {
  switch (state.current) {
    case 'solar': return renderTelescopio();
    case 'electric': return renderLampada();
    case 'cosmic': return renderCosmici();
    case 'proton': return renderNucleone();
  }
}
