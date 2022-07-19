-- Verify yogaredux:init on pg

BEGIN;

SELECT * FROM "user" WHERE false;

ROLLBACK;
