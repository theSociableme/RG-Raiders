
alter table "public"."raider_skill" drop constraint "raider_skill_raider_id_fkey",
          add constraint "Raider_Skill_raider_id_fkey"
          foreign key ("raider_id")
          references "public"."raider"
          ("id")
          on update no action
          on delete no action;

alter table "public"."raider_account" drop constraint "raider_account_raider_id_fkey",
          add constraint "Account_raider_id_fkey"
          foreign key ("raider_id")
          references "public"."raider"
          ("id")
          on update no action
          on delete no action;

ALTER TABLE "public"."raider" ALTER COLUMN "ethereum_address" DROP NOT NULL;
