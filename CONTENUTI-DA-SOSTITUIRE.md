# Contenuti da sostituire prima della messa online

Il sito è una demo costruita con dati pubblici. Prima della consegna al locale vanno verificati o sostituiti questi contenuti.

## Da confermare con il titolare (`src/data/locale.ts`)

- [ ] **Civico** di Via Catena: gli elenchi online riportano 31, 34 e 54.
- [ ] **Orari** di tutti i giorni. In particolare, la domenica è aperto tutto il giorno (12–01) o fa pranzo e cena separati?
- [ ] **Numero WhatsApp** (cellulare). Appena inserito, il modulo di prenotazione invia su WhatsApp invece di proporre la chiamata.
- [ ] **Coordinate esatte** del locale (`geo`).
- [ ] Link a **Facebook / Instagram**, se esistono.
- [ ] **Elenco servizi**: confermare TV per lo sport, Wi‑Fi, asporto, accesso disabili e musica dal vivo.
- [ ] Quando tutto è confermato, mettere `anteprima: false` per togliere la fascia "Anteprima" e l'avviso sul menu.

## Menu (`src/data/menu.ts`)

- [ ] Sostituire piatti e **prezzi**: ora sono dimostrativi.
- [ ] Indicare correttamente vegetariano, senza glutine e piccante.

## Foto (`src/assets/foto/`)

Sono foto con licenza libera da Wikimedia Commons, accreditate nella pagina `/crediti`. Vanno sostituite con foto vere del locale, che vendono molto di più:

- [ ] `forno.jpg`: il vostro forno a legna con una pizza
- [ ] `cosenza.jpg`: la vista dalla terrazza o dal giardino, meglio al tramonto
- [ ] `margherita.jpg`, `porcini.jpg`, `pesce.jpg`, `griglia.jpg`: i vostri piatti
- [ ] `tiramisu.jpg`: in alternativa una foto della sala apparecchiata per un evento
- [ ] Aggiornare `/crediti` di conseguenza e rigenerare `public/og.jpg`

## Dominio

- [ ] Scegliere un dominio (es. `arcadinoetrenta.it`) e collegarlo su Vercel.
- [ ] Registrare il locale su **Google Business Profile** con il link al sito: è il canale che porta più prenotazioni.
