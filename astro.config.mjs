import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Su Vercel l'URL di produzione arriva dalle variabili d'ambiente; con un dominio proprio, scriverlo qui.
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:4321';

export default defineConfig({
  site,
  integrations: [sitemap()],
  // Le classi passate ai componenti (Icona, Arca, Image) ricevono lo scope della pagina.
  scopedStyleStrategy: 'class',
});
