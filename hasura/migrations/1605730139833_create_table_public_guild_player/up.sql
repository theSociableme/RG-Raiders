CREATE TABLE "public"."guild_raider"("guild_id" uuid NOT NULL, "raider_id" uuid NOT NULL, PRIMARY KEY ("guild_id","raider_id") , FOREIGN KEY ("guild_id") REFERENCES "public"."Guild"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("raider_id") REFERENCES "public"."Raider"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("guild_id", "raider_id"));
