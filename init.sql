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

INSERT INTO person (username, email, "password", bio) VALUES ('Simba66', 'simba66@hotmail.com', '17Ui', 'Living life one photo at a time'), ('Joey111', 'joey111@gmail.com', '66Uia', 'Artist by day, dreamer by night'), ('Sandra88', 'sandra88@gmail.com', '4321UA', 'Dancing to the rhythm of my own heart'), ('boss765', 'boss765@hotmail.com', '1234', 'On a journey to explore the extraordinary'), ('angel16', 'angel16@hotmail.com', 'Auq185', 'Embracing the chaos with a smile');
