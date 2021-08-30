
ALTER TABLE "public"."raider" ADD COLUMN "discord_id" text NULL UNIQUE;

ALTER TABLE "public"."guild" ADD COLUMN "discord_id" text NULL UNIQUE;

UPDATE raider p
SET discord_id = pa.identifier
FROM raider_account pa 
WHERE pa.raider_id = p.id AND pa.type = 'DISCORD';

DELETE FROM raider_account WHERE type = 'DISCORD';
