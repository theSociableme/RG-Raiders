
INSERT INTO raider_account (raider_id, type, identifier)
SELECT id, 'DISCORD', discord_id FROM raider WHERE discord_id IS NOT NULL;

UPDATE raider SET discord_id = NULL;

ALTER TABLE "public"."guild" DROP COLUMN "discord_id";

ALTER TABLE "public"."raider" DROP COLUMN "discord_id";
