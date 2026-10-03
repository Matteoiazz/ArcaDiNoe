import { locale } from '../data/locale';

type Fascia = [number, number];

export interface Stato {
  aperto: boolean;
  /** Testo breve: "fino all'1:00" oppure "riapre alle 19:00". */
  dettaglio: string;
  /** Minuti alla chiusura (se aperto), utile per "chiude tra poco". */
  minutiAllaChiusura?: number;
}

/** Ora corrente a Rome come {giorno, minuti} indipendentemente dal fuso del visitatore. */
export function adessoRoma(d = new Date()): { giorno: number; minuti: number } {
  const parti = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Rome',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(d);
  const get = (t: string) => parti.find((p) => p.type === t)?.value ?? '';
  const giorni = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return { giorno: giorni.indexOf(get('weekday')), minuti: Number(get('hour')) * 60 + Number(get('minute')) };
}

export function formatOra(min: number): string {
  const m = ((min % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return `${h}:${String(mm).padStart(2, '0')}`;
}

/** "all'1:00", "alle 19:00": elisione corretta in italiano. */
export function alleOra(min: number): string {
  const h = Math.floor((((min % 1440) + 1440) % 1440) / 60);
  return h === 1 ? `all'${formatOra(min)}` : `alle ${formatOra(min)}`;
}

function fasce(giorno: number): Fascia[] {
  return (locale.orari.find((o) => o.giorno === giorno)?.fasce ?? []) as Fascia[];
}

export function stato(d = new Date()): Stato {
  const { giorno, minuti } = adessoRoma(d);
  const ieri = (giorno + 6) % 7;

  // Servizio di ieri che sconfina dopo mezzanotte.
  for (const [, fine] of fasce(ieri)) {
    if (fine > 1440 && minuti < fine - 1440) {
      return { aperto: true, dettaglio: `fino ${alleOra(fine)}`, minutiAllaChiusura: fine - 1440 - minuti };
    }
  }
  for (const [inizio, fine] of fasce(giorno)) {
    if (minuti >= inizio && minuti < fine) {
      return { aperto: true, dettaglio: `fino ${alleOra(fine)}`, minutiAllaChiusura: fine - minuti };
    }
  }
  // Prossima apertura.
  for (let i = 0; i < 7; i++) {
    const g = (giorno + i) % 7;
    for (const [inizio] of fasce(g)) {
      if (i === 0 && inizio <= minuti) continue;
      const quando = i === 0 ? 'oggi' : i === 1 ? 'domani' : locale.orari.find((o) => o.giorno === g)!.nome.toLowerCase();
      return { aperto: false, dettaglio: `riapre ${quando} ${alleOra(inizio)}` };
    }
  }
  return { aperto: false, dettaglio: 'chiuso' };
}

export function orarioGiorno(giorno: number): string {
  const f = fasce(giorno);
  if (!f.length) return 'Chiuso';
  return f.map(([a, b]) => `${formatOra(a)} – ${formatOra(b)}`).join(', ');
}

/** Fasce orarie prenotabili (ogni 30 minuti, fino a un'ora prima della chiusura) per una data YYYY-MM-DD. */
export function slotPrenotabili(dataISO: string): string[] {
  const [y, m, d] = dataISO.split('-').map(Number);
  const giorno = new Date(Date.UTC(y, m - 1, d, 12)).getUTCDay();
  const out: string[] = [];
  for (const [inizio, fine] of fasce(giorno)) {
    const ultimo = Math.min(fine - 60, 23 * 60);
    for (let t = inizio; t <= ultimo; t += 30) out.push(formatOra(t).padStart(5, '0'));
  }
  return out;
}
