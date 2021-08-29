CREATE OR REPLACE VIEW "public"."me" AS
 SELECT "Raider".id,
    "Raider".username,
    "Raider".ethereum_address
   FROM "Raider";
