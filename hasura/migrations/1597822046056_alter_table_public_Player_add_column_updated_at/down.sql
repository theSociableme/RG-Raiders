DROP TRIGGER IF EXISTS "set_public_Raider_updated_at" ON "public"."Raider";
ALTER TABLE "public"."Raider" DROP COLUMN "updated_at";
