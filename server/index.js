// app.patch for venues works
// a thought: when we get to the client side, we will need to think about how each little edit button
// is going to behave differently. for instance, if we click the edit button on the first date's VENUES
// section, how are we going to grab the correct data from the database and fill the inputs? do we need to fill the inputs?

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

// GET all artists 👇🏼
app.get('/api/artists', (req, res, next) => {
  const sql = `
  select "artistId",
         "name"
  from   "artists"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

// Get specific ARTIST info 👇🏼
app.get('/api/artists/:artistId', (req, res, next) => {
  const artistId = Number(req.params.artistId);
  if (!artistId) {
    throw new ClientError(400, 'artistId must be a positive integer');
  }
  const sql = `
  select "name"
  from   "artists"
  where "artistId" = $1`;

  const params = [artistId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find venue with artistId ${artistId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

// GET specific VENUE information 👇🏼
app.get('/api/venues/:venueId', (req, res, next) => {
  const venueId = Number(req.params.venueId);
  if (!venueId) {
    throw new ClientError(400, 'venueId must be a positive integer');
  }
  const sql = `
  select "name",
         "addressId"
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
app.get('/api/schedules/:showId', (req, res, next) => {
  const showId = Number(req.params.showId);
  if (!showId) {
    throw new ClientError(400, 'scheduleId must be a positive integer');
  }
  const sql = `
  select "startTime",
         "endTime",
         "details",
         "scheduleId"
  from   "schedules"
  where "showId" = $1 `;
  const params = [showId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows) {
        throw new ClientError(404, `cannot find schedule with showId ${showId}`);
      }
      res.json(result.rows);
    })
    .catch(err => next(err));
});

