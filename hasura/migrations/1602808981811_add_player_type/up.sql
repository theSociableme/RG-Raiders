
CREATE TABLE "public"."RaiderType"("id" serial NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "imageUrl" text, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("title"));

INSERT INTO "RaiderType" (title, description) VALUES
    ('Pioneer', 'Pioneers are the ones out on the frontier, venturing into the unknown with no fear of failure. Working with incomplete tools & buggy software, they start weird new projects & experiments. They thrive in chaos.'),
    ('Settler', 'Settlers live between chaos & order. They take the things that the pioneers build, build upon them & find them a market fit. They take care of things and help them grow until they are proven to work & taken over by Town Planners.'),
    ('Town Planner', 'Polar opposite to the Pioneers, Town Planners are the last to arrive at the party. They are the ones concerned with the structure & making things efficient. They want documentation & they thrive in order.');

ALTER TABLE "public"."Raider" ADD COLUMN "raiderTypeId" integer NULL;

alter table "public"."Raider"
           add constraint "Raider_raiderTypeId_fkey"
           foreign key ("raiderTypeId")
           references "public"."RaiderType"
           ("id") on update cascade on delete restrict;
