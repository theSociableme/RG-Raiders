
alter table "public"."Raider" drop constraint "Raider_enneagram_fkey";

ALTER TABLE "public"."Raider" ALTER COLUMN "enneagram" TYPE USER-DEFINED;

DROP TABLE "public"."EnneagramType";
