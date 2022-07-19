-- Deploy yogaredux:init to pg

BEGIN;

CREATE TABLE "user" (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  pseudonym TEXT NOT NULL,
  postal_code TEXT,
  town TEXT,
  avatar_img TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

COMMIT;
