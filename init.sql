CREATE TABLE person (
  personId serial PRIMARY KEY,
  username text UNIQUE NOT NULL,
  email text UNIQUE NOT NULL,
  "password" text NOT NULL,
  bio text
);

CREATE TABLE posts (
  postId serial PRIMARY KEY,
  "description" text,
  "date" date NOT NULL,
  CONSTRAINT userId
  FOREIGN KEY (postId)
  REFERENCES person(personId)
);

INSERT INTO person (username, email, "password") VALUES ('test', 'test@test.com', 'testING'),('hej', 'hej@hej.com', 'HEJSAN');
