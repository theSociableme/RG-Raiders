-- Foreign enums

ALTER TABLE "Guild" ADD CONSTRAINT
  "Guild_type_fkey" FOREIGN KEY ("type") REFERENCES "GuildType" ("name");

INSERT INTO "GuildType" ("name") VALUES ('ARAGON'), ('MOLOCH'), ('EVEREST');
