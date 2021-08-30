-- Tables

CREATE TABLE "Raider" (
  "id" uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
  "username" text NOT NULL,
  "ethereum_address" text NOT NULL,
  "totalXp" numeric DEFAULT 0,
  "timezone" int,
  "enneagram" enneagram_type
);
