-- Foreign keys

ALTER TABLE "Account" ADD CONSTRAINT "Account_raider_id_fkey" FOREIGN KEY ("raider_id") REFERENCES "Raider" ("id");
ALTER TABLE "Raider_Skill" ADD CONSTRAINT "Raider_Skill_raider_id_fkey" FOREIGN KEY ("raider_id") REFERENCES "Raider" ("id");
ALTER TABLE "Raider_Skill" ADD CONSTRAINT "Raider_Skill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "Skill" ("id");

ALTER TABLE "Raider_RGRole" ADD CONSTRAINT "Raider_RGRole_raider_id_fkey" FOREIGN KEY ("raider_id") REFERENCES "Raider" ("id");
ALTER TABLE "Raider_RGRole" ADD CONSTRAINT "Raider_RGRole_rgrole_id_fkey" FOREIGN KEY ("rgrole_id") REFERENCES "RGRole" ("id");
