
alter table "public"."Raider" drop constraint "Raider_raiderTypeId_fkey";

ALTER TABLE "public"."Raider" DROP COLUMN "raiderTypeId";

DROP TABLE "public"."RaiderType";
