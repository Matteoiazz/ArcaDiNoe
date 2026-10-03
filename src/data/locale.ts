/**
 * Dati del locale: l'unico file da modificare per orari, contatti e indirizzo.
 * I valori segnati "DA CONFERMARE" vengono da elenchi pubblici e vanno verificati col titolare.
 */

export const locale = {
  nome: "L'Arca di Noè",
  tipo: 'Pizzeria · Ristorante · Griglieria',

  /** Mostra la fascia "anteprima" in tutto il sito finché i contenuti non sono definitivi. */
  anteprima: true,

  telefono: '0984 439508',
  telefonoLink: '+390984439508',

  /**
   * Numero WhatsApp del locale in formato internazionale senza "+" e spazi, es. "393331234567".
   * Finché è vuoto, il modulo di prenotazione propone la chiamata.
   */
  whatsapp: '',

  email: '',

  indirizzo: {
    via: 'Via Catena', // DA CONFERMARE: civico (gli elenchi riportano 31, 34 o 54)
    frazione: 'Trenta',
    comune: 'Casali del Manco',
    cap: '87059',
    provincia: 'CS',
    regione: 'Calabria',
  },

  /** Coordinate approssimative di Trenta: sostituire con quelle esatte del locale. */
  geo: { lat: 39.2876, lng: 16.3195 },

  mapsQuery: "L'Arca di Noè, Via Catena, Trenta, Casali del Manco CS",

  social: {
    facebook: '',
    instagram: '',
  },

  /**
   * Orari per giorno della settimana (0 = domenica). Minuti dalla mezzanotte;
   * una chiusura oltre la mezzanotte si scrive oltre 1440 (01:00 = 1500).
   * DA CONFERMARE col titolare.
   */
  orari: [
    { giorno: 0, nome: 'Domenica', fasce: [[12 * 60, 25 * 60]] },
    { giorno: 1, nome: 'Lunedì', fasce: [] },
    { giorno: 2, nome: 'Martedì', fasce: [[19 * 60, 25 * 60]] },
    { giorno: 3, nome: 'Mercoledì', fasce: [[19 * 60, 25 * 60]] },
    { giorno: 4, nome: 'Giovedì', fasce: [[19 * 60, 25 * 60]] },
    { giorno: 5, nome: 'Venerdì', fasce: [[19 * 60, 25 * 60]] },
    { giorno: 6, nome: 'Sabato', fasce: [[19 * 60, 26 * 60]] },
  ] as { giorno: number; nome: string; fasce: [number, number][] }[],

  servizi: [
    'Vista panoramica su Cosenza',
    'Giardino e veranda all’aperto',
    'Ampio parcheggio privato',
    'Forno a legna',
    'Sale climatizzate',
    'Accesso per sedie a rotelle',
    'Wi-Fi gratuito',
    'Sport in TV',
    'Musica dal vivo',
    'Asporto',
    'Pizza senza glutine su richiesta',
  ],
} as const;

/** Con il numero WhatsApp si prenota dal modulo online; senza, ogni tasto Prenota avvia la chiamata. */
export const prenotaOnline = Boolean(locale.whatsapp);
export const prenotaHref = prenotaOnline ? '/prenota' : `tel:${locale.telefonoLink}`;

export const indirizzoBreve = `${locale.indirizzo.via}, ${locale.indirizzo.frazione}`;
export const indirizzoCompleto = `${locale.indirizzo.via}, ${locale.indirizzo.frazione} – ${locale.indirizzo.cap} ${locale.indirizzo.comune} (${locale.indirizzo.provincia})`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locale.mapsQuery)}`;
export const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locale.mapsQuery)}`;
export const appleMapsLink = `https://maps.apple.com/?q=${encodeURIComponent(locale.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(locale.mapsQuery)}&output=embed`;
