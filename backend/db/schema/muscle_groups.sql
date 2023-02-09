DROP TABLE IF EXISTS muscle_groups CASCADE;
CREATE TABLE muscle_groups (
  id SERIAL PRIMARY KEY NOT NULL,
  muscles JSON NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);