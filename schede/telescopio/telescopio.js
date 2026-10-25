// Inspectroom 0.2c.1.15 — esperienza del telescopio, senza dipendenze esterne.
function renderTelescopio() {
  dialogContent.innerHTML = `<div class="tel-app" id="telApp">
   <div class="tel-toolbar"><span class="tel-kicker">LE PARTICELLE DAL SOLE</span><strong id="telPathHeading">Luce e fotoni</strong><button type="button" class="tel-switch" id="telSwitch">Cambia percorso</button></div>
   <div class="tel-path-choice" id="telPathChoice" role="group" aria-label="Scegli il percorso del telescopio">
     <h3>Che cosa vuoi scoprire?</h3><p>Dal Sole arrivano fenomeni molto diversi. Scegli da dove iniziare.</p>
     <div class="tel-path-options"><button type="button" id="telChooseLight" class="tel-path-option"><span class="tel-path-icon" aria-hidden="true">γ</span><strong>Luce e fotoni</strong><small>Segui la luce proveniente dal sole e scopri cosa sono i fotoni.</small><span class="tel-path-action">Esplora →</span></button>
     <button type="button" id="telChooseNeutrino" class="tel-path-option"><span class="tel-path-icon">ν</span><strong>Le particelle invisibili dal Sole</strong><small>Segui i neutrini dal nucleo del Sole mentre attraversano la materia e arrivano a un rivelatore.</small><span class="tel-path-action">Esplora →</span></button></div>
   </div>

<div class="tel-neutrino-journey" id="telNeutrinoPreview" hidden>
 <div class="nu-main">
   <div class="nu-left">
   <section class="nu-visual" aria-label="Simulazione del viaggio dei neutrini solari">
     <svg id="nuSvg" viewBox="0 0 1000 390" role="img" aria-label="Mezzo Sole, materia e un rivelatore attraversati dai neutrini solari">
       <defs>
         <linearGradient id="nuSpace" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#061220"/><stop offset="1" stop-color="#0f2339"/></linearGradient>
         <radialGradient id="nuSunShell" cx="0.28" cy="0.5" r="0.78"><stop offset="0" stop-color="#fff8c7"/><stop offset=".18" stop-color="#ffd770"/><stop offset=".46" stop-color="#f39f56"/><stop offset=".75" stop-color="#bf5c38"/><stop offset="1" stop-color="#61354e"/></radialGradient>
         <radialGradient id="nuSunCore" cx="0.38" cy="0.5" r="0.48"><stop offset="0" stop-color="#fffde2"/><stop offset=".35" stop-color="#ffe98f"/><stop offset=".78" stop-color="#ffb85d"/><stop offset="1" stop-color="#f08740"/></radialGradient>
         <radialGradient id="nuSolarHalo" cx="0.33" cy="0.5" r="0.95"><stop offset="0" stop-color="#ffd768" stop-opacity=".18"/><stop offset=".4" stop-color="#ffb258" stop-opacity=".12"/><stop offset="1" stop-color="#ff9a4f" stop-opacity="0"/></radialGradient>
         <linearGradient id="nuMatterGlow" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#f4f4f4" stop-opacity=".96"/><stop offset="1" stop-color="#d9e0e2" stop-opacity=".92"/></linearGradient>
         <linearGradient id="nuDetectorIce" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#193a58"/><stop offset=".45" stop-color="#225f8c"/><stop offset="1" stop-color="#102237"/></linearGradient>
         <radialGradient id="nuEvent"><stop offset="0" stop-color="#fffef1"/><stop offset=".2" stop-color="#dffbff"/><stop offset=".52" stop-color="#82ddff" stop-opacity=".9"/><stop offset="1" stop-color="#6ab7df" stop-opacity="0"/></radialGradient>
         <filter id="nuSoftGlow"><feGaussianBlur stdDeviation="10"/></filter>
         <filter id="nuEventGlow"><feGaussianBlur stdDeviation="4.5"/></filter>
       </defs>
       <rect width="1000" height="390" fill="url(#nuSpace)"/>
       
       <g id="nuSunObject"><circle cx="0" cy="194" r="212" fill="#ffc35c" opacity=".33" filter="url(#nuSoftGlow)"/><circle cx="0" cy="194" r="190" fill="url(#nuSolarHalo)"/><circle cx="0" cy="194" r="181" fill="url(#nuSunShell)" stroke="#ffe5ab" stroke-opacity=".56" stroke-width="2"/><circle cx="0" cy="194" r="129" fill="#ffbe57" opacity=".25"/><circle cx="0" cy="194" r="106" fill="none" stroke="#ffe19a" stroke-opacity=".24" stroke-width="11"/><circle cx="0" cy="194" r="74" fill="url(#nuSunCore)"/><circle cx="0" cy="194" r="40" fill="#fff9d6" opacity=".78" filter="url(#nuSoftGlow)"/><circle cx="0" cy="194" r="25" fill="#fffce4" opacity=".86"/><g fill="none" stroke="#ffe9bb" stroke-opacity=".28" stroke-width="2.2"><path d="M30 44Q101 86 70 141T111 251T64 350"/><path d="M13 64Q82 122 47 183T92 324"/><path d="M30 307Q112 276 97 217"/></g><text x="116" y="30" text-anchor="middle">SOLE</text></g>
       <g id="nuMatterObject" opacity=".97"><ellipse cx="501" cy="355" rx="54" ry="8" fill="#06111d" opacity=".4"/><path transform="translate(443 66)" d="M 55.40,0.00 L 51.07,1.75 L 48.04,4.82 L 45.88,10.96 L 45.88,17.09 L 44.58,17.97 L 45.01,21.91 L 48.04,25.86 L 49.78,32.00 L 49.34,38.57 L 42.85,42.95 L 27.70,48.65 L 23.81,51.72 L 22.07,54.79 L 20.78,60.48 L 20.78,72.76 L 18.61,83.28 L 18.61,90.73 L 14.72,99.93 L 10.39,131.93 L 2.60,141.57 L 0.00,148.14 L 2.16,147.27 L 5.19,143.32 L 6.06,143.76 L 4.33,156.03 L 4.76,158.66 L 6.06,157.35 L 7.36,149.46 L 8.66,146.83 L 9.52,147.27 L 8.66,159.54 L 9.96,158.66 L 12.12,147.70 L 12.99,148.58 L 12.12,159.54 L 13.42,159.10 L 14.28,149.02 L 15.15,147.70 L 15.58,156.03 L 16.88,156.03 L 17.75,149.02 L 17.31,131.93 L 27.27,106.07 L 29.87,86.78 L 33.33,75.39 L 37.22,94.23 L 37.22,102.56 L 35.93,115.27 L 32.90,128.42 L 32.03,151.21 L 34.19,174.00 L 35.93,181.45 L 34.63,217.83 L 39.82,246.76 L 39.39,259.47 L 31.60,269.99 L 31.16,272.62 L 34.19,275.69 L 38.09,276.12 L 39.39,275.25 L 40.25,276.56 L 42.85,276.56 L 45.88,272.62 L 46.75,267.36 L 48.48,264.29 L 47.18,253.33 L 47.18,243.25 L 51.07,217.83 L 51.07,188.90 L 55.40,159.10 L 56.27,141.57 L 58.43,140.69 L 60.60,166.55 L 64.06,188.03 L 64.06,218.27 L 67.96,242.81 L 67.96,253.33 L 66.66,259.03 L 66.66,264.29 L 68.39,266.92 L 69.25,272.62 L 70.99,275.69 L 74.88,276.56 L 75.75,275.25 L 77.04,276.12 L 80.94,275.69 L 84.40,272.18 L 81.81,267.36 L 75.75,259.91 L 75.75,252.46 L 74.88,249.83 L 80.51,217.83 L 79.21,181.45 L 80.94,174.88 L 82.67,159.10 L 83.10,137.19 L 81.81,125.79 L 79.21,114.83 L 77.91,95.11 L 81.81,75.39 L 83.10,77.14 L 85.27,86.78 L 88.30,106.94 L 97.82,131.49 L 97.39,146.83 L 98.25,156.03 L 99.55,156.03 L 99.12,148.58 L 99.99,147.70 L 101.28,152.09 L 101.28,156.91 L 102.15,159.54 L 103.01,159.54 L 102.58,148.14 L 103.45,147.70 L 105.18,158.22 L 106.04,159.54 L 106.91,159.10 L 106.04,153.84 L 106.48,147.27 L 108.21,151.21 L 109.07,157.35 L 110.37,158.66 L 110.81,156.03 L 109.07,144.20 L 109.94,143.32 L 112.54,146.83 L 114.70,148.14 L 115.57,147.70 L 111.24,139.38 L 107.34,134.12 L 105.18,132.80 L 104.31,130.61 L 100.85,102.12 L 99.12,95.55 L 96.52,90.73 L 96.52,82.84 L 94.36,72.32 L 94.36,59.61 L 93.49,55.66 L 89.60,49.97 L 71.42,42.51 L 66.22,39.01 L 65.36,32.00 L 67.09,25.86 L 69.25,23.67 L 70.55,20.16 L 70.55,17.97 L 69.25,16.66 L 68.82,8.77 L 67.52,5.26 L 64.06,1.75 L 59.73,0.00 Z" fill="#cedbe1" fill-opacity=".66" stroke="#f0f8fc" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round"/><text x="501" y="381" text-anchor="middle">MATERIA</text></g>
       <g id="nuDetectorObject" opacity=".98"><path d="M722 107L927 107L927 318L722 318Z" fill="url(#nuDetectorIce)" stroke="#8dc5e8" stroke-opacity=".22"/><path d="M722 107L748 83H954L927 107 M927 107L954 83V292L927 318 M722 318L748 292H954" fill="none" stroke="#89bbdd" stroke-opacity=".42" stroke-width="1.2"/><path d="M722 107H927" stroke="#ecf9ff" stroke-opacity=".46" stroke-width="4"/><g id="nuIceStrings" stroke="#8ed2f0" stroke-opacity=".76" stroke-width="1.8"><path d="M752 109V317"/><path d="M783 109V317"/><path d="M814 109V317"/><path d="M845 109V317"/><path d="M876 109V317"/><path d="M907 109V317"/></g><g id="nuDOMs" fill="#98dcff" stroke="#eefcff" stroke-width=".6"><circle cx="752" cy="138" r="4.5"/><circle cx="752" cy="180" r="4.5"/><circle cx="752" cy="222" r="4.5"/><circle cx="752" cy="264" r="4.5"/><circle cx="752" cy="306" r="4.5"/><circle cx="783" cy="138" r="4.5"/><circle cx="783" cy="180" r="4.5"/><circle cx="783" cy="222" r="4.5"/><circle cx="783" cy="264" r="4.5"/><circle cx="783" cy="306" r="4.5"/><circle cx="814" cy="138" r="4.5"/><circle cx="814" cy="180" r="4.5"/><circle cx="814" cy="222" r="4.5"/><circle cx="814" cy="264" r="4.5"/><circle cx="814" cy="306" r="4.5"/><circle cx="845" cy="138" r="4.5"/><circle cx="845" cy="180" r="4.5"/><circle cx="845" cy="222" r="4.5"/><circle cx="845" cy="264" r="4.5"/><circle cx="845" cy="306" r="4.5"/><circle cx="876" cy="138" r="4.5"/><circle cx="876" cy="180" r="4.5"/><circle cx="876" cy="222" r="4.5"/><circle cx="876" cy="264" r="4.5"/><circle cx="876" cy="306" r="4.5"/><circle cx="907" cy="138" r="4.5"/><circle cx="907" cy="180" r="4.5"/><circle cx="907" cy="222" r="4.5"/><circle cx="907" cy="264" r="4.5"/><circle cx="907" cy="306" r="4.5"/></g><text x="836" y="383" text-anchor="middle">RILEVATORE</text></g>
       <g id="nuDustLayer"></g>
       <g id="nuInteraction" opacity="0"><circle cx="835" cy="210" r="70" fill="url(#nuEvent)"/><g id="nuSparkBranches" stroke="#e3fdff" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#nuEventGlow)"><path d="M835 210L805 181L813 160L792 138 M835 210L872 195L891 171L913 164 M835 210L860 240L863 264L890 288 M835 210L802 235L779 245L758 269" stroke-width="3.1"/><path d="M805 181L781 186 M872 195L894 205 M860 240L885 241 M802 235L790 214" stroke-width="1.7"/></g><circle cx="835" cy="210" r="9" fill="#fffde8"/><circle cx="835" cy="210" r="34" fill="none" stroke="#c7f6ff" stroke-width="2.2"/></g>
     </svg>
     <div class="nu-visual-caption">Dal Sole proviene una pioggia di neutrini.</div>
   </section>


 </div>
 </div>
<div class="nu-detail-navigation">
     <div class="tel-nav-heading">ESPLORA</div>
     <nav class="nu-nav" aria-label="Esplora i neutrini"><button type="button" class="nu-step" data-step-number="1" data-nu-step="sun">Nel nucleo del Sole</button><button type="button" class="nu-step" data-step-number="2" data-nu-step="matter">Attraverso la materia</button><button type="button" class="nu-step" data-step-number="3" data-nu-step="detector">Come si rilevano?</button><button type="button" class="nu-step" data-step-number="4" data-nu-step="weak">Interazione debole</button></nav>
</div>
 <section class="nu-lab" aria-label="Animazioni di dettaglio sui neutrini solari">
   <div class="nu-lab-panels">
     <article class="nu-panel" data-panel="sun">
       <div class="nu-mini-stage nu-mini-stage--fusion" aria-hidden="true">
         <div class="nu-fusion-core"></div>
         <span class="nu-f-proton p1">p</span><span class="nu-f-proton p2">p</span><span class="nu-f-proton p3">p</span><span class="nu-f-proton p4">p</span><span class="nu-f-helium">He</span><span class="nu-f-neutrino n1">ν</span><span class="nu-f-neutrino n2">ν</span><span class="nu-f-energy e1"></span><span class="nu-f-energy e2"></span>
       </div>
       <div class="nu-panel-copy"><h4>1 · Fusione nel Sole</h4><p>Nel nucleo del Sole l’idrogeno si trasforma gradualmente in elio attraverso reazioni di fusione. Durante alcune di queste reazioni si liberano energia e neutrini, che escono dal Sole quasi indisturbati e si propagano in tutte le direzioni.</p><ul><li>I protoni si avvicinano e si fondono.</li><li>Il lampo centrale rappresenta l'energia liberata.</li><li>I neutrini escono subito e cominciano il loro viaggio.</li></ul></div>
     </article>
     <article class="nu-panel" data-panel="matter">
       <div class="nu-mini-stage nu-mini-stage--matter" aria-hidden="true">
         <svg class="nu-micro-svg" viewBox="0 0 600 270" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <radialGradient id="nuAtomCloud"><stop stop-color="#7bbadf" stop-opacity=".2"/><stop offset=".66" stop-color="#4f91c1" stop-opacity=".09"/><stop offset="1" stop-color="#4f91c1" stop-opacity="0"/></radialGradient>
             <radialGradient id="nuMicroBall"><stop stop-color="#ffffff"/><stop offset=".5" stop-color="#eaf8ff"/><stop offset="1" stop-color="#a9dbf7"/></radialGradient>
           </defs>
           <g class="nu-atom-lattice">
             ${Array.from({length: 15}, (_, i) => {const x = 72 + (i % 5) * 110 + ((Math.floor(i / 5) % 2) * 19); const y = 52 + Math.floor(i / 5) * 86; return `<g><circle cx="${x}" cy="${y}" r="36" fill="url(#nuAtomCloud)"/><circle cx="${x}" cy="${y}" r="13" stroke="#71a4c7" stroke-opacity=".53" stroke-width="1.3" fill="#285778" fill-opacity=".3"/><circle cx="${x}" cy="${y}" r="5.5" fill="#8ecbeb"/><circle cx="${x - 4}" cy="${y - 3}" r="2" fill="#e8f8ff"/></g>`}).join('')}
           </g>
           <path d="M-25 134 H630" fill="none" stroke="#b7d6e7" stroke-opacity=".2" stroke-width="1" stroke-dasharray="3 11"/>
           <g class="nu-micro-neutrino">
             <circle cx="0" cy="0" r="17" fill="#b4dfff" opacity=".18"/>
             <circle cx="0" cy="0" r="10" fill="url(#nuMicroBall)" stroke="#ffffff" stroke-opacity=".8" stroke-width="1"/>
             <text x="0" y="4.5" font-size="13" font-family="IBM Plex Sans,sans-serif" font-weight="700" text-anchor="middle" fill="#163750">ν</text>
           </g>
         </svg>
       </div>
       <div class="nu-panel-copy"><h4>2 · Attraverso la materia</h4><p>I neutrini non hanno carica elettrica e interagiscono molto raramente con la materia. Per questo attraversano quasi indisturbati il nostro corpo, le pareti e perfino la Terra. È molto raro che lascino delle tracce.</p></div>
     </article>
     <article class="nu-panel" data-panel="detector">
       <div class="nu-mini-stage nu-mini-stage--detector" aria-hidden="true"><div class="nu-detector-box"><span class="nu-detector-string s1"></span><span class="nu-detector-string s2"></span><span class="nu-detector-string s3"></span><span class="nu-detector-string s4"></span><span class="nu-detector-dom d1"></span><span class="nu-detector-dom d2"></span><span class="nu-detector-dom d3"></span><span class="nu-detector-dom d4"></span><span class="nu-detector-dom d5"></span><span class="nu-detector-dom d6"></span><span class="nu-detector-dom d7"></span><span class="nu-detector-dom d8"></span><span class="nu-detector-flash"></span><span class="nu-detector-wave w1"></span><span class="nu-detector-wave w2"></span></div><div class="nu-detector-track"></div></div>
       <div class="nu-panel-copy"><h4>3 · Segnale nel rivelatore</h4><p>Un neutrino non si vede direttamente. Esperimenti come Borexino (Gran Sasso), Super-Kamiokande (Giappone) e IceCube (Antartide) misurano i segnali delle sue rare interazioni con la materia. In IceCube, migliaia di sensori immersi nel ghiaccio registrano la luce prodotta dalle particelle cariche generate in queste interazioni.</p><ul><li>Il lampo rappresenta il segnale osservato.</li><li>I punti chiari indicano i sensori che registrano la luce.</li></ul></div>
       <div class="nu-experiment" id="nuExperiment" hidden><button type="button" id="nuPhotoOpen" class="nu-photo-trigger" aria-label="Ingrandisci l'immagine di IceCube"><img src="assets/icecube-illustration.svg" alt="Illustrazione dell'esperimento IceCube in Antartide" loading="lazy"/><span>IceCube — apri l'immagine ↗</span></button><small>IceCube, Super-Kamiokande e Borexino sono tre grandi esperimenti che studiano i neutrini.</small></div>
     </article>
     <article class="nu-panel" data-panel="weak">
       <div class="nu-mini-stage nu-mini-stage--weak" aria-hidden="true"><div class="nu-weak-left">ν</div><div class="nu-weak-right">e</div><div class="nu-weak-exchange z">Z</div><div class="nu-weak-exchange w">W</div><div class="nu-weak-link l1"></div><div class="nu-weak-link l2"></div><div class="nu-weak-link l3"></div><div class="nu-weak-link l4"></div><div class="nu-weak-burst"></div></div>
       <div class="nu-panel-copy"><h4>4 · Il ruolo di W e Z</h4><p>Quando un neutrino interagisce con la materia, ad esempio con un elettrone, entrano in gioco altre due particelle. Secondo il Modello Standard queste particelle sono i bosoni W e Z, che qui sono mostrati mentre fanno da tramite tra il neutrino e l'elettrone. Un rivelatore misura gli effetti di questi rari eventi, non il neutrino direttamente.</p><ul><li>ν indica il neutrino in arrivo.</li><li>e rappresenta una particella della materia.</li><li>W e Z compaiono solo quando l'interazione avviene.</li></ul></div>
     </article>
   </div>
 </section>
 <p class="nu-disclaimer">I neutrini veri non sono visibili a occhio nudo. I rivelatori misurano i segnali prodotti dalle loro rarissime interazioni con la materia.</p>
 <div class="nu-final-tiles" aria-label="Schede delle particelle">
     <button type="button" id="nuTile" class="tel-particle-tile nu-particle-tile"><span class="tel-tile-symbol">ν</span><span><strong>Neutrini</strong><small>Leptoni · particelle elementari</small></span><span class="tel-tile-arrow">↗</span></button><button type="button" id="nuWeakTile" class="tel-particle-tile nu-weak-tile" hidden><span class="tel-tile-symbol">W / Z</span><span><strong>Bosoni W e Z</strong><small>Bosoni · interazione debole</small></span><span class="tel-tile-arrow">↗</span></button>
 </div>
 <div class="nu-photo-modal" id="nuPhotoModal" hidden role="dialog" aria-modal="true" aria-label="Immagine di IceCube"><div class="nu-photo-frame"><button type="button" id="nuPhotoClose" aria-label="Chiudi immagine">×</button><img src="assets/icecube-illustration.svg" alt="Illustrazione dell'osservatorio IceCube in Antartide"/><p>IceCube Neutrino Observatory · I sensori di questo osservatorio si trovano sotto il ghiaccio a due chilometri di profondità.</p></div></div>
    <div class="nu-modal" id="nuDetailModal" role="dialog" aria-modal="true" hidden><div class="nu-modal-panel"><button type="button" id="nuDetailClose" aria-label="Chiudi approfondimento">×</button><div class="nu-modal-symbol" id="nuDetailSymbol">ν</div><h3 id="nuDetailTitle">Neutrini</h3><div id="nuDetailText"></div></div></div>
   </div>
   <div id="telLightJourney" hidden>
   <div class="tel-main"><div class="tel-left"><div class="tel-workspace">
    <svg id="telSvg" viewBox="0 0 1100 490" role="img" aria-label="Sezione del telescopio e dell'occhio; fascio luminoso dall'obiettivo alla retina" preserveAspectRatio="xMidYMid meet">
      <defs>
       <linearGradient id="telBg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071526"/><stop offset=".56" stop-color="#101b31"/><stop offset="1" stop-color="#101322"/></linearGradient>
       <linearGradient id="telTube" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#718da8" stop-opacity=".7"/><stop offset=".16" stop-color="#25384b" stop-opacity=".65"/><stop offset=".52" stop-color="#13202f" stop-opacity=".25"/><stop offset=".84" stop-color="#16283b" stop-opacity=".72"/><stop offset="1" stop-color="#7698b1" stop-opacity=".75"/></linearGradient>
       <linearGradient id="telGlass" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#2ca5d0" stop-opacity=".48"/><stop offset=".5" stop-color="#dcf5fc" stop-opacity=".38"/><stop offset="1" stop-color="#61c6ee" stop-opacity=".45"/></linearGradient>
       <radialGradient id="telEyeFill"><stop stop-color="#344b63" stop-opacity=".47"/><stop offset=".7" stop-color="#263447" stop-opacity=".72"/><stop offset="1" stop-color="#102136" stop-opacity=".95"/></radialGradient>
       <filter id="telGlow" x="-100%" y="-200%" width="300%" height="500%"><feGaussianBlur stdDeviation="4"/></filter>
       <filter id="telSoft" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="1.2"/></filter>
       <radialGradient id="telPulse"><stop stop-color="#fffbd4"/><stop offset=".25" stop-color="#ffd979" stop-opacity=".95"/><stop offset="1" stop-color="#e6a847" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="1100" height="490" fill="url(#telBg)"/>
      <g opacity=".2" stroke="#7296b8" stroke-width=".7"><path d="M0 95H1100 M0 245H1100 M0 395H1100" stroke-dasharray="2 10"/></g>
      <g class="tel-headings" aria-hidden="true"><text x="85" y="88" text-anchor="middle">SOLE</text><text x="422" y="88" text-anchor="middle">TELESCOPIO</text><text x="900" y="88" text-anchor="middle">OCCHIO</text></g>
      <g class="tel-source" data-part="source" tabindex="0" role="button" aria-label="Luce incidente"><circle cx="85" cy="246" r="17" fill="url(#telPulse)"/><circle cx="85" cy="246" r="3" fill="#ffd783"/><path d="M105 246H198" stroke="#c98d44" stroke-opacity=".28" stroke-width="2"/></g>
      <!-- Refrattore in sezione: pareti superiore/inferiore, senza parete frontale opaca -->
      <g class="tel-target" data-part="objective" tabindex="0" role="button" aria-label="Obiettivo del telescopio">
       <path d="M199 177 L555 207 L555 222 L199 196 Z" fill="url(#telTube)" stroke="#7291a9" stroke-width="1.6"/>
       <path d="M199 295 L555 268 L555 283 L199 314 Z" fill="url(#telTube)" stroke="#7896ac" stroke-width="1.6"/>
       <path d="M199 196L555 222 M199 295L555 268" stroke="#33506a" stroke-width="1.1" opacity=".7"/>
       <path d="M199 177 Q184 245 199 314" fill="none" stroke="#b3c5d1" stroke-width="8" opacity=".7"/>
       <path d="M199 181 Q213 245 199 310 Q187 245 199 181Z" fill="url(#telGlass)" stroke="#97dbf2" stroke-width="2.1"/>
       <path d="M199 184Q191 245 199 307" fill="none" stroke="#c7f2fb" stroke-opacity=".72" stroke-width="1.6"/>
      </g>
      <g class="tel-target" data-part="eyepiece" tabindex="0" role="button" aria-label="Oculare del telescopio">
       <path d="M545 214L645 228L645 241L545 226Z M545 265L645 251L645 263L545 279Z" fill="url(#telTube)" stroke="#789bb2" stroke-width="1.2"/>
       <path d="M555 212Q565 245 555 278" fill="none" stroke="#a0c0d3" stroke-width="8" opacity=".8"/>
       <path d="M558 217Q569 245 558 273Q548 245 558 217Z" fill="url(#telGlass)" stroke="#9be0f4" stroke-width="2"/>
       <path d="M645 224Q650 245 645 266" stroke="#a1b8c7" stroke-width="7" opacity=".75"/>
      </g>
      <!-- Cutaway eye, intentionally reduced to cornea, lens, retina and outer wall -->
      <g class="tel-target" data-part="eye" tabindex="0" role="button" aria-label="Occhio in sezione">
       <path d="M814 183Q788 184 783 225Q770 246 783 266Q790 304 814 308 C865 347 948 331 979 288 Q1015 250 979 203 C948 159 865 147 814 183Z" fill="url(#telEyeFill)" stroke="#9dbaca" stroke-width="4"/>
       <path d="M815 189C836 222 836 272 815 302" fill="none" stroke="#3b6b87" stroke-width="1.3" opacity=".6"/>
       <path d="M805 194Q772 244 805 296" fill="none" stroke="#a6cce1" stroke-width="5" opacity=".8"/>
       <path d="M826 207 Q844 246 826 286 Q810 246 826 207Z" fill="url(#telGlass)" stroke="#9dd4e4" stroke-width="2.3"/>
       <path d="M956 189 Q1020 245 956 301" fill="none" stroke="#f3a86c" stroke-width="7" opacity=".85"/>
       <path d="M973 275Q994 287 1015 307" fill="none" stroke="#647e95" stroke-width="13" opacity=".55"/>
      </g>
      <!-- Representative ray bundle: refraction at lenses is visibly indicated -->
      <g id="telLight" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path class="tel-ray halo" d="M85 229 L199 229 L430 245 L558 246 L645 236 L785 236 L827 240 L966 246"/>
       <path class="tel-ray halo" d="M85 246 L199 246 L430 245 L558 246 L645 246 L785 246 L827 246 L966 246"/>
       <path class="tel-ray halo" d="M85 263 L199 263 L430 245 L558 246 L645 256 L785 256 L827 252 L966 246"/>
       <path class="tel-ray fine" d="M85 229 L199 229 L430 245 L558 246 L645 236 L785 236 L827 240 L966 246"/>
       <path class="tel-ray fine" d="M85 246 L199 246 L430 245 L558 246 L645 246 L785 246 L827 246 L966 246"/>
       <path class="tel-ray fine" d="M85 263 L199 263 L430 245 L558 246 L645 256 L785 256 L827 252 L966 246"/>
       <path class="tel-ray shimmer" d="M85 246 L199 246 L430 245 L558 246 L645 246 L785 246 L827 246 L966 246"/>
      </g>
      <g id="telImpact" role="button" tabindex="0" aria-label="Scambio di energia sulla retina"><circle class="tel-impact-halo" cx="966" cy="246" r="26" fill="url(#telPulse)"/><circle cx="966" cy="246" r="4" fill="#fff5c4"/></g>
      <g id="telExchange" aria-hidden="true" transform="translate(966 246)">
       <circle class="tel-impact-ring tel-impact-ring-a" r="5" fill="none" stroke="#ffd782" stroke-width="1.5"/>
       <circle class="tel-impact-ring tel-impact-ring-b" r="4" fill="none" stroke="#79d4ff" stroke-width="1"/>
       <g class="tel-impact-sparks" fill="#ffe8a7"><circle cx="-7" cy="-3" r="1.4"/><circle cx="9" cy="5" r="1.4"/><circle cx="3" cy="-10" r="1"/><circle cx="-4" cy="9" r="1"/></g>
      </g>
      <g class="tel-labels"><text x="85" y="196" text-anchor="middle">LUCE INCIDENTE</text><text x="199" y="153" text-anchor="middle">OBIETTIVO</text><text x="564" y="185" text-anchor="middle">OCULARE</text><text x="814" y="153" text-anchor="middle">CORNEA</text><text x="865" y="352" text-anchor="middle">CRISTALLINO</text><text x="988" y="156" text-anchor="middle">RETINA</text>
       <path d="M199 158V177M564 190V212M814 158V178M865 340L837 283M988 160L965 194" stroke="#7295b2" stroke-width="1" fill="none"/></g>
      <text x="199" y="374" fill="#627f9e" font-size="12.333">Telescopio rifrattore · sezione semplificata</text>
      <text x="1010" y="366" text-anchor="end" fill="#627f9e" font-size="12.333">Occhio · sezione semplificata</text>
      <text id="telFilterLabel" x="199" y="335" text-anchor="middle" fill="#f3bf72" font-size="13.333"></text>
     </svg>
    </div>
    <div class="tel-controls">
     <label><span>Lunghezza d’onda <output id="telWavelengthText">550 nm · verde</output></span><input id="telWavelength" type="range" min="320" max="1000" value="550" step="5" aria-label="Lunghezza d'onda della luce"></label>
     <label><span>Intensità luminosa <output id="telIntensityText">50%</output></span><input id="telIntensity" type="range" min="0" max="100" value="50" aria-label="Intensità della luce"></label>
     <label><span>Filtro davanti all’obiettivo</span><select id="telFilter"><option value="none">Nessun filtro</option><option value="uv">Solo filtro UV — non sicuro</option><option value="solar">Filtro solare astronomico idoneo</option></select></label>
    </div>
    <p class="tel-spectrum-note" id="telSpectrumNote" aria-live="polite">La luce visibile è rappresentata da raggi luminosi.</p>
    <div class="tel-footer"><span class="tel-warning">⚠ Non osservare mai il Sole attraverso un telescopio senza un filtro solare astronomico idoneo, montato davanti all'obiettivo.</span></div>
   </div>
    </div>
    <section class="tel-light-navigation" aria-label="Esplora gli elementi">
      <div class="tel-nav-heading">ESPLORA</div>
      <nav class="tel-nav" aria-label="Elementi della simulazione">
       <button type="button" class="tel-nav-button" data-part="source"><span class="tel-nav-dot">1</span><span class="tel-nav-label">Sole e luce incidente</span></button>
       <button type="button" class="tel-nav-button" data-part="objective"><span class="tel-nav-dot">2</span><span class="tel-nav-label">Obiettivo</span></button>
       <button type="button" class="tel-nav-button" data-part="eyepiece"><span class="tel-nav-dot">3</span><span class="tel-nav-label">Oculare</span></button>
       <button type="button" class="tel-nav-button" data-part="eye"><span class="tel-nav-dot">4</span><span class="tel-nav-label">Occhio</span></button>
       <button type="button" class="tel-nav-button" data-part="retina"><span class="tel-nav-dot">5</span><span class="tel-nav-label">Retina e fotoni</span></button>
       <button type="button" class="tel-nav-button" data-part="safety"><span class="tel-nav-dot">6</span><span class="tel-nav-label">Sicurezza solare</span></button>
      </nav>
      <div class="tel-info" id="telInfo" aria-live="polite"><h3 id="telInfoTitle">La luce arriva</h3><p id="telInfoBody"></p></div>
      <button type="button" class="tel-particle-tile" id="telPhotonTile" aria-label="Apri la scheda del fotone"><span class="tel-tile-symbol">γ</span><span><strong>Fotone</strong><small>Bosoni · particella della luce</small></span><span class="tel-tile-arrow">↗</span></button>
    </section>
   </div>
   <div class="tel-photon-modal" id="telPhotonModal" hidden role="dialog" aria-modal="true" aria-labelledby="telPhotonTitle"><div class="tel-photon-detail"><button type="button" class="tel-photon-close" id="telPhotonClose" aria-label="Chiudi scheda fotone">×</button><div class="tel-photon-mark">γ <span>Fotone</span></div><h3 id="telPhotonTitle">La particella della luce</h3><div id="telPhotonDetails"></div></div></div></div>`;
  const root = document.getElementById('telApp');
  const wave = root.querySelector('#telWavelength'), intensity = root.querySelector('#telIntensity'), filter = root.querySelector('#telFilter');
  const stage = root.querySelector('#telSvg');
  let selection = 'source';
  const descriptions = {
    source: ['La luce incidente', 'Dal Sole arriva un’onda elettromagnetica, che rappresentiamo con un raggio luminoso. Seguila mentre entra nel telescopio e prova a cambiare il suo colore.'],
    objective: ['L’obiettivo raccoglie la luce', 'L’obiettivo è la prima lente del telescopio: raccoglie la luce incidente e ne cambia la direzione, contribuendo alla formazione dell’immagine.'],
    eyepiece: ['L’oculare', 'La luce attraversa l’oculare, un’altra lente che permette all’occhio di osservare l’immagine formata dal telescopio.'],
    eye: ['Nell’occhio', 'La luce entra nell’occhio, attraversa la cornea e il cristallino, poi raggiunge la retina, in fondo all’occhio.'],
    retina: ['Il fotone e la retina', 'Quando la luce arriva alla retina, interagisce con la materia e trasferisce un pacchettino di energia. Quel pacchettino si chiama fotone: una particella di luce. Osserva il piccolo impulso nel punto di assorbimento.'],
    safety: ['Perché non si deve guardare il Sole', 'Un telescopio raccoglie molta luce: senza una protezione adatta può danneggiare gravemente la retina. Fermare solo gli UV non basta. Per osservare il Sole serve un filtro solare astronomico idoneo, montato davanti all’obiettivo. Prova a cambiare tipo di filtro e a vedere quali colori vengono filtrati.']
  };
  // Selezione di una tappa: unica descrizione sotto la navigazione.
  const lightButtons = [...root.querySelectorAll('#telLightJourney .tel-nav-button')];
  function expandDetail(part) {
    lightButtons.forEach(btn => {
      const active = btn.dataset.part === part;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }
  lightButtons.forEach(btn => btn.addEventListener('click', () => {
    show(btn.dataset.part); expandDetail(btn.dataset.part);
  }));
  function show(part) {selection = part; root.dataset.selected = part; const [title, body] = descriptions[part] || descriptions.source; root.querySelector('#telInfoTitle').textContent = title; root.querySelector('#telInfoBody').textContent = body; root.querySelector('#telInfo').dataset.part = part; root.classList.toggle('tel-at-retina', part === 'retina'); root.querySelectorAll('[data-part]').forEach(e => e.classList.toggle('tel-active', e.dataset.part === part));}
  root.querySelectorAll('#telSvg [data-part]').forEach(el => {el.addEventListener('click', () => {show(el.dataset.part); expandDetail(el.dataset.part)}); el.addEventListener('keydown', e => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); show(el.dataset.part); expandDetail(el.dataset.part)} })});
  root.querySelector('#telImpact').addEventListener('click', () => {show('retina'); expandDetail('retina')}); root.querySelector('#telImpact').addEventListener('keydown', e => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); show('retina'); expandDetail('retina')} }); root.querySelector('#telImpact').style.cursor = 'pointer';
  function rgb(n) {let r, g, b; if (n < 440) {r = -(n - 440) / 60; g = 0; b = 1} else if (n < 490) {r = 0; g = (n - 440) / 50; b = 1} else if (n < 510) {r = 0; g = 1; b = -(n - 510) / 20} else if (n < 580) {r = (n - 510) / 70; g = 1; b = 0} else if (n < 645) {r = 1; g = -(n - 645) / 65; b = 0} else {r = 1; g = 0; b = 0} return '#' + [r, g, b].map(v => Math.round((.2 + .8 * Math.max(0, Math.min(1, v))) * 255).toString(16).padStart(2, '0')).join('')}
  function update() {
    const nm = +wave.value, pct = +intensity.value, fv = filter.value;
    const uv = nm < 380, ir = nm > 740;
    const hue = uv ? '#ad75ef' : ir ? '#f06c61' : rgb(nm);
    const band = uv ? 'uv' : ir ? 'ir' : 'visible';
    let color = uv ? 'ultravioletto (invisibile)' : ir ? 'infrarosso (invisibile)' : nm < 450 ? 'violetto' : nm < 495 ? 'blu' : nm < 570 ? 'verde' : nm < 590 ? 'giallo' : nm < 625 ? 'arancione' : 'rosso';
    root.querySelector('#telWavelengthText').textContent = `${nm} nm · ${color}`;
    root.querySelector('#telIntensityText').textContent = pct + '%';
    root.dataset.spectrum = band;
    // Attenuazioni puramente illustrative, non curve di trasmissione misurate.
    // Il filtro UV attenua fortemente gli UV e solo leggermente il margine violetto.
    let transmission = 1;
    if (fv === 'solar') transmission = .06;
    else if (fv === 'uv') transmission = uv ? .08 : nm <= 410 ? .82 : 1;
    const amount = (pct / 100) * transmission;
    root.style.setProperty('--tel-color', hue);
    root.style.setProperty('--tel-light-opacity', String(.03 + .97 * amount));
    root.style.setProperty('--tel-impact-scale', String(.35 + amount * .95));
    root.querySelector('#telFilterLabel').textContent = fv === 'solar' ? 'FILTRO SOLARE' : fv === 'uv' ? 'FILTRO UV' : '';
    const note = root.querySelector('#telSpectrumNote');
    const caption = uv ? 'I raggi ultravioletti possono danneggiare la retina perché sono molto energetici.' : ir ? 'Anche con il fitro UV i raggi infrarossi raggiungono l’occhio.' : 'La luce visibile è fatta da onde elettromagnetiche dal viola al rosso.';
    const filterNote = fv === 'uv' ? (uv ? ' Il filtro UV riduce molto l’intensità della luce ultravioletta, ma fa comunque passare raggi pericolosi.' : ' Il filtro UV non rende sicura l’osservazione del Sole.') : fv === 'solar' ? ' Il filtro solare astronomico attenua tutte le bande rappresentate.' : '';
    note.textContent = caption + filterNote;
    if (fv !== 'none') {show('safety'); expandDetail('safety');}
  }
  const choices = root.querySelector('#telPathChoice'), journey = root.querySelector('#telLightJourney'), preview = root.querySelector('#telNeutrinoPreview');
  function choosePath(which) {choices.hidden = true; journey.hidden = which !== 'light'; preview.hidden = which !== 'neutrino'; root.querySelector('#telPathHeading').textContent = which === 'light' ? 'I fotoni' : 'I neutrini'; root.querySelector('#telSwitch').hidden = false;}
  root.querySelector('#telChooseLight').addEventListener('click', () => choosePath('light'));
  root.querySelector('#telChooseNeutrino').addEventListener('click', () => choosePath('neutrino'));
  function openChoices() {journey.hidden = true; preview.hidden = true; choices.hidden = false; root.querySelector('#telPathHeading').textContent = ''; root.querySelector('#telSwitch').hidden = true;}
  root.querySelector('#telSwitch').addEventListener('click', openChoices);
  setupNeutrino(root);
  const photonModal = root.querySelector('#telPhotonModal');
  root.querySelector('#telPhotonTile').addEventListener('click', () => {smFillCard(root, '#telPhotonDetails', 'Fotone'); photonModal.hidden = false; root.querySelector('#telPhotonClose').focus()});
  root.querySelector('#telPhotonClose').addEventListener('click', () => {photonModal.hidden = true; root.querySelector('#telPhotonTile').focus()});
  photonModal.addEventListener('click', e => {if (e.target === photonModal) photonModal.hidden = true});
  root.addEventListener('keydown', e => {if (e.key === 'Escape' && !photonModal.hidden) {e.stopPropagation(); photonModal.hidden = true; root.querySelector('#telPhotonTile').focus()} });
  openChoices();
  wave.addEventListener('input', update); intensity.addEventListener('input', update); filter.addEventListener('change', update); update(); show('source'); expandDetail('source');
}

