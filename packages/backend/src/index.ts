import bodyParser from 'body-parser';
import Bottleneck from 'bottleneck';
import express from 'express';

import { CONFIG } from './config';
import { router } from './handlers/routes';
import { errorMiddleware } from './lib/apiHelpers';

const app = express();

app.locals.limiter = new Bottleneck({
  maxConcurrent: 10,
});
// tracks the current contents of Bottleneck
app.locals.queuedRecacheFor = {};

app.use(bodyParser.json());

app.use(router);

app.use(errorMiddleware);

app.listen(CONFIG.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${CONFIG.port}`);
});
