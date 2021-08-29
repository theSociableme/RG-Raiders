-- The profile cache relies on there being an entry for every raider
-- (when checking for expired profiles, only the cache table is queried).
-- A trigger will add entries for new raiders as they are added, this
-- creates the entries for the existing raiders.
INSERT INTO profile_cache (raider_id, last_checked_at)
  SELECT id, NULL FROM raider
;
