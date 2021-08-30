
alter table "public"."Raider" drop constraint "Raider_rank_fkey";

ALTER TABLE "public"."Raider" DROP COLUMN "rank";

DROP TABLE "public"."Raider_Rank";
