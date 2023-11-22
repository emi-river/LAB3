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

CREATE TABLE images (
  imageId serial PRIMARY KEY,
  filename VARCHAR(255),
  filepath VARCHAR(255),
  image_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  personId INT REFERENCES person(personId)
  postId INT REFERENCES posts(postId)
);

INSERT INTO person (username, email, "password") VALUES ('test', 'test@test.com', 'testING'),('hej', 'hej@hej.com', 'HEJSAN');
