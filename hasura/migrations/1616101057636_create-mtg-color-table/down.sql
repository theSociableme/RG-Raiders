ALTER TABLE public.raider
  DROP CONSTRAINT raider_color_mask_fkey
;

ALTER TABLE public.raider
  DROP COLUMN color_mask
;

DROP TABLE public."ColorAspect";