insert into "artists" ("name")
values      ('Wilder.');

insert into "addresses" ("line1", "city", "state", "country")
values      ('1652 Lincoln Ave', 'Anaheim', 'CA', 'USA'),
            ('2303 E Indian School Rd', 'Phoenix', 'AZ', 'USA'),
            ('310 Pacific Ave', 'Henderson', 'NV', 'USA'),
            ('1489 Major St', 'Salt Lake City', 'UT', 'USA'),
            ('2935 W 7th Ave', 'Denver', 'CO', 'USA');

insert into "venues" ("name", "addressId", "phone")
values      ('Chain Reaction', 1, 7146356067),
            ('Rebel Lounge', 2, 6022967013),
            ('Eagles Aerie Hall', 3, 7025652672),
            ('Loading Dock', 4, 7777777),
            ('7th Circle', 5, 7205423286);

insert into "shows" ("venueId", "artistId", "date")
values      (1, 1, DATE '2023-1-5'),
            (2, 1, DATE '2023-1-6'),
            (3, 1, DATE '2023-1-7'),
            (4, 1, DATE '2023-1-8'),
            (5, 1, DATE '2023-1-9');

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
