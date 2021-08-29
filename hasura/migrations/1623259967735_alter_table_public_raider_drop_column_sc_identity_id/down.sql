ALTER TABLE "public"."raider" ADD COLUMN "sc_identity_id" text;
ALTER TABLE "public"."raider" ALTER COLUMN "sc_identity_id" DROP NOT NULL;
ALTER TABLE "public"."raider" ADD CONSTRAINT Player_scIdentityId_key UNIQUE (sc_identity_id);
