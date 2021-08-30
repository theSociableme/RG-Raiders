ALTER TABLE "public"."raider" ADD COLUMN "timezone" int4;
ALTER TABLE "public"."raider" ALTER COLUMN "timezone" DROP NOT NULL;
