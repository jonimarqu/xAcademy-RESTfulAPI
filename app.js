const express = require('express');
const { initializeDB } = require('./config/db-config');
const { loggingMdw } = require('./middleware');

const app = express();
const PORT = 9000;

app.use(loggingMdw);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Listening on port ${PORT}..`)
});

