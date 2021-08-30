-- Tables

CREATE TABLE "Guild" (
  "id" uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
  "type" text NOT NULL,
  "identifier" text NOT NULL,
  "name" text NOT NULL,
  "logo" text
);
