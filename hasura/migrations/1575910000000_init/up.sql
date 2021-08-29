-- Enums

CREATE TYPE account_type AS ENUM (
  'ETHEREUM',
  'DISCORD',
  'GITHUB',
  'TWITTER',
  'DISCOURSE'
);

CREATE TYPE enneagram_type AS ENUM (
  'REFORMER',
  'HELPER',
  'ACHIEVER',
  'INDIVIDUALIST',
  'INVESTIGATOR',
  'LOYALIST',
  'ENTHUSIAST',
  'CHALLENGER',
  'PEACEMAKER'
);

-- Tables

CREATE TABLE "Raider" (
  "id" uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
  "username" text NOT NULL,
  "ethereum_address" text NOT NULL,
  "totalXp" numeric DEFAULT 0,
  "timezone" int,
  "enneagram" enneagram_type
);

CREATE TABLE "Account" (
  "player_id" uuid NOT NULL,
  "identifier" text NOT NULL,
  "type" account_type NOT NULL
);

CREATE TABLE "Role" (
  "id" uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
  "name" text NOT NULL,
);

CREATE TABLE "Raider_Role" (
  "raider_id" uuid NOT NULL,
  "role_id" uuid NOT NULL
);

CREATE TABLE "Guild" (
  "id" uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
  "type" text NOT NULL,
  "identifier" text NOT NULL,
  "name" text NOT NULL,
  "logo" text
);

CREATE TABLE "GuildType" (
  "name" text NOT NULL PRIMARY KEY
);

CREATE TABLE "Skill" (
  "id" uuid DEFAULT public.gen_random_uuid() NOT NULL PRIMARY KEY,
  "name" text NOT NULL
);

CREATE TABLE "Raider_Skill" (
  "raider_id" uuid NOT NULL,
  "skill_id" uuid NOT NULL
);

-- Uniques

ALTER TABLE ONLY public."Raider"
  ADD CONSTRAINT "Raider_username_unique_key" UNIQUE (username);
ALTER TABLE ONLY public."Raider"
  ADD CONSTRAINT "Raider_ethereum_address_unique_key" UNIQUE (ethereum_address);

ALTER TABLE ONLY public."Account"
  ADD CONSTRAINT "Account_identifier_unique_key" UNIQUE (identifier);
ALTER TABLE ONLY public."Account"
  ADD CONSTRAINT "Account_identifier_type_Raider_key" UNIQUE (type, Raider_id);

ALTER TABLE ONLY public."Raider_Skill"
  ADD CONSTRAINT "Raider_Skill_unique_key" PRIMARY KEY (raider_id, skill_id);

ALTER TABLE ONLY public."Raider_Role"
  ADD CONSTRAINT "Raider_Role_unique_key" PRIMARY KEY (raider_id, role_id);  

-- Foreign keys

ALTER TABLE "Account" ADD CONSTRAINT "Account_raider_id_fkey" FOREIGN KEY ("raider_id") REFERENCES "Raider" ("id");

ALTER TABLE "Raider_Skill" ADD CONSTRAINT "Raider_Skill_raider_id_fkey" FOREIGN KEY ("raider_id") REFERENCES "Raider" ("id");
ALTER TABLE "Raider_Skill" ADD CONSTRAINT "Raider_Skill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "Skill" ("id");

ALTER TABLE "Raider_Role" ADD CONSTRAINT "Raider_Role_raider_id_fkey" FOREIGN KEY ("raider_id") REFERENCES "Raider" ("id");
ALTER TABLE "Raider_Role" ADD CONSTRAINT "Raider_Role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role" ("id");

-- Foreign enums

ALTER TABLE "Guild" ADD CONSTRAINT
  "Guild_type_fkey" FOREIGN KEY ("type") REFERENCES "GuildType" ("name");

INSERT INTO "GuildType" ("name") VALUES
  ('ARAGON'),
  ('MOLOCH'),
  ('EVEREST');
