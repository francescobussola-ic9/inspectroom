const objects = [
  {id: 'solar', name: 'Telescopio', x: 36.0, y: 38.1},
  {id: 'electric', name: 'Lampada', x: 71.5, y: 49.6},
  {id: 'cosmic', name: 'Raggi cosmici', x: 48.0, y: 10.0},
  {id: 'proton', name: 'Il nucleo di un atomo', x: 68.8, y: 24.5},
  {id: 'chamber', name: 'Camera a nebbia', x: 47.6, y: 69.8},
  {id: 'kcl', name: 'Cloruro di potassio · KCl', x: 61.2, y: 85.0},
  {id: 'detector', name: 'Rilevatore di particelle', x: 69.2, y: 86.2},
  {id: 'book', name: 'Fisica · approfondimenti', x: 12.5, y: 54.5},
  {id: 'model', name: 'Il Modello Standard', x: 81.0, y: 20.2}
];
const titles = {chamber: 'Camera a nebbia', detector: 'Rilevatore di particelle', kcl: 'Cloruro di potassio', solar: 'Telescopio', electric: 'Lampada', cosmic: 'Raggi cosmici', proton: 'Il nucleo di un atomo', book: 'Fisica · approfondimenti', model: 'Il Modello Standard', help: 'Come funziona INSPECTROOM?'};
const state = {  
mode: 'real', pins: false, current: null, modelExpanded: false,
  chamber: {view: 'perspective', source: 'background', running: true, lastType: 'Muone candidato', lastGenerator: 'Fondo naturale'},
  detector: {view: 'photo', mode: 'background', running: true, focus: 'all', lastType: 'Gamma o rumore di fondo'},
  kcl: {view: 'macro', channel: 'beta', running: true, lastType: 'β⁻ : ⁴⁰K → ⁴⁰Ca + e⁻ + ν̄ₑ'}
};
