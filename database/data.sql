insert into "artists" ("name")
values      ('Wilder.');

insert into "addresses" ("line1", "city", "state", "country")
values      ('1652 Lincoln Ave', 'Anaheim', 'CA', 'USA');

insert into "venues" ("name", "addressId", "phone")
values      ('Chain Reaction', 1, 7146356067);

insert into "shows" ("venueId", "artistId", "date")
values      (1, 1, DATE '2023-1-5');

insert into "notes" ("details", "showId")
values      (
  'Showers: Yes
   Laundry: No
   ++++++++++

   Catering: Albertos
   ++++++++++

   Drinks: 2 tix per band member
   ++++++++++
   Wifi: genericWifiName
   Password: lfzFinalProject',
   1
);

insert into "contacts" ("email", "name", "phone","showId")
values      ('booker@booking.com', 'Edgy Promoter Dude',7777777, 1);

insert into "schedules" ("startTime", "endTime", "details", "showId")
values
('8:00', '11:00', 'TRAVEL', 1
),(
  '16:00', '17:00', 'LOAD IN', 1
),(
  '17:00', '18:00', 'WILDER SOUNDCHECK', 1
),(
  '18:00', '19:00', 'SUPPORT SOUNDCHECK', 1
),(
  '19:00', '20:00', 'DOORS', 1
),(
  '20:00', '20:30', 'SUPPORT 1', 1
),(
  '20:30', '20:45', 'CHANGEOVER', 1
),(
  '20:45', '21:15', 'SUPPORT 2', 1
),(
  '21:15', '21:30', 'CHANGEOVER', 1
),(
  '21:30', '22:30', 'WILDER', 1
),(
  '23:00', '24:00', 'CURFEW', 1
),(
  '24:00', '0:00', 'DEPART', 1
);
