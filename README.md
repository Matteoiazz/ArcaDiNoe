# L'Arca di Noè: sito web

Sito della pizzeria, ristorante e griglieria **L'Arca di Noè** a Trenta, Casali del Manco (CS).

È un sito statico [Astro](https://astro.build) pubblicato su Vercel. Ogni push su `main` va online da solo.

## Pagine

| Pagina | Contenuto |
| --- | --- |
| `/` | Foto di apertura, informazioni pratiche (orari con stato aperto/chiuso, indirizzo, telefono), presentazione del locale, la cucina, sale ed eventi, orari e come arrivare |
| `/menu` | Il menu per categorie, con ricerca, filtri (vegetariano, senza glutine) e barra delle categorie sempre visibile. Si può usare dal QR code al tavolo |
| `/prenota` | Prenotazione di un tavolo: propone solo giorni e orari di apertura, poi invia su WhatsApp o prepara la chiamata |
| `/eventi` | Comunioni, compleanni, cene aziendali, con il modulo di richiesta |
| `/dove-siamo` | Indirizzo, indicazioni stradali, orari e mappa (caricata solo su consenso) |
| `/privacy`, `/crediti` | Informativa privacy e crediti delle foto |

## Modificare i contenuti

- **Orari, telefono, WhatsApp, indirizzo**: `src/data/locale.ts`
- **Menu e prezzi**: `src/data/menu.ts`
- **Foto**: `src/assets/foto/`

L'elenco di ciò che manca per la messa online è in [CONTENUTI-DA-SOSTITUIRE.md](CONTENUTI-DA-SOSTITUIRE.md).

## Sviluppo

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # genera dist/
```
