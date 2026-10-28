# INSPECTROOM

**Versione v0.5.1**

## Il progetto

**INSPECTROOM** è un'applicazione web didattica pensata principalmente per la scuola secondaria di primo grado. Attraverso un'aula virtuale esplorabile, permette di avvicinarsi a fenomeni e particelle normalmente invisibili e di conoscere alcuni strumenti utilizzati per rivelarli.

L'obiettivo è stimolare curiosità, osservazione e comprensione della fisica delle particelle mediante rappresentazioni interattive, simulazioni illustrative e spiegazioni accessibili. Le rappresentazioni privilegiano l'efficacia didattica e non riproducono necessariamente scale, tempi o complessità dei fenomeni reali.

## Come si usa

Aprire `index.html` con un browser moderno, mantenendo la struttura delle cartelle del progetto. Nell'aula sono disponibili i seguenti comandi:

- **Realtà** — visualizza l'aula senza effetti aggiuntivi.
- **Evidenzia oggetti** — mette in evidenza gli hotspot esplorabili.
- **Rivela** — rende visibili rappresentazioni di fenomeni e particelle normalmente invisibili.
- **Modello Standard** — apre la tavola delle particelle elementari.
- **Come funziona?** — mostra le istruzioni introduttive.

Selezionando gli **hotspot** dell'aula si aprono le relative esperienze. Alcune includono simulazioni, percorsi guidati e tessere informative (*tiles*) cliccabili.

## Esperienze disponibili

| Hotspot | Argomenti principali |
| --- | --- |
| Finestra e telescopio | Luce del Sole, fotoni e neutrini |
| Lampada | Elettrone, fotone e campo di Higgs |
| Lavagna | Nucleoni, quark e gluoni |
| KCl | Radioattività naturale e trasformazioni nucleari |
| Camera a nebbia | Tracce prodotte dalle particelle |
| Libro di fisica | Metodi e strumenti per la rivelazione delle particelle |
| Poster del Modello Standard | Particelle elementari e loro caratteristiche |

L'aula comprende inoltre esperienze e approfondimenti dedicati alla rivelazione delle particelle e ai raggi cosmici.

**Nota scientifica:** le simulazioni sono schematiche e non in scala. Traiettorie, dimensioni, intensità e velocità visualizzate non devono essere interpretate come misure sperimentali.

## Struttura del progetto

```text
index.html                     Pagina principale
style.css                      Stili generali
style-uniform-9.5.css          Regole grafiche aggiuntive
assets/                        Logo, aula e risorse grafiche
home/                          Gestione dell'aula e della modalità Rivela
schede/
  modello-standard/            Tavola e banca dati delle particelle
  telescopio/                  Fotoni e neutrini solari
  lampada/                     Elettrone, fotone e Higgs
  nucleone/                    Quark, gluoni e nucleoni
  kcl/                         Radioattività del potassio
  minipix/                     Rivelatore a pixel
  camera-nebbia/               Tracce delle particelle
  cosmici/                     Raggi cosmici
  libro/                       Libro dei rivelatori
  guida.js                     Guida introduttiva
  introduzioni.js              Testi introduttivi
```

INSPECTROOM utilizza **HTML, CSS e JavaScript** lato client. Per le principali esperienze non è necessario un backend. L'interfaccia utilizza **IBM Plex Sans**, caricato tramite Google Fonts, con font alternativi di sistema.

## Banca dati delle particelle

La tavola del **Modello Standard** è il riferimento comune per i simboli e le descrizioni delle particelle elementari. I dati si trovano in `schede/modello-standard/modello-standard.js`.

Nella **v0.3.5**, le tessere informative delle particelle elementari nelle diverse esperienze richiamano le rispettive voci della banca dati, invece di mantenere descrizioni duplicate. Le **particelle composte** conservano, dove necessario, testi specifici delle singole esperienze.

## Immagini e attribuzioni

Le risorse grafiche locali sono conservate principalmente in `assets/`; altre rappresentazioni sono generate con HTML, CSS, SVG e canvas.

Alcune fotografie e risorse del libro dei rivelatori sono richiamate da siti esterni. Le fonti e le attribuzioni sono indicate