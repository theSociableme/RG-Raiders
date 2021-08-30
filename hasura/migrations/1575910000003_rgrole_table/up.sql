-- Tables

CREATE TABLE "RGRole" (
  "id" uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
  "name" text NOT NULL
);
