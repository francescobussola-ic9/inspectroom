
const bookChapters = [
  {
    title: "Come si osserva l’invisibile?",
    kicker: "CAPITOLO 1 · IL METODO",

    paras: [
      "Non possiamo vedere una **particella elementare** come osserviamo una biglia. Possiamo però misurare gli effetti che produce quando attraversa un materiale.",
      "Un **rivelatore** raccoglie piccoli segnali: punti luminosi, impulsi elettrici o energia depositata. I computer uniscono questi indizi e ricostruiscono le **traiettorie** delle particelle.",
      "Nell’aula di Inspectroom abbiamo incontrato due esempi: la **camera a nebbia**, che rende visibili alcune tracce, e il **rilevatore di particelle**, che registra segnali attraverso un sensore.",
      "I grandi esperimenti utilizzano lo stesso principio, ma con strumenti molto più complessi. Nessuno vede direttamente le particelle: i ricercatori ne rilevano la **presenza** analizzando le tracce lasciate dalle particelle nei sensori."
    ],

  },

  {
    title: "ATLAS: un gigante sotterraneo",
    kicker: "CAPITOLO 2 · CERN",

    paras: [
      "Sotto terra, vicino a Ginevra, si trova **ATLAS**, uno dei grandi rivelatori del **CERN**. È lungo circa 46 metri - quasi quanto metà campo da calcio - e funziona come una gigantesca macchina fotografica.",
      "Al centro di ATLAS si scontrano fasci di **protoni** accelerati nel Large Hadron Collider, o **LHC**. Dalle collisioni possono nascere particelle che si allontanano in tutte le direzioni.",
      "ATLAS è costruito a **strati**. Alcuni seguono il percorso delle particelle, altri misurano la loro **energia**. Potenti magneti aiutano a studiare quelle dotate di carica elettrica.",
      "Combinando le misure di molti strati, gli scienziati ricostruiscono le tracce delle particelle e capiscono ciò che è accaduto nell’urto. ATLAS ha contribuito alla scoperta del **bosone di Higgs** nel 2012."
    ],

  },

  {
    title: "CMS: un rivelatore a strati",
    kicker: "CAPITOLO 3 · CERN",

    paras: [
      "Anche **CMS** si trova lungo l’anello del LHC. Come ATLAS, studia i prodotti delle collisioni tra protoni, ma usa soluzioni tecniche differenti.",
      "Il suo nome significa **Compact Muon Solenoid**. Nel cuore dello strumento c’è un magnete molto potente, che curva il percorso delle particelle elettricamente cariche.",
      "Uno strato di sensori al **silicio** registra punti lungo le traiettorie. I **calorimetri** misurano l’energia delle particelle. Più all’esterno ci sono strumenti dedicati ai **muoni**.",
      "I fisici mettono insieme tutti i dati, come i pezzi di un puzzle. Confrontando esperimenti indipendenti come CMS e ATLAS, una scoperta diventa più affidabile."
    ],

  },

  {
    title: "ALICE: materia estrema",
    kicker: "CAPITOLO 4 · CERN",

    paras: [
      "**ALICE** è un grande esperimento del CERN specializzato nello studio delle collisioni fra **ioni pesanti**, come i nuclei di piombo.",
      "Quando questi nuclei si scontrano a energie altissime, per un brevissimo istante si possono creare condizioni simili a quelle dell’Universo poco dopo il **Big Bang**.",
      "In tali condizioni i **quark** e i **gluoni** formano uno stato particolare della materia chiamato **plasma di quark e gluoni**.",
      "ALICE non osserva questo plasma come si osserva un liquido in un bicchiere. Analizza invece le numerose **particelle** prodotte dalle collisioni, per ricostruirne le proprietà."
    ],

  },

  {
    title: "IceCube: un rivelatore nel ghiaccio",
    kicker: "CAPITOLO 5 · ANTARTIDE",

    paras: [
      "Al Polo Sud si trova **IceCube**, un rivelatore che utilizza un enorme volume di **ghiaccio antartico**. I suoi sensori sono collocati a circa **2km di di profondità**, sotto ai ghiacci dell'Antartide.",
      "IceCube studia soprattutto i **neutrini**, particelle prive di carica elettrica che attraversano quasi sempre la materia senza interagire.",
      "Quando un neutrino interagisce con il ghiaccio, può produrre particelle cariche. Queste emettono una debole luce chiamata **luce Cherenkov**.",
      "I sensori registrano quando e dove arriva la luce. Da questi segnali gli scienziati stimano la direzione e l’energia dell’evento, cercando indizi su fenomeni lontanissimi nello spazio."
    ],

  },

  {
    title: "Super-Kamiokande: luce nell’acqua",
    kicker: "CAPITOLO 6 · GIAPPONE",

    paras: [
      "In Giappone, sotto una montagna, si trova **Super-Kamiokande**: un enorme serbatoio riempito di **acqua molto pura**.",
      "Le pareti interne sono coperte da migliaia di sensori luminosi chiamati **fotomoltiplicatori**. Sono strumenti capaci di riconoscere segnali di luce debolissimi.",
      "Quando un **neutrino** interagisce nell’acqua, può produrre una particella carica. Se questa viaggia abbastanza velocemente, emette **luce Cherenkov**.",
      "I sensori misurano i segnali e i computer ricostruiscono una figura luminosa. È un altro modo per rendere osservabile ciò che i nostri occhi non possono vedere direttamente."
    ],

  }
];


