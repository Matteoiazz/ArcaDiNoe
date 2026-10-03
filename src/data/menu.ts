/**
 * MENU DIMOSTRATIVO.
 * Piatti e prezzi sono indicativi: vanno sostituiti con il menu reale del locale prima della pubblicazione.
 * Alcuni piatti (patate 'mpacchiuse, fusilli ai porcini, grigliata di pesce, riso zucchine e gamberetti,
 * sorbetto al limone, penne alla calabrese, crudo e rucola) sono citati nelle recensioni pubbliche.
 *
 * Etichette: v = vegetariano, gf = disponibile senza glutine, hot = piccante.
 */

export type Etichetta = 'v' | 'gf' | 'hot';

export interface Piatto {
  nome: string;
  descrizione?: string;
  prezzo: number;
  etichette?: Etichetta[];
}

export interface Categoria {
  id: string;
  nome: string;
  nota?: string;
  piatti: Piatto[];
}

export const etichette: Record<Etichetta, { breve: string; lungo: string }> = {
  v: { breve: 'V', lungo: 'Vegetariano' },
  gf: { breve: 'SG', lungo: 'Senza glutine su richiesta' },
  hot: { breve: 'P', lungo: 'Piccante' },
};

export const menu: Categoria[] = [
  {
    id: 'antipasti',
    nome: 'Antipasti',
    piatti: [
      { nome: 'Antipasto della casa', descrizione: 'Salumi calabresi, formaggi locali, sott’oli e frittelle', prezzo: 12 },
      { nome: 'Patate ’mpacchiuse', descrizione: 'Patate, peperoni e cipolla in padella, alla cosentina', prezzo: 6, etichette: ['v', 'gf'] },
      { nome: 'Provola alla brace', descrizione: 'Provola silana fusa sulla griglia', prezzo: 7, etichette: ['v', 'gf'] },
      { nome: 'Bruschette miste', descrizione: 'Pomodoro, ’nduja, funghi', prezzo: 5, etichette: ['hot'] },
      { nome: 'Frittura di verdure', descrizione: 'Verdure di stagione in pastella leggera', prezzo: 7, etichette: ['v'] },
    ],
  },
  {
    id: 'primi',
    nome: 'Primi',
    piatti: [
      { nome: 'Fusilli ai funghi porcini', descrizione: 'Porcini della Sila, aglio, prezzemolo', prezzo: 11, etichette: ['v'] },
      { nome: 'Riso zucchine e gamberetti', prezzo: 12 },
      { nome: 'Penne alla calabrese', descrizione: 'Pomodoro, ’nduja, pecorino crotonese', prezzo: 9, etichette: ['hot'] },
      { nome: 'Lagane e ceci', descrizione: 'Pasta fatta in casa e ceci, olio a crudo', prezzo: 9, etichette: ['v'] },
      { nome: 'Scialatielli allo scoglio', descrizione: 'Cozze, vongole, gamberi, pomodorino', prezzo: 14 },
    ],
  },
  {
    id: 'griglia',
    nome: 'Dalla griglia',
    nota: 'Carne e pesce cotti alla brace, serviti con contorno.',
    piatti: [
      { nome: 'Grigliata mista di carne', descrizione: 'Salsiccia, costine, pancetta, bistecca di maiale', prezzo: 16, etichette: ['gf'] },
      { nome: 'Tagliata di manzo', descrizione: 'Rucola e scaglie di grana', prezzo: 18, etichette: ['gf'] },
      { nome: 'Salsiccia alla brace', descrizione: 'Salsiccia di maiale calabrese', prezzo: 9, etichette: ['gf'] },
      { nome: 'Costolette d’agnello', prezzo: 15, etichette: ['gf'] },
      { nome: 'Grigliata di pesce', descrizione: 'Pescato del giorno, gamberoni, calamari', prezzo: 20, etichette: ['gf'] },
      { nome: 'Calamari alla griglia', prezzo: 14, etichette: ['gf'] },
    ],
  },
  {
    id: 'pizze-rosse',
    nome: 'Pizze rosse',
    nota: 'Cotte nel forno a legna. Impasto senza glutine su richiesta.',
    piatti: [
      { nome: 'Marinara', descrizione: 'Pomodoro, aglio, origano, olio', prezzo: 4.5, etichette: ['v'] },
      { nome: 'Margherita', descrizione: 'Pomodoro, fiordilatte, basilico', prezzo: 5, etichette: ['v'] },
      { nome: 'Diavola', descrizione: 'Pomodoro, fiordilatte, salame piccante', prezzo: 6.5, etichette: ['hot'] },
      { nome: 'Calabrese', descrizione: 'Pomodoro, fiordilatte, ’nduja, cipolla di Tropea', prezzo: 7.5, etichette: ['hot'] },
      { nome: 'Capricciosa', descrizione: 'Pomodoro, fiordilatte, prosciutto cotto, funghi, carciofi, olive', prezzo: 7.5 },
      { nome: 'Crudo e rucola', descrizione: 'Pomodoro, fiordilatte, crudo, rucola, grana', prezzo: 8 },
    ],
  },
  {
    id: 'pizze-bianche',
    nome: 'Pizze bianche',
    piatti: [
      { nome: 'Silana', descrizione: 'Fiordilatte, funghi porcini, salsiccia, provola', prezzo: 8.5 },
      { nome: 'Quattro formaggi', prezzo: 7.5, etichette: ['v'] },
      { nome: 'Patate e salsiccia', descrizione: 'Fiordilatte, patate al forno, salsiccia, rosmarino', prezzo: 7.5 },
      { nome: 'Ortolana', descrizione: 'Fiordilatte, verdure grigliate', prezzo: 7, etichette: ['v'] },
    ],
  },
  {
    id: 'dolci',
    nome: 'Dolci',
    piatti: [
      { nome: 'Sorbetto al limone', prezzo: 4, etichette: ['v', 'gf'] },
      { nome: 'Tiramisù della casa', prezzo: 5, etichette: ['v'] },
      { nome: 'Tartufo di Pizzo', prezzo: 5, etichette: ['v'] },
      { nome: 'Cannolo siciliano', prezzo: 4.5, etichette: ['v'] },
    ],
  },
  {
    id: 'bevande',
    nome: 'Bevande',
    piatti: [
      { nome: 'Acqua naturale o frizzante', descrizione: '75 cl', prezzo: 2 },
      { nome: 'Bibite in lattina', prezzo: 3 },
      { nome: 'Birra alla spina', descrizione: 'Media, 40 cl', prezzo: 5 },
      { nome: 'Vino della casa', descrizione: 'Rosso o bianco, ¼ litro', prezzo: 4 },
      { nome: 'Caffè', prezzo: 1.5 },
      { nome: 'Amaro calabrese', prezzo: 3 },
    ],
  },
];

export const euro = (n: number) =>
  new Intl.NumberFormat('it-IT', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }).format(n);
