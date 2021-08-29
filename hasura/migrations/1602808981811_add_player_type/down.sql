
alter table "public"."Raider" drop constraint "Raider_playerTypeId_fkey";

ALTER TABLE "public"."Raider" DROP COLUMN "playerTypeId";

DROP TABLE "public"."RaiderType";
