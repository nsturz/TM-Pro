set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "public"."artists" (
    "artistId" serial NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "artists_pk" PRIMARY KEY ("artistId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."venues" (
    "venueId" serial NOT NULL,
    "name" TEXT NOT NULL,
    "addressId" integer NOT NULL,
    "phone" bigint NOT NULL,
    CONSTRAINT "venues_pk" PRIMARY KEY ("venueId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."notes" (
    "noteId" serial not null,
    "createdAt" timestamptz NOT NULL default now(),
    "details" TEXT NOT NULL,
    "showId" integer NOT NULL,
    CONSTRAINT "notes_pk" PRIMARY KEY ("noteId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."schedules" (
    "scheduleId" serial not null,
    "startTime" TIME NOT NULL,
    "endTime" TIME NOT NULL,
    "details" TEXT NOT NULL,
    "showId" integer NOT NULL,
    CONSTRAINT "schedules_pk" PRIMARY KEY ("scheduleId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."contacts" (
    "contactId" serial not null,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" bigint NOT NULL,
    "showId" integer NOT NULL,
    CONSTRAINT "contacts_pk" PRIMARY KEY ("contactId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."addresses" (
    "addressId" serial NOT NULL,
    "line1" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    CONSTRAINT "addresses_pk" PRIMARY KEY ("addressId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."shows" (
    "showId" serial NOT NULL,
    "venueId" integer NOT NULL,
    "artistId" integer NOT NULL,
    "addressId" integer NOT NULL,
    "date" DATE NOT NULL,
    CONSTRAINT "shows_pk" PRIMARY KEY ("showId")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "venues" ADD CONSTRAINT "venues_fk0" FOREIGN KEY ("addressId") REFERENCES "addresses"("addressId");
ALTER TABLE "notes" ADD CONSTRAINT "notes_fk0" FOREIGN KEY ("showId") REFERENCES "shows"("showId");
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_fk0" FOREIGN KEY ("showId") REFERENCES "shows"("showId");
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_fk0" FOREIGN KEY ("showId") REFERENCES "shows"("showId");
ALTER TABLE "shows" ADD CONSTRAINT "shows_fk0" FOREIGN KEY ("venueId") REFERENCES "venues"("venueId");
ALTER TABLE "shows" ADD CONSTRAINT "shows_fk1" FOREIGN KEY ("artistId") REFERENCES "artists"("artistId");
ALTER TABLE "shows" ADD CONSTRAINT "shows_fk2" FOREIGN KEY ("addressId") REFERENCES "addresses"("addressId");