// Secondo percorso del telescopio: animazioni simboliche, coerenti con Rivela.
function setupNeutrino(root) {
  const section = root.querySelector('#telNeutrinoPreview');
  const dust = section.querySelector('#nuDustLayer');
  const steps = section.querySelectorAll('[data-nu-step]');
  const event = section.querySelector('#nuInteraction');
  const modal = section.querySelector('#nuDetailModal');
  const photoModal = section.querySelector('#nuPhotoModal');
  let selected = 'sun', frame = 0, previous = 0, currentEvent = 0, nextEvent = 3.8;
  const particles = Array.from({length: 320}, (_, i) => ({x: (i * 37) % 1180 - 180, y: 58 + (i * 17) % 255, vx: 325 + ((i * 13) % 95), vy: 0, life: 3.1 + ((i % 9) * .16), age: (i % 13) * .13, size: (i % 4 < 2 ? 1.6 : 2.1), alpha: .42 + ((i % 7) * .055)}));
  const nodes = particles.map((p, i) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const tail = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    tail.setAttribute('width', '4.6'); tail.setAttribute('height', '1.25'); tail.setAttribute('rx', '0.6');
    tail.setAttribute('fill', '#eef6ff'); tail.setAttribute('opacity', '.26');
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    dot.setAttribute('width', String(p.size)); dot.setAttribute('height', String(p.size)); dot.setAttribute('rx', '0.55');
    dot.setAttribute('fill', '#f5fbff'); dot.setAttribute('opacity', '.72');
    g.appendChild(tail); g.appendChild(dot); dust.appendChild(g); return {g, tail, dot};
  });
  function select(which) {selected = which; section.dataset.nuSelected = which; steps.forEach(b => b.classList.toggle('nu-active', b.dataset.nuStep === which)); section.querySelector('#nuWeakTile').hidden = which !== 'weak'; section.querySelector('#nuExperiment').hidden = which !== 'detector';}
  steps.forEach(b => b.addEventListener('click', () => select(b.dataset.nuStep)));
  function flash() {currentEvent = 1.0; event.setAttribute('opacity', '1');}
  section.querySelector('#nuPhotoOpen').addEventListener('click', () => {photoModal.hidden = false; section.querySelector('#nuPhotoClose').focus()});
  section.querySelector('#nuPhotoClose').addEventListener('click', () => photoModal.hidden = true);
  photoModal.addEventListener('click', e => {if (e.target === photoModal) photoModal.hidden = true});
  function openInfo(kind) {
    const data = {
      neutrino: ['Neutrini', 'ν', 'Sono leptoni senza carica elettrica e con una massa piccolissima ma non nulla. Ne esistono tre tipi. Furono osservati sperimentalmente nel 1956 e oggi sappiamo che possono cambiare tipo durante il viaggio.'],
      weak: ['Bosoni W e Z', 'W / Z', 'Sono particelle associate all’interazione debole. Il bosone W interviene in processi che cambiano il tipo di particelle coinvolte; il bosone Z in interazioni deboli neutre. Furono scoperti al CERN nel 1983.']
    };
    const [name, symbol, body] = data[kind];
    section.querySelector('#nuDetailTitle').textContent = name;
    section.querySelector('#nuDetailSymbol').textContent = symbol; section.querySelector('#nuDetailSymbol').dataset.type = kind;
    smFillCard(section, '#nuDetailText', kind === 'weak' ? 'W e Z' : 'Neutrini');
    modal.hidden = false; section.querySelector('#nuDetailClose').focus();
  }
  section.querySelector('#nuTile').addEventListener('click', () => openInfo('neutrino'));
  section.querySelector('#nuWeakTile').addEventListener('click', () => openInfo('weak'));
  section.querySelector('#nuDetailClose').addEventListener('click', () => modal.hidden = true);
  modal.addEventListener('click', e => {if (e.target === modal) modal.hidden = true});
  root.addEventListener('keydown', e => {if (e.key === 'Escape') {if (!modal.hidden) {e.stopPropagation(); modal.hidden = true} else if (!photoModal.hidden) {e.stopPropagation(); photoModal.hidden = true} } });
  function resetParticle(p, i, t) {p.x = -220 - ((i * 23) % 160); p.y = 60 + ((i * 29 + Math.round(t / 90)) % 250); p.age = 0; p.life = 3.0 + Math.random() * 1.4; p.vx = 320 + Math.random() * 110; p.vy = 0; p.alpha = .36 + Math.random() * .30;}
  function tick(t) {    
if (!root.isConnected) return; const dt = Math.min(.045, (t - previous) / 1000 || .016); previous = t;
    if (!section.hidden) {
      particles.forEach((p, i) => {
        p.age += dt; p.x += p.vx * dt; p.y += 0;
        if (p.age > p.life || p.x > 1045 || p.y > 410) resetParticle(p, i, t);
        const fade = Math.min(1, p.age / .22, (p.life - p.age) / .45);
        const twinkle = .76 + .24 * Math.sin(t / 430 + i * .83);
        nodes[i].g.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(0)`);
        nodes[i].tail.setAttribute('opacity', String(Math.max(.06, (p.alpha * .42 * fade * twinkle)).toFixed(3)));
        nodes[i].dot.setAttribute('opacity', String(Math.max(.12, (p.alpha * fade * twinkle)).toFixed(3)));
      });
      nextEvent -= dt;
      if (nextEvent <= 0) {flash(); nextEvent = 4.8 + Math.random() * 6.5;}
      if (currentEvent > 0) {        
currentEvent -= dt; const op = Math.min(1, currentEvent / .88); event.setAttribute('opacity', String(op));
        // pulse nearby DOMs for livelier effect
        const phase = Math.max(0, Math.sin((1 - currentEvent) * 8));
        section.querySelectorAll('#nuDOMs circle').forEach((c, idx) => {
          const hotspot = [14, 15, 16, 20, 21, 26].includes(idx); c.setAttribute('fill', hotspot && op > .08 ? `rgba(198,245,255,${0.62 + 0.35 * phase})` : '#8ccff1');
        });
      } else {event.setAttribute('opacity', '0'); section.querySelectorAll('#nuDOMs circle').forEach(c => c.setAttribute('fill', '#8ccff1'));}
    }
    frame = requestAnimationFrame(tick);
  }
  select('sun'); frame = requestAnimationFrame(tick);
}
