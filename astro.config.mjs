// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shxamill.vercel.app',
  prefetch: { prefetchAll: true },
  devToolbar: { enabled: false },
});
