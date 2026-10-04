import { Hono } from 'hono';
import { pages } from 'astro/hono';
import { cf } from '@astrojs/cloudflare/hono';

// pages() never assigns getDefaultStatusCode(). renderPage forces 404 only
// for the root route /^\/404\/?$/, not for /pt/404.
const app = new Hono();

app.use(cf());
app.use(pages());

export default app;
