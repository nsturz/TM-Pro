insert into "artists" ("name")
values      ('Wilder.');

insert into "addresses" ("line1", "city", "state", "country")
values      ('2142 E. 4th St.', 'Long Beach', 'CA', 'USA'),
            ('207 E. H St.', 'Tehachapi', 'CA', 'USA'),
            ('1710 Mission St.', 'San Francisco', 'CA', 'USA'),
            ('2708 J St.', 'Sacramento', 'CA', 'USA');

insert into "venues" ("name", "addressId")
values          ('Vine', 1),
                ('Westlane Brewing', 2),
                ('Brick and Mortar', 3),
                ('The Starlet', 4);

insert into "shows" ("venueId", "artistId", "date")
values          (1, 1, DATE '2023-07-19'),
                (2, 1, DATE '2023-07-21'),
                (3, 1, DATE '2023-07-22'),
                (4, 1, DATE '2023-07-23');

insert into "notes" ("details", "showId")
values     ('Street parking only | 5PM load in | 2 drink tickets per band member | $100 guarantee | All 3 bands will use Wilders cabs and drums (but their own heads / snare / cymbals) show must be over by 10pm.', 1),
          ('Andy will be at venue at 5pm for load in | Door split between bands | Parking in front of the venue | Show must end by 10pm SHARP.', 2),
          ('Bands get 70% of door after $400 (under 150 tickets) | $100 catering | No merch cuts | Parking in front of venue', 3),
          ('Parking in rear. Venue is upstairs. 65% of ticket sales to bands.', 4);

insert into "contacts" ("email", "name", "phone","showId")
values          ('booking@vinelb.com', 'Dustin', 'No Phone Provided', 1),
                ('No Email Provided', 'Andy Franchere', '6612137959', 2),
                ('gerald@brickandmortarmusic.com', 'Gerald Kirwan', 'No Phone Provided', 3),
                ('daniel@harlows.com', 'Daniel Romandia', 'No Phone Provided', 4);


insert into "schedules" ("startTime", "endTime", "details", "showId")
values     ('17:00', '18:00', 'Load In', 1),
           ('20:00', '20:00', 'Doors', 1),
           ('20:00', '20:30', 'Nifegun', 1),
           ('20:45', '21:15', 'Slowtrip', 1),
           ('21:30', '22:00', 'Wilder.', 1),
           ('17:00:00', '18:00:00', 'Load In', 2),
           ('18:00:00', '18:20:00', 'Idle Heads', 2),
           ('18:30:00', '18:50:00', 'The Downsides', 2),
           ('19:00:00', '19:25:00', 'Slowtrip', 2),
           ('19:35:00', '20:00:00', 'Wilder', 2),
           ('20:10:00', '20:30:00', 'Out Of Line', 2),
           ('20:40:00', '21:00:00', 'War Is Hell', 2),
           ('16:30:00', '17:00:00', 'Load In', 3),
           ('17:00:00', '18:30:00', 'Soundcheck', 3),
           ('18:30:00', '19:15:00',  'Doors', 3),
           ('19:15:00', '19:45:00', 'Death By Fireworks', 3),
           ('20:00:00', '20:30:00', 'Slowtrip', 3),
           ('20:45:00', '21:15:00', 'Wilder', 3),
           ('21:30:00',' 21:30:00', 'END', 3),
           ('21:45:00', '21:45:00', 'Load Out', 3),
           ('12:00', '12:00', 'NA', 4);