// GET all schedule details from all shows 👇🏼
app.get('/api/all-schedules', (req, res, next) => {
  const sql = `
    select "details" as "scheduleDetails",
         to_char("endTime", 'HH:MI AM') as "endTime",
         to_char("startTime", 'HH:MI AM') as "startTime",
         "scheduleId",
         "showId"
  from "schedules"
  order by "showId" asc`;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

// this GET request is for dashboard page, but it only grabs 1 date's worth of schedule info. delete soon 👇🏼
app.get('/api/schedules', (req, res, next) => {
  const sql = `
  select "details" as "scheduleDetails",
         to_char("endTime", 'HH:MI AM') as "endTime",
         to_char("startTime", 'HH:MI AM') as "startTime",
         "scheduleId"
  from "schedules"
  where "showId" = 1
  order by "startTime" asc
`;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

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

/// GET all things from all shows 👇🏼
app.get('/api/all-shows', (req, res, next) => {
  const sql = `
select to_char("date",'yyyy-MM-dd') as "date",
         "venues"."name" as "venueName",
         "artistId",
         "addressId",
         "venueId",
         "showId",
         "line1",
         "city",
         "state",
         "country",
         "contacts"."email" as "contactEmail",
         "contacts"."name" as "contactName",
         "contacts"."phone" as "contactPhone",
         "notes"."details" as "notesDetails"
  from   "shows"
  join "venues" using ("venueId")
  join "addresses" using ("addressId")
  join "artists" using ("artistId")
  join "contacts" using ("showId")
  join "notes" using ("showId")`;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

// GET specific show info 👇🏼
app.get('/api/shows/:showId', (req, res, next) => {
  const showId = Number(req.params.showId);
  if (!showId) {
    throw new ClientError(400, 'showId must be a positive integer');
  }
  const sql = `
  select to_char("date",'yyyy-MM-dd') as "date",
         "venues"."name" as "venueName",
         "artistId",
         "addressId",
         "venueId",
         "showId",
         "line1",
         "city",
         "state",
         "country",
         "startTime",
         "endTime",
         "schedules"."details" as "scheduleDetails",
         "contacts"."email" as "contactEmail",
         "contacts"."name" as "contactName",
         "contacts"."phone" as "contactPhone",
         "notes"."details" as "notesDetails"
  from   "shows"
  join "venues" using ("venueId")
  join "addresses" using ("addressId")
  join "artists" using ("artistId")
  join "contacts" using ("showId")
  join "notes" using ("showId")
  join "schedules" using ("showId")
  where "showId" = $1`;
  const params = [showId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find show with showId ${showId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

// GET DATE info for DATES section 👇🏼
app.get('/api/shows', (req, res, next) => {
  const sql = `
  select to_char("date",'MM/DD/YYYY') as "showDate",
         "venues"."name" as "dateVenue",
         "addresses"."city" as "dateCity",
         "addresses"."state" as "dateState",
         "showId"
  from   "shows"
  join "venues" using ("venueId")
  join "addresses" using ("addressId")
  order by "showDate" asc
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
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

// POST new ADDRESSES to the database 👇🏼

app.post('/api/addresses', (req, res) => {
  const { line1, city, state, country } = req.body;
  if (!line1 || !city || !state || !country) {
    res.status(400).json({
      error: 'address, city, state, and country are required fields'
    });
    return;
  }
  const sql = `
  insert into "addresses" ("line1", "city", "state", "country")
  values      ($1, $2, $3, $4)
  `;
  const params = [line1, city, state, country];
  db.query(sql, params)
    .then(result => {
      const [newAddress] = result.rows;
      res.status(201).json(newAddress);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

// POST new CONTACTS to the database 👇🏼
app.post('/api/contacts', (req, res) => {
  let { email, contactName, contactPhone, showId } = req.body;
  contactPhone = Number(contactPhone);
  if (!email || !contactName || !showId || !contactPhone) {
    res.status(400).json({
      error: 'email, contactName, showId, and contactPhone are required fields'
    });
    return;
  } else if (typeof contactPhone !== 'number') {
    res.status(400).json({
      error: 'phone number must be a number'
    });
    return;
  }
  const sql = `
  insert into "contacts" ("email", "name", "phone", "showId")
  values      ($1, $2, $3, $4)
  `;
  const params = [email, contactName, contactPhone, showId];
  db.query(sql, params)
    .then(result => {
      const [newContact] = result.rows;
      res.status(201).json(newContact);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

// POST new VENUES nto the database 👇🏼
app.post('/api/venues', (req, res) => {
  let { name, phone, addressId } = req.body;
  phone = Number(phone);
  if (!name || !phone || !addressId) {
    res.status(400).json({
      error: 'Name, phone, and address ID are required fields'
    });
    return;
  } else if (typeof phone !== 'number') {
    res.status(400).json({
      error: 'phone number must be a number'
    });
    return;
  }
  const sql = `
  insert into "venues" ("name", "phone", "addressId")
  values      ($1, $2, $3)
  `;
  const params = [name, phone, addressId];
  db.query(sql, params)
    .then(result => {
      const [newVenue] = result.rows;
      res.status(201).json(newVenue);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

// POST new NOTES to the database 👇🏼
app.post('/api/notes', (req, res) => {
  const { details, showId } = req.body;
  if (!details || !showId) {
    res.status(400).json({
      error: 'Details and showId are required fields'
    });
    return;
  }
  const sql = `
  insert into "notes" ("details", "showId")
  values      ($1, $2)
  `;
  const params = [details, showId];
  db.query(sql, params)
    .then(result => {
      const [newNote] = result.rows;
      res.status(201).json(newNote);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

// POST new SCHEDULES to the database 👇🏼

app.post('/api/schedules', (req, res) => {
  const { startTime, endTime, details, showId } = req.body;
  if (!startTime || !endTime || !details || !showId) {
    res.status(400).json({
      error: 'Start time, end time, details, and show id are required fields'
    });
    return;
  }
  const sql = `
  insert into "schedules" ("startTime", "endTime", "details", "showId")
  values      ($1, $2, $3, $4)
  `;
  const params = [startTime, endTime, details, showId];
  db.query(sql, params)
    .then(result => {
      const [newSchedule] = result.rows;
      res.status(201).json(newSchedule);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

// POST new DATES to the database 👇🏼

app.post('/api/shows', (req, res) => {
  const { venueId, artistId, date } = req.body;
  if (!venueId || !artistId || !date) {
    res.status(400).json({
      error: 'venueId, artistId, and date are required fields'
    });
    return;
  }
  const sql = `
  insert into "shows" ("venueId", "artistId", "date")
  values      ($1, $2, $3)
  `;
  const params = [venueId, artistId, date];
  db.query(sql, params)
    .then(result => {
      const [newDate] = result.rows;
      res.status(201).json(newDate);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

// POST ALL THE THINGS!!! (except new Artists)

app.post('/api/new-date', (req, res) => {
  const {
    line1,
    city,
    state,
    country,
    contactName,
    contactPhone,
    contactEmail,
    venueName,
    notesDetails,
    scheduleEvents,
    date,
    artistId
  } = req.body;
  if (!line1 || !city || !state || !country || !contactName || !contactPhone || !contactEmail ||
    !venueName || !notesDetails || !date) {
    res.status(400).json({
      error: 'Make sure you have entered all required fields'
    });
    return;
  }
  const insertAddressSql = `
  insert into "addresses" ("line1", "city", "state", "country")
  values      ($1, $2, $3, $4)
  returning *;
  `;
  const insertAddressParams = [line1, city, state, country];
  db.query(insertAddressSql, insertAddressParams)
    .then(addressResult => {
      const [newAddress] = addressResult.rows;
      const insertVenueSql = `
      insert into "venues" ("name", "addressId")
      values ($1, $2)
      returning *;
      `;
      const insertVenueParams = [venueName, newAddress.addressId];
      db.query(insertVenueSql, insertVenueParams)
        .then(venueResult => {
          const [newVenue] = venueResult.rows;
          const insertShowSql = `
          insert into "shows" ("venueId", "artistId", "date")
          values ($1, $2, $3)
          returning *;
          `;
          const insertShowParams = [newVenue.venueId, artistId, date];
          db.query(insertShowSql, insertShowParams)
            .then(showResult => {
              const [newShow] = showResult.rows;
              const insertContactSql = `
              insert into "contacts" ("email", "name", "phone", "showId")
              values ($1, $2, $3, $4)
              `;
              const insertContactParams = [contactEmail, contactName, contactPhone, newShow.showId];
              db.query(insertContactSql, insertContactParams)
                .then(contactResult => {
                  const insertNoteSql = `
                   insert into "notes" ("details", "showId")
                   values($1, $2)
                  `;
                  const insertNoteParams = [notesDetails, newShow.showId];
                  db.query(insertNoteSql, insertNoteParams)
                    .then(noteResult => {
                      let paramNum = 2;
                      const eventsParams = [newShow.showId];
                      const eventValues = [];
                      scheduleEvents.forEach(event => {
                        const value = `($${paramNum++}, $${paramNum++}, $${paramNum++}, $1)`;
                        eventValues.push(value);
                        eventsParams.push(event.startTime, event.endTime, event.scheduleDetails);
                      });
                      const insertSchedulesSql = `
                        insert into "schedules" ("startTime", "endTime", "details", "showId")
                        values ${eventValues.join(', ')}
                       `;
                      db.query(insertSchedulesSql, eventsParams);
                      const newTourDate = {
                        newShow
                      };
                      res.status(201).json(newTourDate);
                    });
                });
            });
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

// DELETE a date 👇🏼
app.delete('/api/delete-date', (req, res) => {
  const {
    showId
  } = req.body;
  if (!showId) {
    res.status(400).json({
      error: 'showId is required.'
    });
    return;
  }
  const deleteContactSql = `
    delete from "contacts"
    where "showId" = $1
    `;
  const deleteContactsParams = [showId];

  db.query(deleteContactSql, deleteContactsParams)
    .then(() => {
      const deleteNoteSql = `
      delete from "notes"
      where "showId" = $1
      `;
      const deleteNoteParams = [showId];
      db.query(deleteNoteSql, deleteNoteParams)
        .then(() => {
          const deleteScheduleSql = `
          delete from "schedules"
          where "showId" = $1
          `;
          const deleteScheduleParams = [showId];
          db.query(deleteScheduleSql, deleteScheduleParams)
            .then(() => {
              const deleteShowSql = `
                delete from "shows"
                where "showId" = $1
              `;
              const deleteShowParams = [showId];
              db.query(deleteShowSql, deleteShowParams)
                .then(res.status(204).json())
                .catch(err => {
                  console.error(err);
                  res.status(500).json({
                    error: 'an unexpected error occured.'
                  });
                });
            });
        });
    });
});

// EDIT Venue Information 👇🏼
app.patch('/api/edit-venue', (req, res) => {
  const {
    venueName,
    line1,
    city,
    state,
    country,
    addressId
  } = req.body;
  const updateVenueAddressSql = `
  update "addresses"
  set    "line1" = $1,
         "city" = $2,
         "state" = $3,
         "country" = $4
  where "addressId" = $5
  returning *`;
  const updateVenueInfoParams = [line1, city, state, country, addressId];
  db.query(updateVenueAddressSql, updateVenueInfoParams)
    .then(result => {
      const updateVenueNameSql = `
    update "venues"
    set    "name" = $1
    where "addressId" = $2
    returning *`;
      const updateVenueNameParams = [venueName, addressId];
      db.query(updateVenueNameSql, updateVenueNameParams)
        .then(res.status(204).json())
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'an unexpected error occured.' });
        });
    });
});

// EDIT Contact and Notes information 👇🏼
app.patch('/api/edit-details/:showId', (req, res) => {
  const showId = Number(req.params.showId);
  if (!Number.isInteger(showId) || showId < 1) {
    res.status(400).json({
      error: 'showId must be a positive integer'
    });
    return;
  }
  const {
    contactEmail,
    contactName,
    contactPhone,
    notesDetails
  } = req.body;

  const updateContactsSql = `
  update "contacts"
  set    "email" = $1,
         "name" = $2,
         "phone" = $3
  where  "showId" = $4
  returning *`;

  const updateContactsParams = [contactEmail, contactName, contactPhone, showId];
  db.query(updateContactsSql, updateContactsParams)
    .then(result => {
      const updateNotesSql = `
    update "notes"
    set    "details" = $1
    where  "showId" = $2
    returning *`;

      const updateNotesParams = [notesDetails, showId];
      db.query(updateNotesSql, updateNotesParams)
        .then(res.status(204).json())
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'an unexpected error occured' });
        });
    });
});

// EDIT / PATCH shows in the database 👇🏼
app.patch('/api/edit-date/:showId', (req, res) => {
  const showId = Number(req.params.showId);
  if (!Number.isInteger(showId) || showId < 1) {
    res.status(400).json({
      error: 'showId must be a positive integer'
    });
    return;
  }
  const
    {
      addressId,
      date,
      venueName,
      scheduleEvents,
      notesDetails,
      contactEmail,
      contactPhone,
      contactName,
      line1,
      state,
      city,
      country
    } = req.body;
  const updateAddressSql = `
      update "addresses"
      set "line1" = $1,
          "city" = $2,
          "state" = $3,
          "country" =$4
      where "addressId" = $5
      returning *
      `;
  const updateAddressParams = [line1, city, state, country, addressId];
  db.query(updateAddressSql, updateAddressParams)
    .then(result => {
      const updateVenuesSql = `
      update "venues"
      set    "name" = $1
      where  "addressId" = $2
      returning *
      `;
      const updateVenuesParams = [venueName, addressId];
      db.query(updateVenuesSql, updateVenuesParams)
        .then(() => {
          const updateShowSql = `
            update "shows"
            set "date" = $1
            where "showId" = $2
            returning *
            `;
          const updateShowParams = [date, showId];
          db.query(updateShowSql, updateShowParams)
            .then(() => {
              const updateContactSql = `
              update "contacts"
              set "email" = $1,
                  "name" = $2,
                  "phone" = $3
              where "showId" = $4
              returning *
              `;
              const updateContactParams = [contactEmail, contactName, contactPhone, showId];
              db.query(updateContactSql, updateContactParams)
                .then(() => {
                  const updateNotesSql = `
                  update "notes"
                  set "createdAt" = now(),
                      "details" = $1
                  where "showId" = $2
                  returning *
                  `;
                  const updateNotesParams = [notesDetails, showId];
                  db.query(updateNotesSql, updateNotesParams)
                    .then(() => {
                      const deleteScheduleSql = `
                      delete from "schedules"
                      where "showId" = $1
                      `;
                      const deleteScheduleParams = [showId];
                      db.query(deleteScheduleSql, deleteScheduleParams)
                        .then(() => {
                          let paramNum = 2;
                          const eventsParams = [showId];
                          const eventValues = [];
                          scheduleEvents.forEach(event => {
                            const value = `($${paramNum++}, $${paramNum++}, $${paramNum++}, $1)`;
                            eventValues.push(value);
                            eventsParams.push(event.startTime, event.endTime, event.details);
                          });
                          const insertSchedulesSql = `
                                insert into "schedules" ("startTime", "endTime", "details", "showId")
                               values ${eventValues.join(', ')}
                              `;
                          db.query(insertSchedulesSql, eventsParams)
                            .then(res.status(204).json())
                            .catch(err => {
                              console.error(err);
                              res.status(500).json({
                                error: 'an unexpected error occured'
                              });
                            });
                        });
                    });
                });
            });
        });
    });
});
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
