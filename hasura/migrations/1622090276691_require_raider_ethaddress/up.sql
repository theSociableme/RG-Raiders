alter table "public"."raider_account" drop constraint "Account_raider_id_fkey",
             add constraint "raider_account_raider_id_fkey"
             foreign key ("raider_id")
             references "public"."raider"
             ("id") on update no action on delete cascade;

alter table "public"."raider_skill" drop constraint "Player_Skill_raider_id_fkey",
             add constraint "raider_skill_raider_id_fkey"
             foreign key ("raider_id")
             references "public"."raider"
             ("id") on update no action on delete cascade;

delete from raider
where ethereum_address is null;

ALTER TABLE "public"."raider" ALTER COLUMN "ethereum_address" SET NOT NULL;
