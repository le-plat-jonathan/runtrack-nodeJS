const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
