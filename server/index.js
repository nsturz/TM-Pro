require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const db = require('./db');

const app = express();

app.use(staticMiddleware);

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.post('/api/artists', (req, res) => {
  const name = req.body.name;
  if (!name) {
    res.status(400).json({
      error: 'name is a required field'
    });
    return;
  }
  const sql = `
  insert into "artists" ("name")
  values      ('$1')`;

  const params = [name];
  db.query(sql, params)
    .then(result => {
      const [artistName] = result.rows;
      res.status(201).json(artistName);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
