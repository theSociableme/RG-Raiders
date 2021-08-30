-- Uniques

ALTER TABLE ONLY public."Raider"
  ADD CONSTRAINT "Raider_username_unique_key" UNIQUE (username);
ALTER TABLE ONLY public."Raider"
  ADD CONSTRAINT "Raider_ethereum_address_unique_key" UNIQUE (ethereum_address);

ALTER TABLE ONLY public."Account"
  ADD CONSTRAINT "Account_identifier_unique_key" UNIQUE (identifier);
ALTER TABLE ONLY public."Account"
  ADD CONSTRAINT "Account_identifier_type_raider_key" UNIQUE (type, raider_id);

ALTER TABLE ONLY public."Raider_Skill"
  ADD CONSTRAINT "Raider_Skill_unique_key" PRIMARY KEY (raider_id, skill_id);

ALTER TABLE ONLY public."Raider_RGRole"
  ADD CONSTRAINT "Raider_RGRole_unique_key" PRIMARY KEY (raider_id, rgrole_id);
