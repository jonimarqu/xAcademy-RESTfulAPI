const express = require('express');
const { initializeDB } = require('./config/db-config');

const app = express();
const PORT = 9000;

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Listening on port ${PORT}..`)
});

