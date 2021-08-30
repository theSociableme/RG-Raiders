ALTER TABLE public.raider
  DROP CONSTRAINT "Raider_enneagram_fkey"
;

ALTER TABLE public.raider
  DROP COLUMN enneagram
;

DROP TABLE public."EnneagramType";