const bookPhotoData = [
  {
    "image": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Particle_Tracks_in_AWAN_Expansion_Cloud_Chamber.jpg?width=960",
    "source": "https://commons.wikimedia.org/wiki/File:Particle_Tracks_in_AWAN_Expansion_Cloud_Chamber.jpg",
    "author": "Kebuk awan",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    "image": "https://commons.wikimedia.org/wiki/Special:Redirect/file/ATLAS.jpg?width=960",
    "source": "https://commons.wikimedia.org/wiki/File:ATLAS.jpg",
    "author": "CERN",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
  },
  {
    "image": "https://commons.wikimedia.org/wiki/Special:Redirect/file/CMS_detector_(2).jpg?width=960",
    "source": "https://commons.wikimedia.org/wiki/File:CMS_detector_(2).jpg",
    "author": "zipckr",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
  },
  {
    "image": "https://commons.wikimedia.org/wiki/Special:Redirect/file/ALICE_experiment_at_CERN.jpg?width=960",
    "source": "https://commons.wikimedia.org/wiki/File:ALICE_experiment_at_CERN.jpg",
    "author": "Andres T",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
  },
  {
    "image": "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2018/07/icecube_neutrino_observatory/17596200-1-eng-GB/IceCube_Neutrino_Observatory_pillars.jpg",
    "source": "https://www.esa.int/ESA_Multimedia/Images/2018/07/IceCube_Neutrino_Observatory",
    "author": "©ESA/IceCube Collaboration/NSF",
    "license": "ESA Standard license",
    "licenseUrl": "https://www.esa.int/ESA_Multimedia/Terms_and_conditions_of_use_of_images_and_videos_available_on_the_esa_website",
  },
  {
    "image": "https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/multimedia/fotografias/banco-de-imagenes/interior-del-detector-de-neutrinos-superkamiokande/41928-4-esl-MX/Interior-del-detector-de-neutrinos-Superkamiokande.jpg",
    "source": "https://www.agenciasinc.es/Visual/Fotografias/Interior-del-detector-de-neutrinos-Superkamiokande",
    "author": "Universidad Autónoma de Madrid (UAM) · via Agencia SINC",
    "license": "CC BY 4.0 (SINC)",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
  }
];
function renderBook() {
  dialogContent.innerHTML = `<div class="bk-app" id="bkApp"><div class="bk-toolbar"><strong class="bk-book-heading" id="bkBookHeading">Come vediamo l’invisibile?</strong><div class="bk-top-navigation" aria-label="Navigazione libro"><button id="bkPrev" type="button" aria-label="Pagina precedente">← Precedente</button><span id="bkCount" aria-live="polite"></span><button id="bkNext" type="button" aria-label="Pagina successiva">Successiva →</button></div></div><div class="bk-cover"><section class="bk-page bk-text-page"><div class="bk-top-label" id="bkKicker"></div><h2 id="bkTitle"></h2><div id="bkText" class="bk-prose"></div><div class="bk-pagenum" id="bkLeftNum"></div></section><section class="bk-page bk-image-page"><div class="bk-image-holder"><img id="bkPicture" alt="Fotografia scientifica del rivelatore"/><button type="button" class="bk-enlarge" id="bkZoom">Ingrandisci ↗</button></div><p id="bkCaption" class="bk-figcaption"></p><div id="bkCredits" class="bk-credits"></div><a id="bkSource" class="bk-source" target="_blank" rel="noopener noreferrer">Fonte fotografica ↗</a><div class="bk-pagenum" id="bkRightNum"></div></section></div><div class="bk-lightbox" id="bkLightbox" hidden role="dialog" aria-modal="true"><button id="bkCloseZoom" type="button" aria-label="Chiudi ingrandimento">×</button><img id="bkLargeImg" alt="Illustrazione ingrandita"/><p id="bkLargeCaption"></p></div></div>`;
  const root = document.getElementById('bkApp'); let index = 0;
  const $ = id => root.querySelector('#' + id);
  function page(n) {
    index = Math.max(0, Math.min(bookChapters.length - 1, n)); const c = bookChapters[index];
    $('bkKicker').textContent = c.kicker; $('bkTitle').textContent = c.title;
    $('bkText').innerHTML = c.paras.map((p, i) => `<p>${p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`).join('');
    const pic = bookPhotoData[index]; $('bkPicture').src = pic.image; $('bkPicture').onerror = () => {$('bkPicture').onerror = null; $('bkPicture').src = pic.local;};
    $('bkPicture').alt = `Fotografia: ${c.title}`;
    $('bkCaption').textContent = ['Tracce lasciate da alcune particelle in una camera a nebbia.', 'I magneti toroidali di ATLAS al CERN, durante la costruzione.', 'Fotografia del rivelatore CMS al CERN.', 'Fotografia dell’esperimento ALICE al CERN.', "L'esperimento IceCube si trova sotto ai ghiacci dell'Antartide.", 'Interno di Super-Kamiokande: i fotomoltiplicatori rivestono le pareti del serbatoio.'][index];
    $('bkCredits').innerHTML = `Foto: <a href="${pic.source}" target="_blank" rel="noopener noreferrer">${pic.author}</a> · <a href="${pic.licenseUrl}" target="_blank" rel="noopener noreferrer">${pic.license}</a>`; $('bkSource').href = pic.source; $('bkSource').textContent = (index === 5 ? 'Fotografia e crediti su Agencia SINC ↗' : 'Fotografia originale su Wikimedia Commons ↗');
    $('bkLeftNum').textContent = index * 2 + 1; $('bkRightNum').textContent = index * 2 + 2;
    $('bkCount').textContent = `${index + 1} / ${bookChapters.length}`; $('bkBookHeading').textContent = index === 0 ? 'Come vediamo l’invisibile?' : 'I grandi rivelatori';
    $('bkPrev').disabled = index === 0; $('bkNext').disabled = index === bookChapters.length - 1;
  }
  $('bkPrev').addEventListener('click', () => page(index - 1)); $('bkNext').addEventListener('click', () => page(index + 1));
  const lb = $('bkLightbox'); function close() {lb.hidden = true; $('bkZoom').focus()}
  $('bkZoom').addEventListener('click', () => {$('bkLargeImg').src = $('bkPicture').src; $('bkLargeCaption').textContent = $('bkCaption').textContent; lb.hidden = false; $('bkCloseZoom').focus()});
  $('bkCloseZoom').addEventListener('click', close); lb.addEventListener('click', e => {if (e.target === lb) close()});
  root.addEventListener('keydown', e => {if (e.key === 'Escape' && !lb.hidden) {e.stopPropagation(); close();} else if (lb.hidden && e.key === 'ArrowLeft') page(index - 1); else if (lb.hidden && e.key === 'ArrowRight') page(index + 1)});
  page(0);
}
