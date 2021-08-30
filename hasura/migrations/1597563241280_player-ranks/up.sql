
CREATE TABLE "public"."Raider_Rank"("rank" text NOT NULL, PRIMARY KEY ("rank") );

INSERT INTO "Raider_Rank" (rank) VALUES
  ('DIAMOND'),
  ('PLATINUM'),
  ('GOLD'),
  ('SILVER'),
  ('BRONZE');

ALTER TABLE "public"."Raider" ADD COLUMN "rank" text NULL;

alter table "public"."Raider"
           add constraint "Raider_rank_fkey"
           foreign key ("rank")
           references "public"."Raider_Rank"
           ("rank") on update restrict on delete restrict;
