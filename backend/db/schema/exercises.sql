-- Drop and recreate Exercises table

DROP TABLE IF EXISTS exercises CASCADE; 
CREATE TABLE exercises (
  id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  muscle VARCHAR(255) NOT NULL,
  equipment VARCHAR(255) NOT NULL,
  difficulty VARCHAR(255) NOT NULL,
  instructions TEXT NOT NULL
);
