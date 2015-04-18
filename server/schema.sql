-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username varchar(15)
);

CREATE TABLE messages (
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  message varchar(140),
  createdAt datetime,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


 -- Create other tables and define schemas for them here!


 --  Execute this file from the command line by typing:
 -- *    mysql -u root < server/schema.sql
 -- *  to create the database and the tables.

