CREATE TABLE person (
  personId serial PRIMARY KEY,
  username text UNIQUE NOT NULL,
  email text UNIQUE NOT NULL,
  "password" text NOT NULL,
  bio text
);

CREATE TABLE images (
  imageId serial PRIMARY KEY,
  filename VARCHAR(255),
  filepath VARCHAR(255),
  postDescription text NOT NULL,
  image_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  personId INT REFERENCES person(personId)
  postId INT REFERENCES posts(postId)
  FOREIGN KEY (personId)
  REFERENCES person(personId)
);

INSERT INTO person (username, email, "password") VALUES ('test', 'test@test.com', 'testING'),('hej', 'hej@hej.com', 'HEJSAN');
