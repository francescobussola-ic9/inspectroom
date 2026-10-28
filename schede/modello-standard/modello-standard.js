const originalModelGroups = [{"id": "quarks", "title": "Quark", "items": ["Quark"]}, {"id": "leptons", "title": "Leptoni", "items": ["Elettrone", "Muone", "Tau", "Neutrini"]}, {"id": "bosons", "title": "Bosoni", "items": ["Fotone", "Gluoni", "W e Z"]}, {"id": "higgs", "title": "Higgs", "items": ["Higgs"]}];

const smInfo = {
  "Quark": {
    "symbol": "q",
    "subtitle": "I costituenti di protoni e neutroni",
    "what": "Il quark è una particella elementare. Esistono sei tipi di quark e hanno nomi bizzarri: si chiamano up, down, top, bottom, charm e strange.",
    "where": "Nei protoni e nei neutroni dei nuclei atomici.",
    "property": "Osservare un quark isolato è impossibile. I quark sono normalmente legati tra loro dall'interazione forte.",
    "history": "Il modello dei quark fu proposto nel 1964 da Murray Gell-Mann e George Zweig e la loro esistenza è stata confermata dagli esperimenti nel 1968.",
    "family": "Quark"
  },

  "Elettrone": {
    "symbol": "e",
    "subtitle": "Una particella fondamentale dell’atomo",
    "what": "È una particella elementare con carica elettrica negativa e fa parte della famiglia dei leptoni.",
    "where": "Negli atomi, nei fili elettrici e nei fenomeni di elettricità.",
    "property": "Ha una massa, ma molto piccola.",
    "history": "Fu scoperto da J. J. Thomson nel 1897, studiando i raggi catodici.",
    "family": "Leptoni"
  },

  "Muone": {
    "symbol": "μ",
    "subtitle": "Un parente più pesante dell’elettrone",
    "what": "È un leptone elementare simile all’elettrone, ma molto più massiccio.",
    "where": "Nei raggi cosmici che raggiungono il suolo e negli esperimenti di fisica.",
    "property": "È instabile e può attraversare molta materia prima di decadere.",
    "history": "Fu scoperto nel 1936 da Carl D. Anderson e Seth Neddermeyer, studiando le particelle provenienti dai raggi cosmici.",
    "family": "Leptoni"
  },

  "Tau": {
    "symbol": "τ",
    "subtitle": "Il leptone carico più pesante",
    "what": "È una particella elementare simile all’elettrone e al muone.",
    "where": "Negli acceleratori, dove può essere prodotta in collisioni energetiche.",
    "property": "Ha carica negativa e decade molto rapidamente.",
    "history": "Fu identificata a partire dal 1975 dagli esperimenti guidati da Martin Perl.",
    "family": "Leptoni"
  },

  "Neutrini": {
    "symbol": "ν",
    "subtitle": "Le particelle quasi invisibili",
    "what": "I neutrini sono particelle elementari. Ne conosciamo tre tipi: elettronico, muonico e tauonico.",
    "where": "Nel Sole, nei raggi cosmici e in alcuni decadimenti radioattivi.",
    "property": "Non hanno carica elettrica, hanno una massa piccolissima e interagiscono molto raramente con la materia.",
    "history": "Il neutrino elettronico fu identificato sperimentalmente nel 1956; il neutrino muonico nel 1962; il neutrino tauonico nel 2000.",
    "family": "Leptoni"
  },

  "Fotone": {
    "symbol": "γ",
    "subtitle": "La particella della luce",
    "what": "Un fotone è un pacchettino di energia della luce.",
    "where": "In tutte le radiazioni elettromagnetiche: dalla luce visibile alle onde radio, fino ai raggi X.",
    "property": "Non ha massa e nel vuoto viaggia alla velocità della luce.",
    "history": "Nel 1905 Einstein propose i quanti di luce per spiegare l’effetto fotoelettrico; il nome «fotone» arrivò nel 1926.",
    "family": "Bosoni"
  },

  "Gluoni": {
    "symbol": "g",
    "subtitle": "Le particelle che tengono uniti i quark",
    "what": "I gluoni sono particelle elementari che tengono uniti i quark.",
    "where": "All’interno di protoni, neutroni e di altre particelle formate da quark.",
    "property": "Sono responsabili della forza che impedisce ai quark di separarsi.",
    "history": "Le prime prove sperimentali dell’esistenza dei gluoni arrivarono nel 1979 al DESY, in Germania.",
    "family": "Bosoni"
  },

  "W e Z": {
    "symbol": "W e Z",
    "subtitle": "I bosoni dell’interazione debole",
    "what": "I bosoni W⁺, W⁻ e Z⁰ sono particelle elementari che mediano l’interazione debole.",
    "where": "Nei decadimenti radioattivi e nelle collisioni tra particelle ad alta energia.",
    "property": "W⁺ e W⁻ hanno carica elettrica; Z⁰ è neutro. Tutti e tre hanno massa.",
    "history": "I bosoni W e Z furono scoperti al CERN nel 1983.",
    "family": "Bosoni"
  },

  "Higgs": {
    "symbol": "H",
    "subtitle": "La particella scoperta al CERN nel 2012",
    "what": "Il bosone di Higgs è una particella molto sfuggente prodotta nelle collisioni ad altissima energia.",
    "where": "Compare per un istante quando l'energia è estremamente elevata.",
    "property": "La sua scoperta ha aiutato a spiegare perché le particelle hanno una massa.",
    "history": "Il bosone di Higgs fu proposto nel 1964 da Peter Higgs. Per cercarlo il CERN costruì il grande acceleratore LHC. La particella fu osservata nel 2012 e contribuì all'assegnazione del Premio Nobel per la Fisica a Peter Higgs nel 2013.",
    "family": "Bosoni"
  }
};
// Single canonical source for the elementary-particle tiles throughout INSPECTROOM.
const smTileSymbols = {Quark:'q', Elettrone:'e', Muone:'μ', Tau:'τ', Neutrini:'ν', Fotone:'γ', Gluoni:'g', 'W e Z':'W / Z', Higgs:'H'};
function smDetailsHTML(name) {
  const p = smInfo[name];
  if (!p) return '';
  return `<div class="shared-particle-info"><p class="shared-subtitle">${p.subtitle}</p><p><strong>Che cos’è?</strong> ${p.what}</p><p><strong>Dove lo incontriamo?</strong> ${p.where}</p><p><strong>Una caratteristica:</strong> ${p.property}</p><p><strong>Un po’ di storia:</strong> ${p.history}</p></div>`;
}
// Elementary-particle tiles reference the Model Standard database directly.
// Compound particles keep their own descriptions and symbols.
function smCardData(card) {
  if (!card.model) return card;
  const p = smInfo[card.model];
  if (!p) throw new Error(`Particella assente dal Modello Standard: ${card.model}`);
  return {
    ...card,
    symbol: smTileSymbols[card.model],
    name: card.model,
    family: `Famiglia: ${p.family.toLowerCase()}`,
    text: smDetailsHTML(card.model)
  };
}
function smFillCard(root, id, name) {
  const target = root.querySelector(id);
  if (target && smInfo[name]) target.innerHTML = smDetailsHTML(name);
}
function renderModel() {
  dialogContent.innerHTML = `<div class="sm-page" id="smExperience"><div class="sm-families" id="modelGrid"></div><div class="sm-modal" id="smModal" hidden><section class="sm-dialog" role="dialog" aria-modal="true" aria-labelledby="smModalTitle"><button type="button" class="sm-close" aria-label="Chiudi la scheda">×</button><div class="sm-modal-head"><span class="sm-modal-symbol" id="smModalSymbol"></span><div><h3 id="smModalTitle"></h3><h4 id="smModalSubtitle"></h4></div></div><div class="sm-modal-body"><p><strong>Che cos’è?</strong> <span id="smWhat"></span></p><p><strong>Dove lo incontriamo?</strong> <span id="smWhere"></span></p><p><strong>Una caratteristica:</strong> <span id="smProperty"></span></p><p><strong>Un po’ di storia:</strong> <span id="smHistory"></span></p></div><div class="sm-modal-meta" id="smMeta"></div></section></div></div>`;
  const root = document.getElementById('smExperience');
  root.querySelector('#modelGrid').innerHTML = originalModelGroups.map(f => `<section class="sm-family sm-${f.id}"><h3>${f.title}</h3><div class="sm-family-tiles">${f.items.map(name => `<button type="button" class="sm-item" data-particle="${name}" aria-label="Apri la scheda ${name}"><strong class="sm-tile-symbol">${smTileSymbols[name]}</strong><small class="sm-tile-name">${name}</small></button>`).join('')}</div></section>`).join('');
  const modal = root.querySelector('#smModal'); let opener = null;
  function close() {modal.hidden = true; opener?.focus();}
  root.querySelectorAll('[data-particle]').forEach(b => b.addEventListener('click', () => {
    const name = b.dataset.particle, p = smInfo[name]; opener = b;
    root.querySelector('#smModalSymbol').textContent = p.symbol;
    root.querySelector('#smModalTitle').textContent = name;
    root.querySelector('#smModalSubtitle').textContent = p.subtitle;
    root.querySelector('#smWhat').textContent = p.what;
    root.querySelector('#smWhere').textContent = p.where;
    root.querySelector('#smProperty').textContent = p.property;
    root.querySelector('#smHistory').textContent = p.history;
    root.querySelector('#smMeta').textContent = `Famiglia: ${p.family.toLowerCase()}`;
    modal.className = 'sm-modal sm-' + originalModelGroups.find(f => f.items.includes(name)).id;
    modal.hidden = false; root.querySelector('.sm-close').focus();
  }));
  root.querySelector('.sm-close').addEventListener('click', close);
  modal.addEventListener('click', e => {if (e.target === modal) close()});
  root.addEventListener('keydown', e => {if (e.key === 'Escape' && !modal.hidden) {e.stopPropagation(); close();} });
}
