import { serve } from '@hono/node-server';
import app from './index';
import { debug } from './utils/debug';

const port = Number(process.env.PORT) || 3000;

serve({
  fetch: app.fetch,
  port
});

debug.log(`Server running at http://localhost:${port}`);