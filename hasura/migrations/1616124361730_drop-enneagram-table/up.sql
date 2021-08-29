ALTER TABLE public.raider
  DROP CONSTRAINT "Player_enneagram_fkey"
;

ALTER TABLE public.raider
  DROP COLUMN enneagram
;

DROP TABLE public."EnneagramType";
