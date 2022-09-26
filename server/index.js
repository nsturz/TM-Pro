require('dotenv/config');
const express = require('express');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const db = require('./db');

const app = express();

app.use(express.json());

app.use(staticMiddleware);

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

// GET specific VENUE information 👇🏼
app.get('/api/venues/:venueId', (req, res, next) => {
  const venueId = Number(req.params.venueId);
  if (!venueId) {
    throw new ClientError(400, 'venueId must be a positive integer');
  }
  const sql = `
  select "name",
         "addressId",
         "phone"
  from   "venues"
  where "venueId" = $1`;

  const params = [venueId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find venue with venueId ${venueId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

// GET specific NOTES information 👇🏼
app.get('/api/notes/:noteId', (req, res, next) => {
  const noteId = Number(req.params.noteId);
  if (!noteId) {
    throw new ClientError(400, 'noteId must be a positive integer');
  }
  const sql = `
  select "details"
  from   "notes"
  where "noteId" = $1`;

  const params = [noteId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find note with notesId ${noteId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

// GET specific SCHEDULE information 👇🏼
// app.get('/api/schedules/:scheduleId', (req, res, next) => {
//   const scheduleId = Number(req.params.scheduleId);
//   if (!scheduleId) {
//     throw new ClientError(400, 'scheduleId must be a positive integer')
//   }
//   const sql = `
//   select "startTime",
//          "endTime",
//          "details"
//   from   "schedules"
//   where "scheduleId" = $1 `;

//   const params = [scheduleId];
//   db.query(sql, params)
//     .then(result => {
//       if (!result.rows[0]) {
//         throw new ClientError(404, `cannot find schedule with showId ${scheduleId}`);
//       }
//       res.json(result.rows[0]);
//     })
//     .catch(err => next(err))
// })

// GET specific SCHEDULE information (using showId?) 👇🏼
// app.get('/api/schedules', (req,res,next) =>{
//   const sql =`
//   select *
//   from "schedules"
//   where "scheduleId" = 1
//   `;
//   db.query(sql)
//   .then(result => res.json(result.rows))
//   .catch(err => next(err))

// })

// GET specific CONTACT info 👇🏼
app.get('/api/contacts/:contactId', (req, res, next) => {
  const contactId = Number(req.params.contactId);
  if (!contactId) {
    throw new ClientError(400, 'contactId must be a positive integer');
  }
  const sql = `
  select "email",
         "name",
         "phone" as "contactPhone"
  from   "contacts"
  where "contactId" = $1`;

  const params = [contactId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find note with ncontactId ${contactId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});
// GET specific SHOW info 👇🏼
app.get('/api/shows/:showId', (req, res, next) => {
  const showId = Number(req.params.showId);
  if (!showId) {
    throw new ClientError(400, 'showId must be a positive integer');
  }
  const sql = `
  select "date",
         "phone",
         "venues"."name" as "venueName",
         "venueId",
         "showId",
         "line1",
         "city",
         "state"
  from   "shows"
  join "venues" using ("venueId")
  join "addresses" using ("addressId")
  where "showId" = $1`;

  const params = [showId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find note with showId ${showId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

// POST a new ARTIST to the database 👇🏼
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
  values      ($1)`;

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
